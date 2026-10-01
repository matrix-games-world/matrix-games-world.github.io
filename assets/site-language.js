(function(){
"use strict";
const KEY="matrixGamesLanguage";
const BRAND="Matrix Games: The World";
const C={
 ar:{
  search:"🔍 ابحث عن لعبة أو اسم...",admin:"لوحة الأدمن ⚙️",login:"تسجيل الدخول 🎮",logout:"خروج",
  hero:"اكتشف أكثر من 300 لعبة مجانية والعب مباشرة من المتصفح — أكشن، رياضة، ألغاز، رعب، مغامرات وألعاب لاعبين.",games:"🎮 كل الألعاب",
  back:"← رجوع",save:"💾 حفظ التقدم",full:"ملء الشاشة ⛶",related:"ألعاب مشابهة",gameNow:"اللعبة الآن",details:"تفاصيل اللعبة",favorite:"المفضلة",
  loginTitle:"تسجيل دخول عالم Matrix Games: The World",loginHint:"بعد تسجيل الدخول، بعض ميزات الموقع يمكن ربطها بحسابك.",
  register:"إنشاء حساب لاعب جديد",switchIn:"تمتلك حسابًا بالفعل؟ تسجيل دخول",switchOut:"لا تملك حسابًا؟ إنشاء حساب لاعب جديد",or:"أو",
  about:"عن Matrix Games",docs:"التوثيق والمساعدة",legal:"الخصوصية والاستخدام",community:"الموقع والخدمات",
  desc:"Matrix Games: The World منصة ألعاب مجانية تعمل مباشرة من المتصفح، وتجمع ألعابًا محلية وألعابًا يضيفها مدير الموقع.",
  how:"ابحث عن لعبة، اختر تصنيفًا، افتح اللعبة مباشرة، واستخدم المفضلة لتسهيل الوصول للألعاب التي تحبها.",
  account:"تسجيل الدخول اختياري لبعض وظائف الموقع. قد تُستخدم خدمات Firebase لتسجيل الحسابات وقياس الاستخدام.",
  privacy:"نستخدم Firebase Authentication وFirebase Analytics في بعض وظائف الموقع. لا تضع معلومات حساسة داخل الألعاب أو الحسابات.",
  rights:"حقوق أسماء الألعاب والرسومات والمحتوى تبقى لأصحابها الأصليين حيثما ينطبق. عند وجود مشكلة حقوق، استخدم قنوات التواصل الموجودة بالموقع.",
  terms:"الموقع مخصص للترفيه، وقد تتغير الألعاب أو تتوقف بعض الخدمات أو الروابط دون إشعار مسبق.",
  howTitle:"كيفية استخدام الموقع",faq:"الأسئلة الشائعة",map:"خريطة الموقع",searchConsole:"Google Search Console",analytics:"إحصائيات الموقع",top:"العودة للأعلى ↑",updated:"آخر تحديث:",note:"Matrix Games: The World — تجربة ألعاب خفيفة وسريعة، مع واجهة عربية وإنجليزية وإمكانية تطوير الموقع باستمرار.",
  language:"اللغة"
 },
 en:{
  search:"🔍 Search for a game or title...",admin:"Admin Panel ⚙️",login:"Sign in 🎮",logout:"Log out",
  hero:"Discover 300+ free games and play directly in your browser — action, sports, puzzles, horror, adventures, and 2-player games.",games:"🎮 All Games",
  back:"← Back",save:"💾 Save Progress",full:"Fullscreen ⛶",related:"Similar Games",gameNow:"Now Playing",details:"Game Details",favorite:"Favorites",
  loginTitle:"Sign in to Matrix Games: The World",loginHint:"Signing in is optional for some site features.",
  register:"Create a player account",switchIn:"Already have an account? Sign in",switchOut:"New here? Create a player account",or:"OR",
  about:"About Matrix Games",docs:"Documentation & Help",legal:"Privacy & Terms",community:"Site & Services",
  desc:"Matrix Games: The World is a free browser gaming site with local games and games added by the site administrator.",
  how:"Search for a game, choose a category, open it directly, and use favorites to keep track of games you like.",
  account:"Sign-in is optional for some features. Firebase services may be used for account authentication and usage analytics.",
  privacy:"Some site features use Firebase Authentication and Firebase Analytics. Do not place sensitive information inside games or account fields.",
  rights:"Game names, artwork, and third-party content remain with their respective owners where applicable. For rights issues, use the contact channels shown on the site.",
  terms:"The site is provided for entertainment. Games, links, and features may change or become unavailable without prior notice.",
  howTitle:"How to use the site",faq:"FAQ",map:"Site map",searchConsole:"Google Search Console",analytics:"Site Analytics",top:"Back to top ↑",updated:"Last updated:",note:"Matrix Games: The World — a fast, lightweight gaming experience with Arabic and English UI that can keep evolving.",
  language:"Language"
 }
};
function get(){return localStorage.getItem(KEY)==="en"?"en":"ar";}
function txt(s,v){const e=document.querySelector(s);if(e)e.textContent=v;}
function ensureStyle(){
 if(document.getElementById("matrix-lang-style"))return;
 const s=document.createElement("style");s.id="matrix-lang-style";
 s.textContent="#matrix-language-switcher{position:relative;z-index:900;display:flex;align-items:center;justify-content:center;gap:6px;width:100%;padding:7px 10px;background:rgba(3,10,3,.94);border-bottom:1px solid rgba(0,255,102,.24);border-top:1px solid rgba(0,255,102,.08);box-shadow:0 4px 14px rgba(0,0,0,.22);direction:ltr}#matrix-language-switcher button{border:1px solid #315b38;background:#102011;color:#dfffe8;border-radius:999px;padding:7px 10px;cursor:pointer;font-weight:900;font-size:11px}#matrix-language-switcher button.active,#matrix-language-switcher button:hover{background:#00ff66;color:#010301;border-color:#00ff66}#matrix-language-switcher span{color:#9bb39b;font-size:10px;font-weight:800}.matrix-footer{margin-top:40px;border-top:2px solid rgba(0,255,102,.24);background:linear-gradient(180deg,#050c05,#020502);color:#b9c9b9;text-align:right}.matrix-footer-inner{max-width:1250px;margin:0 auto;padding:38px 25px 18px}.matrix-footer-grid{display:grid;grid-template-columns:1.35fr 1fr 1fr 1fr;gap:20px}.matrix-footer-card{padding:16px;border:1px solid #163216;border-radius:14px;background:rgba(7,18,7,.72)}.matrix-footer h3{margin:0 0 11px;color:#00ff66;font-size:16px}.matrix-footer p,.matrix-footer li{color:#91a391;font-size:12px;line-height:1.9;margin:0 0 8px}.matrix-footer ul{list-style:none;padding:0;margin:0}.matrix-footer a{color:#cfe8cf;text-decoration:none}.matrix-footer a:hover{color:#00ff66}.matrix-footer-note{margin-top:18px;padding:16px;border:1px solid #183818;border-radius:14px;background:#061006}.matrix-footer-bottom{display:flex;justify-content:space-between;align-items:center;gap:15px;flex-wrap:wrap;padding-top:18px;margin-top:18px;border-top:1px solid #153015;color:#6f846f;font-size:11px}.matrix-footer-bottom a{color:#9db89d}@media(max-width:900px){.matrix-footer-grid{grid-template-columns:repeat(2,1fr)}}@media(max-width:600px){#matrix-language-switcher{padding:6px 8px}#matrix-language-switcher span{display:none}.matrix-footer-inner{padding:30px 14px 16px}.matrix-footer-grid{grid-template-columns:1fr}}html[dir=ltr] .matrix-footer{text-align:left}";
 document.head.appendChild(s);
}
function ensureSwitcher(){
 if(document.getElementById("matrix-language-switcher"))return;
 const box=document.createElement("div");box.id="matrix-language-switcher";
 box.innerHTML="<span data-lang-label></span><button type='button' data-lang='ar'>العربية</button><button type='button' data-lang='en'>EN</button>";
 box.querySelectorAll("button").forEach(function(b){b.onclick=function(){apply(b.getAttribute("data-lang"));};});
 const anchor=document.querySelector(".top-header"); if(anchor && anchor.parentNode) anchor.parentNode.insertBefore(box,anchor.nextSibling); else document.body.insertBefore(box,document.body.firstChild);
}
function ensureFooter(){
 if(document.getElementById("matrix-footer"))return;
 const f=document.createElement("footer");f.id="matrix-footer";f.className="matrix-footer";
 f.innerHTML="<div class='matrix-footer-inner'><div class='matrix-footer-grid'>"+
 "<section class='matrix-footer-card'><h3 data-k='about'></h3><p data-k='desc'></p><p data-k='how'></p><p data-k='account'></p></section>"+
 "<section class='matrix-footer-card'><h3 data-k='docs'></h3><ul><li><a href='#matrix-docs' data-k='howTitle'></a></li><li><a href='#matrix-docs' data-k='faq'></a></li><li><a href='#matrix-footer' data-k='map'></a></li><li><a href='#all-games-title' data-k='games'></a></li></ul></section>"+
 "<section class='matrix-footer-card'><h3 data-k='legal'></h3><p data-k='privacy'></p><p data-k='rights'></p><p data-k='terms'></p></section>"+
 "<section class='matrix-footer-card'><h3 data-k='community'></h3><ul><li><a target='_blank' rel='noopener' href='https://search.google.com/search-console' data-k='searchConsole'></a></li><li><a target='_blank' rel='noopener' href='https://console.firebase.google.com/project/matrix-database-b13f3/analytics/dashboard' data-k='analytics'></a></li><li><a href='#top' data-k='top'></a></li></ul><p>© <span id='matrix-footer-year'></span> Matrix Games: The World</p></section>"+
 "</div><div id='matrix-docs' class='matrix-footer-note'><h3 data-k='howTitle'></h3><p data-k='how'></p><p data-k='privacy'></p><p data-k='terms'></p><p data-k='rights'></p><p><span data-k='updated'></span> <span id='matrix-footer-date'></span></p><p style='color:#6f846f' data-k='note'></p></div><div class='matrix-footer-bottom'><span>Matrix Games: The World</span><a href='#top' data-k='top'></a></div></div>";
 document.body.appendChild(f);
 const y=document.getElementById("matrix-footer-year");if(y)y.textContent=new Date().getFullYear();
 const d=document.getElementById("matrix-footer-date");if(d)d.textContent=new Intl.DateTimeFormat("en-GB").format(new Date());
}
function apply(next){
 const l=next==="en"?"en":"ar",c=C[l];localStorage.setItem(KEY,l);
 document.documentElement.lang=l;document.documentElement.dir=l==="en"?"ltr":"rtl";
 ensureStyle();ensureSwitcher();ensureFooter();
 const btn=document.getElementById("matrix-language-switcher");
 if(btn){btn.querySelector("[data-lang-label]").textContent=c.language;btn.querySelectorAll("button").forEach(x=>x.classList.toggle("active",x.getAttribute("data-lang")===l));}
 txt("#search-input",c.search);const si=document.getElementById("search-input");if(si)si.placeholder=c.search;
 txt("#admin-panel-btn",c.admin);txt("#auth-btn-trigger",c.login);txt("#logout-btn",c.logout);txt("#game-auth-btn",c.login);txt("#game-logout-btn",c.logout);
 txt("#hero-title","Matrix Games: The World");txt("#hero-subtitle",c.hero);txt("#all-games-title",c.games);
 const back=document.querySelector("#game-screen .game-back-btn");if(back)back.textContent=c.back;
 const sv=document.getElementById("game-save-btn");if(sv)sv.textContent=c.save;
 const pl=document.getElementById("game-player-label");if(pl)pl.textContent=c.gameNow;
 const rt=document.getElementById("related-games-title");if(rt)rt.textContent=c.related;
 const di=document.querySelector(".game-info-label span");if(di)di.textContent=c.details;
 const fav=document.getElementById("game-favorite-page-btn");if(fav){const active=fav.classList.contains("active");fav.textContent=active?"★ "+c.favorite:"☆ "+c.favorite;}
 const fu=document.querySelector("#game-screen .full-btn");if(fu)fu.textContent=c.full;
 const lh=document.querySelector("#login-panel h3");if(lh)lh.textContent=c.loginTitle;
 const li=document.querySelector("#login-panel > div");if(li)li.textContent=c.loginHint;
 const rh=document.querySelector("#register-panel h3");if(rh)rh.textContent=c.register;
 const toggles=document.querySelectorAll(".toggle-link");if(toggles[0])toggles[0].textContent=c.switchOut;if(toggles[1])toggles[1].textContent=c.switchIn;
 document.querySelectorAll(".category-chip").forEach(function(n){if((n.textContent||"").trim()==="الكل"||(n.textContent||"").trim()==="All")n.textContent=l==="en"?"All":"الكل";});
 document.querySelectorAll(".section-head button").forEach(function(n){if((n.textContent||"").trim()==="عرض الكل"||(n.textContent||"").trim()==="View all")n.textContent=l==="en"?"View all":"عرض الكل";});
 document.querySelectorAll("[data-k]").forEach(function(n){const k=n.getAttribute("data-k");if(c[k]!=null)n.textContent=c[k];});
 const nav=document.querySelectorAll(".admin-nav"),ar=["📊 نظرة عامة","➕ إضافة لعبة","🎮 إدارة الألعاب","🎨 تصميم الموقع","⏳ شاشة تحميل اللعبة","📊 الإحصائيات","⚙️ إعدادات الموقع","🧰 أدوات المدير"],en=["📊 Overview","➕ Add game","🎮 Manage games","🎨 Site design","⏳ Game loading","📊 Analytics","⚙️ Settings","🧰 Tools"],a=l==="en"?en:ar;nav.forEach(function(n,i){if(a[i])n.textContent=a[i];});
}
window.MatrixLanguage={set:apply,get:get};
function boot(){ensureStyle();ensureSwitcher();ensureFooter();apply(get());}
if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",boot,{once:true});else boot();
})();