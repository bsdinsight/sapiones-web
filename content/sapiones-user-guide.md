# Sapiones — Hướng dẫn sử dụng các phân hệ (chi tiết)

> Hướng dẫn nghiệp vụ từng phân hệ Sapiones — **đúng từng menu, nút bấm, trường nhập** của phần mềm.
> Mỗi mục gồm: **Đường dẫn** (menu) · **Các bước** · **Trường quan trọng** · **Lưu ý**.
> Tất cả tính năng **miễn phí tới 20 nhân viên đang hoạt động**; vượt 20 → bản quyền theo số lao động.

---

## Quy trình một tháng (tổng quan)
Trình tự khuyến nghị mỗi kỳ lương:

**① Chấm công** (Bảng chấm công) → **② Tính lương** (Phiếu lương) → **③ Bảng kê & file ngân hàng** → **④ Kê khai** thuế TNCN & BHXH → **⑤ Nhân viên tự xem** trên Cổng (ESS) → **⑥ Báo cáo** tổng hợp.

Các phân hệ quản trị tài năng (Đánh giá · Đào tạo · Tuyển dụng · Kho tri thức) chạy song song, không phụ thuộc kỳ lương.

---

## 1. Tính lương Việt Nam

**Mục đích:** Tính lương gross → net tự động, đúng pháp luật BHXH & thuế TNCN; in phiếu lương.

**Đường dẫn:** **Tiền lương → Phiếu lương**

**Các bước:**
1. Bấm **Mới**.
2. Chọn **Nhân viên** → hệ thống tự điền **Lương chính (gross)**, **Số người phụ thuộc**, cờ **Người nước ngoài** từ hồ sơ.
3. Chọn **Từ ngày** (đầu kỳ) — **Đến ngày** tự nhảy cuối tháng.
4. Kiểm/nhập nhóm **Đầu vào**: Lương chính (gross) · Phụ cấp chịu thuế · Lương sản phẩm/khoán · Phụ cấp miễn thuế · Mức đóng BH · Số người phụ thuộc · Khấu trừ khác.
5. Nhập nhóm **Chấm công & Tăng ca**: Công chuẩn (mặc định 26) · Ngày công thực tế · Ngày nghỉ hưởng lương · Ngày nghỉ không lương · **Giờ TC ngày thường (150%)** · **Giờ TC ngày nghỉ (200%)** · **Giờ TC lễ/Tết (300%)** · **Giờ ca đêm (+30%)**.
   > 💡 Nếu dùng phân hệ **Chấm công**, các số này được đẩy sang tự động từ Bảng chấm công — không phải nhập tay (xem mục 4).
6. Bấm **Tính lương** → hệ thống tính ra: Lương theo công · Lương tăng ca · Phụ cấp ca đêm · **Tổng thu nhập** · BH trừ NLĐ · Thu nhập chịu/tính thuế · Thuế TNCN · **THỰC LĨNH** · Tổng chi phí DN.
7. Kiểm tra tab **Chi tiết** (các dòng thu nhập & khấu trừ).
8. Bấm **Chốt** khi đúng. *(Cần sửa lại → **Về nháp**.)*
9. Bấm **In phiếu lương** → PDF (kèm khối "Chấm công kỳ này" + đọc số tiền thành chữ).

**Đúng luật tự động (không phải khai tay):** BHXH 8% · BHYT 1,5% · BHTN 1% (NLĐ trừ 10,5%); trần BHXH/BHYT 46,8tr & BHTN 99,2tr tự áp; thuế TNCN **lũy tiến 7 bậc**; giảm trừ 11tr + 4,4tr/người phụ thuộc; phần chênh tăng ca & ca đêm **tự tách miễn thuế** (đúng Thông tư 111).

> ⚠️ Lương chính lấy từ hồ sơ nhân viên. Nhân viên nước ngoài / không cư trú: xem **mục 12**.

---

## 2. Bảng kê & Xuất file (ngân hàng · thuế · BHXH)

**Mục đích:** Kết xuất file chuyển khoản lương + bảng kê thuế/BHXH cho cả kỳ.

**Đường dẫn:** **Tiền lương → Bảng kê & Xuất file →** chọn **File chuyển khoản NH** / **Bảng kê thuế TNCN** / **Bảng kê BHXH**

**Các bước:**
1. Chọn loại bảng kê (theo menu trên).
2. Chọn kỳ: **Từ ngày** – **Đến ngày**.
3. Bấm **Xuất Excel** → tải file:
   - `File_chuyen_khoan_luong_MM_YYYY.xlsx` — danh sách chuyển khoản thực lĩnh.
   - `Bang_ke_thue_TNCN_MM_YYYY.xlsx` — bảng kê thuế TNCN.
   - `Bang_ke_BHXH_MM_YYYY.xlsx` — bảng kê đóng BHXH.

> Chỉ tổng hợp các phiếu lương đã **Tính**/Chốt trong kỳ.

---

## 3. Kê khai điện tử (Thuế TNCN & BHXH)

**Mục đích:** Lập tờ khai theo **mẫu chính thức** rồi kết xuất Excel để nhập HTKK / phần mềm BHXH.

**Đường dẫn:** **Kê khai điện tử → Tờ khai thuế TNCN** (hoặc **Tờ khai BHXH**)

**Các bước:**
1. Bấm **Mới** → chọn **Từ ngày** – **Đến ngày** (kỳ kê khai).
2. Bấm **Tổng hợp từ phiếu lương** → hệ thống kéo các phiếu lương đã tính trong kỳ → tự điền chi tiết + chỉ tiêu.
3. Kiểm tab **Chi tiết** (từng cá nhân).
4. Bấm **Kết xuất Excel** → tải file theo mẫu chính thức:
   - **Thuế TNCN:** 2 sheet — **05-KK-TNCN** (tờ khai khấu trừ, chỉ tiêu [16]–[31]) + **05-1-BK-TNCN** (bảng kê chi tiết từng người).
   - **BHXH:** 2 sheet — **D02-LT** (mẫu chính thức QĐ 1040/QĐ-BHXH) + **Số tiền đóng** (đối chiếu nội bộ).
5. Bấm **Lập tờ khai** → trạng thái *Đã lập*.
6. Nộp qua HTKK / phần mềm BHXH (ký số). Xong → **Đánh dấu đã nộp** + nhập **Mã giao dịch / Mã tờ khai** & **Ngày nộp**.

> Quy trình trạng thái: **Nháp → Đã lập → Đã nộp**. Tách rõ cá nhân **cư trú / không cư trú** tự động.

---

## 4. Chấm công ca kíp & tăng ca

**Mục đích:** Lập bảng công tháng (ngày công + tăng ca 150/200/300% + ca đêm) → đẩy vào lương.

**Đường dẫn:** **Chấm công → Bảng chấm công** · **Tạo từ Chấm công Odoo** · **Cấu hình → Ca làm việc**

### Cách A — Tự động từ Chấm công Odoo *(khuyến nghị)*
1. Nhân viên chấm công vào/ra hằng ngày bằng app **Chấm công** của Odoo.
2. Cuối kỳ: **Chấm công → Tạo từ Chấm công Odoo** → chọn **Từ ngày**–**Đến ngày** (+ **Phòng ban** nếu muốn) → bấm **Tạo / Cập nhật**.
   → Hệ thống sinh **Bảng chấm công** cho mọi nhân viên có dữ liệu vào/ra, **tự tính**: ngày công + tăng ca + ca đêm.
3. Rà soát, chỉnh tay nếu cần → bấm **Tạo / cập nhật phiếu lương** → vào engine tính lương.

**Cách phân loại tăng ca** (theo Lịch làm việc của nhân viên):
- Ngày làm việc thường, giờ **vượt định mức/ngày** → **TC 150%**.
- Ngày **nghỉ tuần** (ngoài lịch) → toàn bộ giờ → **TC 200%**.
- Ngày **Nghỉ chung** (lễ/Tết khai trong Lịch làm việc) → toàn bộ giờ → **TC 300%**.
- Giờ trong khung **22h–6h** → **ca đêm**.

### Cách B — Từng nhân viên
Mở/tạo một **Bảng chấm công** → bấm **Lấy từ Chấm công Odoo** (hoặc nhập tay Ngày công + Giờ TC) → **Tạo / cập nhật phiếu lương**.

**Chuẩn bị:** mỗi nhân viên cần có **Lịch làm việc** (giờ/ngày + ngày làm trong tuần); **ngày lễ** khai ở mục *Nghỉ chung* của Lịch làm việc để tự tính 300%.

> ⚠️ Trước khi chốt lương, rà các lượt **quên check-out** (làm tăng ca bị thổi phồng) và sửa lại bản ghi chấm công.

---

## 5. Máy chấm công & Lương sản phẩm

**Đường dẫn:** **Chấm công → Máy chấm công · Nhập từ máy chấm công · Xử lý ra bảng công** · **Tiền lương → Lương sản phẩm**

**Máy chấm công:**
1. **Chấm công → Máy chấm công** → khai báo máy (tên, hãng, serial, vị trí, IP).
2. Gắn **mã chấm công** cho nhân viên trên hồ sơ.
3. **Nhập từ máy chấm công** → nạp tệp dữ liệu (CSV) → ra **Dữ liệu chấm công thô**.
4. **Xử lý ra bảng công** → tự khớp mã → nhân viên, ra ngày công/tăng ca/ca đêm.

**Lương sản phẩm/khoán:**
1. Khai **Đơn giá sản phẩm** (Tiền lương → Lương sản phẩm → Đơn giá sản phẩm).
2. Tạo **Phiếu sản lượng**: chọn nhân viên + kỳ → thêm dòng (sản phẩm/công đoạn × số lượng × đơn giá) → **Chốt**.
3. Bấm **Đẩy vào phiếu lương** → cộng vào *Lương sản phẩm/khoán* của phiếu lương.

---

## 6. Cổng nhân viên (ESS)

**Mục đích:** Nhân viên tự xem phiếu lương / bảng công và xin nghỉ online — không cần lên phòng nhân sự.

**Thiết lập (HR làm 1 lần/nhân viên):**
- Tạo **Người dùng Cổng (Portal)** cho nhân viên và gắn vào hồ sơ (trường *Người dùng liên kết* trên hồ sơ nhân viên).

**Nhân viên sử dụng:** đăng nhập cổng web → trang chủ có 3 ô:
- **Phiếu lương** — xem chi tiết theo nhóm (thu nhập / khấu trừ / thực lĩnh) + **Tải PDF**.
- **Bảng chấm công** — ngày công, tăng ca, ca làm việc theo kỳ.
- **Nghỉ phép** — xem lịch sử + **Nộp đơn xin nghỉ** (chọn loại nghỉ, từ–đến ngày, lý do) → vào hàng chờ duyệt của quản lý.

> 🔒 Bảo mật: mỗi nhân viên **chỉ thấy dữ liệu của chính mình**.

---

## 7. Báo cáo tổng hợp

**Mục đích:** Phân tích bằng số liệu — bảng Pivot + biểu đồ tương tác, kéo-thả chiều, xuất Excel.

**Đường dẫn:** **Báo cáo →** Quỹ lương · Nhân sự & cơ cấu · Chấm công & tăng ca · An toàn & sức khỏe (Sự cố / Khám sức khỏe) · Tuyển dụng & đánh giá (Phễu / Kết quả)

**Cách dùng (chung cho mọi báo cáo):**
1. Mở báo cáo → mặc định hiển thị **Pivot**. Chuyển **Biểu đồ** bằng nút đổi khung nhìn.
2. **Kéo-thả chiều phân tích**: bấm `+` ở hàng/cột để gộp theo phòng ban, kỳ (tháng), ca, ngành…
3. Chọn **đo lường** (Measures): tổng thu nhập, BHXH, thuế, thực lĩnh, ngày công, giờ TC…
4. Bấm **Xuất Excel** để lấy bảng ra ngoài.

| Báo cáo | Đo lường chính | Chiều gợi ý |
|---|---|---|
| **Quỹ lương** | gross, BHXH, thuế, thực lĩnh, chi phí DN | phòng ban × tháng |
| **Nhân sự & cơ cấu** | số lao động | phòng ban × trong nước/nước ngoài |
| **Chấm công & tăng ca** | ngày công, tổng giờ TC, ca đêm | phòng ban × tháng |
| **Sự cố lao động** | ngày nghỉ do tai nạn | mức độ × trạng thái |
| **Khám sức khỏe** | số lượt | phòng ban × phân loại |
| **Phễu tuyển dụng** | điểm TB | giai đoạn × nguồn |

---

## 8. Đánh giá hiệu suất (KPI / OKR)

**Đường dẫn:** **Đánh giá hiệu suất →** Đợt đánh giá · Phiếu đánh giá · Mục tiêu (OKR)

### Đánh giá KPI theo đợt
1. **Đợt đánh giá → Mới** → đặt tên + kỳ → bấm **Tạo phiếu đánh giá** → sinh phiếu cho toàn bộ nhân viên (tự gán người đánh giá theo quản lý).
2. Mỗi **Phiếu đánh giá**: **Bắt đầu** → nhân viên **tự đánh giá** → **Gửi tự đánh giá** → quản lý đánh giá → **Hoàn tất**. Hệ thống ra **điểm tổng** + **xếp loại** (Xuất sắc / Tốt / Khá / Đạt / Chưa đạt).
3. Khi xong toàn đợt → **Hoàn tất đợt**.

### Mục tiêu OKR
1. **Mục tiêu (OKR) → Mới** → chọn **cấp** (cá nhân / phòng ban / công ty) + kỳ.
2. Thêm **Kết quả then chốt (KR)**: tên, chỉ tiêu, giá trị hiện tại, đơn vị → **tiến độ tự tính**; trạng thái (đúng tiến độ / rủi ro / hoàn thành).
3. Khi đạt → **Đóng mục tiêu**.

---

## 9. Đào tạo (LMS) & An toàn lao động (EHS)

**Đường dẫn:** **Đào tạo & ATLĐ →** Khóa đào tạo · Lớp đào tạo · Khám sức khỏe · Sự cố / Tai nạn LĐ

**Đào tạo & cấp chứng chỉ:**
1. **Khóa đào tạo → Mới**: tên, loại (ATLĐ, PCCC, hội nhập…), thời lượng, **bắt buộc?**, **hiệu lực (tháng)**, loại chứng chỉ cấp.
2. **Lớp đào tạo → Mới**: chọn khóa, ngày, giảng viên, địa điểm, danh sách học viên → **Xác nhận**.
3. Sau buổi học: nhập **kết quả** từng học viên (đạt/không, điểm) → bấm **Hoàn thành (cấp chứng chỉ)** → hệ thống **tự cấp chứng chỉ** cho người *đạt* (kèm hạn → tự cảnh báo khi sắp hết hạn).

**Khám sức khỏe định kỳ:** ghi đợt khám (cơ sở, phân loại sức khỏe, đủ/không đủ điều kiện làm việc, **hạn khám kế tiếp**) → hệ thống cảnh báo khi **quá hạn**.

**Sự cố / Tai nạn lao động:** ghi nhận (mức độ, người liên quan, mô tả, nguyên nhân, biện pháp khắc phục) → **Điều tra** → **Đóng**.

---

## 10. Kho tri thức + Trợ lý AI

**Đường dẫn:** **Kho tri thức →** Bài viết · Hỏi Trợ lý AI · Cấu hình (Danh mục · Thẻ · Cấu hình Trợ lý AI)

**Soạn tài liệu:**
1. **Bài viết → Mới**: tiêu đề, danh mục, thẻ, **Tóm tắt ngắn**, nội dung (soạn thảo phong phú).
2. Bấm **Đăng** → bài hiển thị cho nhân viên tra cứu qua Cổng.

**Hỏi Trợ lý AI:** **Kho tri thức → Hỏi Trợ lý AI** → nhập câu hỏi → **Hỏi** → trợ lý tìm trong kho (RAG) + trả lời, kèm **nguồn (bài viết tham chiếu)**.

**Cấu hình AI (quản trị):** **Cấu hình → Cấu hình Trợ lý AI** → **Bật** + nhập **API key** (tương thích OpenAI), model, số tài liệu tham chiếu (top_k).
> Không có API key vẫn **tra cứu được tài liệu liên quan**; chỉ phần *sinh câu trả lời bằng AI* mới cần key.

---

## 11. Tuyển dụng (ATS)

**Đường dẫn:** **Tuyển dụng →** Yêu cầu tuyển dụng · Ứng viên · Cấu hình → Giai đoạn

1. **Yêu cầu tuyển dụng → Mới**: vị trí cần tuyển, phòng ban, số lượng, khoảng lương, lý do → **Gửi duyệt** → **Duyệt**.
2. **Ứng viên** (bảng **kanban** theo giai đoạn): thêm ứng viên (họ tên, email, SĐT, CCCD, nguồn, CV) → **kéo-thả** qua các giai đoạn: *Mới → Sàng lọc CV → Phỏng vấn → Đề nghị → Trúng tuyển / Từ chối*.
3. Tab **Đánh giá phỏng vấn**: hội đồng chấm 4 tiêu chí (chuyên môn / giao tiếp / thái độ / phù hợp văn hóa) → **điểm TB** hiện trên thẻ.
4. Ứng viên trúng tuyển → bấm **Tạo nhân viên** → tạo hồ sơ nhân viên (prefill tên/email/CCCD), liên kết về phiếu ứng viên.

---

## 12. Nhân viên nước ngoài

**Hồ sơ:** mở **Hồ sơ nhân viên → tab "Thông tin Việt Nam" → nhóm "Người nước ngoài"** → bật **Người nước ngoài** rồi khai:
- **Quốc tịch** · **Số hộ chiếu**
- **Số giấy phép lao động** + **GPLĐ hết hạn**
- **Visa / Thẻ tạm trú hết hạn**
- **Tình trạng cư trú (thuế):** *Cá nhân cư trú* hoặc *Không cư trú*

**Cảnh báo hết hạn:** hệ thống **tự tạo việc cần làm** nhắc gia hạn khi GPLĐ / visa còn **≤ 60 ngày** (cron chạy hằng ngày).

**Tính lương tự đúng quy định** (cờ tự lấy lên phiếu lương):
- Người nước ngoài **không đóng BHTN** → trừ **9,5%** thay vì 10,5%.
- **Cá nhân cư trú** (≥183 ngày): thuế TNCN **lũy tiến** + giảm trừ gia cảnh.
- **Không cư trú** (dưới 183 ngày): thuế **20% cố định**, **không** giảm trừ.

---

## Phần lõi (mã nguồn mở, miễn phí)
Hồ sơ nhân sự Việt Nam · Đơn vị hành chính 2025 · Chứng chỉ nhân viên · Chấm công & nghỉ phép cơ bản — xem phần đầu trang Hướng dẫn sử dụng.

> Hỗ trợ: **info@bsdinsight.com** · https://bsdinsight.com
