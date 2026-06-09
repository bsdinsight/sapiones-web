# Sapiones Mobile — Bổ sung: Quản trị Hiệu suất (Công việc · KPI · OKR · Đánh giá)

> **Đây là addendum** cho `sapiones-app-design-brief.md`. **Giữ nguyên** thương hiệu (gradient indigo→cyan, Inter, bo góc mềm), nguyên tắc (đơn giản như ví điện tử, chữ to, tiếng Việt bình dân) và **5 bottom tab** đã có. Tài liệu này chỉ **thêm** mảng hiệu suất vào prototype Sapiones Mobile hiện có.
> Dành cho: **session Claude Design** đang dựng Sapiones Mobile. Cập nhật 2026-06.

---

## 0. Vì sao thêm mảng này
Quản trị nhân sự đi liền với **công việc** — và hiệu suất chỉ có ý nghĩa khi gắn với việc thực tế. App cần cho nhân viên thấy, ngay trên điện thoại: **"Tôi đang làm tốt không?" · "Mục tiêu của tôi" · "Việc của tôi" · "Kết quả đánh giá"** — đơn giản, liếc là hiểu, **không phải phần mềm PMS desktop thu nhỏ**.

## 1. Nguyên tắc (kế thừa + thêm 3 điều)
- **Glanceable**: số to, màu **xanh (đạt) / cam (cảnh báo) / đỏ (chưa đạt)**.
- 🆕 **"Tự đo từ hệ thống"**: nhấn mạnh số liệu **tự cập nhật** (từ máy chấm công, sản lượng, đào tạo…), **ít gõ tay** → tạo niềm tin. Hiển thị nhãn *"Cập nhật lúc…"*.
- 🆕 **Thích ứng 2 đường ray** — dùng **đúng tweak "Công nhân ↔ Văn phòng" đã có**: Công nhân → **KPI**; Văn phòng → **OKR + Việc**.
- 🆕 **Mobile = XEM là chính** + tự đánh giá/check-in nhẹ. Chỉnh sửa nặng để bản desktop.
- Tiếng Việt bình dân: nói **"Mục tiêu", "Kết quả chính", "Hiệu suất", "Xếp loại"** — hạn chế "OKR/KR/KPI" (nhất là với công nhân).

## 2. Điều hướng — QUYẾT ĐỊNH: KHÔNG thêm tab
Giữ nguyên 5 tab (Trang chủ · Phiếu lương · Chấm công · Thông báo · Cá nhân). Bổ sung:
- **Thẻ "Hiệu suất" trên Trang chủ** (thứ cấp, đặt **dưới** thẻ lương — lương vẫn là số 1).
- **Thêm lối tắt "Hiệu suất"** vào lưới lối tắt Trang chủ (thành: Phiếu lương · Chấm công · Xin nghỉ · **Hiệu suất** · Tri thức).
- Màn **Đánh giá** mở từ màn Hiệu suất + từ **Thông báo** khi có đợt.

## 3. Hai đường ray (adaptive theo tweak Công nhân/Văn phòng)
| | **Công nhân (KPI)** | **Văn phòng (OKR + Việc)** |
|---|---|---|
| Thẻ Trang chủ | "Hiệu suất tháng · 92% chỉ tiêu" | "Mục tiêu quý · 3/5 đúng tiến độ · 64%" |
| Màn chính | KPI: sản lượng, chất lượng, chuyên cần, an toàn (tự đo) | Mục tiêu + Kết quả chính (tiến độ %) |
| "Việc của tôi" | Phiếu **sản lượng** theo ngày/kỳ | **Task** (từ Odoo Project) gắn với Kết quả chính |
| Gắn lương | Có thể (thưởng/khoán) | Không trực tiếp |

## 4. Màn hình mới

### P0 — Thẻ "Hiệu suất" trên Trang chủ
- **Công nhân:** "Hiệu suất tháng 06/2026" + **% chỉ tiêu** (gauge nhỏ/màu) + "Xem chi tiết".
- **Văn phòng:** "Mục tiêu Quý 2/2026" + **x/y đúng tiến độ** + thanh tiến độ tổng %.

### P1 — Hiệu suất *(màn chính, adaptive)*
**Công nhân (KPI):**
- Trên cùng: **Xếp loại / % chỉ tiêu** số to.
- Lưới **thẻ KPI** (mỗi thẻ: tên · **chỉ tiêu vs thực tế** · màu · mini-trend): **Sản lượng · Chất lượng (tỷ lệ lỗi) · Chuyên cần · An toàn**.
- (Tùy chọn) **Thưởng hiệu suất ước tính**.
- Nhãn *"Tự đo từ máy chấm công & sản lượng — cập nhật 08:00 hôm nay"*.

**Văn phòng (OKR):**
- Danh sách **Mục tiêu** (Objective). Mỗi mục tiêu → các **Kết quả chính** (KR) + **thanh tiến độ %** + **chip trạng thái** (Đúng tiến độ / Chậm / Rủi ro — màu).
- Nút **"Cập nhật tiến độ"** (check-in nhanh: kéo % hoặc nhập số + ghi chú 1 dòng).

### P2 — Việc của tôi
- **Văn phòng:** danh sách **task** (Odoo Project): tên · **hạn** · trạng thái · gắn *"phục vụ Kết quả chính nào"*. Lọc: **Hôm nay / Tuần này / Quá hạn**.
- **Công nhân:** thay bằng **"Sản lượng của tôi"** — phiếu sản lượng theo ngày/kỳ (số lượng × công đoạn).

### P3 — Đánh giá *(Appraisal)*
- Kết quả đợt gần nhất: **Xếp loại** (to, có màu) + điểm + **nhận xét quản lý** + tự đánh giá.
- 🆕 **Kế hoạch phát triển**: điểm yếu → **khóa đào tạo được giao** (link sang Kho học/LMS) — *đóng vòng hiệu suất → đào tạo*.
- **Lịch sử** các đợt trước (danh sách).

### P4 — Tự đánh giá *(hiện khi có đợt mở)*
- Theo từng KPI/mục tiêu: **tự chấm + nhận xét**; **1 thẻ / 1 mục**, vuốt qua lại; nút **Gửi**.
- Tiến trình: *Chờ tự ĐG → Đã gửi → Quản lý đang đánh giá → Hoàn tất*.

### P5 — Đội của tôi *(giai đoạn 2 — cho quản lý)*
- Danh sách thành viên + **trạng thái KPI/OKR** (màu) + ai cần chú ý.
- **Chấm/duyệt** đánh giá; **duyệt check-in**; gửi phản hồi. (Đi cùng màn Duyệt đơn nghỉ S9.)

## 5. Thành phần mới (thêm vào component library)
- **Score/gauge lớn** (xếp loại / % chỉ tiêu) — phong cách như thẻ lương nhưng **thứ cấp**.
- **Thanh tiến độ KR** + **chip trạng thái** (Đúng tiến độ/Chậm/Rủi ro).
- **Thẻ KPI** (chỉ tiêu vs thực tế + màu + mini-trend/sparkline).
- **Task row** (tên · hạn · trạng thái · gắn Kết quả chính).
- 🆕 **Badge "Tự đo"** (icon đồng bộ) gắn cạnh số liệu auto.

## 6. Microcopy bổ sung
| Thuật ngữ | Hiển thị |
|---|---|
| OKR / Objective | **Mục tiêu** |
| Key Result (KR) | **Kết quả chính** |
| KPI | **Chỉ số** / **Hiệu suất** (tránh "KPI" với công nhân) |
| Appraisal | **Đánh giá** |
| Rating | **Xếp loại** |
| Self-assessment | **Tự đánh giá** |
| Check-in | **Cập nhật tiến độ** |
| On track / Behind / At risk | **Đúng tiến độ / Chậm / Rủi ro** |

## 7. Thông báo đẩy bổ sung
- 📋 "Đợt đánh giá **Quý 2/2026** đã mở — tự đánh giá trước **20/06**."
- ✅ "Quản lý đã đánh giá bạn — chạm để xem kết quả & xếp loại."
- ⏰ "Đến hạn **cập nhật tiến độ mục tiêu** tuần này."
- 📈 "Chỉ số **Chất lượng** tháng này dưới chỉ tiêu — xem chi tiết." *(giọng nhẹ, không phán xét)*
- 🎓 "Bạn được giao khóa **An toàn lao động** theo kế hoạch phát triển."

## 8. Phạm vi
- **MVP (làm trước):** P0 thẻ Trang chủ · **P1 Hiệu suất** (cả 2 ray) · **P3 Đánh giá (xem)** · **P4 Tự đánh giá** + 5 mẫu push.
- **Sau:** P2 Việc của tôi (tích hợp Odoo Project) · check-in OKR · P5 Đội của tôi (quản lý) · thưởng ước tính · 360°.

## 9. Lưu ý kỹ thuật ảnh hưởng UI
- **Adaptive** theo loại NV (server trả cấu hình) — **ẩn hẳn** đường ray không dùng (đừng hiện ô rỗng).
- **Số liệu KPI auto** từ module sẵn có (máy chấm công, sản lượng, LMS, EHS) → thiết kế nhãn *"cập nhật lúc…"*, không bắt nhân viên nhập.
- **OKR/Task nối Odoo Project** → task có thể nhiều → cần lọc/nhóm gọn trên mobile.
- Hiệu suất là **nhạy cảm** → giọng tích cực, hướng phát triển; không "bêu" điểm kém.

---

## 10. PROMPT DÁN VÀO CLAUDE DESIGN (mở rộng prototype hiện có)

```
Mở rộng prototype Sapiones Mobile hiện có: THÊM mảng "Quản trị Hiệu suất" cho nhân viên (Công việc · KPI · OKR · Đánh giá). GIỮ NGUYÊN brand (gradient indigo #4F46E5 → cyan #06B6D4, Inter, bo góc mềm), nguyên tắc đơn giản như ví điện tử, tiếng Việt bình dân, và 5 bottom tab. Dùng đúng tweak "Công nhân ↔ Văn phòng" đã có để đổi nội dung.

ĐIỀU HƯỚNG: KHÔNG thêm tab. Thêm (a) thẻ "Hiệu suất" trên Trang chủ, đặt DƯỚI thẻ lương; (b) lối tắt "Hiệu suất" vào lưới Trang chủ.

HAI ĐƯỜNG RAY (theo tweak):
- CÔNG NHÂN → KPI: màn Hiệu suất hiện Xếp loại/% chỉ tiêu (số to) + thẻ KPI (Sản lượng, Chất lượng, Chuyên cần, An toàn) mỗi thẻ có chỉ tiêu vs thực tế + màu xanh/cam/đỏ + mini-trend; nhãn "Tự đo từ máy chấm công & sản lượng".
- VĂN PHÒNG → OKR: danh sách "Mục tiêu" → mỗi mục tiêu có "Kết quả chính" + thanh tiến độ % + chip trạng thái (Đúng tiến độ/Chậm/Rủi ro); nút "Cập nhật tiến độ".

MÀN CẦN VẼ (high fidelity, khung 390×844):
1) Thẻ "Hiệu suất" trên Trang chủ (2 biến thể công nhân/văn phòng).
2) Hiệu suất — màn chính (2 biến thể như trên).
3) Đánh giá: Xếp loại to + nhận xét quản lý + "Kế hoạch phát triển" (khóa đào tạo được giao) + lịch sử.
4) Tự đánh giá: 1 thẻ/1 mục (tự chấm + nhận xét) → Gửi; tiến trình Chờ→Đã gửi→QL đánh giá→Hoàn tất.

TỪ NGỮ: OKR→"Mục tiêu", KR→"Kết quả chính", KPI→"Chỉ số/Hiệu suất", Rating→"Xếp loại", Self-assessment→"Tự đánh giá", Check-in→"Cập nhật tiến độ". Màu: xanh=đạt, cam=cảnh báo, đỏ=chưa đạt. Giọng tích cực, hướng phát triển — không bêu điểm kém.
```
```
(Tùy chọn — làm sau) Thêm: P2 "Việc của tôi" (task từ hệ thống, lọc Hôm nay/Tuần này/Quá hạn; công nhân thì là "Sản lượng của tôi"); P5 "Đội của tôi" cho quản lý (chấm/duyệt đánh giá, duyệt cập nhật tiến độ).
```
