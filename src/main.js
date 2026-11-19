import './style.css';

/* EDIT HERE
   - techConfirmed: set to true only for technologies you have confirmed in your own project code.
   - live / repo: add your demo and GitHub repository links.
   - role: add short sentences about what YOU did on the project, e.g. role: ["Designed the interface", "..."].
   - features: add a list of {t:"Feature name"} for projects where the feature list is still empty. */
var GH = "https://github.com/Akshathanayak988-hue";
var PROJECTS = [
  {
    id: "medicare", theme: "med", kicker: "Healthcare · Accessibility",
    title: "MediCare – Rural Healthcare Assistance Platform",
    display: ["MediCare", "Rural Healthcare Assistance Platform"],
    status: "Completed", inProgress: false,
    description: "A platform designed to connect rural communities with efficient medical assistance and improve access to healthcare services.",
    problem: "Rural communities need efficient medical assistance and better access to healthcare services.",
    purpose: "To connect rural communities with efficient medical assistance and improve access to healthcare services.",
    techConfirmed: false,
    tech: ["HTML","CSS","JavaScript","Python","Flask","SQLite"],
    points: ["Connect rural communities with efficient medical assistance","Improve access to healthcare services"],
    features: [], role: [], live: "", repo: ""
  },
  {
    id: "skills-portal", theme: "emp", kicker: "Skills · Employment",
    title: "Local Skill Development and Employment Portal",
    display: ["Local Skill Development", "and Employment Portal"],
    status: "Currently working on", inProgress: true,
    description: "A platform designed to connect local job seekers with employment opportunities based on their skills. It aims to encourage skill development and improve access to local employment opportunities.",
    problem: "Local job seekers need a way to reach employment opportunities that match their skills.",
    purpose: "To connect local job seekers with employment opportunities based on their skills, encourage skill development and improve access to local employment opportunities.",
    techConfirmed: false,
    tech: ["HTML","CSS","JavaScript","Python","Flask","MySQL"],
    points: ["Connect local job seekers with employment opportunities based on their skills","Encourage skill development","Improve access to local employment opportunities"],
    features: [], role: [], live: "", repo: ""
  },
  {
    id: "first-aid", theme: "aid", kicker: "First aid · Emergency · Vision",
    title: "Intelligent Visual First Aid and Emergency Assistance System",
    display: ["Intelligent Visual First Aid", "and Emergency Assistance System"],
    status: "Completed", inProgress: false,
    description: "An intelligent first-aid assistance system that scans wounds, provides voice-based first-aid instructions, and shares live-location alerts with family members during emergencies. The aim is to make immediate first-aid guidance more accessible.",
    problem: "Immediate first-aid guidance is not always easy to access when an emergency happens.",
    purpose: "To make immediate first-aid guidance more accessible during emergencies.",
    techConfirmed: false,
    tech: ["Python","OpenCV","HTML","CSS","JavaScript","Text-to-Speech","Geolocation API"],
    points: ["Scans wounds","Gives voice-based first-aid instructions","Shares live-location alerts with family members during emergencies","Makes immediate first-aid guidance more accessible"],
    objectives: ["Make immediate first-aid guidance more accessible"],
    features: [
      {t:"Scans wounds", i:"scan"},
      {t:"Gives voice-based first-aid instructions", i:"voice"},
      {t:"Shares live-location alerts with family members during emergencies", i:"pin"}
    ],
    role: [], live: "", repo: ""
  }
];

/* ---------- Illustrations (inline SVG, one per project) ---------- */
function dots(){var s="";for(var x=15;x<480;x+=30)for(var y=15;y<360;y+=30)s+='<circle cx="'+x+'" cy="'+y+'" r="1.2"/>';return '<g fill="#F7F5EF" opacity=".13">'+s+'</g>';}
var SV='<svg class="art art-%K" viewBox="0 0 480 360" preserveAspectRatio="xMidYMid slice" aria-hidden="true" focusable="false">';
var ART = {
  med: function(){
    return SV.replace("%K","med")+
    '<rect width="480" height="360" fill="#121513"/>'+
    '<circle class="a-sun" cx="240" cy="200" r="150" fill="#9CAF88" opacity=".08"/>'+
    '<path d="M142 214A98 98 0 0 1 338 214" fill="none" stroke="#9CAF88" stroke-opacity=".85" stroke-width="1.6" stroke-linecap="round"/>'+
    '<g class="a-sway"><path d="M338 140C336 126 342 112 358 106C360 120 352 134 338 140Z" fill="#8FA67E"/><path d="M341 138C352 128 364 126 372 118C372 134 358 142 341 138Z" fill="#7F9870"/><path d="M338 142C340 150 342 156 344 162" stroke="#8FA67E" stroke-width="1.6" fill="none" stroke-linecap="round"/></g>'+
    '<g class="a-bob">'+
    '<path d="M162 236V214A22 18 0 0 1 200 204V236Z" fill="#F7F5EF"/><path d="M318 236V214A22 18 0 0 0 280 204V236Z" fill="#F7F5EF"/>'+
    '<circle cx="197" cy="178" r="13" fill="#F7F5EF"/><circle cx="283" cy="178" r="13" fill="#F7F5EF"/><circle cx="240" cy="158" r="19" fill="#F7F5EF"/>'+
    '<path d="M203 238V210A37 24 0 0 1 277 210V238L240 252Z" fill="#F7F5EF"/>'+
    '<g class="a-cross"><rect x="236" y="199" width="8" height="20" rx="1" fill="#3F5A3A"/><rect x="230" y="205" width="20" height="8" rx="1" fill="#3F5A3A"/></g>'+
    '</g>'+
    '<g><path d="M178 206C181 224 191 236 207 242L238 254V284C222 272 200 264 184 246C175 235 174 220 178 206Z" fill="#8FA67E"/><path d="M196 234C212 228 228 232 238 246V254C224 244 208 240 196 234Z" fill="#A6B995"/></g>'+
    '<g transform="matrix(-1 0 0 1 480 0)"><path d="M178 206C181 224 191 236 207 242L238 254V284C222 272 200 264 184 246C175 235 174 220 178 206Z" fill="#8FA67E"/><path d="M196 234C212 228 228 232 238 246V254C224 244 208 240 196 234Z" fill="#A6B995"/></g>'+
    '</svg>';
  },
  emp: function(){
    function card(x,y,hot){return '<g><rect x="'+x+'" y="'+y+'" width="104" height="60" rx="10" fill="#F7F5EF" stroke="#171717" stroke-opacity=".16"/><circle cx="'+(x+20)+'" cy="'+(y+20)+'" r="8" fill="#9CAF88"/><rect x="'+(x+36)+'" y="'+(y+15)+'" width="52" height="5" rx="2.5" fill="#171717" opacity=".75"/><rect x="'+(x+36)+'" y="'+(y+25)+'" width="34" height="4" rx="2" fill="#171717" opacity=".25"/><rect x="'+(x+14)+'" y="'+(y+42)+'" width="78" height="4" rx="2" fill="#171717" opacity=".15"/>'+(hot?'<circle cx="'+(x+98)+'" cy="'+(y+4)+'" r="5" fill="#E8412C"/>':'')+'</g>';}
    var nodes=[[310,135],[165,139],[310,225],[162,221]].map(function(n,k){return '<circle class="a-node" style="--i:'+k+'" cx="'+n[0]+'" cy="'+n[1]+'" r="5" fill="#171717" opacity=".8"/>';}).join("");
    return SV.replace("%K","emp")+
    '<rect width="480" height="360" fill="#E9EDDF"/>'+
    '<circle cx="240" cy="180" r="150" fill="none" stroke="#9CAF88" stroke-width="1" opacity=".6"/>'+
    '<circle cx="240" cy="180" r="100" fill="none" stroke="#9CAF88" stroke-width="1" opacity=".55" stroke-dasharray="3 7"/>'+
    '<g class="a-links" stroke="#171717" stroke-opacity=".4" stroke-width="1.5" fill="none" stroke-dasharray="4 7" stroke-linecap="round"><path d="M240 180L382 88"/><path d="M240 180L88 98"/><path d="M240 180L382 270"/><path d="M240 180L84 262"/></g>'+
    card(330,58,true)+card(36,68,false)+card(330,240,false)+
    '<rect x="36" y="248" width="96" height="28" rx="14" fill="#9CAF88"/><rect x="52" y="260" width="64" height="4" rx="2" fill="#F7F5EF"/>'+
    '<rect x="52" y="286" width="72" height="26" rx="13" fill="#F7F5EF" stroke="#9CAF88"/><rect x="66" y="297" width="44" height="4" rx="2" fill="#9CAF88"/>'+
    nodes+
    '<circle class="a-core" cx="240" cy="180" r="48" fill="#9CAF88"/><circle cx="240" cy="167" r="13" fill="#F7F5EF"/><path d="M215 207Q215 186 240 186Q265 186 265 207Z" fill="#F7F5EF"/>'+
    '</svg>';
  },
  aid: function(){
    var bars="";[14,28,18,38,24,34,16,26,12].forEach(function(h,k){bars+='<rect class="a-bar" style="--i:'+k+'" x="'+(188+k*12)+'" y="'+(318-h)+'" width="6" height="'+h+'" rx="3" fill="#F7F5EF" opacity=".85"/>';});
    return SV.replace("%K","aid")+
    '<rect width="480" height="360" fill="#121312"/>'+dots()+
    '<rect x="150" y="62" width="180" height="196" fill="#1B1D1A"/>'+
    '<rect x="164" y="118" width="152" height="78" rx="39" fill="#2B2D29" transform="rotate(-12 240 157)"/>'+
    '<ellipse cx="244" cy="156" rx="24" ry="16" fill="#E8412C" opacity=".88" transform="rotate(-12 244 156)"/>'+
    '<rect class="a-box" x="204" y="126" width="80" height="60" fill="none" stroke="#9CAF88" stroke-width="2" stroke-dasharray="6 5"/>'+
    '<path d="M150 88V62h26M304 62h26v26M330 232v26h-26M176 258h-26v-26" fill="none" stroke="#F7F5EF" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>'+
    '<rect class="a-scan" x="150" y="62" width="180" height="2" fill="#9CAF88"/>'+
    bars+
    '<path d="M330 160C350 160 366 130 386 118" fill="none" stroke="#9CAF88" stroke-width="1.5" stroke-dasharray="3 5"/>'+
    '<ellipse class="a-ring" style="--i:0" cx="402" cy="142" rx="12" ry="4.5" fill="none" stroke="#E8412C" stroke-width="2"/>'+
    '<ellipse class="a-ring" style="--i:1" cx="402" cy="142" rx="12" ry="4.5" fill="none" stroke="#E8412C" stroke-width="2"/>'+
    '<path d="M402 142C388 124 384 118 384 110A18 18 0 0 1 420 110C420 118 416 124 402 142Z" fill="#E8412C"/><circle cx="402" cy="110" r="6" fill="#121312"/>'+
    '<path d="M402 152V186" stroke="#F7F5EF" stroke-opacity=".5" stroke-width="1.5" stroke-dasharray="3 4"/>'+
    '<circle cx="388" cy="204" r="8" fill="none" stroke="#F7F5EF" stroke-opacity=".7" stroke-width="1.5"/><circle cx="416" cy="204" r="8" fill="none" stroke="#F7F5EF" stroke-opacity=".7" stroke-width="1.5"/>'+
    '</svg>';
  }
};
var ICON = {
  scan:'<svg viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 11V6a2 2 0 0 1 2-2h5M21 4h5a2 2 0 0 1 2 2v5M28 21v5a2 2 0 0 1-2 2h-5M11 28H6a2 2 0 0 1-2-2v-5"/><path d="M8 16h16"/></svg>',
  voice:'<svg viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><path d="M6 13v6M11 9v14M16 5v22M21 10v12M26 14v4"/></svg>',
  pin:'<svg viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M16 29s9-8.2 9-15a9 9 0 0 0-18 0c0 6.8 9 15 9 15z"/><circle cx="16" cy="14" r="3.2"/></svg>'
};

function esc(s){return String(s).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;");}
function pad(n){return (n<10?"0":"")+n;}

/* ---------- Project cards ---------- */
var root = document.getElementById("project-list");
PROJECTS.forEach(function (p, i) {
  var a = document.createElement("a");
  a.className = "proj";
  a.href = "#project-" + p.id;
  a.setAttribute("aria-label", "Open project: " + p.title);
  a.innerHTML =
    '<div class="proj-media">' + ART[p.theme]() + '<span class="proj-no">' + pad(i + 1) + '</span></div>' +
    '<div class="proj-info">' +
      '<div class="proj-top"><span class="status' + (p.inProgress ? " wip" : "") + '">' + esc(p.status) + '</span><span class="proj-kick">' + esc(p.kicker) + '</span></div>' +
      '<h3>' + esc(p.title) + '</h3>' +
      '<p class="proj-prev">' + esc(p.description) + '</p>' +
      '<span class="proj-cta">View project <span class="arr" aria-hidden="true">→</span></span>' +
    '</div>';
  root.appendChild(a);
});

(function () {
  var reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
  var el = document.getElementById("typed");
  if (el && !reduce) {
    var words = ["Aspiring Software Developer", "Computer Science Engineering Student"], i = 0, n = 0, del = false;
    (function tick() {
      var w = words[i];
      if (!del && n < w.length) { n++; el.textContent = w.slice(0, n); setTimeout(tick, 70); }
      else if (!del) { del = true; setTimeout(tick, 1500); }
      else if (n > 0) { n--; el.textContent = w.slice(0, n); setTimeout(tick, 35); }
      else { del = false; i = (i + 1) % words.length; setTimeout(tick, 200); }
    })();
  }
  var items = document.querySelectorAll("section .wrap > *");
  if (reduce || !("IntersectionObserver" in window)) { items.forEach(function (x) { x.classList.add("in"); }); }
  else {
    var io0 = new IntersectionObserver(function (es) {
      es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add("in"); io0.unobserve(e.target); } });
    }, { rootMargin: "0px 0px -60px 0px" });
    items.forEach(function (x) { x.classList.add("rv"); io0.observe(x); });
  }
  document.getElementById("theme").onclick = function () {
    var r = document.documentElement;
    var cur = r.dataset.theme || (matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark");
    r.dataset.theme = cur === "light" ? "dark" : "light";
  };

  /* ---------- Project detail page ---------- */
  var pd = document.getElementById("pd"), scroller = document.getElementById("pd-scroll"), body = document.getElementById("pd-body");
  var cards = Array.prototype.slice.call(document.querySelectorAll(".proj"));
  var current = -1, hist = false, last = null, io = null, closeT = null;
  var WAVE = '<svg class="pd-wave" viewBox="0 0 1440 80" preserveAspectRatio="none" aria-hidden="true"><path d="M0 40C240 90 480 0 720 40S1200 80 1440 30V80H0Z" fill="#F7F5EF"/></svg>';

  function titleHTML(p) {
    var k = 0;
    var lines = p.display.map(function (line, li) {
      var ws = line.split(" ").map(function (w) { return '<span class="wd"><span style="--i:' + (k++) + '">' + esc(w) + '</span></span>'; }).join(" ");
      return '<span class="' + (li ? "l2" : "l1") + '">' + ws + '</span>';
    }).join("");
    return '<h2 class="pd-title" id="pd-title" aria-label="' + esc(p.title) + '"><span aria-hidden="true">' + lines + '</span></h2>';
  }
  function wrap(cls, inner) { return '<div class="pd-sec ' + cls + '"><div class="pd-wrap">' + inner + '</div></div>'; }
  function pill(p) { return '<span class="pd-pill' + (p.inProgress ? " wip" : "") + '">' + esc(p.status) + '</span>'; }

  function render(i) {
    var p = PROJECTS[i], n = PROJECTS.length, nx = PROJECTS[(i + 1) % n];
    pd.classList.remove("t-med", "t-emp", "t-aid"); pd.classList.add("t-" + p.theme);
    var objs = (p.objectives || p.points).map(function (t, k) {
      return '<li class="pr" style="--d:' + k + '"><span class="no"></span><p>' + esc(t) + '</p></li>';
    }).join("");
    var feats = p.features && p.features.length
      ? '<ul class="pd-feats">' + p.features.map(function (f, k) {
          return '<li class="pr" style="--d:' + k + '">' + (f.i ? '<span class="ic">' + ICON[f.i] + '</span>' : '') + '<p>' + esc(f.t) + '</p></li>';
        }).join("") + '</ul>'
      : '<p class="pd-ph pr">Main features: to be added</p>';
    var chips = p.tech.map(function (t) { return "<li>" + esc(t) + "</li>"; }).join("");
    var role = p.role && p.role.length
      ? '<ul class="pd-role-list pr">' + p.role.map(function (r) { return "<li>" + esc(r) + "</li>"; }).join("") + '</ul>'
      : '<p class="pd-ph pr">My role and contributions: to be added</p>';
    var links = (p.live ? '<a class="pd-btn" href="' + esc(p.live) + '" target="_blank" rel="noopener">Live demo ↗</a>' : '<span class="pd-phpill">Live demo: to be added</span>') +
      (p.repo ? '<a class="pd-btn" href="' + esc(p.repo) + '" target="_blank" rel="noopener">Source code ↗</a>' : '<span class="pd-phpill">Source code: to be added</span>') +
      '<a class="pd-btn pri" href="' + GH + '" target="_blank" rel="noopener">GitHub profile ↗</a>';

    body.innerHTML =
      '<div class="pd-bar"><div class="pd-wrap pd-bar-in">' +
        '<button class="pd-back" type="button" data-back><span class="ar" aria-hidden="true">←</span> Back to projects</button>' +
        '<span class="pd-count">' + pad(i + 1) + ' / ' + pad(n) + '</span></div><div class="pd-prog" id="pd-prog"></div></div>' +
      '<header class="pd-hero"><div class="pd-wrap pd-hero-grid">' +
        '<div class="pd-hero-text">' +
          '<p class="pd-kicker st" style="--d:0"><span>' + pad(i + 1) + '</span><i></i><span>' + esc(p.kicker) + '</span></p>' +
          titleHTML(p) +
          '<p class="pd-intro st" style="--d:4">' + esc(p.description) + '</p>' +
          '<div class="pd-meta st" style="--d:5">' + pill(p) + '</div>' +
        '</div>' +
        '<div class="pd-art st" style="--d:2">' + ART[p.theme]() + '</div>' +
      '</div>' + (p.theme === "med" ? WAVE : "") + '</header>' +
      '<div class="pd-main">' +
        wrap("pd-ps",
          '<div class="pd-block pr"><h3 class="pd-label">The problem</h3><p class="pd-lead">' + esc(p.problem) + '</p></div>' +
          '<div class="pd-block pd-b2 pr" style="--d:1"><h3 class="pd-label">Purpose</h3><p class="pd-lead">' + esc(p.purpose) + '</p></div>') +
        wrap("pd-obj", '<h3 class="pd-label pr">Objectives</h3><ol class="pd-objs">' + objs + '</ol>') +
        wrap("pd-feat", '<h3 class="pd-label pr">Main features</h3>' + feats) +
        wrap("pd-tech", '<h3 class="pd-label pr">Technologies used</h3><ul class="pd-chips pr' + (p.techConfirmed ? " ok" : "") + '">' + chips + '</ul><p class="pd-note pr">' + (p.techConfirmed ? "Built with these technologies." : "Technologies: to be confirmed") + '</p>') +
        wrap("pd-role", '<h3 class="pd-label pr">My role &amp; contributions</h3>' + role) +
        wrap("pd-links", '<h3 class="pd-label pr">Status &amp; links</h3><div class="pd-statusrow pr">' + pill(p) + '</div><div class="pd-links pr">' + links + '</div>') +
      '</div>' +
      '<div class="pd-end"><div class="pd-wrap">' +
        '<button class="pd-back" type="button" data-back><span class="ar" aria-hidden="true">←</span> Back to projects</button>' +
        '<button class="pd-next" type="button" data-next><span class="lb">Next project · ' + pad(((i + 1) % n) + 1) + ' / ' + pad(n) + '</span><span class="nm">' + esc(nx.title) + '</span><span class="ar" aria-hidden="true">→</span></button>' +
      '</div></div>';

    /* scroll reveals + progress bar */
    if (io) io.disconnect();
    var prs = body.querySelectorAll(".pr");
    if ("IntersectionObserver" in window && !reduce) {
      io = new IntersectionObserver(function (es) {
        es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } });
      }, { root: scroller, rootMargin: "0px 0px -6% 0px", threshold: 0.05 });
      prs.forEach(function (x) { io.observe(x); });
    } else { prs.forEach(function (x) { x.classList.add("in"); }); }
    updateProg();
  }
  function updateProg() {
    var b = document.getElementById("pd-prog"); if (!b) return;
    var m = scroller.scrollHeight - scroller.clientHeight;
    b.style.transform = "scaleX(" + (m > 0 ? scroller.scrollTop / m : 0) + ")";
  }
  scroller.addEventListener("scroll", updateProg, { passive: true });

  function setInert(v) {
    document.querySelectorAll("header.top, main, footer").forEach(function (x) { if (v) x.setAttribute("inert", ""); else x.removeAttribute("inert"); });
  }
  function idxFromHash() {
    var m = /^#project-(.+)$/.exec(location.hash || "");
    if (!m) return -1;
    for (var k = 0; k < PROJECTS.length; k++) if (PROJECTS[k].id === m[1]) return k;
    return -1;
  }
  function center(k) { var r = cards[k].getBoundingClientRect(); return [r.left + r.width / 2, r.top + r.height / 2]; }
  function setOrigin(x, y) { pd.style.setProperty("--ox", x + "px"); pd.style.setProperty("--oy", y + "px"); }

  function openProject(i, ox, oy, fromPop) {
    if (current > -1) { swapTo(i, fromPop); return; }
    clearTimeout(closeT);
    last = document.activeElement; current = i;
    scroller.classList.remove("go", "out");
    render(i); scroller.scrollTop = 0;
    setOrigin(ox, oy);
    pd.setAttribute("aria-hidden", "false"); document.body.classList.add("lock"); setInert(true);
    if (!fromPop) { try { history.pushState({ p: 1 }, "", "#project-" + PROJECTS[i].id); hist = true; } catch (e) { hist = false; } }
    else hist = true;
    void pd.offsetWidth;
    pd.classList.add("open");
    requestAnimationFrame(function () { requestAnimationFrame(function () { scroller.classList.add("go"); }); });
    setTimeout(function () { pd.focus({ preventScroll: true }); }, 60);
  }
  function swapTo(i, fromPop) {
    if (i === current) return;
    scroller.classList.add("out");
    setTimeout(function () {
      current = i;
      scroller.classList.remove("go");
      render(i); scroller.scrollTop = 0;
      if (!fromPop) { try { history.replaceState({ p: 1 }, "", "#project-" + PROJECTS[i].id); } catch (e) {} }
      void scroller.offsetWidth;
      scroller.classList.remove("out");
      requestAnimationFrame(function () { requestAnimationFrame(function () { scroller.classList.add("go"); }); });
    }, 300);
  }
  function hide() {
    if (current < 0) return;
    var c = center(current); setOrigin(c[0], c[1]);
    pd.classList.remove("open"); pd.setAttribute("aria-hidden", "true");
    document.body.classList.remove("lock"); setInert(false);
    var done = current; current = -1; hist = false;
    closeT = setTimeout(function () { scroller.classList.remove("go", "out"); body.innerHTML = ""; }, 950);
    if (cards[done]) { try { cards[done].focus({ preventScroll: true }); } catch (e) {} }
  }
  function closeProject() {
    if (current < 0) return;
    if (hist) { try { history.back(); return; } catch (e) {} }
    var wasHash = idxFromHash() > -1;
    hide();
    if (wasHash) { try { history.replaceState(null, "", location.pathname + location.search); } catch (e) {} }
  }

  pd.addEventListener("click", function (e) {
    if (e.target.closest("[data-back]")) closeProject();
    else if (e.target.closest("[data-next]")) openProject((current + 1) % PROJECTS.length, 0, 0);
  });
  addEventListener("keydown", function (e) { if (e.key === "Escape" && current > -1) closeProject(); });
  addEventListener("popstate", function () {
    var k = idxFromHash();
    if (k > -1) {
      var c = center(k);
      if (current === -1) openProject(k, c[0], c[1], true); else swapTo(k, true);
    } else if (current > -1) hide();
  });

  cards.forEach(function (c, k) {
    c.addEventListener("click", function (e) {
      if (e.metaKey || e.ctrlKey || e.shiftKey || e.button === 1) return;
      e.preventDefault();
      var x = e.clientX, y = e.clientY;
      if (!x && !y) { var ct = center(k); x = ct[0]; y = ct[1]; }
      openProject(k, x, y);
    });
  });
  var h0 = idxFromHash();
  if (h0 > -1) { var c0 = [innerWidth / 2, innerHeight / 2]; openProject(h0, c0[0], c0[1], true); }

  var bar = document.getElementById("prog");
  function sp() { var h = document.documentElement, m = h.scrollHeight - h.clientHeight; bar.style.transform = "scaleX(" + (m > 0 ? h.scrollTop / m : 0) + ")"; }
  addEventListener("scroll", sp, { passive: true }); sp();
  var hero = document.querySelector(".hero");
  if (!reduce) hero.addEventListener("pointermove", function (e) {
    var r = hero.getBoundingClientRect();
    hero.style.setProperty("--mx", (e.clientX - r.left) + "px");
    hero.style.setProperty("--my", (e.clientY - r.top) + "px");
  });
  document.getElementById("viewproj").addEventListener("click", function () {
    cards.forEach(function (c, k) {
      setTimeout(function () {
        c.classList.add("pulse");
        setTimeout(function () { c.classList.remove("pulse"); }, 800);
      }, 600 + k * 220);
    });
  });
})();
