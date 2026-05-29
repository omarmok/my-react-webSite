(function () {
  const STORAGE_KEY = 'ps-lang';

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

  function applyLanguage(lang) {
    const normalized = lang === 'ar' ? 'ar' : 'en';
    document.documentElement.lang = normalized;
    document.documentElement.dir = normalized === 'ar' ? 'rtl' : 'ltr';
    applyI18n(normalized);
    updateLangToggleLabel(normalized);
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

  document.addEventListener('DOMContentLoaded', () => {
    applyLanguage(getSavedLang());
    ensureScrollVisible();
    bindDelegatedClicks();
  });
})();
