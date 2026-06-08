const pptxgen = require("pptxgenjs");
const pres = new pptxgen();
pres.layout = "LAYOUT_WIDE";          // 13.3 x 7.5 in
pres.author = "BSD";
pres.title = "Sapiones — Giới thiệu";

const W = 13.3, H = 7.5;
const INDIGO="4F46E5", CYAN="06B6D4", INK="0F172A", SLATE="475569", MUTE="94A3B8",
      PURPLE="7C3AED", SOFT="F8FAFC", LINE="E2E8F0", GREEN="059669", GREENBG="ECFDF5",
      RED="EF4444", WHITE="FFFFFF";
const GRAD = __dirname + "/grad-bg.png";
let R, O;
const sh = () => ({ type:"outer", color:"0F172A", blur:9, offset:2, angle:135, opacity:0.10 });

function card(s,x,y,w,h,o={}){
  s.addShape(R,{x,y,w,h,fill:{color:o.fill||WHITE},line:{color:o.line||LINE,width:o.lw??1},rectRadius:0.1,shadow:o.shadow===false?undefined:sh()});
}
function circle(s,x,y,d,color,label,fs){
  s.addShape(O,{x,y,w:d,h:d,fill:{color}});
  s.addText(label,{x,y,w:d,h:d,align:"center",valign:"middle",fontSize:fs,bold:true,color:WHITE,fontFace:"Calibri",margin:0});
}
function title(s,t,sub){
  s.addText(t,{x:0.6,y:0.42,w:12.1,h:0.7,fontSize:31,bold:true,color:INK,fontFace:"Calibri",margin:0});
  if(sub) s.addText(sub,{x:0.62,y:1.12,w:12,h:0.4,fontSize:15,color:MUTE,fontFace:"Calibri",margin:0});
}
function modRow(s,x,y,w,n,t,d,color){
  circle(s,x,y,0.55,color,String(n),18);
  s.addText([{text:t,options:{bold:true,fontSize:16,color:INK,breakLine:true}},
             {text:d,options:{fontSize:12.5,color:SLATE}}],
    {x:x+0.78,y:y-0.06,w:w-0.78,h:0.95,fontFace:"Calibri",valign:"top",margin:0,paraSpaceAfter:2});
}
function pill(s,x,y,w,h,text,bg,fg){
  s.addShape(R,{x,y,w,h,fill:{color:bg},rectRadius:h/2,line:{type:"none"}});
  s.addText(text,{x,y,w,h,align:"center",valign:"middle",fontSize:12.5,bold:true,color:fg,fontFace:"Calibri",margin:0});
}

(async () => {
R = pres.shapes.ROUNDED_RECTANGLE; O = pres.shapes.OVAL;

/* ---------- S1 Cover ---------- */
let s = pres.addSlide();
s.background = { path: GRAD };
s.addShape(R,{x:0.9,y:2.25,w:1.0,h:1.0,fill:{color:WHITE},rectRadius:0.16});
s.addText("S",{x:0.9,y:2.2,w:1.0,h:1.0,align:"center",valign:"middle",fontSize:48,bold:true,color:INDIGO,fontFace:"Calibri",margin:0});
s.addText("Sapiones",{x:2.05,y:2.18,w:8,h:1.1,fontSize:52,bold:true,color:WHITE,fontFace:"Calibri",valign:"middle",margin:0});
s.addText("Quản trị Nhân sự & Tiền lương cho doanh nghiệp sản xuất Việt Nam",
  {x:0.92,y:3.55,w:11.4,h:0.95,fontSize:23,bold:true,color:WHITE,fontFace:"Calibri",margin:0});
s.addText("Đúng luật  ·  Trên nền Odoo Community 19  ·  Sản phẩm của BSD",
  {x:0.94,y:4.62,w:11,h:0.4,fontSize:14.5,color:"E0E7FF",fontFace:"Calibri",margin:0});
pill(s,0.94,5.25,5.5,0.55,"✓  Miễn phí tới 30 nhân viên — không giới hạn thời gian",WHITE,GREEN);

/* ---------- S2 Problem ---------- */
s = pres.addSlide(); s.background={color:WHITE};
title(s,"Bài toán nhân sự của nhà máy Việt Nam");
const probs=[
 ["1","Tính lương cực phức tạp","BHXH, thuế TNCN, tăng ca, ca đêm — phải đúng luật và luật đổi liên tục."],
 ["2","Lao động lớn, nhiều ca","Hàng trăm–nghìn công nhân, 3 ca 4 kíp, biến động nhân sự cao."],
 ["3","Tuân thủ & kê khai nặng","BHXH, thuế TNCN, ATLĐ, biểu mẫu — sai là bị phạt."],
 ["4","Phần mềm rời rạc","Chấm công, lương, đánh giá… mỗi thứ một nơi, không nối liền."],
];
let px=[0.6,6.9], py=[1.65,4.25];
probs.forEach((p,i)=>{ const x=px[i%2], y=py[Math.floor(i/2)]; card(s,x,y,5.8,2.4);
  circle(s,x+0.35,y+0.35,0.6,RED,p[0],20);
  s.addText(p[1],{x:x+1.15,y:y+0.32,w:4.4,h:0.6,fontSize:18,bold:true,color:INK,fontFace:"Calibri",valign:"middle",margin:0});
  s.addText(p[2],{x:x+0.4,y:y+1.15,w:5.0,h:1.1,fontSize:14,color:SLATE,fontFace:"Calibri",valign:"top",margin:0});
});

/* ---------- S3 Solution ---------- */
s = pres.addSlide(); s.background={color:WHITE};
title(s,"Giải pháp: Sapiones — HCM all-in-one cho sản xuất","Một hệ thống đúng luật Việt Nam, nối liền từ chấm công đến tính lương, kê khai, đánh giá và AI.");
const vals=[
 ["Đúng luật & sản xuất","Tính lương BHXH/thuế chuẩn, ca kíp – tăng ca, máy chấm công, ATLĐ."],
 ["Nối liền một mạch","Chấm công → lương → kê khai → cổng nhân viên → đánh giá → tri thức."],
 ["Mở & on-premise","Mã nguồn mở phần lõi, chủ quyền dữ liệu, miễn phí tới 30 nhân viên."],
];
vals.forEach((v,i)=>{ const y=1.85+i*1.55; circle(s,0.7,y,0.5,CYAN,"✓",16);
  s.addText([{text:v[0],options:{bold:true,fontSize:17,color:INK,breakLine:true}},
             {text:v[1],options:{fontSize:13.5,color:SLATE}}],
    {x:1.45,y:y-0.05,w:5.7,h:1.3,fontFace:"Calibri",valign:"top",margin:0,paraSpaceAfter:2});
});
const stats=[["30","nhân viên dùng miễn phí",GREEN],["10","phân hệ nghiệp vụ",INDIGO],["1","nền tảng nối liền",PURPLE]];
stats.forEach((st,i)=>{ const y=1.7+i*1.65; card(s,7.7,y,5.0,1.45,{fill:SOFT});
  s.addText(st[0],{x:7.95,y:y+0.12,w:1.5,h:1.2,fontSize:46,bold:true,color:st[2],fontFace:"Calibri",valign:"middle",margin:0});
  s.addText(st[1],{x:9.5,y:y+0.12,w:3.0,h:1.2,fontSize:15,bold:true,color:SLATE,fontFace:"Calibri",valign:"middle",margin:0});
});

/* ---------- S4 Suite overview ---------- */
s = pres.addSlide(); s.background={color:WHITE};
title(s,"Một nền tảng — phủ trọn vòng đời nhân sự");
const suite=[
 ["Hồ sơ & bản địa hóa VN",GREEN,"Free"],
 ["Tính lương Việt Nam",INDIGO],
 ["Chấm công ca kíp & tăng ca",INDIGO],
 ["Máy chấm công & lương SP",INDIGO],
 ["Kê khai điện tử",INDIGO],
 ["Cổng nhân viên (ESS)",INDIGO],
 ["Tuyển dụng (ATS)",INDIGO],
 ["Đánh giá KPI / OKR",PURPLE],
 ["Đào tạo & An toàn lao động",PURPLE],
 ["Kho tri thức + Trợ lý AI",PURPLE],
];
const cx=[0.6,3.06,5.52,7.98,10.44], cyy=[1.7,4.15], cw=2.26, ch=2.3;
suite.forEach((m,i)=>{ const x=cx[i%5], y=cyy[Math.floor(i/5)]; card(s,x,y,cw,ch);
  s.addShape(R,{x:x,y:y,w:0.1,h:ch,fill:{color:m[1]},rectRadius:0,line:{type:"none"}});
  s.addText(m[0],{x:x+0.26,y:y+0.22,w:cw-0.44,h:ch-0.75,fontSize:13,bold:true,color:INK,fontFace:"Calibri",valign:"top",margin:0});
  if(m[2]) pill(s,x+0.26,y+ch-0.45,0.9,0.28,m[2],GREENBG,GREEN);
});

/* ---------- S5 Professional ---------- */
s = pres.addSlide(); s.background={color:WHITE};
title(s,"PROFESSIONAL — Vận hành & Tuân thủ","Cho doanh nghiệp > 30 nhân viên");
const pro=[
 ["Tính lương Việt Nam","Gross→net BHXH + thuế TNCN · phiếu lương PDF · file chuyển khoản · bảng kê thuế & BHXH"],
 ["Chấm công ca kíp & tăng ca","3 ca 4 kíp · tăng ca 150/200/300% + ca đêm (miễn thuế phần chênh)"],
 ["Máy chấm công & lương sản phẩm","Nhập tệp máy vân tay/khuôn mặt → bảng công · lương sản phẩm/khoán"],
 ["Kê khai điện tử","Tờ khai thuế TNCN (05/KK) & BHXH (D02-LT) · kết xuất cho HTKK"],
 ["Cổng nhân viên (ESS)","Phiếu lương, chấm công, xin nghỉ online, tra cứu tri thức — mobile"],
 ["Tuyển dụng (ATS)","Yêu cầu TD + duyệt · pipeline ứng viên · chấm điểm PV · tạo NV từ ứng viên"],
];
pro.forEach((m,i)=> modRow(s,0.7,1.62+i*0.92,12.0,i+1,m[0],m[1],INDIGO));

/* ---------- S6 Enterprise ---------- */
s = pres.addSlide(); s.background={color:WHITE};
title(s,"ENTERPRISE — Tài năng & Trí tuệ","Gồm toàn bộ Professional");
const ent=[
 ["Đánh giá KPI / OKR","Đợt đánh giá → tạo phiếu hàng loạt · KPI trọng số (tự ĐG + quản lý) → xếp loại · mục tiêu OKR + tiến độ"],
 ["Đào tạo (LMS) & An toàn lao động","Khóa/lớp tự cấp chứng chỉ khi hoàn thành (cảnh báo hết hạn) · khám sức khỏe · sự cố/tai nạn LĐ"],
 ["Kho tri thức + Trợ lý AI","Kho tài liệu nội bộ + trợ lý AI hỏi-đáp (RAG) trên kho tri thức; tra cứu qua cổng"],
];
ent.forEach((m,i)=> modRow(s,0.7,1.7+i*1.12,12.0,i+6,m[0],m[1],PURPLE));
card(s,0.7,5.45,12.0,1.5,{fill:SOFT});
s.addText("Nền tảng & triển khai",{x:0.95,y:5.6,w:11,h:0.35,fontSize:14,bold:true,color:INK,fontFace:"Calibri",margin:0});
s.addText([
 {text:"✓ Odoo Community 19 · mã nguồn mở phần lõi      ✓ On-premise (chủ quyền dữ liệu) hoặc cloud",options:{breakLine:true,fontSize:12.5,color:SLATE}},
 {text:"✓ Đa pháp nhân · Hỗ trợ SLA · cập nhật tuân thủ      ✓ Bản quyền ký số offline (hợp nhà máy)",options:{fontSize:12.5,color:SLATE}},
],{x:0.95,y:6.0,w:11.4,h:0.9,fontFace:"Calibri",valign:"top",margin:0,paraSpaceAfter:4});

/* ---------- S7 Why ---------- */
s = pres.addSlide(); s.background={color:WHITE};
title(s,"Vì sao chọn Sapiones");
const why=[
 ["Đúng luật Việt Nam","BHXH, thuế TNCN, tăng ca, kê khai theo quy định mới nhất."],
 ["Sinh ra cho sản xuất","Ca kíp, máy chấm công, lương sản phẩm, ATLĐ."],
 ["All-in-one, nối liền","Chấm công → lương → kê khai → ESS → đánh giá → AI."],
 ["On-premise + mở","Chủ quyền dữ liệu, mã nguồn mở phần lõi."],
 ["AI sẵn sàng","Trợ lý tri thức RAG, mở rộng khi cần."],
];
const wcw=3.95, wch=2.0;
why.forEach((c,i)=>{ let x,y;
  if(i<3){ x=0.6+i*4.05; y=1.65; } else { x=2.62+(i-3)*4.05; y=3.95; }
  card(s,x,y,wcw,wch);
  s.addShape(O,{x:x+0.3,y:y+0.3,w:0.5,h:0.5,fill:{color:i<3?INDIGO:PURPLE}});
  s.addText("✓",{x:x+0.3,y:y+0.28,w:0.5,h:0.5,align:"center",valign:"middle",fontSize:15,bold:true,color:WHITE,fontFace:"Calibri",margin:0});
  s.addText(c[0],{x:x+0.3,y:y+0.95,w:wcw-0.6,h:0.45,fontSize:15.5,bold:true,color:INK,fontFace:"Calibri",valign:"top",margin:0});
  s.addText(c[1],{x:x+0.3,y:y+1.4,w:wcw-0.55,h:0.5,fontSize:11.5,color:SLATE,fontFace:"Calibri",valign:"top",margin:0});
});

/* ---------- S8 Pricing ---------- */
s = pres.addSlide(); s.background={color:WHITE};
title(s,"Mô hình mở — Miễn phí tới 30 nhân viên","Dùng đủ tính năng bằng dữ liệu thật; nâng cấp theo số lao động khi lớn lên.");
const tiers=[
 ["Miễn phí","≤ 30 nhân viên",GREEN,["Đủ mọi tính năng để dùng thử","Mã nguồn mở phần lõi","Dùng bằng dữ liệu thật","On-premise hoặc cloud"]],
 ["Professional","Doanh nghiệp > 30 NV",INDIGO,["Trọn bộ tính năng nghiệp vụ","Lương + phiếu lương + file NH","Ca kíp, máy chấm công, lương SP","Kê khai điện tử + Cổng NV"]],
 ["Enterprise","Nhà máy lớn / đa pháp nhân",PURPLE,["Toàn bộ Professional","Đánh giá KPI/OKR","Đào tạo & ATLĐ · Tri thức + AI","On-premise + SLA + đa pháp nhân"]],
];
tiers.forEach((t,i)=>{ const x=0.6+i*4.12, y=1.95, w=3.85, h=4.45;
  card(s,x,y,w,h,{line:t[2],lw:i===1?2:1});
  s.addShape(R,{x:x,y:y,w:w,h:0.12,fill:{color:t[2]},rectRadius:0,line:{type:"none"}});
  s.addText(t[0],{x:x+0.3,y:y+0.3,w:w-0.6,h:0.5,fontSize:21,bold:true,color:t[2],fontFace:"Calibri",margin:0});
  s.addText(t[1],{x:x+0.3,y:y+0.85,w:w-0.6,h:0.4,fontSize:12.5,color:MUTE,fontFace:"Calibri",margin:0});
  s.addText(t[3].map((b,j)=>({text:b,options:{bullet:{indent:14},fontSize:13,color:SLATE,breakLine:true,paraSpaceAfter:7}})),
    {x:x+0.3,y:y+1.45,w:w-0.55,h:2.8,fontFace:"Calibri",valign:"top",margin:0});
});
s.addText("Bản quyền ký số offline  ·  thuê bao cập nhật tuân thủ  ·  key đánh giá full-seat cho khách lớn",
  {x:0.6,y:6.65,w:12.1,h:0.4,align:"center",fontSize:12.5,italic:true,color:MUTE,fontFace:"Calibri",margin:0});

/* ---------- S9 Demo (dark) ---------- */
s = pres.addSlide(); s.background={color:INK};
s.addText("Trải nghiệm thật ngay hôm nay",{x:0.6,y:0.55,w:12,h:0.7,fontSize:32,bold:true,color:WHITE,fontFace:"Calibri",margin:0});
s.addText("Bản demo đầy đủ đang chạy trực tuyến — xem tận mắt mọi phân hệ.",{x:0.62,y:1.25,w:12,h:0.4,fontSize:15,color:"94A3B8",fontFace:"Calibri",margin:0});
const ds=[["10","phân hệ nghiệp vụ"],["50","nhân viên demo"],["100%","đúng luật VN"],["On-prem","hoặc cloud"]];
ds.forEach((d,i)=>{ const x=0.6+i*3.1; s.addShape(R,{x,y:2.1,w:2.85,h:1.85,fill:{color:"1E293B"},rectRadius:0.12,line:{type:"none"}});
  s.addText(d[0],{x,y:2.3,w:2.85,h:0.95,align:"center",fontSize:40,bold:true,color:CYAN,fontFace:"Calibri",margin:0});
  s.addText(d[1],{x,y:3.3,w:2.85,h:0.5,align:"center",fontSize:13.5,color:"CBD5E1",fontFace:"Calibri",margin:0});
});
s.addText([{text:"🔗  demo.sapiones.com",options:{bold:true,fontSize:26,color:WHITE,breakLine:true}},
           {text:"Đăng nhập: demo / demo",options:{fontSize:16,color:"94A3B8"}}],
  {x:0.6,y:4.6,w:12,h:1.4,align:"center",fontFace:"Calibri",valign:"middle",margin:0,paraSpaceAfter:6});

/* ---------- S10 CTA (gradient) ---------- */
s = pres.addSlide(); s.background={path:GRAD};
s.addText("Sẵn sàng hiện đại hóa quản trị nhân sự?",{x:0.8,y:2.2,w:11.7,h:1.0,fontSize:38,bold:true,color:WHITE,fontFace:"Calibri",align:"center",margin:0});
s.addText("Xem demo trực tiếp tại demo.sapiones.com  (demo / demo)",{x:0.8,y:3.45,w:11.7,h:0.5,fontSize:18,color:"E0E7FF",fontFace:"Calibri",align:"center",margin:0});
pill(s,4.4,4.35,4.5,0.62,"✉  info@bsdinsight.com",WHITE,INDIGO);
s.addText("Sapiones — Sản phẩm của BSD  ·  sapiones.com  ·  bsdinsight.com",{x:0.8,y:5.6,w:11.7,h:0.4,fontSize:13.5,color:"C7D2FE",fontFace:"Calibri",align:"center",margin:0});

await pres.writeFile({ fileName: __dirname + "/Sapiones-pitch.pptx" });
console.log("DECK_WRITTEN");
})();
