(function () {
  const STORAGE_KEY = 'ps-lang';
  const MOBILE_MEDIA_QUERY = '(max-width: 768px)';

  function getSavedLang() {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored === 'ar' ? 'ar' : 'en';
  }

  function setSavedLang(lang) {
    const normalized = lang === 'ar' ? 'ar' : 'en';
    localStorage.setItem(STORAGE_KEY, normalized);
  }

  function applyI18n(lang) {
    const nodes = document.querySelectorAll('[data-i18n]');
    nodes.forEach((element) => {
      if (!Object.prototype.hasOwnProperty.call(element.dataset, 'en')) {
        element.dataset.en = element.innerHTML;
      }
      if (lang === 'ar' && element.dataset.ar) {
        element.innerHTML = element.dataset.ar;
      } else if (lang === 'en' && element.dataset.en) {
        element.innerHTML = element.dataset.en;
      }
    });
  }

  function updateLangToggleLabel(lang) {
    const toggles = document.querySelectorAll('.lang-toggle');
    if (!toggles.length) return;
    toggles.forEach((toggle) => {
      const labelSpan = toggle.querySelector('span');
      if (labelSpan) {
        labelSpan.textContent = lang === 'ar' ? 'English' : 'العربية';
      }
      const nextLang = lang === 'ar' ? 'en' : 'ar';
      toggle.setAttribute('aria-label', nextLang === 'ar' ? 'التبديل إلى العربية' : 'Switch to English');
    });
  }

  function updateSidebarToggleLabel(lang) {
    const toggles = document.querySelectorAll('.mobile-nav-toggle');
    if (!toggles.length) return;

    toggles.forEach((toggle) => {
      const label = toggle.querySelector('.toggle-label') || toggle.querySelector('span');
      if (label) {
        label.textContent = lang === 'ar' ? 'القائمة' : 'Menu';
      }
      toggle.setAttribute('aria-label', lang === 'ar' ? 'فتح قائمة التوثيق' : 'Open documentation menu');
    });
  }

  function applyLanguage(lang) {
    const normalized = lang === 'ar' ? 'ar' : 'en';
    document.documentElement.lang = normalized;
    document.documentElement.dir = normalized === 'ar' ? 'rtl' : 'ltr';
    applyI18n(normalized);
    updateLangToggleLabel(normalized);
    updateSidebarToggleLabel(normalized);
  }

  function ensureScrollVisible() {
    const buttons = document.querySelectorAll('.scroll-top');
    buttons.forEach((btn) => btn.classList.add('is-visible'));
  }

  function bindDelegatedClicks() {
    document.addEventListener('click', (event) => {
      const langBtn = event.target.closest('.lang-toggle');
      if (langBtn) {
        event.preventDefault();
        const nextLang = document.documentElement.lang === 'ar' ? 'en' : 'ar';
        setSavedLang(nextLang);
        applyLanguage(nextLang);
        return;
      }

      const scrollBtn = event.target.closest('.scroll-top');
      if (scrollBtn) {
        event.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
        ensureScrollVisible();
      }
    });
  }

  function initDocsMobileSidebar() {
    const docsSidebar = document.querySelector('.docs-sidebar');
    const sidebarNav = docsSidebar?.querySelector('.sidebar-card .sidebar-nav');
    if (!docsSidebar || !sidebarNav) return;

    document.body.classList.add('docs-mobile-sidebar-ready');

    let navToggle = docsSidebar.querySelector('.mobile-nav-toggle');
    if (!navToggle) {
      navToggle = document.createElement('button');
      navToggle.type = 'button';
      navToggle.className = 'mobile-nav-toggle';
      navToggle.innerHTML = '<span class="toggle-label">Menu</span><span class="toggle-icon" aria-hidden="true">▼</span>';

      const sidebarCard = docsSidebar.querySelector('.sidebar-card');
      const sidebarWrapper = docsSidebar.querySelector('.sidebar-card-with-results');
      const toggleHost = sidebarWrapper || docsSidebar;
      if (sidebarCard && sidebarCard.parentNode === toggleHost) {
        toggleHost.insertBefore(navToggle, sidebarCard.nextSibling);
      } else {
        toggleHost.appendChild(navToggle);
      }
    }

    if (!sidebarNav.id) {
      sidebarNav.id = 'docs-sidebar-nav';
    }

    const mobileQuery = window.matchMedia(MOBILE_MEDIA_QUERY);

    function syncSidebarState(forceClosed) {
      const isMobile = mobileQuery.matches;

      if (!isMobile || forceClosed) {
        sidebarNav.classList.remove('is-open');
      }

      const shouldBeOpen = isMobile && sidebarNav.classList.contains('is-open');
      document.body.classList.toggle('docs-mobile-sidebar-open', shouldBeOpen);
      navToggle.setAttribute('aria-expanded', shouldBeOpen ? 'true' : 'false');
      navToggle.setAttribute('aria-controls', sidebarNav.id);

      const icon = navToggle.querySelector('.toggle-icon');
      if (icon) {
        icon.textContent = shouldBeOpen ? '▲' : '▼';
      }
    }

    navToggle.addEventListener('click', () => {
      if (!mobileQuery.matches) return;
      sidebarNav.classList.toggle('is-open');
      syncSidebarState();
    });

    sidebarNav.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        if (!mobileQuery.matches) return;
        syncSidebarState(true);
      });
    });

    if (typeof mobileQuery.addEventListener === 'function') {
      mobileQuery.addEventListener('change', () => syncSidebarState(true));
    } else if (typeof mobileQuery.addListener === 'function') {
      mobileQuery.addListener(() => syncSidebarState(true));
    }

    updateSidebarToggleLabel(document.documentElement.lang === 'ar' ? 'ar' : 'en');
    syncSidebarState(true);
  }

  document.addEventListener('DOMContentLoaded', () => {
    applyLanguage(getSavedLang());
    initDocsMobileSidebar();
    ensureScrollVisible();
    bindDelegatedClicks();
  });
})();
