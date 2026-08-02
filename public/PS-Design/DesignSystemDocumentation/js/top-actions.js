(function () {
  const STORAGE_KEY = "ps-lang";
  const DOC_PAGES = [
    { file: "index.html", en: "Introduction", ar: "نظرة عامة" },
    { file: "ColorSystem.html", en: "Color System", ar: "نظام الألوان" },
    { file: "typography.html", en: "Typography", ar: "الطباعة" },
    { file: "iconography.html", en: "Iconography", ar: "الأيقونات" },
    { file: "radius.html", en: "Radius", ar: "نصف القطر" },
    { file: "shadows.html", en: "Shadows", ar: "الظلال" },
    { file: "spacing.html", en: "Spacing", ar: "التباعد" },
    { file: "buttons.html", en: "Buttons", ar: "الأزرار" },
    { file: "switch.html", en: "Switches", ar: "مفاتيح التبديل" },
    { file: "layout.html", en: "Layout", ar: "الهيكل العام" },
    { file: "alert.html", en: "Alerts", ar: "التنبيهات" },
    { file: "tags.html", en: "Tags", ar: "الوسوم" },
    { file: "text-fields.html", en: "Text Fields", ar: "حقول النص" },
    { file: "file-uploader.html", en: "File Uploader", ar: "رفع الملفات" },
    { file: "tabs.html", en: "Tabs", ar: "علامات التبويب" },
    { file: "timeline.html", en: "Timeline", ar: "الخط الزمني" },
    { file: "StartDeveloping.html", en: "Start Developing", ar: "ابدأ التطوير" },
    { file: "NewFeature.html", en: "New Feature", ar: "ميزة جديدة" },
    { file: "stepper.html", en: "Stepper", ar: "شريط التقدم" },
    { file: "card.html", en: "Card", ar: "البطاقة" },
    { file: "personcard.html", en: "Person Card", ar: "بطاقة الشخص" },
    { file: "Entity.html", en: "Entity Card", ar: "كارت المنشأة" },
  ];

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

  function renderSidebarNav() {
    const current = getCurrentFile();
    const navMarkup = DOC_PAGES.map((page) => {
      const isActive = page.file === current;
      return `<a href="./${page.file}"${isActive ? ' class="is-active" aria-current="page"' : ""} data-i18n data-ar="${page.ar}" data-en="${page.en}">${page.en}</a>`;
    }).join("");

    document.querySelectorAll(".sidebar-nav").forEach((nav) => {
      nav.innerHTML = navMarkup;
    });

    document.querySelectorAll(".sidebar-card").forEach(ensureSidebarToggle);
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
