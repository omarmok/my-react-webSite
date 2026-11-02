(function protectDocs() {
  // Strict anti-inspect layer for every docs page (all pages load this file).
  // Client-side code can only deter, not guarantee: see the notes in the project docs.
  // Owner switch: set to false only to debug these pages yourself. Everyone else gets the protection, localhost included.
  var PROTECT_ENABLED = true;
  if (!PROTECT_ENABLED) {
    return;
  }

  var locked = false;
  var OWNER_ROLE = "Design System Architect & UX/DesignOps Lead · Omar Mokhtar";
  function copy() {
    var ar = document.documentElement.lang === "ar";
    return {
      dir: ar ? "rtl" : "ltr",
      title: ar ? "لا يمكن الفحص" : "Inspection is not allowed",
      body: ar
        ? "هذه الصفحة محمية. محتواها وتصميمها وكودها ملك لصاحبها."
        : "This page is protected. Its content, design and code belong to their owner.",
      label: ar ? "ملكية الوثيقة" : "Document ownership",
      close: ar ? "إغلاق" : "Close",
      cont: ar ? "متابعة" : "Continue",
      hint: ar ? "أغلق أدوات المطوّر أولًا ثم اضغط متابعة." : "Close the developer tools first, then press Continue.",
    };
  }

  // Builds the message card. `mode` is "notice" (dismissible dialog) or "lock" (DevTools are open).
  function buildCard(mode, onAction) {
    var c = copy();
    var wrap = document.createElement("div");
    wrap.setAttribute("role", "alertdialog");
    wrap.setAttribute("aria-modal", "true");
    wrap.dir = c.dir;
    wrap.style.cssText =
      "position:fixed;inset:0;z-index:2147483647;display:flex;align-items:center;justify-content:center;padding:20px;font-family:system-ui,'IBM Plex Sans Arabic',sans-serif;" +
      (mode === "lock" ? "background:#f4f7f5;" : "background:rgba(17,25,39,.55);backdrop-filter:blur(3px);");
    var card = document.createElement("div");
    card.style.cssText =
      "width:min(92vw,460px);background:#fff;border-radius:18px;overflow:hidden;box-shadow:0 24px 60px rgba(17,25,39,.28);text-align:center;";
    var band = document.createElement("div");
    band.style.cssText = "background:#14573a;padding:26px 20px 22px;color:#fff;";
    var icon = document.createElement("div");
    icon.style.cssText =
      "width:52px;height:52px;margin:0 auto 12px;border-radius:50%;background:rgba(255,255,255,.16);display:flex;align-items:center;justify-content:center;";
    icon.innerHTML =
      '<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="4" y="11" width="16" height="10" rx="2"/><path d="M8 11V8a4 4 0 0 1 8 0v3"/></svg>';
    var title = document.createElement("div");
    title.style.cssText = "font-size:20px;font-weight:700;";
    title.textContent = c.title;
    band.appendChild(icon);
    band.appendChild(title);
    var inner = document.createElement("div");
    inner.style.cssText = "padding:20px 22px 22px;display:grid;gap:14px;";
    var body = document.createElement("div");
    body.style.cssText = "color:#4b5563;font-size:14px;line-height:1.8;";
    body.textContent = c.body;
    var owner = document.createElement("div");
    owner.style.cssText = "background:#f3fcf6;border:1px solid #b8eacb;border-radius:12px;padding:10px 14px;text-align:start;";
    var lab = document.createElement("div");
    lab.style.cssText = "font-size:12px;font-weight:700;color:#166a45;letter-spacing:.02em;";
    lab.textContent = c.label;
    var val = document.createElement("div");
    val.dir = "ltr";
    val.style.cssText = "font-size:13.5px;font-weight:600;color:#111927;text-align:start;";
    val.textContent = OWNER_ROLE;
    owner.appendChild(lab);
    owner.appendChild(val);
    var hint = document.createElement("div");
    hint.style.cssText = "display:none;color:#b54708;font-size:13px;";
    hint.textContent = c.hint;
    var button = document.createElement("button");
    button.type = "button";
    button.textContent = mode === "lock" ? c.cont : c.close;
    button.style.cssText =
      "justify-self:center;min-width:150px;padding:10px 22px;border:1px solid #111927;border-radius:6px;background:#111927;color:#fcfcfd;font:600 14px system-ui,'IBM Plex Sans Arabic',sans-serif;cursor:pointer;";
    button.addEventListener("click", function () {
      onAction(hint);
    });
    inner.appendChild(body);
    inner.appendChild(owner);
    inner.appendChild(hint);
    inner.appendChild(button);
    card.appendChild(band);
    card.appendChild(inner);
    wrap.appendChild(card);
    window.setTimeout(function () {
      button.focus();
    }, 0);
    return wrap;
  }

  function closeNotice() {
    var existing = document.getElementById("ps-protect-notice");
    if (existing) {
      existing.remove();
    }
  }

  function showNotice() {
    if (locked || document.getElementById("ps-protect-notice")) {
      return;
    }
    var dialog = buildCard("notice", closeNotice);
    dialog.id = "ps-protect-notice";
    dialog.addEventListener("click", function (event) {
      if (event.target === dialog) {
        closeNotice();
      }
    });
    (document.body || document.documentElement).appendChild(dialog);
  }

  window.addEventListener(
    "keydown",
    function (event) {
      if (event.key === "Escape") {
        closeNotice();
      }
    },
    true,
  );

  // ---- 1. Context menu, drag, and every DevTools / view-source shortcut ----
  function stop(event, notify) {
    event.preventDefault();
    event.stopPropagation();
    if (notify) {
      showNotice();
    }
    return false;
  }
  document.addEventListener("dragstart", stop, true);
  ["contextmenu"].forEach(function (name) {
    document.addEventListener(name, function (event) { stop(event, true); }, true);
  });
  window.addEventListener(
    "keydown",
    function (event) {
      var key = (event.key || "").toLowerCase();
      var cmdOrCtrl = event.ctrlKey || event.metaKey;
      var panels = ["i", "j", "c", "k", "e", "m", "p"];
      if (
        event.keyCode === 123 || // F12
        key === "f12" ||
        (cmdOrCtrl && event.shiftKey && panels.indexOf(key) > -1) || // Ctrl/Cmd + Shift + I, J, C, K, E, M, P
        (cmdOrCtrl && event.altKey && ["i", "j", "c", "u", "k"].indexOf(key) > -1) || // Cmd + Option + I, J, C, U, K (macOS)
        (cmdOrCtrl && ["u", "s"].indexOf(key) > -1 && !event.shiftKey) // view-source, save page
      ) {
        stop(event, true);
      }
    },
    true,
  );

  // ---- 2. Silence the console so nothing useful is printed there ----
  var rawDebug = console.debug ? console.debug.bind(console) : function () {};
  try {
    ["log", "info", "warn", "error", "debug", "table", "dir", "trace"].forEach(function (name) {
      console[name] = function () {};
    });
  } catch (error) {}

  // ---- 3. Detect an open DevTools and lock the page while it stays open ----
  var baseline = {
    dpr: window.devicePixelRatio,
    dw: window.outerWidth - window.innerWidth,
    dh: window.outerHeight - window.innerHeight,
  };
  var debuggerHit = false;
  var consoleHit = false;

  function setLocked(state) {
    if (state === locked) {
      return;
    }
    if (!state) {
      // DevTools closed again: reload so the page comes back clean.
      window.location.reload();
      return;
    }
    locked = true;
    // Wipe the page from the DOM so the Elements panel shows nothing while DevTools is open.
    if (document.body) {
      document.body.innerHTML = "";
      document.body.className = "";
    }
    var overlay = buildCard("lock", function (hint) {
      // Continue only works once DevTools are closed again; then the page reloads clean.
      if (sizeCheck() || debuggerCheck() || consoleCheck()) {
        hint.style.display = "block";
      } else {
        window.location.reload();
      }
    });
    overlay.id = "ps-protect-lock";
    (document.body || document.documentElement).appendChild(overlay);
  }

  var lastOuter = { w: window.outerWidth, h: window.outerHeight };
  function rebaseline() {
    baseline.dpr = window.devicePixelRatio;
    baseline.dw = window.outerWidth - window.innerWidth;
    baseline.dh = window.outerHeight - window.innerHeight;
    lastOuter.w = window.outerWidth;
    lastOuter.h = window.outerHeight;
  }

  function sizeCheck() {
    // Docked DevTools shrinks the viewport while the window itself keeps its size and pixel ratio.
    // Anything else (zoom, moving to another screen, resizing/maximizing, a window reporting 0x0 while loading)
    // re-measures the baseline instead of being treated as DevTools.
    if (!window.outerWidth || !window.outerHeight) {
      return false;
    }
    if (
      window.devicePixelRatio !== baseline.dpr ||
      window.outerWidth !== lastOuter.w ||
      window.outerHeight !== lastOuter.h ||
      !baseline.ready
    ) {
      rebaseline();
      baseline.ready = true;
      return false;
    }
    var dw = window.outerWidth - window.innerWidth;
    var dh = window.outerHeight - window.innerHeight;
    return dw - baseline.dw > 160 || dh - baseline.dh > 160;
  }

  function consoleCheck() {
    // Chrome/Edge evaluate getters of logged objects only while the console is open.
    var probe = new Image();
    Object.defineProperty(probe, "id", {
      get: function () {
        consoleHit = true;
        return "";
      },
    });
    consoleHit = false;
    rawDebug(probe);
    return consoleHit;
  }

  function debuggerCheck() {
    var start = performance.now();
    (function () {}.constructor("debugger")());
    debuggerHit = performance.now() - start > 120;
    return debuggerHit;
  }

  var hits = 0;
  function evaluate() {
    // Two consecutive detections are required so a single stall or resize glitch never locks the page.
    var detected = sizeCheck() || debuggerCheck() || consoleCheck();
    hits = detected ? hits + 1 : 0;
    setLocked(hits >= 2);
  }

  window.addEventListener("resize", evaluate);
  window.setInterval(evaluate, 700);
  document.addEventListener("DOMContentLoaded", evaluate);
})();

(function () {
  const STORAGE_KEY = "ps-lang";
  const DOC_GROUPS = [
    {
      en: null,
      ar: null,
      pages: [
        { file: "index.html", en: "Introduction", ar: "نظرة عامة" },
        { file: "governance-workflow.html", en: "Governance Workflow", ar: "سير عمل الحوكمة" },
        { file: "changelog.html", en: "Release Notes", ar: "سجل التغييرات" },
      ],
    },
    {
      en: "Guides",
      ar: "أدلة",
      pages: [
        { file: "StartDeveloping.html", en: "Start Developing", ar: "ابدأ التطوير" },
      ],
    },
    {
      en: "Foundations",
      ar: "الأسس",
      pages: [
        { file: "ColorSystem.html", en: "Color System", ar: "نظام الألوان" },
        { file: "typography.html", en: "Typography", ar: "الطباعة" },
        { file: "iconography.html", en: "Iconography", ar: "الأيقونات" },
        { file: "spacing.html", en: "Spacing", ar: "التباعد" },
        { file: "radius.html", en: "Radius", ar: "نصف القطر" },
        { file: "shadows.html", en: "Shadows", ar: "الظلال" },
        { file: "layout.html", en: "Layout", ar: "الهيكل العام" },
      ],
    },
    {
      en: "Actions & Forms",
      ar: "الإجراءات والنماذج",
      pages: [
        { file: "buttons.html", en: "Buttons", ar: "الأزرار" },
        { file: "text-fields.html", en: "Text Fields", ar: "حقول النص" },
        { file: "treeselect.html", en: "Tree Select", ar: "القائمة الشجرية" },
        { file: "datepicker.html", en: "Date Picker", ar: "منتقي التاريخ" },
        { file: "switch.html", en: "Switches", ar: "مفاتيح التبديل" },
        { file: "file-uploader.html", en: "File Uploader", ar: "رفع الملفات" },
      ],
    },
    {
      en: "Navigation",
      ar: "التنقل",
      pages: [
        { file: "page-title.html", en: "Page Title", ar: "عنوان الصفحة" },
        { file: "breadcrumb.html", en: "Breadcrumb", ar: "مسار التنقل" },
        { file: "tabs.html", en: "Tabs", ar: "التبويبات" },
        { file: "stepper.html", en: "Stepper", ar: "شريط التقدم" },
      ],
    },
    {
      en: "Feedback & Overlays",
      ar: "التنبيهات والنوافذ",
      pages: [
        { file: "alert.html", en: "Alerts", ar: "التنبيهات" },
        { file: "sweet-alert.html", en: "Sweet Alert", ar: "التنبيهات المنبثقة" },
        { file: "modal.html", en: "Modal", ar: "النافذة" },
        { file: "tooltip.html", en: "Tooltip", ar: "التلميح" },
        { file: "empty-state.html", en: "Empty State", ar: "الحالة الفارغة" },
      ],
    },
    {
      en: "Data Display",
      ar: "عرض البيانات",
      pages: [
        { file: "table.html", en: "Table", ar: "الجدول" },
        { file: "card.html", en: "Card", ar: "البطاقة" },
        { file: "tags.html", en: "Tags", ar: "الوسوم" },
        { file: "timeline.html", en: "Timeline", ar: "الخط الزمني" },
        { file: "map.html", en: "Map", ar: "الخريطة" },
      ],
    },
    {
      en: "Business Components",
      ar: "مكونات الأعمال",
      pages: [
        { file: "personcard.html", en: "Person Card", ar: "بطاقة الشخص" },
        { file: "Entity.html", en: "Entity Card", ar: "كارت المنشأة" },
      ],
    },
  ];
  const DOC_PAGES = DOC_GROUPS.flatMap((group) => group.pages);

  function getSavedLang() {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored === "ar" ? "ar" : "en";
  }

  function setSavedLang(lang) {
    const normalized = lang === "ar" ? "ar" : "en";
    localStorage.setItem(STORAGE_KEY, normalized);
  }

  function getCurrentFile() {
    const current = window.location.pathname.split("/").pop();
    return decodeURIComponent(current || "index.html");
  }

  function applyI18n(lang) {
    const nodes = document.querySelectorAll("[data-i18n]");
    nodes.forEach((element) => {
      if (!Object.prototype.hasOwnProperty.call(element.dataset, "en")) {
        element.dataset.en = element.innerHTML;
      }
      if (lang === "ar" && element.dataset.ar) {
        element.innerHTML = element.dataset.ar;
      } else if (lang === "en" && element.dataset.en) {
        element.innerHTML = element.dataset.en;
      }
    });
  }

  function updateLangToggleLabel(lang) {
    const toggles = document.querySelectorAll(".lang-toggle");
    if (!toggles.length) return;
    toggles.forEach((toggle) => {
      const labelSpan = toggle.querySelector("span");
      if (labelSpan) {
        labelSpan.textContent = lang === "ar" ? "English" : "العربية";
      }
      const nextLang = lang === "ar" ? "en" : "ar";
      toggle.setAttribute("aria-label", nextLang === "ar" ? "التبديل إلى العربية" : "Switch to English");
    });
  }

  function updateCopyButtonLabels(lang) {
    document.querySelectorAll(".code-copy").forEach((button) => {
      if (button.classList.contains("is-copied")) {
        return;
      }
      button.textContent = lang === "ar" ? "نسخ" : "Copy";
    });
  }

  function applyLanguage(lang) {
    const normalized = lang === "ar" ? "ar" : "en";
    document.documentElement.lang = normalized;
    document.documentElement.dir = normalized === "ar" ? "rtl" : "ltr";
    applyI18n(normalized);
    updateLangToggleLabel(normalized);
    updateCopyButtonLabels(normalized);
    updateSidebarSearchLabels(normalized);
  }

  function ensureScrollVisible() {
    const buttons = document.querySelectorAll(".scroll-top");
    buttons.forEach((button) => button.classList.add("is-visible"));
  }

  function copyPlainText(text) {
    if (navigator.clipboard && window.isSecureContext) {
      return navigator.clipboard.writeText(text).then(
        () => true,
        () => false,
      );
    }

    return new Promise((resolve) => {
      const textarea = document.createElement("textarea");
      textarea.value = text;
      textarea.setAttribute("readonly", "");
      textarea.style.position = "absolute";
      textarea.style.left = "-9999px";
      document.body.appendChild(textarea);
      textarea.select();
      let ok = false;
      try {
        ok = document.execCommand("copy");
      } catch (error) {
        ok = false;
      }
      document.body.removeChild(textarea);
      resolve(ok);
    });
  }

  function escapeHtml(value) {
    return value
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  function highlightHtml(raw) {
    const comments = [];
    let highlighted = escapeHtml(raw).replace(/&lt;!--[\s\S]*?--&gt;/g, (match) => {
      const token = `__COMMENT_${comments.length}__`;
      comments.push(match);
      return token;
    });

    highlighted = highlighted.replace(
      /(&lt;\/?)([\w:-]+)([\s\S]*?)(\/?&gt;)/g,
      (match, start, tag, attrs, end) => {
        const attrTokens = attrs.replace(
          /([\w:-]+)(=)(&quot;.*?&quot;|&#39;.*?&#39;)/g,
          '<span class="token attr-name">$1</span><span class="token punctuation">$2</span><span class="token attr-value">$3</span>',
        );
        return `<span class="token punctuation">${start}</span><span class="token tag">${tag}</span>${attrTokens}<span class="token punctuation">${end}</span>`;
      },
    );

    comments.forEach((comment, index) => {
      highlighted = highlighted.replace(`__COMMENT_${index}__`, `<span class="token comment">${comment}</span>`);
    });

    return highlighted;
  }

  function shouldRenderPreview(block, raw) {
    if (block.closest(".example-layout")) {
      return false;
    }
    if (!raw.includes("<button")) {
      return false;
    }
    if (block.closest("#new-reference")) {
      return false;
    }
    return raw.length <= 900 && raw.split("\n").length <= 22;
  }

  function enhanceCodeBlocks() {
    document.querySelectorAll(".code-block").forEach((block) => {
      const code = block.querySelector("code");
      if (!code) {
        return;
      }

      const raw = (code.dataset.raw || code.textContent || "").replace(/\n{3,}/g, "\n\n").trim();
      if (!raw) {
        return;
      }

      code.dataset.raw = raw;

      if (!code.dataset.highlighted && code.classList.contains("language-html")) {
        code.innerHTML = highlightHtml(raw);
        code.dataset.highlighted = "true";
      }

      if (!block.querySelector(".code-copy")) {
        const copyButton = document.createElement("button");
        copyButton.type = "button";
        copyButton.className = "code-copy";
        copyButton.textContent = document.documentElement.lang === "ar" ? "نسخ" : "Copy";
        copyButton.addEventListener("click", () => {
          const defaultLabel = document.documentElement.lang === "ar" ? "نسخ" : "Copy";
          const successLabel = document.documentElement.lang === "ar" ? "تم النسخ" : "Copied";
          copyPlainText(raw).then((ok) => {
            copyButton.textContent = ok ? successLabel : defaultLabel;
            copyButton.classList.toggle("is-copied", ok);
            window.setTimeout(() => {
              copyButton.textContent = defaultLabel;
              copyButton.classList.remove("is-copied");
            }, 1600);
          });
        });
        block.appendChild(copyButton);
      }

      if (!shouldRenderPreview(block, raw)) {
        return;
      }

      const previewMarkup = raw.replace(/<!--[\s\S]*?-->/g, "").trim();
      if (!previewMarkup) {
        return;
      }

      const exampleLayout = document.createElement("div");
      exampleLayout.className = "example-layout";

      const preview = document.createElement("div");
      preview.className = "example-preview";
      preview.innerHTML = `
        <div class="example-preview__eyebrow">${document.documentElement.lang === "ar" ? "معاينة" : "Live Preview"}</div>
        <div class="example-preview__body">${previewMarkup}</div>
      `;

      block.parentNode.insertBefore(exampleLayout, block);
      exampleLayout.appendChild(preview);
      exampleLayout.appendChild(block);
    });
  }

  function ensureDocsShell() {
    document.body.classList.add("docs-page");
    const main = document.querySelector("main");
    if (!main) {
      return;
    }
    main.classList.add("docs-shell");
    const pageContent = main.querySelector(".page-content");
    if (!pageContent) {
      return;
    }

    Array.from(main.children).forEach((child) => {
      if (!(child instanceof HTMLElement)) {
        return;
      }
      if (child === pageContent || child.matches(".docs-sidebar")) {
        return;
      }
      pageContent.insertBefore(child, pageContent.firstChild);
    });
  }

  function ensureSidebarToggle(sidebarCard) {
    if (!sidebarCard || sidebarCard.querySelector(".sidebar-toggle")) {
      return;
    }
    const sidebarTitle = sidebarCard.querySelector(".sidebar-title");
    if (!sidebarTitle) {
      return;
    }

    const toggle = document.createElement("button");
    toggle.type = "button";
    toggle.className = "sidebar-toggle";
    toggle.setAttribute("aria-expanded", "false");
    toggle.dataset.i18n = "";
    toggle.dataset.ar = "تصفح التوثيق";
    toggle.dataset.en = "Browse docs";
    toggle.textContent = "Browse docs";
    sidebarTitle.insertAdjacentElement("afterend", toggle);
  }

  function sidebarSearchLabel(lang) {
    return lang === "ar" ? "ابحث في التوثيق" : "Search docs";
  }

  function updateSidebarSearchLabels(lang) {
    document.querySelectorAll(".sidebar-search input").forEach((input) => {
      input.placeholder = sidebarSearchLabel(lang);
      input.setAttribute("aria-label", sidebarSearchLabel(lang));
    });
    document.querySelectorAll(".sidebar-empty").forEach((empty) => {
      empty.textContent = lang === "ar" ? "لا توجد نتائج." : "No results.";
    });
  }

  function filterSidebar(sidebarCard, query) {
    const nav = sidebarCard.querySelector(".sidebar-nav");
    if (!nav) {
      return;
    }
    const term = query.trim().toLowerCase();
    let visibleTotal = 0;
    let currentTitle = null;
    let titleHasMatch = false;
    const flush = () => {
      if (currentTitle) {
        currentTitle.hidden = Boolean(term) && !titleHasMatch;
      }
    };
    Array.from(nav.children).forEach((node) => {
      if (node.classList.contains("sidebar-empty")) {
        return;
      }
      if (node.classList.contains("sidebar-title")) {
        flush();
        currentTitle = node;
        titleHasMatch = false;
        return;
      }
      const haystack = ((node.dataset.en || "") + " " + (node.dataset.ar || "") + " " + (node.getAttribute("href") || "")).toLowerCase();
      const match = !term || haystack.includes(term);
      node.hidden = !match;
      if (match) {
        titleHasMatch = true;
        visibleTotal += 1;
      }
    });
    flush();
    const empty = nav.querySelector(".sidebar-empty");
    if (empty) {
      empty.hidden = visibleTotal > 0;
    }
  }

  function ensureSidebarSearch(sidebarCard) {
    if (!sidebarCard || sidebarCard.querySelector(".sidebar-search")) {
      return;
    }
    const nav = sidebarCard.querySelector(".sidebar-nav");
    if (!nav) {
      return;
    }
    const wrap = document.createElement("div");
    wrap.className = "sidebar-search";
    const input = document.createElement("input");
    input.type = "search";
    input.autocomplete = "off";
    input.spellcheck = false;
    wrap.appendChild(input);
    nav.insertAdjacentElement("beforebegin", wrap);

    const empty = document.createElement("p");
    empty.className = "sidebar-empty";
    empty.hidden = true;
    nav.appendChild(empty);

    input.addEventListener("input", () => filterSidebar(sidebarCard, input.value));
    input.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && input.value) {
        input.value = "";
        filterSidebar(sidebarCard, "");
      } else if (event.key === "Enter") {
        const first = nav.querySelector("a:not([hidden])");
        if (first) {
          window.location.href = first.getAttribute("href");
        }
      }
    });
    updateSidebarSearchLabels(document.documentElement.lang === "ar" ? "ar" : "en");
  }

  function scrollActiveIntoView(sidebarCard) {
    const active = sidebarCard.querySelector(".sidebar-nav a.is-active");
    if (!active || sidebarCard.scrollHeight <= sidebarCard.clientHeight) {
      return;
    }
    const cardBox = sidebarCard.getBoundingClientRect();
    const activeBox = active.getBoundingClientRect();
    sidebarCard.scrollTop += activeBox.top - cardBox.top - cardBox.height / 3;
  }

  function renderSidebarNav() {
    const current = getCurrentFile();
    const navMarkup = DOC_GROUPS.map((group) => {
      const title = group.en
        ? `<div class="sidebar-title" data-i18n data-ar="${group.ar}" data-en="${group.en.replace(/&/g, "&amp;")}">${group.en.replace(/&/g, "&amp;")}</div>`
        : "";
      const links = group.pages.map((page) => {
        const isActive = page.file === current;
        return `<a href="./${page.file}"${isActive ? ' class="is-active" aria-current="page"' : ""} data-i18n data-ar="${page.ar}" data-en="${page.en}">${page.en}</a>`;
      }).join("");
      return title + links;
    }).join("");

    document.querySelectorAll(".sidebar-nav").forEach((nav) => {
      nav.innerHTML = navMarkup;
    });

    document.querySelectorAll(".sidebar-card").forEach(ensureSidebarToggle);
    document.querySelectorAll(".sidebar-card").forEach(ensureSidebarSearch);
    document.querySelectorAll(".sidebar-card").forEach(scrollActiveIntoView);
  }

  function bindSidebarToggle() {
    const media = window.matchMedia("(max-width: 960px)");
    const sync = () => {
      document.querySelectorAll(".sidebar-card").forEach((sidebarCard) => {
        const toggle = sidebarCard.querySelector(".sidebar-toggle");
        const collapsed = media.matches ? sidebarCard.classList.contains("is-collapsed") : false;
        if (!media.matches) {
          sidebarCard.classList.remove("is-collapsed");
        } else if (!toggle.dataset.initialized) {
          sidebarCard.classList.add("is-collapsed");
        }
        toggle.dataset.initialized = "true";
        toggle.setAttribute("aria-expanded", String(!sidebarCard.classList.contains("is-collapsed")));
      });
    };

    sync();
    if (media.addEventListener) {
      media.addEventListener("change", sync);
    } else {
      media.addListener(sync);
    }

    document.addEventListener("click", (event) => {
      const toggle = event.target.closest(".sidebar-toggle");
      if (!toggle) {
        return;
      }
      const sidebarCard = toggle.closest(".sidebar-card");
      if (!sidebarCard || !media.matches) {
        return;
      }
      sidebarCard.classList.toggle("is-collapsed");
      toggle.setAttribute("aria-expanded", String(!sidebarCard.classList.contains("is-collapsed")));
    });
  }

  function fixKnownBrokenLinks() {
    document.querySelectorAll('a[href="./GOVERNANCE.md"]').forEach((link) => {
      link.setAttribute("href", "#governance");
    });
  }

  function bindDelegatedClicks() {
    document.addEventListener("click", (event) => {
      const langButton = event.target.closest(".lang-toggle");
      if (langButton) {
        event.preventDefault();
        const nextLang = document.documentElement.lang === "ar" ? "en" : "ar";
        setSavedLang(nextLang);
        applyLanguage(nextLang);
        return;
      }

      const scrollButton = event.target.closest(".scroll-top");
      if (scrollButton) {
        event.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
        ensureScrollVisible();
      }
    });
  }

  document.addEventListener("DOMContentLoaded", () => {
    ensureDocsShell();
    renderSidebarNav();
    fixKnownBrokenLinks();
    applyLanguage(getSavedLang());
    enhanceCodeBlocks();
    ensureScrollVisible();
    bindSidebarToggle();
    bindDelegatedClicks();
  });
})();
