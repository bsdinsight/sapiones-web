# Sapiones Job Board — `tuyendung.sapiones.com` — Đặc tả chức năng & Design Brief

> **Dùng cho:** (1) danh sách chức năng để review · (2) **handoff cho session Claude Design** vẽ giao diện.
> **Sản phẩm:** Trang tuyển dụng công khai của hệ sinh thái Sapiones (by BSD). **Tiếng Việt · Mobile-first · SEO-first.**
> Cập nhật: 2026-06.

---

## 0. Tóm tắt
**tuyendung.sapiones.com** là **trang tuyển dụng công khai tập trung**. Khách dùng Sapiones (on-prem) **đẩy tin tuyển** lên; **ứng viên** tìm việc + nộp CV; **hồ sơ tự chảy về** Sapiones của khách (on-prem *poll* outbound). Mở rộng tương lai: công ty **ngoài** Sapiones cũng đăng tin được (nguồn doanh thu).

## 1. Kiến trúc (tóm tắt)
**Board tập trung (BSD host) + connector on-prem.** On-prem **chỉ gọi ra**: ① đẩy tin tuyển ↑ · ③ kéo hồ sơ về ↓ (định kỳ). Ứng viên ② nộp CV trên board. Board chỉ giữ **tin công khai + hồ sơ đến** (tạm, tới khi khách kéo về) — dữ liệu HR vẫn nằm on-prem.

## 2. Người dùng (persona)
- **Ứng viên / người tìm việc** — *trọng tâm thiết kế* (đa số dùng điện thoại).
- **Nhà tuyển dụng** — khách Sapiones (đẩy tin từ on-prem) + (pha sau) công ty ngoài đăng trực tiếp.
- **Admin BSD** — kiểm duyệt tin, quản gói trả phí, thống kê.

---

## 3. Chức năng — ỨNG VIÊN (public, thiết kế đẹp nhất ở đây)

| # | Chức năng | Mô tả | Pha |
|---|---|---|---|
| U1 | **Trang chủ** | Ô tìm kiếm lớn (từ khóa + địa điểm), tin **nổi bật**, ngành nghề hot, công ty tiêu biểu, số liệu (X việc · Y công ty) | MVP |
| U2 | **Tìm việc** (kết quả) | Bộ lọc: **ngành, tỉnh/thành, mức lương, hình thức** (toàn thời gian/bán thời gian/thời vụ), **cấp bậc**, ngày đăng; sắp xếp (mới/lương/liên quan); thẻ job; phân trang | MVP |
| U3 | **Chi tiết tin** | Mô tả · yêu cầu · quyền lợi · lương · địa điểm · hạn nộp · **nút Ứng tuyển** · lưu tin · chia sẻ · tin tương tự · link công ty | MVP |
| U4 | **Ứng tuyển nhanh** | Tên/email/SĐT + **tải CV** + thư giới thiệu ngắn → gửi. **Không bắt buộc tài khoản**; gợi ý tạo tài khoản để theo dõi | MVP |
| U5 | **Đăng ký / Đăng nhập** | Email hoặc SĐT + OTP/mật khẩu (social đăng nhập: sau) | MVP |
| U6 | **Việc của tôi** | Danh sách tin đã nộp + **trạng thái** (Đã nộp / NTD đã xem / Mời PV / Từ chối — đồng bộ ngược từ on-prem) | MVP |
| U7 | **Hồ sơ ứng viên / CV online** | Thông tin cá nhân, **kinh nghiệm/học vấn/kỹ năng**, nhiều bản CV (tải lên), ảnh đại diện → tái dùng khi ứng tuyển | Pha 2 |
| U8 | **Việc đã lưu** + **Thông báo việc làm** | Lưu tin; email khi có tin khớp tiêu chí | Pha 2 |
| U9 | **Trang công ty** (xem) | Logo, giới thiệu, các tin đang tuyển của công ty | Pha 2 |
| U10 | **Gợi ý việc làm** | Gợi ý theo hồ sơ/lịch sử (AI sau) | Sau |

## 4. Chức năng — NHÀ TUYỂN DỤNG / Board-side
| # | Chức năng | Mô tả | Pha |
|---|---|---|---|
| E1 | **Đăng tin (từ on-prem)** | Khách bấm "Đăng tuyển công khai" trong Sapiones → tin lên board (không cần nhập lại trên board) | MVP |
| E2 | **Trang công ty / thương hiệu** | Logo, mô tả, ảnh — cấu hình từ on-prem hoặc trang quản trên board | Pha 2 |
| E3 | **Bảng điều khiển tin** | Xem tin đang hiển thị, **lượt xem · lượt ứng tuyển**, gỡ/đẩy nổi bật | Pha 2 |
| E4 | **Đăng tin trực tiếp cho công ty NGOÀI Sapiones** | Form đăng tin + tài khoản NTD độc lập (không cần Sapiones) — mở rộng job board | Pha 3 |
| E5 | **Tin nổi bật / gói đăng tin trả phí** | Boost tin, gói nhiều tin, xem kho hồ sơ — **doanh thu** | Pha 3 |

## 5. Connector on-prem (backend — Sapiones build, ít UI)
| # | Chức năng | Mô tả | Pha |
|---|---|---|---|
| C1 | **Đẩy/cập nhật/đóng tin** | Nút trên YCTD (đã duyệt) → `POST /api/jobs`; đóng khi YCTD đóng | MVP |
| C2 | **Kéo hồ sơ về (poll)** | Cron outbound `GET /api/applications?since=…` → tạo `sapiones.candidate` (gắn YCTD, đính CV) | MVP |
| C3 | **Đẩy trạng thái ngược** | Khi đổi giai đoạn ứng viên (xem/mời PV/từ chối) → cập nhật lên board để ứng viên thấy | Pha 2 |
| C4 | **Cấu hình** | URL board + **org-token** (gắn license/đăng ký), bật/tắt, chu kỳ poll | MVP |

## 6. Admin BSD (board)
Kiểm duyệt tin (chống spam), quản công ty, quản **tin nổi bật/thanh toán**, thống kê (lượt xem · ứng tuyển · tin/công ty · nguồn). — *UI nội bộ, không cần đẹp.*

## 7. Xuyên suốt (bắt buộc)
- **Mobile-first** — đa số ứng viên VN dùng điện thoại.
- **SEO-first** — job board sống nhờ SEO: mỗi tin là **1 URL sạch** + schema `JobPosting` (Google Jobs), sitemap, meta.
- **Tiếng Việt**; định dạng lương VND; địa điểm theo **34 tỉnh/thành 2025**.
- **Thương hiệu Sapiones** (gradient indigo→cyan); tin cậy, hiện đại.
- Tìm kiếm nhanh; tải nhanh; chống spam ứng tuyển (rate-limit/captcha nhẹ).

---

## 8. MÀN HÌNH CẦN CLAUDE DESIGN VẼ (ưu tiên public + ứng viên)
1. **Trang chủ** — hero tìm kiếm, tin nổi bật, ngành nghề, công ty, số liệu.
2. **Kết quả tìm việc** — bộ lọc (sidebar desktop / sheet mobile) + danh sách thẻ job + sắp xếp + phân trang.
3. **Chi tiết tin tuyển dụng** — JD đầy đủ + box công ty + **nút Ứng tuyển** dính + tin tương tự.
4. **Ứng tuyển** (modal/trang) — chọn/tải CV + thư ngắn → gửi → màn xác nhận.
5. **Đăng ký / Đăng nhập ứng viên** — email/SĐT + OTP.
6. **Việc của tôi** — danh sách đã nộp + chip trạng thái; tab việc đã lưu.
7. **Hồ sơ ứng viên / CV online** *(pha 2)* — thông tin, kinh nghiệm, kỹ năng, CV.
8. **Trang công ty** *(pha 2)* — branding + tin đang tuyển.
9. **Đăng tin / Dashboard NTD** *(pha 3, cho công ty ngoài)*.

Mỗi màn cần **bản mobile + desktop** + các trạng thái (rỗng/đang tải/lỗi). Trọng tâm đẹp: **Trang chủ · Kết quả tìm việc · Chi tiết tin · Ứng tuyển**.

## 9. Thương hiệu & Visual
- Gradient **indigo `#4F46E5` → cyan `#06B6D4`**; nền trắng/`#F8FAFC`; chữ `#0F172A`/`#475569`; xanh `#059669` (tích cực), đỏ `#EF4444`. Font **Inter**, bo góc mềm. Đồng bộ `sapiones.com`.
- Phong cách: **sạch, hiện đại, tin cậy** — bố cục quen thuộc với người Việt (tham chiếu TopCV / VietnamWorks / ITviec về *cấu trúc*), nhưng **nhận diện Sapiones**.
- Thẻ job: tiêu đề, công ty + logo, địa điểm, **lương nổi bật**, hình thức, "đăng X ngày trước", nút Lưu.

## 10. Phạm vi build (sau khi có design)
- **MVP:** U1–U6 (public + ứng tuyển + tài khoản + việc của tôi) · E1 · C1/C2/C4. → đủ vòng "đẩy tin → ứng viên nộp → hồ sơ tự về Sapiones".
- **Pha 2:** U7–U9 · E2/E3 · C3.
- **Pha 3 (doanh thu):** E4/E5 · AI gợi ý.

## 11. PROMPT DÁN VÀO CLAUDE DESIGN
```
Thiết kế giao diện cho tuyendung.sapiones.com — TRANG TUYỂN DỤNG (job board) tiếng Việt, MOBILE-FIRST, của hệ sinh thái Sapiones (HR by BSD). Phong cách: sạch, hiện đại, tin cậy; gradient indigo #4F46E5 → cyan #06B6D4; nền trắng/#F8FAFC; chữ #0F172A/#475569; xanh #059669, đỏ #EF4444; font Inter; bo góc mềm. Cấu trúc quen thuộc với người tìm việc Việt Nam (kiểu TopCV/VietnamWorks) nhưng nhận diện Sapiones.

Vẽ các màn (mỗi màn có bản MOBILE và DESKTOP + trạng thái rỗng/tải/lỗi):
1) TRANG CHỦ: hero ô tìm kiếm lớn (từ khóa + địa điểm), khối "Việc làm nổi bật" (lưới thẻ job), ngành nghề hot, công ty tiêu biểu, số liệu (việc làm/công ty).
2) KẾT QUẢ TÌM VIỆC: thanh tìm + bộ lọc (ngành, tỉnh/thành, mức lương, hình thức, cấp bậc, ngày đăng) — sidebar trên desktop, bottom-sheet trên mobile; danh sách THẺ JOB (tiêu đề, công ty+logo, địa điểm, lương nổi bật, hình thức, "đăng X ngày trước", nút Lưu); sắp xếp; phân trang.
3) CHI TIẾT TIN: tiêu đề + công ty + lương + địa điểm + hạn nộp; mô tả/yêu cầu/quyền lợi; box công ty (logo, giới thiệu, link); NÚT "ỨNG TUYỂN" DÍNH (sticky) trên mobile; tin tương tự.
4) ỨNG TUYỂN (modal/trang): chọn CV đã lưu hoặc TẢI CV mới + thư giới thiệu ngắn + tên/email/SĐT (cho ứng tuyển nhanh không cần tài khoản); màn xác nhận "Đã nộp".
5) ĐĂNG KÝ/ĐĂNG NHẬP ỨNG VIÊN: email hoặc SĐT + OTP; tối giản.
6) VIỆC CỦA TÔI: danh sách tin đã nộp + CHIP TRẠNG THÁI (Đã nộp/NTD đã xem/Mời phỏng vấn/Từ chối — màu xanh/cam/đỏ); tab "Việc đã lưu".
7) (pha 2) HỒ SƠ ỨNG VIÊN / CV ONLINE: thông tin cá nhân, kinh nghiệm, học vấn, kỹ năng, danh sách CV.
8) (pha 2) TRANG CÔNG TY: ảnh bìa + logo + giới thiệu + danh sách tin đang tuyển.

Ưu tiên đẹp nhất: Trang chủ · Kết quả tìm việc · Chi tiết tin · Ứng tuyển. Tiếng Việt, lương dạng "12 – 18 triệu", địa điểm theo tỉnh/thành Việt Nam.
```
```
(Tùy chọn — pha 3, cho công ty NGOÀI Sapiones) Thêm: trang ĐĂNG TIN (form tạo tin tuyển dụng) + DASHBOARD nhà tuyển dụng (tin đang đăng, lượt xem, lượt ứng tuyển, mua tin nổi bật).
```
