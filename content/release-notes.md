# Sapiones — What's New / Release Notes (nguồn chuẩn)

> Dùng cho: docs.bsdinsight.com → **Sapiones › What's New** (kiểu Ataccama release notes).
> Đây là nơi đánh dấu sự trưởng thành của Sapiones theo từng phiên bản.

## Quy ước phiên bản (đề xuất)
**SemVer + ngày phát hành:** `MAJOR.MINOR.PATCH` (vd `1.0.0`).
- **MAJOR** — thay đổi lớn / phá vỡ tương thích.
- **MINOR** — thêm phân hệ / tính năng mới (vd `1.0 → 1.1`).
- **PATCH** — sửa lỗi, cập nhật tuân thủ nhỏ (vd `1.0.0 → 1.0.1`). *Cập nhật tuân thủ (tỷ lệ BHXH, biểu thuế, biểu mẫu) đi theo PATCH.*

**Cấu trúc trang What's New** (mỗi phiên bản 1 trang, mới nhất trên cùng):
`What's New` → `Sapiones 1.0 Release Notes` → (sau này) `1.1`, `1.0.1 Patch`, ...
Mỗi trang gồm: **Release Highlights · Tính năng mới (theo phân hệ) · Cải tiến · Sửa lỗi · Giới hạn đã biết · Ghi chú nâng cấp · Sắp tới**.

---

# Sapiones 1.3 — Tháng 6/2026
**Báo cáo tổng hợp & phân tích** — tầng "trí tuệ" để quản lý ra quyết định bằng số liệu.

## ✨ Release Highlights
- **5 báo cáo tổng hợp** dạng Pivot + biểu đồ tương tác (xuất Excel).

## 🆕 Tính năng mới
**Báo cáo tổng hợp (mới)**
- **Quỹ lương** — theo phòng ban/kỳ: tổng thu nhập, BHXH, thuế, thực lĩnh, chi phí DN.
- **Nhân sự & cơ cấu** — số lao động theo phòng ban, trong nước/nước ngoài, thâm niên.
- **Chấm công & tăng ca** — ngày công, tăng ca, ca đêm theo phòng ban/ca/kỳ.
- **An toàn & sức khỏe** — sự cố lao động & khám sức khỏe.
- **Tuyển dụng & đánh giá** — phễu ứng viên & phân bố xếp loại KPI.
- Tất cả **kéo-thả chiều phân tích, xuất Excel** ngay.

## 🔜 Sắp tới
- **AI dự báo nghỉ việc** (attrition) trên nền dữ liệu phân tích.

---

# Sapiones 1.2 — Tháng 6/2026
**Hỗ trợ nhân viên nước ngoài** — tính lương & hồ sơ đúng quy định cho lao động nước ngoài (DN FDI/sản xuất).

## ✨ Release Highlights
- **Xử lý nhân viên nước ngoài** trong engine tính lương + hồ sơ.

## 🆕 Tính năng mới
**Nhân viên nước ngoài**
- **Hồ sơ**: cờ "Người nước ngoài", quốc tịch, hộ chiếu, **giấy phép lao động + visa/thẻ tạm trú** kèm **cảnh báo hết hạn** tự động.
- **Tính lương đúng quy định**:
  - **Bỏ BHTN** cho người nước ngoài (chỉ BHXH + BHYT → trừ 9,5% thay vì 10,5%).
  - **Cá nhân cư trú** (≥183 ngày): thuế TNCN lũy tiến + giảm trừ gia cảnh.
  - **Không cư trú** (<183 ngày): thuế **20% cố định**, không giảm trừ.
- Mặc định lấy từ hồ sơ nhân viên, cho phép chỉnh trên phiếu lương.

---

# Sapiones 1.1 — Tháng 6/2026
**Bổ sung phân hệ Tuyển dụng — khép kín vòng đời nhân tài** (tuyển dụng → hồ sơ → đào tạo → đánh giá → lương).

## ✨ Release Highlights
- **Phân hệ mới: Tuyển dụng (ATS)** — phân hệ thứ 10 của Sapiones.

## 🆕 Tính năng mới
**Tuyển dụng (mới)**
- **Yêu cầu tuyển dụng** (định biên) + quy trình duyệt (Nháp → Chờ duyệt → Đã duyệt).
- **Pipeline ứng viên** dạng kanban kéo-thả: *Mới → Sàng lọc CV → Phỏng vấn → Đề nghị → Trúng tuyển / Từ chối*.
- **Chấm điểm phỏng vấn** (hội đồng): chuyên môn, giao tiếp, thái độ, phù hợp văn hóa → điểm tổng.
- **Tạo nhân viên từ ứng viên trúng tuyển** — prefill hồ sơ VN (CCCD), liên kết về phiếu ứng viên; tuân theo bản quyền (miễn phí tới 30 NV).
- Quản lý nguồn ứng tuyển, lương kỳ vọng/đề nghị, đính kèm CV.

## 🧱 Nền tảng
Tận dụng nền Odoo Community 19; phân hệ thương mại OPL-1.

---

# Sapiones 1.0 — Tháng 6/2026
**Bản phát hành nền tảng (inaugural release).** Đánh dấu Sapiones từ ý tưởng → bộ HRM/HCM hoàn chỉnh cho doanh nghiệp Việt Nam trên Odoo Community 19, với **phiên bản chuyên ngành Sản xuất** đầu tiên.

## ✨ Release Highlights
- **9 phân hệ nối liền** — từ hồ sơ, chấm công, tính lương, kê khai đến cổng nhân viên, đánh giá, đào tạo và trợ lý AI.
- **Tính lương đúng luật VN** — BHXH/BHYT/BHTN + thuế TNCN lũy tiến, phiếu lương PDF, file chuyển khoản ngân hàng, bảng kê thuế & BHXH.
- **Đặc thù sản xuất** — ca kíp & tăng ca (150/200/300% + ca đêm), máy chấm công, lương sản phẩm/khoán.
- **Kê khai điện tử** — tờ khai thuế TNCN (05/KK) & BHXH (D02-LT), kết xuất cho HTKK.
- **Cổng nhân viên (ESS)** — phiếu lương, xin nghỉ online, tra cứu tri thức.
- **Quản trị tài năng** — đánh giá KPI/OKR; đào tạo (LMS) tự cấp chứng chỉ; an toàn lao động (EHS).
- **Kho tri thức + Trợ lý AI (RAG)**.
- **Mô hình mở** — miễn phí tới **30 nhân viên**, không giới hạn thời gian.

## 🆕 Tính năng mới (theo phân hệ)

**Nền tảng — Mã nguồn mở (miễn phí)**
- Hồ sơ nhân sự VN: CCCD/CMND, MST, sổ BHXH, dân tộc/quê quán, người phụ thuộc (giảm trừ gia cảnh).
- Đơn vị hành chính 2025: 34 tỉnh → phường/xã (bỏ cấp huyện).
- Chứng chỉ nhân viên + cảnh báo hết hạn tự động.

**Tính lương Việt Nam**
- Engine gross→net: BHXH 8% / BHYT 1,5% / BHTN 1% (NLĐ), DN 21,5% + KPCĐ; trần đóng; thuế TNCN lũy tiến 7 bậc; giảm trừ gia cảnh.
- Tham số hiệu lực theo ngày (đổi luật chỉ thêm bản ghi).
- Lương theo ngày công; tăng ca 150/200/300% + ca đêm (tự tách phần miễn thuế TNCN); lương sản phẩm/khoán.
- Phiếu lương **PDF** (đọc số thành chữ); **file chuyển khoản ngân hàng**; **bảng kê thuế TNCN & BHXH** (Excel).

**Chấm công ca kíp & tăng ca**
- Ca làm việc (3 ca 4 kíp), ca đêm; bảng chấm công tháng → nối ngày công & tăng ca vào tính lương.

**Máy chấm công & lương sản phẩm**
- Khai báo máy (ZKTeco/Hikvision…), nhập tệp dữ liệu chấm công → tự ra bảng công; đơn giá & phiếu sản lượng.

**Kê khai điện tử**
- Tờ khai thuế TNCN (05/KK + 05-1/BK) & BHXH (D02-LT); tổng hợp từ phiếu lương; kết xuất Excel cho HTKK / phần mềm BHXH; quy trình Nháp → Đã lập → Đã nộp.

**Cổng nhân viên (ESS)**
- Xem & tải phiếu lương, xem bảng chấm công, xin nghỉ phép online, tra cứu kho tri thức — mobile; chỉ thấy dữ liệu của mình.

**Đánh giá hiệu suất (KPI/OKR)**
- Đợt đánh giá → tạo phiếu hàng loạt; KPI có trọng số (tự đánh giá + quản lý) → xếp loại; mục tiêu OKR + tiến độ.

**Đào tạo (LMS) & An toàn lao động (EHS)**
- Khóa/lớp đào tạo → tự cấp chứng chỉ khi hoàn thành (cảnh báo hết hạn); khám sức khỏe định kỳ; sự cố/tai nạn lao động.

**Kho tri thức + Trợ lý AI**
- Kho tài liệu nội bộ (danh mục, bài viết, thẻ); trợ lý AI hỏi-đáp (RAG); sinh câu trả lời bằng LLM khi cấu hình API key.

**Bản quyền & triển khai**
- Khung bản quyền: **miễn phí tới 30 nhân viên**; vượt → bản quyền theo số lao động; **khóa mềm giữ nguyên dữ liệu**.
- On-premise với **khóa ký số offline** (không cần internet); thuê bao cập nhật tuân thủ; key đánh giá full-seat cho khách lớn.

## ⚠️ Giới hạn đã biết
- Tăng ca **ban đêm** (cộng dồn +20%) chưa tách riêng — sẽ bổ sung.
- **Kết nối trực tiếp** máy chấm công qua LAN cần agent on-prem — hiện hỗ trợ **nhập tệp**.
- Trợ lý AI **sinh câu trả lời** cần cấu hình API key (mặc định tắt; không có key vẫn truy xuất tài liệu liên quan).
- BHXH tính trên **lương hợp đồng** (không tự prorate theo ngày công).

## 🧱 Nền tảng
Odoo Community 19. Triển khai on-premise hoặc cloud. Phần lõi LGPL-3, phần thương mại OPL-1.

## 🔜 Sắp tới (lộ trình)
- Phân tích nâng cao + AI dự báo nghỉ việc.
- Kết nối trực tiếp máy chấm công (agent on-prem).
- Hóa đơn điện tử + Kế toán VN (mở rộng nền tảng).
