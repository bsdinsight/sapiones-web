# Sapiones App — Bản yêu cầu thiết kế giao diện (Design Brief)

> Dành cho: **session Design** thiết kế giao diện **app di động cho người lao động (nhân viên)**.
> Sản phẩm: Sapiones — phần mềm Quản trị Nhân sự cho doanh nghiệp Việt Nam (by BSD, trên Odoo).
> Cập nhật: 2026-06. Ngôn ngữ chính: **Tiếng Việt**.

---

## 1. Bối cảnh
**Sapiones App** là app di động cho **người lao động (nhân viên)** của các doanh nghiệp đang dùng Sapiones. Mục đích: để nhân viên **tự xem phiếu lương, chấm công, xin nghỉ, nhận thông báo** ngay trên điện thoại — không cần lên văn phòng hỏi nhân sự.

- Backend là **on-premise** (mỗi công ty 1 server riêng). App là **một app dùng chung cho mọi công ty** (multi-tenant): người lao động **quét QR** do HR cung cấp để app trỏ về server công ty mình.
- Đây **không phải SaaS** — dữ liệu nằm ở server công ty. App chỉ là cửa sổ truy cập.
- Sẽ build bằng **React Native + Expo** (iOS + Android), và/hoặc **PWA** từ cổng web sẵn có. Thiết kế cần **mobile-first**.

## 2. Người dùng mục tiêu (rất quan trọng)
**Người lao động của doanh nghiệp Việt Nam** — từ công nhân nhà máy, nhân viên bán lẻ đến nhân viên văn phòng. Thiết kế cho **mẫu số chung dễ nhất** để ai cũng dùng được — đặc điểm cần lưu ý:
- **Trình độ công nghệ phổ thông** (quen MoMo/ZaloPay/Zalo, không quen app văn phòng).
- Độ tuổi đa dạng, có người lớn tuổi → **cần chữ to, tương phản cao**.
- Dùng điện thoại tầm trung, **sóng có thể yếu** (trong xưởng, ở quê).
- Dùng **một tay**, đôi khi vội/đứng máy → thao tác phải nhanh, ít bước.
- Quan tâm nhất: **"Tháng này lĩnh bao nhiêu?"** → phiếu lương là trái tim của app.
- (Tương lai: một số doanh nghiệp FDI có nhân viên **nước ngoài** → để dành đa ngôn ngữ.)

> 🎯 Kim chỉ nam: app phải **đơn giản như ví điện tử** (MoMo/ZaloPay), KHÔNG giống phần mềm doanh nghiệp.

## 3. Nguyên tắc thiết kế
1. **Tối giản, ít chữ, nhiều icon** rõ nghĩa. Mỗi màn 1 nhiệm vụ chính.
2. **Thông tin quan trọng to & nổi bật** — đặc biệt **số tiền thực lĩnh**.
3. **Vùng chạm lớn** (≥ 48px), nút chính đặt **phía dưới** (dễ với ngón cái).
4. **Tương phản cao** (đọc được trong ánh sáng nhà máy / ngoài trời).
5. **Tiếng Việt bình dân** — tránh thuật ngữ HR ("TNCT", "lũy tiến"…). Nói "Lương thực nhận", "Các khoản trừ".
6. **Tải nhanh + offline-aware**: phiếu lương đã xem phải còn xem được khi mất mạng.
7. **Phản hồi rõ ràng**: trạng thái loading/empty/lỗi/offline đều có hình minh họa thân thiện.
8. **Nhất quán** với thương hiệu Sapiones (xem mục 4).

## 4. Thương hiệu & Visual
- **Logo**: ký hiệu **"S"** trong ô bo góc nền **gradient indigo→cyan**, kèm chữ **Sapiones**.
- **Bảng màu**:
  - Indigo `#4F46E5` (chính) · Cyan `#06B6D4` (phụ) · Gradient 135° (indigo→cyan) cho điểm nhấn/nút chính
  - Ink `#0F172A` (chữ đậm) · Slate `#475569` (chữ phụ) · Mute `#94A3B8`
  - Xanh lá `#059669` (tích cực/đã duyệt) · Đỏ `#EF4444` (khấu trừ/cảnh báo/hết hạn)
  - Nền trắng `#FFFFFF`, thẻ nền `#F8FAFC`, viền `#E2E8F0`
- **Font**: sans hiện đại, **hỗ trợ tiếng Việt** (Inter / hệ thống). Tiêu đề đậm, thân nhẹ.
- **Phong cách**: bo góc mềm (radius ~14–18px), bóng nhẹ, thoáng, hiện đại — **tin cậy + thân thiện**.
- **Tham chiếu visual**: `sapiones.com` và brochure (cùng ngôn ngữ thiết kế gradient indigo–cyan).

## 5. Điều hướng
**Thanh tab dưới đáy (bottom tab) — 5 mục:**
`Trang chủ` · `Phiếu lương` · `Chấm công` · `Thông báo` (badge số) · `Cá nhân`
- "Xin nghỉ phép" đặt làm **nút nổi bật trên Trang chủ** (và truy cập từ Chấm công).
- Mỗi tab icon + nhãn ngắn.

## 6. Danh sách màn hình & đặc tả

### S1. Kết nối công ty *(lần đầu)*
- Logo Sapiones, tiêu đề "Kết nối với công ty của bạn".
- Nút lớn **"Quét mã QR"** (mở camera) + link nhỏ "Nhập mã công ty".
- Trạng thái lỗi: "Mã không hợp lệ" / "Không kết nối được — kiểm tra mạng".

### S2. Đăng nhập
- Hiện **tên + logo công ty** (sau khi kết nối).
- Ô **"Mã nhân viên"** → nút **"Tiếp tục"** → màn nhập **OTP 6 số** (gửi SMS/Zalo) *hoặc* PIN.
- Lần sau: đăng nhập bằng **PIN / vân tay-khuôn mặt**.
- Tối giản tuyệt đối, 1 trường mỗi bước.

### S3. Trang chủ
- Header: "Xin chào, **[Tên]**" + avatar; chuông thông báo (badge).
- **Thẻ lương nổi bật**: "Thực lĩnh tháng 06/2026" + **số tiền RẤT to** + nút "Xem phiếu lương".
- **Lối tắt** (lưới icon): Phiếu lương · Chấm công · **Xin nghỉ** · Tri thức.
- **Thông báo gần đây** (2–3 dòng).
- **Cảnh báo** (nếu có): "Chứng chỉ/GPLĐ của bạn sắp hết hạn" (thẻ màu cam).

### S4. Phiếu lương
- **Danh sách theo kỳ**: mỗi dòng "Tháng MM/YYYY · Thực lĩnh: xxx ₫ · [trạng thái]".
- **Chi tiết 1 phiếu**:
  - Trên cùng: **THỰC LĨNH** + số tiền cực to (nền gradient).
  - Nhóm **Thu nhập** (Lương, Phụ cấp, Tăng ca…) — xanh/đen.
  - Nhóm **Các khoản trừ** (BHXH, Thuế…) — đỏ.
  - Nút **"Tải PDF"**.

### S5. Chấm công
- Tháng hiện tại: **Ngày công**, **Tăng ca (giờ)**, **Ca đêm**, **Ca làm việc** — dạng thẻ số liệu to.
- (Tùy chọn) lịch tháng đánh dấu ngày làm/nghỉ.

### S6. Xin nghỉ phép
- **Danh sách đơn**: Loại nghỉ · Từ–Đến · Số ngày · **Trạng thái** (Chờ duyệt/Đã duyệt/Từ chối — badge màu).
- Nút **"+ Tạo đơn nghỉ"**: chọn **Loại nghỉ** → **Từ ngày**–**Đến ngày** → **Lý do** → "Gửi". (Form ngắn, dùng date picker.)

### S7. Thông báo
- Danh sách: icon theo loại (💰 lương về · ✅ đơn được duyệt · ⚠️ sắp hết hạn · 📣 công ty), tiêu đề, thời gian, dấu **chưa đọc**.

### S8. Kho tri thức *(v1 tùy chọn)*
- Tìm kiếm + danh mục → đọc bài viết (nội quy, quy trình, chính sách).

### S9. Cá nhân
- Thông tin: Tên · Mã NV · Phòng ban · Chức vụ.
- Cài đặt: **Đổi PIN**, **Ngôn ngữ** (VN/EN/KO/JA), Bật/tắt thông báo, **Đăng xuất**, **Đổi công ty**.

## 7. Trạng thái chung (cần thiết kế cho mọi màn)
- **Loading**: skeleton (khung xám), không spinner trống.
- **Rỗng (empty)**: hình minh họa + câu thân thiện ("Chưa có phiếu lương nào").
- **Lỗi**: thông báo nhẹ nhàng + nút **"Thử lại"**.
- **Offline**: banner "Đang ngoại tuyến — hiển thị dữ liệu đã lưu" + dữ liệu cache.
- **Mất kết nối server công ty**: hướng dẫn kiểm tra mạng / liên hệ HR.

## 8. Phạm vi v1 (MVP) vs sau
- **MVP (làm trước)**: S1 Kết nối · S2 Đăng nhập · S3 Trang chủ · S4 Phiếu lương · S5 Chấm công · S6 Xin nghỉ · S7 Thông báo · S9 Cá nhân.
- **Sau**: S8 Kho tri thức · đa ngôn ngữ · đăng nhập sinh trắc · widget lương màn hình chính.

## 9. Ghi chú kỹ thuật ảnh hưởng giao diện
- **Multi-tenant qua QR**: phải có luồng "Kết nối công ty" trước đăng nhập; tên/logo công ty hiển thị động sau khi kết nối.
- **Thông báo đẩy** (push): cần màn Thông báo + badge; thiết kế mẫu push (lương về, duyệt đơn…).
- **Offline**: ưu tiên hiển thị dữ liệu đã cache (phiếu lương).
- **Đăng nhập đơn giản**: mã NV + OTP/PIN (không email/mật khẩu dài).
- **Số tiền**: định dạng VND có phân tách nghìn, ký hiệu ₫.

## 10. Sản phẩm cần giao (từ session Design)
Bộ màn hình thiết kế (mobile, brand Sapiones, tiếng Việt) cho **8 màn MVP** ở mục 8, gồm cả các **trạng thái** chính (loading/empty/offline). Định dạng: ảnh/Figma/HTML đều được — sau đó sẽ chuyển thành **React Native + Expo**.

> Mọi yếu tố thương hiệu (màu, logo, font, tham chiếu) ở mục 4. Nếu cần file logo/màu gốc: xem repo `bsdinsight/sapiones-web` thư mục `brand/` và `sapiones.com`.
