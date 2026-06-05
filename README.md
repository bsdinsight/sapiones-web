# Sapiones — Landing Page

Trang giới thiệu sản phẩm **Sapiones** — phần mềm quản trị nhân sự cho doanh nghiệp sản xuất Việt Nam. Sản phẩm của [BSD](https://bsdinsight.com).

Static site (HTML/CSS thuần, không cần build) — deploy qua **Cloudflare Pages** → `sapiones.com`.

## Cấu trúc
- `index.html` — landing page (CSS nhúng, responsive)
- `assets/` — logo (PNG ngang, icon vuông, SVG vector)

## Deploy (Cloudflare Pages)
1. Workers & Pages → Create → Pages → **Connect to Git** → chọn repo này.
2. Build settings: Framework preset = **None**, Build command = *(để trống)*, Output directory = `/`.
3. Deploy → tự build & lên CDN. Mỗi lần `git push` sẽ tự deploy lại.
4. **Custom domains** → thêm `sapiones.com` và `www.sapiones.com` (zone đã ở trong Cloudflare nên DNS tự cấu hình).

## Liên kết
- Demo sản phẩm: https://demo.sapiones.com
- BSD: https://bsdinsight.com

© 2026 BSD.
