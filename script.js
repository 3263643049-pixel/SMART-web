/* ============================================================
   SMART · 杀马特视觉档案
   ------------------------------------------------------------
   Vanilla JS — no frameworks.
   Replace text fields below as you write your thesis content.
============================================================= */

/* ---------- 1. Image metadata ----------
   Each image must match a thumbnail's data-image-id in index.html.
   To add the real image, drop  images/<id>.jpg  into images/.
   If a file is missing, a red placeholder block is shown.
*/
const IMAGE_DATA = {
  // ============ Chapter 1 · 2000s 初 ============
  's1-01': {
    titleZh: '绿皮车厢里的少年', titleEn: 'Boy in the green-skinned train',
    location: '京广铁路 / Beijing-Guangzhou Line',
    year: '2002',
    source: '[来源占位 / source placeholder]',
    descZh: '[描述占位] 18 岁，第一次离开村子。',
    descEn: '[Description placeholder] Age 18, leaving the village for the first time.',
    quoteZh: '"我以为城市的灯都为我亮着。"',
    quoteEn: '"I thought every light in the city was on for me."',
    quoteCite: '— 受访者 A / interviewee A'
  },
  's1-02': {
    titleZh: '宿舍上铺', titleEn: 'Top bunk, dormitory',
    location: '广东东莞 / Dongguan, Guangdong', year: '2003', source: '[占位]',
    descZh: '[描述占位] 工厂宿舍 8 人间，行李是一只编织袋。',
    descEn: '[Placeholder] An 8-bed factory dormitory; the only luggage was a woven nylon bag.',
    quoteZh: '"上铺的灯亮一整夜，我学着不眨眼地睡。"',
    quoteEn: '"The bunk light stayed on all night. I learned to sleep without blinking."',
    quoteCite: '— 受访者 B'
  },
  's1-03': {
    titleZh: '车间合影', titleEn: 'Group photo, factory floor',
    location: '深圳 / Shenzhen', year: '2003', source: '[占位]',
    descZh: '[占位] 工号取代了名字。', descEn: '[Placeholder] Worker IDs replaced names.',
    quoteZh: '"我编号 0742。"', quoteEn: '"My number was 0742."',
    quoteCite: '— 受访者 C'
  },
  's1-04': {
    titleZh: '网吧', titleEn: 'Internet café',
    location: '湖南怀化 / Huaihua, Hunan', year: '2004', source: '[占位]',
    descZh: '[占位] 一小时 1 元，全部用来下载头像。',
    descEn: '[Placeholder] 1 RMB per hour, all spent downloading avatars.',
    quoteZh: '"那是我第一次有个自己的脸。"',
    quoteEn: '"It was the first face I owned."',
    quoteCite: '— 受访者 D'
  },
  's1-05': {
    titleZh: '路边的站台', titleEn: 'A platform on the way',
    location: '湖北 / Hubei', year: '2002', source: '[占位]',
    descZh: '[占位] 站台不只一个方向。',
    descEn: '[Placeholder] A platform faces more than one direction.',
    quoteZh: '"回头的票，比过去贵多了。"',
    quoteEn: '"A ticket home costs more than the past did."',
    quoteCite: '— 受访者 E'
  },

  // ============ Chapter 2 · 2003–2006 ============
  's2-01': {
    titleZh: '理发店里的加冕', titleEn: 'Coronation in a barbershop',
    location: '河南郑州 / Zhengzhou, Henan', year: '2004', source: '[占位]',
    descZh: '[占位] 30 元，染色加造型。', descEn: '[Placeholder] 30 RMB for dye and styling.',
    quoteZh: '"那一瞬间我觉得自己是国王。"',
    quoteEn: '"For that moment I felt like a king."',
    quoteCite: '— 受访者 F'
  },
  's2-02': { titleZh: '镜中', titleEn: 'In the mirror', location: '广州 / Guangzhou', year: '2005', source: '[占位]', descZh: '[占位]', descEn: '[Placeholder]', quoteZh: '"[占位]"', quoteEn: '"[Placeholder]"', quoteCite: '— 受访者 G' },
  's2-03': { titleZh: 'QQ 自拍', titleEn: 'QQ self-portrait', location: '河北 / Hebei', year: '2005', source: '[占位]', descZh: '[占位]', descEn: '[Placeholder]', quoteZh: '"[占位]"', quoteEn: '"[Placeholder]"', quoteCite: '— 受访者 H' },
  's2-04': { titleZh: '出租屋的灯', titleEn: 'Rented-room lamp', location: '东莞 / Dongguan', year: '2006', source: '[占位]', descZh: '[占位]', descEn: '[Placeholder]', quoteZh: '"[占位]"', quoteEn: '"[Placeholder]"', quoteCite: '— 受访者 I' },
  's2-05': { titleZh: '彩色的雨', titleEn: 'Coloured rain', location: '深圳 / Shenzhen', year: '2006', source: '[占位]', descZh: '[占位]', descEn: '[Placeholder]', quoteZh: '"[占位]"', quoteEn: '"[Placeholder]"', quoteCite: '— 受访者 J' },
  's2-06': { titleZh: '双人合影', titleEn: 'Double portrait', location: '广州 / Guangzhou', year: '2006', source: '[占位]', descZh: '[占位]', descEn: '[Placeholder]', quoteZh: '"[占位]"', quoteEn: '"[Placeholder]"', quoteCite: '— 受访者 K' },

  // ============ Chapter 3 · 2007–2010 ============
  's3-01': { titleZh: '"罗氏家族"群签到', titleEn: '"House of Luo" check-in', location: 'QQ 群 / QQ Group', year: '2008', source: '[占位]', descZh: '[占位]', descEn: '[Placeholder]', quoteZh: '"我们彼此点名才存在。"', quoteEn: '"We existed only when we called each other."', quoteCite: '— 受访者 L' },
  's3-02': { titleZh: '家族合影', titleEn: 'Family group photo', location: '广东 / Guangdong', year: '2008', source: '[占位]', descZh: '[占位]', descEn: '[Placeholder]', quoteZh: '"[占位]"', quoteEn: '"[Placeholder]"', quoteCite: '— 受访者 M' },
  's3-03': { titleZh: '街头加冕', titleEn: 'Street coronation', location: '广州 / Guangzhou', year: '2009', source: '[占位]', descZh: '[占位]', descEn: '[Placeholder]', quoteZh: '"[占位]"', quoteEn: '"[Placeholder]"', quoteCite: '— 受访者 N' },
  's3-04': { titleZh: '残血伯爵', titleEn: 'Count of Residual Blood', location: '网络 / Online', year: '2009', source: '[占位]', descZh: '[占位]', descEn: '[Placeholder]', quoteZh: '"[占位]"', quoteEn: '"[Placeholder]"', quoteCite: '— 受访者 O' },
  's3-05': { titleZh: '溜冰场', titleEn: 'Roller-skate rink', location: '深圳 / Shenzhen', year: '2010', source: '[占位]', descZh: '[占位]', descEn: '[Placeholder]', quoteZh: '"[占位]"', quoteEn: '"[Placeholder]"', quoteCite: '— 受访者 P' },
  's3-06': { titleZh: '家训', titleEn: 'Family creed', location: 'QQ', year: '2010', source: '[占位]', descZh: '[占位]', descEn: '[Placeholder]', quoteZh: '"[占位]"', quoteEn: '"[Placeholder]"', quoteCite: '— 受访者 Q' },
  's3-07': { titleZh: '生日', titleEn: 'Birthday', location: '工厂宿舍 / Dormitory', year: '2010', source: '[占位]', descZh: '[占位]', descEn: '[Placeholder]', quoteZh: '"[占位]"', quoteEn: '"[Placeholder]"', quoteCite: '— 受访者 R' },

  // ============ Chapter 4 · 2014→ ============
  's4-01': { titleZh: '"禁止杀马特进入"', titleEn: '"No Shamate allowed"', location: '工厂门口 / Factory gate', year: '2014', source: '[占位]', descZh: '[占位] 告示张贴在保安亭上。', descEn: '[Placeholder] A notice on the guard booth.', quoteZh: '"那一刻我才知道，自己是个名词。"', quoteEn: '"That was the moment I knew — I had become a noun."', quoteCite: '— 受访者 S' },
  's4-02': { titleZh: '剪发后', titleEn: 'After the haircut', location: '广州 / Guangzhou', year: '2015', source: '[占位]', descZh: '[占位]', descEn: '[Placeholder]', quoteZh: '"[占位]"', quoteEn: '"[Placeholder]"', quoteCite: '— 受访者 T' },
  's4-03': { titleZh: '群解散通知', titleEn: 'Group-disbanding notice', location: 'QQ', year: '2015', source: '[占位]', descZh: '[占位]', descEn: '[Placeholder]', quoteZh: '"[占位]"', quoteEn: '"[Placeholder]"', quoteCite: '— 受访者 U' },
  's4-04': { titleZh: '快递站', titleEn: 'Parcel station', location: '深圳 / Shenzhen', year: '2018', source: '[占位]', descZh: '[占位]', descEn: '[Placeholder]', quoteZh: '"[占位]"', quoteEn: '"[Placeholder]"', quoteCite: '— 受访者 V' },
  's4-05': { titleZh: '直播间', titleEn: 'Livestream room', location: '快手 / Kuaishou', year: '2021', source: '[占位]', descZh: '[占位]', descEn: '[Placeholder]', quoteZh: '"[占位]"', quoteEn: '"[Placeholder]"', quoteCite: '— 受访者 W' },
};


/* =================================================================
   2. Build thumbnails (inject .thumb-img + hover-title)
================================================================= */
function buildThumbnails() {
  const thumbs = document.querySelectorAll('.thumb');
  thumbs.forEach((thumb) => {
    const id = thumb.dataset.imageId;
    const data = IMAGE_DATA[id] || {};

    // image layer (auto-fails to placeholder if file is absent)
    const img = document.createElement('div');
    img.className = 'thumb-img';
    const url = `images/${id}.jpg`;
    const probe = new Image();
    probe.onload  = () => { img.style.backgroundImage = `url("${url}")`; };
    probe.onerror = () => { /* keep red placeholder */ };
    probe.src = url;
    thumb.appendChild(img);

    // hover title
    if (data.titleZh || data.titleEn) {
      const cap = document.createElement('div');
      cap.className = 'thumb-hover-title';
      cap.innerHTML =
        `<div>${data.titleZh || ''}</div>
         <div style="opacity:.7;margin-top:2px;font-style:italic">${data.titleEn || ''}</div>`;
      thumb.appendChild(cap);
    }

    // click handler
    thumb.addEventListener('click', () => openImage(thumb, id, data));
  });

  // Build timeline thumbnails (reuse the same source URLs)
  document.querySelectorAll('.t-thumb').forEach((tEl) => {
    const id = tEl.dataset.imageId;
    if (!id) return;
    const url = `images/${id}.jpg`;
    const probe = new Image();
    probe.onload = () => {
      const im = document.createElement('img');
      im.src = url; im.alt = '';
      tEl.appendChild(im);
    };
    probe.onerror = () => {};
    probe.src = url;
  });
}


/* =================================================================
   3. Anchored navigation (smooth scroll for hashes)
================================================================= */
function setupAnchors() {
  document.querySelectorAll('a[href^="#"]').forEach((a) => {
    a.addEventListener('click', (e) => {
      const id = a.getAttribute('href').slice(1);
      const tgt = document.getElementById(id);
      if (!tgt) return;
      e.preventDefault();
      tgt.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });

  document.querySelectorAll('.t-mark').forEach((m) => {
    m.addEventListener('click', (e) => {
      e.preventDefault();
      const id = m.dataset.jump;
      const tgt = document.getElementById(id);
      if (tgt) tgt.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });
}


/* =================================================================
   4. Timeline cursor + active mark + chapter percentages
================================================================= */

function getScroller() {
  return document.getElementById('horizontalStage') || document.scrollingElement || document.documentElement;
}

function setupTimeline() {
  const cursor = document.getElementById('timelineCursor');
  const marks = document.querySelectorAll('.t-mark');
  const chapters = ['ch1', 'ch2', 'ch3', 'ch4'].map((id) => document.getElementById(id));

  // Re-anchor each mark's --at to the chapter's actual scroll position
  function anchorMarks() {
    const max = getScroller().scrollWidth - window.innerWidth;
    chapters.forEach((ch, i) => {
      if (!ch) return;
      const offset = ch.offsetLeft + ch.offsetWidth * 0.18;
      const pct = Math.min(99, (offset / max) * 100);
      const m = marks[i];
      if (m) m.style.setProperty('--at', pct + '%');
    });
  }

  function updateCursor() {
    const max = getScroller().scrollWidth - window.innerWidth;
    const pct = max > 0 ? (getScroller().scrollLeft / max) * 100 : 0;

    // Cursor follows scroll within the timeline padding (32px each side)
    cursor.style.left = `calc(32px + (100% - 64px) * ${pct} / 100)`;

    // Highlight closest section
    const y = getScroller().scrollLeft + window.innerWidth * 0.4;
    let active = -1;
    chapters.forEach((ch, i) => {
      if (ch && y >= ch.offsetLeft) active = i;
    });
    marks.forEach((m, i) => m.classList.toggle('is-active', i === active));
  }

  anchorMarks();
  updateCursor();
  window.addEventListener('scroll', updateCursor, { passive: true });
  window.addEventListener('resize', () => { anchorMarks(); updateCursor(); });
  // re-anchor after fonts load (heights may shift)
  if (document.fonts && document.fonts.ready) {
    document.fonts.ready.then(() => { anchorMarks(); updateCursor(); });
  }
  // and once everything is loaded
  window.addEventListener('load', () => { anchorMarks(); updateCursor(); });
}


/* =================================================================
   5. Lightbox / overlay (FLIP-style smooth zoom, simmondsltd-feel)
================================================================= */
const overlayState = {
  open: false,
  thumb: null,
  rect: null,
};

function getOverlayTargetRect() {
  const padTop = 80;
  const padLeft = 56;
  const metaW = Math.min(window.innerWidth * 0.38, 520);
  const targetWidth  = window.innerWidth - metaW - padLeft - 32;
  const targetHeight = window.innerHeight - padTop - 56;
  return {
    left: padLeft,
    top: padTop,
    width: targetWidth,
    height: targetHeight,
  };
}

function openImage(thumb, id, data) {
  if (overlayState.open) return;
  overlayState.open = true;
  overlayState.thumb = thumb;

  const overlay      = document.getElementById('overlay');
  const wrap         = document.getElementById('overlayImageWrap');
  const img          = document.getElementById('overlayImage');
  const placeholder  = document.getElementById('overlayPlaceholder');
  const caption      = document.getElementById('overlayCaption');

  const rect = thumb.getBoundingClientRect();
  overlayState.rect = rect;

  // Match starting rect to thumb
  wrap.style.transition = 'none';
  wrap.style.left   = rect.left   + 'px';
  wrap.style.top    = rect.top    + 'px';
  wrap.style.width  = rect.width  + 'px';
  wrap.style.height = rect.height + 'px';

  // image source
  const src = `images/${id}.jpg`;
  img.classList.remove('is-loaded');
  img.src = '';
  const probe = new Image();
  probe.onload  = () => { img.src = src; img.classList.add('is-loaded'); };
  probe.onerror = () => { /* keep placeholder */ };
  probe.src = src;

  // placeholder color from thumb (the --ph red)
  const cs = getComputedStyle(thumb);
  placeholder.style.background = cs.backgroundColor;

  // caption
  caption.textContent = `№ ${id.toUpperCase()}`;

  // populate metadata
  document.getElementById('metaNum').textContent      = id.toUpperCase();
  document.getElementById('metaTitleZh').textContent  = data.titleZh  || '[标题占位]';
  document.getElementById('metaTitleEn').textContent  = data.titleEn  || '[Title placeholder]';
  document.getElementById('metaLocation').textContent = data.location || '—';
  document.getElementById('metaYear').textContent     = data.year     || '—';
  document.getElementById('metaSource').textContent   = data.source   || '—';
  document.getElementById('metaDescZh').textContent   = data.descZh   || '[中文描述占位]';
  document.getElementById('metaDescEn').textContent   = data.descEn   || '[English description placeholder]';
  document.getElementById('metaQuoteZh').textContent  = data.quoteZh  || '"[访谈引语占位]"';
  document.getElementById('metaQuoteEn').textContent  = data.quoteEn  || '"[Interview quote placeholder]"';
  document.getElementById('metaQuoteCite').textContent= data.quoteCite|| '— 受访者 / interviewee';

  // open overlay
  overlay.classList.add('is-open');
  overlay.setAttribute('aria-hidden', 'false');

  // hide thumb (so it doesn't peek behind)
  thumb.classList.add('thumb-hidden');

  // force reflow then animate to target
  void wrap.offsetWidth;
  const target = getOverlayTargetRect();
  wrap.style.transition = 'left 0.75s var(--ease), top 0.75s var(--ease), width 0.75s var(--ease), height 0.75s var(--ease)';
  wrap.style.left   = target.left   + 'px';
  wrap.style.top    = target.top    + 'px';
  wrap.style.width  = target.width  + 'px';
  wrap.style.height = target.height + 'px';

  document.body.style.overflow = 'hidden';
}

function closeImage() {
  if (!overlayState.open) return;
  const overlay  = document.getElementById('overlay');
  const wrap     = document.getElementById('overlayImageWrap');
  const img      = document.getElementById('overlayImage');
  const thumb    = overlayState.thumb;

  // Recompute rect (in case layout changed)
  const rect = thumb.getBoundingClientRect();

  wrap.style.transition = 'left 0.65s var(--ease), top 0.65s var(--ease), width 0.65s var(--ease), height 0.65s var(--ease)';
  wrap.style.left   = rect.left   + 'px';
  wrap.style.top    = rect.top    + 'px';
  wrap.style.width  = rect.width  + 'px';
  wrap.style.height = rect.height + 'px';

  img.classList.remove('is-loaded');

  overlay.classList.remove('is-open');
  overlay.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';

  setTimeout(() => {
    if (thumb) thumb.classList.remove('thumb-hidden');
    overlayState.open = false;
    overlayState.thumb = null;
    img.src = '';
  }, 700);
}

function setupOverlay() {
  document.getElementById('overlayClose').addEventListener('click', closeImage);
  document.querySelector('.overlay-bg').addEventListener('click', closeImage);

  // Click on the expanded image itself also closes (simmondsltd-style)
  document.getElementById('overlayImageWrap').addEventListener('click', (e) => {
    if (e.target.closest('.overlay-meta')) return;
    closeImage();
  });

  // Esc to close
  window.addEventListener('keydown', (e) => {
    if (overlayState.open && e.key === 'Escape') closeImage();
  });

  // Re-anchor target rect on resize
  window.addEventListener('resize', () => {
    if (!overlayState.open) return;
    const wrap   = document.getElementById('overlayImageWrap');
    const target = getOverlayTargetRect();
    wrap.style.transition = 'left 0.4s var(--ease), top 0.4s var(--ease), width 0.4s var(--ease), height 0.4s var(--ease)';
    wrap.style.left   = target.left   + 'px';
    wrap.style.top    = target.top    + 'px';
    wrap.style.width  = target.width  + 'px';
    wrap.style.height = target.height + 'px';
  });
}


/* =================================================================
   6. Language toggle (中 / EN)
   ------------------------------------------------------------------
   Pattern:
   • Elements that should swap their text content carry BOTH
     `data-zh` and `data-en` attributes. JS replaces innerHTML.
   • Elements that exist only in one language carry the class
     `lang-zh-only` or `lang-en-only`. CSS hides the opposite via
     body[data-lang] selectors (defined in style.css).
   • Default language is Chinese; choice is persisted in localStorage.
================================================================= */
const LANG_STORAGE_KEY = 'smart-lang';

function applyLang(lang) {
  if (lang !== 'zh' && lang !== 'en') lang = 'zh';
  document.documentElement.lang = (lang === 'zh') ? 'zh-CN' : 'en';
  document.body.dataset.lang = lang;

  // text-swap elements (must have both attributes)
  document.querySelectorAll('[data-zh][data-en]').forEach((el) => {
    const txt = el.getAttribute('data-' + lang);
    if (txt !== null) el.innerHTML = txt;
  });
}

function setupLanguage() {
  const btn = document.getElementById('langToggle');
  if (!btn) return;

  let stored = null;
  try { stored = localStorage.getItem(LANG_STORAGE_KEY); } catch (e) {}
  applyLang(stored === 'en' ? 'en' : 'zh');

  btn.addEventListener('click', () => {
    const next = document.body.dataset.lang === 'zh' ? 'en' : 'zh';
    applyLang(next);
    try { localStorage.setItem(LANG_STORAGE_KEY, next); } catch (e) {}
  });
}


/* =================================================================
   7. Boot
================================================================= */
function boot() {
  buildThumbnails();
  setupAnchors();
  setupTimeline();
  setupOverlay();
  setupLanguage();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', boot);
} else {
  boot();
}

/* ===== FINAL FIX: horizontalStage wheel + navigation ===== */
(function () {
  const stage = document.getElementById("horizontalStage");
  if (!stage) return;

  function updateTimelineHorizontal() {
    const cursor = document.getElementById("timelineCursor");
    const max = stage.scrollWidth - stage.clientWidth;
    const ratio = max > 0 ? stage.scrollLeft / max : 0;

    if (cursor) {
      cursor.style.left = `calc(32px + (100% - 64px) * ${ratio})`;
    }

    document.querySelectorAll(".t-mark").forEach((mark) => {
      const id = mark.dataset.jump;
      const target = document.getElementById(id);
      if (!target || max <= 0) return;

      const markPct = (target.offsetLeft / max) * 100;
      mark.style.setProperty("--at", markPct + "%");

      const currentX = stage.scrollLeft + window.innerWidth * 0.45;
      mark.classList.toggle(
        "is-active",
        currentX >= target.offsetLeft &&
        currentX < target.offsetLeft + target.offsetWidth
      );
    });
  }

  function scrollToId(id) {
    const target = document.getElementById(id);
    if (!target) return;

    stage.scrollTo({
      left: target.offsetLeft,
      top: 0,
      behavior: "smooth",
    });
  }

  window.addEventListener(
    "wheel",
    function (event) {
      const overlay = document.getElementById("overlay");
      if (overlay && overlay.classList.contains("is-open")) return;

      const delta =
        Math.abs(event.deltaX) > Math.abs(event.deltaY)
          ? event.deltaX
          : event.deltaY;

      if (Math.abs(delta) < 1) return;

      event.preventDefault();
      event.stopPropagation();

      stage.scrollLeft += delta * 1.25;
      updateTimelineHorizontal();
    },
    { passive: false, capture: true }
  );

  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener(
      "click",
      function (event) {
        const id = link.getAttribute("href").slice(1);
        if (!id) return;

        event.preventDefault();
        event.stopImmediatePropagation();
        scrollToId(id);
      },
      true
    );
  });

  document.querySelectorAll(".t-mark").forEach((mark) => {
    mark.addEventListener(
      "click",
      function (event) {
        const id = mark.dataset.jump;
        if (!id) return;

        event.preventDefault();
        event.stopImmediatePropagation();
        scrollToId(id);
      },
      true
    );
  });

  stage.addEventListener("scroll", updateTimelineHorizontal, { passive: true });
  window.addEventListener("resize", updateTimelineHorizontal);
  window.addEventListener("load", updateTimelineHorizontal);
  setTimeout(updateTimelineHorizontal, 300);
})();
