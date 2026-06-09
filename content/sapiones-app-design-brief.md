# Sapiones Mobile — Bản yêu cầu thiết kế (Design Brief)

> **Dành cho:** session **Design** — thiết kế giao diện app di động **Sapiones Mobile**.
> **Sản phẩm:** Sapiones — nền tảng Quản trị Nhân sự (HRM/HCM) cho doanh nghiệp Việt Nam (by **BSD**, trên Odoo).
> **Ngôn ngữ UI chính:** Tiếng Việt · **Nền tảng:** React Native + Expo (iOS & Android) và/hoặc PWA · **Cập nhật:** 2026-06

---

## 0. Tóm tắt 1 đoạn
**Sapiones Mobile** là app cho **người lao động (nhân viên)** của các doanh nghiệp đang dùng Sapiones, để họ **tự xem phiếu lương, bảng chấm công, xin nghỉ phép, nhận thông báo** ngay trên điện thoại — không phải lên phòng nhân sự hỏi. Triết lý: **đơn giản như ví điện tử (MoMo/ZaloPay)**, không giống phần mềm doanh nghiệp. Trái tim của app là câu hỏi **"Tháng này mình lĩnh bao nhiêu?"**.

---

## 1. Bối cảnh sản phẩm & kiến trúc *(ảnh hưởng trực tiếp tới luồng UI)*
- **On-premise, không phải SaaS:** mỗi công ty có 1 server Sapiones riêng. App chỉ là **cửa sổ truy cập** vào server đó; dữ liệu không nằm trên hạ tầng của BSD.
- **Một app dùng chung cho mọi công ty (multi-tenant):** nhân viên **quét mã QR** do HR phát → app tự trỏ về server công ty mình. ⇒ **Bắt buộc có bước "Kết nối công ty" trước khi đăng nhập**; tên + logo công ty hiển thị động sau khi kết nối.
- **Đăng nhập nhẹ:** **Mã nhân viên + OTP** (gửi qua SMS/Zalo) hoặc **PIN**; lần sau dùng **PIN / vân tay / khuôn mặt**. Không dùng email + mật khẩu dài.
- **Hoạt động khi mạng yếu:** dữ liệu đã xem (phiếu lương, bảng công) phải **xem lại được offline**. Nhà máy/vùng quê sóng chập chờn.
- **Thông báo đẩy (push):** server công ty đẩy thẳng qua FCM → app. Cần màn Thông báo + badge số.

---

## 2. Người dùng mục tiêu *(rất quan trọng — đọc kỹ)*
**Người lao động của doanh nghiệp Việt Nam** — trải dài từ **công nhân nhà máy → nhân viên bán lẻ → nhân viên văn phòng**. Thiết kế theo nguyên tắc **"mẫu số chung dễ nhất"**: nếu công nhân lớn tuổi, ít rành công nghệ dùng được, thì *ai cũng* dùng được.

**Đặc điểm cần thiết kế cho đúng:**
- **Trình độ công nghệ phổ thông** — quen MoMo/ZaloPay/Zalo, **không quen** app văn phòng nhiều menu.
- **Độ tuổi đa dạng**, có người lớn tuổi → **chữ to, tương phản cao**.
- **Điện thoại tầm trung**, bộ nhớ ít, **sóng có thể yếu**.
- Thường thao tác **một tay**, đôi khi vội (giờ nghỉ, đứng máy) → **ít bước, chạm nhanh**.
- Quan tâm số 1: **tiền** → phiếu lương & thực lĩnh phải nổi bật nhất.

**3 chân dung tham chiếu (persona):**
| Persona | Bối cảnh | Cần gì nhất ở app |
|---|---|---|
| **Chị Hoa, 38 — công nhân may** | Điện thoại tầm trung, ít dùng app, đứng chuyền cả ngày | Xem **thực lĩnh, tăng ca**; xin nghỉ nhanh; báo lương về |
| **Anh Minh, 29 — nhân viên văn phòng/kinh doanh** | Quen smartphone, không có ca/tăng ca | Xem **phiếu lương**, **xin nghỉ** vài chạm, không rườm rà |
| **Anh Tuấn, 45 — tổ trưởng/quản lý** *(giai đoạn 2)* | Quản lý một tổ/phòng | **Duyệt đơn nghỉ** của nhân viên ngay trên điện thoại |

> 🌏 *Tương lai:* một số doanh nghiệp FDI có nhân viên **nước ngoài** (Hàn/Nhật/Trung) → kiến trúc cần **sẵn sàng đa ngôn ngữ** (VN mặc định, thêm EN/KO/JA sau).

> 🎯 **KIM CHỈ NAM:** App phải **đơn giản như ví điện tử**, KHÔNG giống phần mềm HR/kế toán.

---

## 3. Mục tiêu trải nghiệm (tiêu chí thành công)
1. Nhân viên mới mở app **xem được thực lĩnh tháng này trong < 10 giây** (sau khi đã đăng nhập).
2. **Tạo 1 đơn nghỉ phép trong < 30 giây**, không cần hướng dẫn.
3. Người **chưa từng dùng app công sở** vẫn tự dùng được, không cần đào tạo.
4. Đọc tốt **ngoài trời / trong xưởng sáng chói** và trên **màn hình nhỏ**.
5. Mở lại app khi **mất mạng** vẫn xem được phiếu lương gần nhất.

---

## 4. Nguyên tắc thiết kế
1. **Một màn — một nhiệm vụ chính.** Tối giản, ít chữ, icon rõ nghĩa.
2. **Thông tin quan trọng to & nổi bật** — đặc biệt **số tiền thực lĩnh** (lớn nhất màn hình).
3. **Vùng chạm lớn (≥ 48dp)**; **nút hành động chính đặt phía dưới** (tầm ngón cái), đủ rộng.
4. **Tương phản cao** — đọc được dưới nắng/ánh đèn xưởng.
5. **Tiếng Việt bình dân** — tránh thuật ngữ HR/thuế (xem mục 7). Nói "Lương thực nhận", "Các khoản trừ".
6. **Tải nhanh + nhận biết offline** — phiếu lương đã xem phải còn xem được khi mất mạng; ưu tiên cache.
7. **Phản hồi rõ ràng** — mọi trạng thái loading / rỗng / lỗi / offline đều có hình minh họa thân thiện + lối ra.
8. **Thích ứng theo loại nhân viên** — ẩn khối không liên quan (công nhân thấy ca/tăng ca; văn phòng thì không — xem mục 13).
9. **Nhất quán thương hiệu** Sapiones (mục 8).

**✅ Nên / ❌ Tránh**
| ✅ Nên | ❌ Tránh |
|---|---|
| Số tiền là phần tử to nhất màn | Bảng nhiều cột kiểu Excel |
| 1 trường nhập / 1 bước | Form dài nhiều trường trong 1 màn |
| Nút to ở đáy, nhãn động từ rõ ("Gửi đơn") | Menu hamburger giấu chức năng chính |
| Từ ngữ đời thường | "TNCT", "lũy tiến", "khấu trừ", "gross/net" |
| Giữ đúng hệ màu brand | Màu mè, nhiều màu rối |

---

## 5. Khả năng tiếp cận (accessibility — bắt buộc)
- **Cỡ chữ tối thiểu:** body **16sp** (không nhỏ hơn 14sp ở bất kỳ đâu). Số tiền thực lĩnh **40–48sp**.
- **Vùng chạm tối thiểu:** **48×48dp**, khoảng cách giữa các mục chạm ≥ 8dp.
- **Tương phản:** chữ thường ≥ **4.5:1**, chữ lớn/icon ≥ **3:1** với nền.
- **Không truyền đạt chỉ bằng màu** — trạng thái (duyệt/từ chối) luôn kèm **nhãn + icon**, không chỉ chấm màu.
- Hỗ trợ **cỡ chữ hệ thống lớn** (Dynamic Type) ở mức hợp lý — layout không vỡ.
- Mục tiêu chạm bằng **một tay**: hành động chính trong vùng nửa dưới màn hình.

---

## 6. Type scale & spacing (gợi ý hệ thống)
- **Type scale:** Số tiền lớn 40–48 · H1 24 · H2 20 · Tiêu đề mục 17–18 · Body 16 · Phụ/caption 13–14.
- **Trọng số:** tiêu đề **bold/semibold**, thân **regular**. Hạn chế chữ IN HOA (chỉ nhãn ngắn).
- **Spacing scale:** 4 · 8 · 12 · 16 · 24 · 32. Lề màn hình **16dp**.
- **Bo góc:** thẻ **14–18** · nút **12–14** · pill/badge **bo tròn hết**.
- **Bóng:** nhẹ, mềm (elevation thấp), tránh đổ bóng nặng.

---

## 7. Giọng văn & microcopy
**Giọng:** thân thiện, ngắn gọn, tôn trọng — như một đồng nghiệp nhân sự dễ mến. Xưng hô "bạn".

**Bảng thay thế thuật ngữ (QUAN TRỌNG):**
| Thuật ngữ gốc | Hiển thị trên app |
|---|---|
| Net / Lương net | **Thực lĩnh** (hoặc "Thực nhận") |
| Gross / Tổng thu nhập | **Tổng thu nhập** |
| Khấu trừ | **Các khoản trừ** |
| BHXH/BHYT/BHTN | Gộp nhóm **"Bảo hiểm"** (chú thích nhỏ: BHXH, BHYT, BHTN) |
| Thuế TNCN / TNCT / lũy tiến | **"Thuế thu nhập"** (ẩn chi tiết kỹ thuật) |
| OT / Overtime | **Tăng ca** |
| Payslip | **Phiếu lương** |
| Approved / Rejected | **Đã duyệt** / **Từ chối** |

**Ví dụ câu rỗng/lỗi:** "Chưa có phiếu lương nào" · "Bạn chưa có đơn nghỉ" · "Mất mạng rồi — đang hiện dữ liệu đã lưu" · "Mã không đúng, thử lại nhé".

---

## 8. Thương hiệu & Visual
- **Logo:** ký hiệu **"S"** trong ô bo góc nền **gradient indigo→cyan**, kèm chữ **Sapiones**.
- **Bảng màu:**
  - **Indigo `#4F46E5`** (chính) · **Cyan `#06B6D4`** (phụ) · **Gradient 135°** indigo→cyan cho điểm nhấn & nút chính / thẻ lương.
  - **Ink `#0F172A`** (chữ đậm) · **Slate `#475569`** (chữ phụ) · **Mute `#94A3B8`**.
  - **Xanh lá `#059669`** (tích cực / đã duyệt) · **Đỏ `#EF4444`** (khoản trừ / cảnh báo / hết hạn) · **Cam `#F59E0B`** (sắp hết hạn / chờ).
  - Nền trắng `#FFFFFF` · thẻ `#F8FAFC` · viền `#E2E8F0`.
- **Font:** sans hiện đại, **hỗ trợ tiếng Việt đầy đủ** (Inter hoặc font hệ thống). Tiêu đề đậm, thân nhẹ.
- **Phong cách:** bo góc mềm, thoáng, hiện đại — **tin cậy + thân thiện**. Dùng minh họa/illustration nhẹ cho màn rỗng/onboarding.
- **Tham chiếu:** `sapiones.com` & brochure (cùng ngôn ngữ thiết kế gradient indigo–cyan). Asset gốc: repo `bsdinsight/sapiones-web` → thư mục `brand/`.

---

## 9. Hệ thống thành phần (component inventory — để dựng design system)
Thiết kế các thành phần dưới đây kèm **các trạng thái** (mặc định / nhấn / vô hiệu / lỗi):
- **App bar** (tiêu đề + avatar + chuông thông báo có badge).
- **Bottom tab bar** (5 mục, icon + nhãn, chỉ báo tab đang chọn).
- **Thẻ lương nổi bật** (gradient, số tiền cực to, nhãn kỳ lương, nút phụ).
- **Hiển thị tiền tệ** (định dạng `1.234.567 ₫`, tách nghìn, ký hiệu ₫).
- **Nút**: chính (gradient, đầy), phụ (viền), văn bản (link), nút nổi (FAB nếu cần).
- **Ô nhập**: text, mã NV, **ô OTP 6 số**, **bàn phím PIN**, date picker, dropdown chọn (loại nghỉ).
- **Dòng danh sách** (list row): phiếu lương / đơn nghỉ / thông báo — có nhãn trạng thái.
- **Badge trạng thái**: Chờ duyệt (cam) · Đã duyệt (xanh) · Từ chối (đỏ) · Chưa đọc (chấm).
- **Thẻ số liệu** (stat card) cho chấm công (Ngày công / Tăng ca / Ca đêm).
- **Banner**: offline, cảnh báo hết hạn (cam).
- **Trạng thái màn**: skeleton loading · empty (minh họa) · error (+ nút Thử lại) · offline.
- **Bottom sheet / modal** (xác nhận, chọn nhanh).

---

## 10. Kiến trúc thông tin & điều hướng
**Thanh tab dưới đáy — 5 mục:**
`🏠 Trang chủ` · `🧾 Phiếu lương` · `🕒 Chấm công` · `🔔 Thông báo` *(badge)* · `👤 Cá nhân`
- **"Xin nghỉ phép"** = **nút nổi bật trên Trang chủ** (và truy cập từ Chấm công). Không nhét vào tab riêng để giữ 5 tab gọn.
- Mỗi tab: icon + nhãn ngắn; tab đang chọn đổi màu indigo.

**Sitemap:**
```
Onboarding:  S0 Kết nối công ty (QR)  →  S1 Đăng nhập (Mã NV → OTP/PIN)
App (sau đăng nhập):
  ├─ S2 Trang chủ ──→ Xin nghỉ (S6), lối tắt sang S3/S4/S7
  ├─ S3 Phiếu lương (danh sách → chi tiết → Tải PDF)
  ├─ S4 Chấm công (số liệu tháng + lịch)
  ├─ S5 Thông báo
  ├─ S6 Xin nghỉ phép (danh sách → tạo đơn)
  ├─ S7 Kho tri thức (tùy chọn v1)
  └─ S8 Cá nhân (cài đặt, đổi PIN, ngôn ngữ, đổi công ty, đăng xuất)
  └─ (Giai đoạn 2) S9 Duyệt đơn — cho quản lý
```

---

## 11. Các luồng chính (key flows — cần vẽ rõ)
1. **Onboarding / kết nối công ty:** Mở app lần đầu → Quét QR (hoặc nhập mã) → hiện tên+logo công ty → tới Đăng nhập.
2. **Đăng nhập:** Nhập Mã NV → nhận OTP (SMS/Zalo) → nhập OTP → đặt PIN → vào app. Lần sau: PIN/sinh trắc.
3. **Xem phiếu lương:** Trang chủ (thấy thực lĩnh) → Phiếu lương → chọn kỳ → chi tiết → Tải PDF.
4. **Xin nghỉ phép:** Trang chủ → "Xin nghỉ" → chọn Loại nghỉ → Từ–Đến ngày → Lý do → Gửi → thấy đơn "Chờ duyệt".
5. *(Giai đoạn 2)* **Quản lý duyệt đơn:** Thông báo "có đơn chờ" → danh sách đơn của tổ → mở đơn → Duyệt / Từ chối (+lý do).

---

## 12. Đặc tả màn hình

### S0. Kết nối công ty *(lần đầu)*
- Logo Sapiones + tiêu đề "Kết nối với công ty của bạn".
- Nút lớn **"Quét mã QR"** (mở camera) + link nhỏ "Nhập mã công ty".
- Lỗi: "Mã không hợp lệ" / "Không kết nối được — kiểm tra mạng".

### S1. Đăng nhập
- Hiện **tên + logo công ty** (đã kết nối).
- Ô **"Mã nhân viên"** → **"Tiếp tục"** → màn **OTP 6 số** (SMS/Zalo) → đặt/nhập **PIN**.
- Lần sau: **PIN / vân tay / khuôn mặt**. Tối giản: **1 trường mỗi bước**.

### S2. Trang chủ
- Header: "Xin chào, **[Tên]**" + avatar; chuông thông báo (badge).
- **Thẻ lương nổi bật** (gradient): "Thực lĩnh tháng 06/2026" + **số tiền RẤT to** + "Xem phiếu lương".
- **Lối tắt** (lưới icon): Phiếu lương · Chấm công · **Xin nghỉ** · Tri thức.
- **Thông báo gần đây** (2–3 dòng).
- **Cảnh báo** (nếu có, thẻ cam): "Chứng chỉ/GPLĐ của bạn sắp hết hạn".

### S3. Phiếu lương
- **Danh sách theo kỳ:** mỗi dòng "Tháng MM/YYYY · Thực lĩnh xxx ₫ · [trạng thái]".
- **Chi tiết 1 phiếu:**
  - Trên cùng: **THỰC LĨNH** + số tiền cực to (nền gradient).
  - Nhóm **Thu nhập** (Lương, Phụ cấp, Tăng ca…) — đen/xanh.
  - Nhóm **Các khoản trừ** (Bảo hiểm, Thuế thu nhập…) — đỏ.
  - Nút **"Tải PDF"**.

### S4. Chấm công
- Tháng hiện tại, thẻ số liệu to: **Ngày công** · **Tăng ca (giờ)** · **Ca đêm** · **Ca làm việc**.
- (Tùy chọn) **lịch tháng** đánh dấu ngày làm/nghỉ/nghỉ phép.
- *Thích ứng:* nhân viên văn phòng (không ca/tăng ca) → chỉ hiện **Ngày công** + giờ vào/ra, **ẩn** thẻ Ca/Tăng ca (xem mục 13).

### S5. Thông báo
- Danh sách: icon theo loại (💰 lương về · ✅ đơn duyệt · ❌ đơn từ chối · ⚠️ sắp hết hạn · 📣 công ty), tiêu đề, thời gian, dấu **chưa đọc**.

### S6. Xin nghỉ phép
- **Danh sách đơn:** Loại nghỉ · Từ–Đến · Số ngày · **Trạng thái** (badge màu).
- Nút **"+ Tạo đơn nghỉ"**: chọn **Loại nghỉ** → **Từ**–**Đến ngày** → **Lý do** → "Gửi". Form ngắn, date picker, hiện **số ngày tự tính**.

### S7. Kho tri thức *(v1 tùy chọn)*
- Tìm kiếm + danh mục → đọc bài viết (nội quy, quy trình, chính sách). (Trợ lý AI hỏi-đáp: để dành sau.)

### S8. Cá nhân
- Thông tin: Tên · Mã NV · Phòng ban · Chức vụ.
- Cài đặt: **Đổi PIN** · **Ngôn ngữ** (VN/EN/KO/JA) · Bật/tắt thông báo · **Đổi công ty** · **Đăng xuất**.

### S9. Duyệt đơn — cho quản lý *(giai đoạn 2)*
- Danh sách **đơn nghỉ chờ duyệt** của nhân viên thuộc quyền.
- Mở đơn → thông tin NV + thời gian + lý do → **Duyệt** / **Từ chối (kèm lý do)**.

---

## 13. Thích ứng theo loại nhân viên / ngành *(điểm mới — quan trọng)*
Sapiones là **nền tảng HR cho mọi doanh nghiệp**, với phiên bản chuyên ngành (Sản xuất là đầu tiên). App phải **thích ứng theo dữ liệu server trả về**, không cứng nhắc kiểu "ai cũng là công nhân":
- **Công nhân sản xuất:** hiện đầy đủ **Ca làm việc, Tăng ca, Ca đêm, Lương sản phẩm/khoán**.
- **Nhân viên văn phòng:** chấm công đơn giản (vào/ra), **không** ca/tăng ca → **ẩn** các thẻ này thay vì hiện "0".
- **Nguyên tắc:** **ẩn khối không có dữ liệu** (đừng hiển thị thẻ rỗng gây rối). Thiết kế cần có **biến thể "đầy đủ"** và **"tối giản"** cho các màn Trang chủ & Chấm công.
- Các phiên bản chuyên ngành tương lai (ngân hàng, bán lẻ…) có thể thêm khối riêng, nhưng **lõi ESS** (lương, công, nghỉ, thông báo) **giữ nguyên**.

---

## 14. Trạng thái chung *(thiết kế cho mọi màn)*
- **Loading:** skeleton (khung xám), không spinner trống.
- **Rỗng (empty):** minh họa + câu thân thiện.
- **Lỗi:** thông báo nhẹ + nút **"Thử lại"**.
- **Offline:** banner "Đang ngoại tuyến — hiển thị dữ liệu đã lưu" + dữ liệu cache.
- **Mất kết nối server công ty:** hướng dẫn kiểm tra mạng / liên hệ HR.

---

## 15. Thông báo đẩy (push) — mẫu nội dung
- 💰 **Lương về:** "Phiếu lương tháng 06/2026 đã có. Thực lĩnh: 12.345.000 ₫. Chạm để xem."
- ✅ **Đơn duyệt:** "Đơn nghỉ phép (12/06–13/06) đã được duyệt."
- ❌ **Đơn từ chối:** "Đơn nghỉ phép của bạn bị từ chối. Chạm để xem lý do."
- ⚠️ **Sắp hết hạn:** "Chứng chỉ ATLĐ sắp hết hạn (30/06). Liên hệ HR."
- 📣 **Công ty:** "[Tiêu đề thông báo chung]".
- 📥 *(quản lý)* **Đơn chờ duyệt:** "[Tên NV] xin nghỉ 12/06–13/06. Chạm để duyệt."

---

## 16. Đa ngôn ngữ & bản địa hóa
- **VN là mặc định.** Kiến trúc sẵn sàng thêm **EN / KO / JA** (doanh nghiệp FDI) — bố cục phải chịu được chuỗi dài hơn tiếng Việt.
- **Tiền tệ:** `1.234.567 ₫` (dấu chấm phân tách nghìn, ký hiệu ₫ phía sau).
- **Ngày:** `DD/MM/YYYY`.
- Đổi ngôn ngữ trong **S8 Cá nhân**.

---

## 17. Phạm vi v1 (MVP) vs sau
- **MVP (làm trước):** S0 Kết nối · S1 Đăng nhập · S2 Trang chủ · S3 Phiếu lương · S4 Chấm công · S5 Thông báo · S6 Xin nghỉ · S8 Cá nhân — **8 màn**, gồm các trạng thái chính.
- **Sau:** S7 Kho tri thức (+ trợ lý AI) · S9 Duyệt đơn cho quản lý · đa ngôn ngữ EN/KO/JA · đăng nhập sinh trắc · **widget lương** màn hình chính · chế độ tối (dark mode).

---

## 18. Ghi chú kỹ thuật ảnh hưởng UI
- **Multi-tenant qua QR:** luồng "Kết nối công ty" trước đăng nhập; tên/logo công ty động.
- **Đăng nhập:** Mã NV + OTP/PIN/sinh trắc (không email/mật khẩu dài).
- **Push qua FCM:** cần màn Thông báo + badge; thiết kế mẫu push (mục 15).
- **Offline-first cho dữ liệu đã xem** (phiếu lương, bảng công gần nhất).
- **Số tiền:** định dạng VND tách nghìn, ký hiệu ₫.
- **Hiệu năng:** danh sách dài cần ảo hóa (virtualized); ảnh/minh họa nhẹ.

---

## 19. Sản phẩm cần giao (từ session Design)
1. **Design tokens** (màu, type scale, spacing, radius) — khớp mục 6 & 8.
2. **Bộ thành phần (component library)** ở mục 9, kèm các trạng thái.
3. **8 màn MVP** (mục 17), mỗi màn có **biến thể đầy đủ + tối giản** ở Trang chủ/Chấm công (mục 13), và các **trạng thái** loading/empty/error/offline ở những màn chính.
4. (Tùy chọn) **prototype bấm thử** các luồng ở mục 11.

**Định dạng:** Figma (ưu tiên) hoặc ảnh/HTML đều được. Sau đó sẽ chuyển thành **React Native + Expo** → ưu tiên layout dạng component, spacing theo scale, dùng token màu.

---

## 20. Tài nguyên & tham chiếu
- **Brand assets:** repo `bsdinsight/sapiones-web` → thư mục `brand/` (logo, gradient, brochure).
- **Ngôn ngữ thiết kế:** `https://sapiones.com` (gradient indigo–cyan, bo góc mềm, hiện đại).
- **Nội dung sản phẩm (tham khảo tính năng):** `content/sapiones-overview.md` & `content/sapiones-features-commercial.md` trong cùng repo.

> Nếu cần làm rõ phạm vi hoặc luồng, hỏi lại session Sapiones (build) — nơi nắm backend/ESS thực tế.
