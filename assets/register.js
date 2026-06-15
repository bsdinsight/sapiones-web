/* Sapiones — Đăng ký miễn phí (self-serve workspace)
 * Flow: Email công ty + tên + tên công ty (+SĐT/tỉnh) → mã 6 số qua EMAIL + đặt mật khẩu
 *       → tạo workspace <id>.sapiones.com (~15–25s) → redirect, login = email + mật khẩu.
 *
 * BACKEND (provision-api, session Sapiones):
 *   POST {API_BASE}/register/start  { email, name, company, province?, phone? }
 *        → { ok, request_id, expires_in }                    // gửi mã qua email
 *        lỗi: email_invalid · company_required · rate_limited · mail_failed
 *   POST {API_BASE}/register/verify { request_id, code, password }
 *        → { ok, tenant_id, url }   (url = https://<id>.sapiones.com)  // ~15–25s
 *        lỗi: request_invalid · otp_expired · otp_wrong · too_many · provision_failed
 *   CORS chỉ cho https://sapiones.com + www → KHÔNG test được từ localhost (đúng ý đồ).
 */
(function () {
  'use strict';

  var API_BASE = 'https://register.sapiones.com/v1';
  var DEMO_MODE = false; // backend LIVE (register.sapiones.com)

  var $ = function (id) { return document.getElementById(id); };
  var state = { email: '', name: '', company: '', province: '', phone: '', password: '', request_id: '' };

  var step1 = $('step1'), step2 = $('step2'), step3 = $('step3');
  var bars = [$('bar1'), $('bar2'), $('bar3')];
  if (DEMO_MODE) { var df = $('demoFlag'); if (df) df.classList.remove('hidden'); }

  function showStep(n) {
    [step1, step2, step3].forEach(function (el, i) { el.classList.toggle('hidden', i !== n - 1); });
    bars.forEach(function (b, i) { b.classList.toggle('on', i < n); });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  function showErr(el, msg) { el.textContent = msg; el.classList.add('show'); }
  function clearErr(el) { el.textContent = ''; el.classList.remove('show'); }
  function validEmail(e) { return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e); }

  function post(path, body) {
    if (DEMO_MODE) {
      return new Promise(function (res) {
        setTimeout(function () {
          if (path === '/register/start') res({ ok: true, request_id: 'demo' });
          else { var id = 'ws-' + Math.random().toString(36).slice(2, 7); res({ ok: true, tenant_id: id, url: 'https://' + id + '.sapiones.com' }); }
        }, 700);
      });
    }
    return fetch(API_BASE + path, {
      method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body)
    }).then(function (r) { return r.json().then(function (j) { j._status = r.status; return j; }); });
  }

  var ERR = {
    email_invalid: 'Email chưa hợp lệ.',
    company_required: 'Vui lòng nhập tên công ty.',
    rate_limited: 'Bạn thử lại quá nhiều. Vui lòng đợi một lát.',
    mail_failed: 'Không gửi được email. Thử lại sau giây lát.',
    otp_wrong: 'Mã xác nhận không đúng. Kiểm tra lại nhé.',
    otp_expired: 'Mã đã hết hạn. Bấm "Gửi lại" để nhận mã mới.',
    too_many: 'Nhập sai mã quá nhiều lần. Vui lòng gửi lại mã.',
    request_invalid: 'Phiên đăng ký đã hết hạn. Vui lòng bắt đầu lại.',
    provision_failed: 'Tạo workspace chưa thành công. Vui lòng thử lại.',
    _default: 'Có lỗi xảy ra. Vui lòng thử lại.'
  };
  function msgOf(j) { return (j && (j.message || ERR[j.error])) || ERR._default; }

  // ===== STEP 1 =====
  step1.addEventListener('submit', function (e) {
    e.preventDefault();
    clearErr($('err1'));
    var email = $('f-email').value.trim();
    var name = $('f-name').value.trim();
    var company = $('f-company').value.trim();
    if (!validEmail(email)) return showErr($('err1'), 'Email chưa đúng (vd ban@congty.com).');
    if (name.length < 2) return showErr($('err1'), 'Vui lòng nhập họ tên.');
    if (company.length < 1) return showErr($('err1'), 'Vui lòng nhập tên công ty.');

    state.email = email; state.name = name; state.company = company;
    state.province = $('f-province').value.trim();
    state.phone = $('f-phone') ? $('f-phone').value.trim() : '';

    var btn = $('btn1'); btn.disabled = true; var t = btn.textContent; btn.textContent = 'Đang gửi mã…';
    post('/register/start', { email: email, name: name, company: company, province: state.province, phone: state.phone })
      .then(function (j) {
        btn.disabled = false; btn.textContent = t;
        if (!j.ok) return showErr($('err1'), msgOf(j));
        state.request_id = j.request_id;
        $('otpEmail').textContent = email;
        showStep(2); startResendTimer(); otpInputs[0].focus();
      })
      .catch(function () { btn.disabled = false; btn.textContent = t; showErr($('err1'), ERR._default); });
  });

  // ===== STEP 2 =====
  var otpInputs = Array.prototype.slice.call(document.querySelectorAll('#otpRow .otp-box'));
  otpInputs.forEach(function (box, i) {
    box.addEventListener('input', function () {
      box.value = box.value.replace(/\D/g, '').slice(0, 1);
      if (box.value && i < otpInputs.length - 1) otpInputs[i + 1].focus();
    });
    box.addEventListener('keydown', function (e) { if (e.key === 'Backspace' && !box.value && i > 0) otpInputs[i - 1].focus(); });
    box.addEventListener('paste', function (e) {
      e.preventDefault();
      var d = (e.clipboardData.getData('text') || '').replace(/\D/g, '').slice(0, 6).split('');
      otpInputs.forEach(function (b, k) { b.value = d[k] || ''; });
      (otpInputs[d.length] || otpInputs[5]).focus();
    });
  });
  function readCode() { return otpInputs.map(function (b) { return b.value; }).join(''); }

  step2.addEventListener('submit', function (e) {
    e.preventDefault();
    clearErr($('err2'));
    var code = readCode();
    var password = $('f-password').value;
    if (!/^\d{6}$/.test(code)) return showErr($('err2'), 'Nhập đủ 6 số mã xác nhận.');
    if (password.length < 6) return showErr($('err2'), 'Mật khẩu tối thiểu 6 ký tự.');
    state.password = password;

    var btn = $('btn2'); btn.disabled = true; var t = btn.textContent;
    // verify BLOCK ~30–60s (clone DB + tạo DNS) → báo tiến trình theo bậc để không "treo im"
    var stages = ['Đang tạo workspace… (~30–60 giây)', 'Đang dựng cơ sở dữ liệu riêng…', 'Đang cấu hình tên miền & tài khoản…', 'Sắp xong, vui lòng đừng đóng trang…'];
    var si = 0; btn.textContent = stages[0];
    var stageTimer = setInterval(function () { si = Math.min(si + 1, stages.length - 1); btn.textContent = stages[si]; }, 15000);
    function doneLoading() { clearInterval(stageTimer); btn.disabled = false; btn.textContent = t; }
    post('/register/verify', { request_id: state.request_id, code: code, password: password })
      .then(function (j) {
        doneLoading();
        if (!j.ok) return showErr($('err2'), msgOf(j));
        renderSuccess(j);
      })
      .catch(function () { doneLoading(); showErr($('err2'), ERR._default); });
  });

  $('back2').addEventListener('click', function () { showStep(1); $('f-email').focus(); });

  var resendTimer = null;
  function startResendTimer() {
    var btn = $('resendBtn'), span = $('resendT'), left = 45;
    btn.disabled = true; if (span) span.textContent = left;
    clearInterval(resendTimer);
    resendTimer = setInterval(function () {
      left--; if (span) span.textContent = left;
      if (left <= 0) { clearInterval(resendTimer); btn.disabled = false; btn.innerHTML = 'Gửi lại mã'; }
    }, 1000);
  }
  $('resendBtn').addEventListener('click', function () {
    if ($('resendBtn').disabled) return;
    clearErr($('err2'));
    post('/register/start', { email: state.email, name: state.name, company: state.company, province: state.province, phone: state.phone })
      .then(function (j) { if (j.ok) state.request_id = j.request_id; });
    $('resendBtn').innerHTML = 'Gửi lại sau <span id="resendT">45</span>s'; startResendTimer();
  });

  // ===== STEP 3 =====
  function renderSuccess(j) {
    var url = j.url || ('https://' + (j.tenant_id || 'workspace') + '.sapiones.com');
    $('tenantUrlText').textContent = url.replace(/^https?:\/\//, '');
    $('tenantUrl').href = url;
    $('openTenant').href = url;
    showStep(3);
    setTimeout(function () { window.location.href = url; }, 6000); // tự mở workspace sau ít giây
  }
})();
