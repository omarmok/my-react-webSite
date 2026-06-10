import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

const bottomNavItems = [
  { key: "home", href: "/", icon: "home" },
  { key: "about", href: "/about", icon: "about" },
  { key: "work", href: "/projects", icon: "work" },
  { key: "casebook", href: "/design-system", icon: "casebook" },
  { key: "more", icon: "more" },
];

const sheetLinks = [
  { key: "governmentUx", href: "/government-ux", icon: "governmentUx" },
  { key: "designopsNav", href: "/designops", icon: "designopsNav" },
  { key: "uxLead", href: "/ux-lead", icon: "uxLead" },
  { key: "certifications", href: "/certifications", icon: "certifications" },
  { key: "recommendations", href: "/recommendations", icon: "recommendations" },
  { key: "blog", href: "/blog", icon: "blog" },
  { key: "contact", href: "/contact", icon: "contact" },
];

const iconProps = {
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  "aria-hidden": "true",
  focusable: "false",
};

const ICONS = {
  home: (
    <svg viewBox="0 0 24 24" {...iconProps}>
      <path
        d="M4 10.5 12 4l8 6.5V20a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 4 20v-9.5Z"
        stroke="currentColor"
        strokeWidth="1.85"
        strokeLinejoin="round"
      />
      <path
        d="M9 21.5v-6h6v6"
        stroke="currentColor"
        strokeWidth="1.85"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  about: (
    <svg viewBox="0 0 24 24" {...iconProps}>
      <circle cx="12" cy="8" r="3.25" stroke="currentColor" strokeWidth="1.85" />
      <path
        d="M5.5 20a6.5 6.5 0 0 1 13 0"
        stroke="currentColor"
        strokeWidth="1.85"
        strokeLinecap="round"
      />
    </svg>
  ),
  work: (
    <svg viewBox="0 0 24 24" {...iconProps}>
      <rect x="3.5" y="4.5" width="17" height="15" rx="2.5" stroke="currentColor" strokeWidth="1.85" />
      <path
        d="M8 4.5V3.75A1.75 1.75 0 0 1 9.75 2h4.5A1.75 1.75 0 0 1 16 3.75v.75M3.5 10.5h17"
        stroke="currentColor"
        strokeWidth="1.85"
        strokeLinecap="round"
      />
    </svg>
  ),
  casebook: (
    <svg viewBox="0 0 24 24" {...iconProps}>
      <path
        d="m12 3 8 4-8 4-8-4 8-4Z"
        stroke="currentColor"
        strokeWidth="1.85"
        strokeLinejoin="round"
      />
      <path
        d="m4 12 8 4 8-4m-16 5 8 4 8-4"
        stroke="currentColor"
        strokeWidth="1.85"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  more: (
    <svg viewBox="0 0 24 24" {...iconProps}>
      <circle cx="6" cy="12" r="1.8" fill="currentColor" />
      <circle cx="12" cy="12" r="1.8" fill="currentColor" />
      <circle cx="18" cy="12" r="1.8" fill="currentColor" />
    </svg>
  ),
  governmentUx: (
    <svg viewBox="0 0 24 24" {...iconProps}>
      <path
        d="M12 3 4.5 6v5c0 4.6 3.2 8.9 7.5 10 4.3-1.1 7.5-5.4 7.5-10V6L12 3Z"
        stroke="currentColor"
        strokeWidth="1.85"
        strokeLinejoin="round"
      />
      <path
        d="M8.75 12h6.5M12 8.75v6.5"
        stroke="currentColor"
        strokeWidth="1.85"
        strokeLinecap="round"
      />
    </svg>
  ),
  designopsNav: (
    <svg viewBox="0 0 24 24" {...iconProps}>
      <rect x="3" y="4" width="7" height="6" rx="1.5" stroke="currentColor" strokeWidth="1.85" />
      <rect x="14" y="4" width="7" height="6" rx="1.5" stroke="currentColor" strokeWidth="1.85" />
      <rect x="8.5" y="14" width="7" height="6" rx="1.5" stroke="currentColor" strokeWidth="1.85" />
      <path
        d="M10 7h4M12 10v4"
        stroke="currentColor"
        strokeWidth="1.85"
        strokeLinecap="round"
      />
    </svg>
  ),
  uxLead: (
    <svg viewBox="0 0 24 24" {...iconProps}>
      <path
        d="M12 4 9.2 9h5.6L12 4Z"
        stroke="currentColor"
        strokeWidth="1.85"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="14" r="3" stroke="currentColor" strokeWidth="1.85" />
      <path
        d="M6 21a6 6 0 0 1 12 0"
        stroke="currentColor"
        strokeWidth="1.85"
        strokeLinecap="round"
      />
    </svg>
  ),
  certifications: (
    <svg viewBox="0 0 24 24" {...iconProps}>
      <rect x="4" y="3.5" width="16" height="17" rx="2" stroke="currentColor" strokeWidth="1.85" />
      <path
        d="M8 8h8M8 12h8M8 16h5"
        stroke="currentColor"
        strokeWidth="1.85"
        strokeLinecap="round"
      />
      <circle cx="17.5" cy="16.5" r="2.5" stroke="currentColor" strokeWidth="1.65" />
    </svg>
  ),
  recommendations: (
    <svg viewBox="0 0 24 24" {...iconProps}>
      <path
        d="M7 9.5A3.5 3.5 0 0 1 10.5 6h5A3.5 3.5 0 0 1 19 9.5v3A3.5 3.5 0 0 1 15.5 16H11l-4 3v-3.5A3.5 3.5 0 0 1 7 12.5v-3Z"
        stroke="currentColor"
        strokeWidth="1.85"
        strokeLinejoin="round"
      />
      <path
        d="M10 10.75h6M10 13.25h4"
        stroke="currentColor"
        strokeWidth="1.85"
        strokeLinecap="round"
      />
    </svg>
  ),
  blog: (
    <svg viewBox="0 0 24 24" {...iconProps}>
      <path
        d="M6 4.5h9.5A2.5 2.5 0 0 1 18 7v12.5H8.5A2.5 2.5 0 0 1 6 17V4.5Z"
        stroke="currentColor"
        strokeWidth="1.85"
        strokeLinejoin="round"
      />
      <path
        d="M6 7.5h12M9.5 11h5M9.5 14.5h5"
        stroke="currentColor"
        strokeWidth="1.85"
        strokeLinecap="round"
      />
    </svg>
  ),
  contact: (
    <svg viewBox="0 0 24 24" {...iconProps}>
      <rect x="3.5" y="5" width="17" height="14" rx="2.5" stroke="currentColor" strokeWidth="1.85" />
      <path
        d="m5 7 7 6 7-6"
        stroke="currentColor"
        strokeWidth="1.85"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  language: (
    <svg viewBox="0 0 24 24" {...iconProps}>
      <path
        d="M12 3.25c4.83 0 8.75 3.92 8.75 8.75S16.83 20.75 12 20.75 3.25 16.83 3.25 12 7.17 3.25 12 3.25Z"
        stroke="currentColor"
        strokeWidth="1.85"
      />
      <path
        d="M6.75 12h10.5M12 3.6c1.83 2 2.78 4.73 2.78 8.4 0 3.67-.95 6.4-2.78 8.4-1.83-2-2.78-4.73-2.78-8.4 0-3.67.95-6.4 2.78-8.4Z"
        stroke="currentColor"
        strokeWidth="1.85"
        strokeLinecap="round"
      />
    </svg>
  ),
  chevron: (
    <svg viewBox="0 0 24 24" {...iconProps}>
      <path
        d="m9 6 6 6-6 6"
        stroke="currentColor"
        strokeWidth="1.85"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  close: (
    <svg viewBox="0 0 24 24" {...iconProps}>
      <path
        d="M6 6 18 18M18 6 6 18"
        stroke="currentColor"
        strokeWidth="1.85"
        strokeLinecap="round"
      />
    </svg>
  ),
};

const MobileBottomNav = ({
  language = "en",
  pathname = "/",
  t,
  theme = "light",
  onToggleTheme = () => {},
  onToggleLanguage = () => {},
}) => {
  const [isMoreOpen, setIsMoreOpen] = useState(false);
  const sheetRef = useRef(null);
  const moreButtonRef = useRef(null);
  const wasOpenRef = useRef(false);

  const isRTL = language === "ar";
  const moreSheetId = "mobile-more-sheet";
  const moreActive = sheetLinks.some((link) => pathname === link.href);
  const buttonLabel =
    t("nav.languageToggleButton") ||
    (language === "en" ? "العربية" : "English");
  const themeAria =
    theme === "dark"
      ? (t("nav.themeToggle.switchToLight") ?? "Switch to light mode")
      : (t("nav.themeToggle.switchToDark") ?? "Switch to dark mode");
  const currentThemeLabel =
    theme === "dark"
      ? (t("nav.themeDark") ?? "Dark mode")
      : (t("nav.themeLight") ?? "Light mode");

  useEffect(() => {
    setIsMoreOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (typeof document === "undefined") {
      return undefined;
    }

    document.body.classList.toggle("mobile-bottom-sheet-open", isMoreOpen);

    return () => {
      document.body.classList.remove("mobile-bottom-sheet-open");
    };
  }, [isMoreOpen]);

  useEffect(() => {
    if (!isMoreOpen || typeof window === "undefined") {
      return undefined;
    }

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        event.preventDefault();
        setIsMoreOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isMoreOpen]);

  useEffect(() => {
    if (!isMoreOpen) {
      if (wasOpenRef.current) {
        moreButtonRef.current?.focus();
      }
      wasOpenRef.current = false;
      return;
    }

    wasOpenRef.current = true;
    const frameId = window.requestAnimationFrame(() => {
      const firstInteractive = sheetRef.current?.querySelector(
        "a[href], button:not([disabled]), [role='switch']",
      );
      firstInteractive?.focus();
    });

    return () => window.cancelAnimationFrame(frameId);
  }, [isMoreOpen]);

  const closeSheet = () => {
    setIsMoreOpen(false);
  };

  const handleSheetKeyDown = (event) => {
    if (event.key !== "Tab") {
      return;
    }

    const focusableItems = Array.from(
      sheetRef.current?.querySelectorAll(
        "a[href], button:not([disabled]), [role='switch']",
      ) ?? [],
    );

    if (focusableItems.length === 0) {
      return;
    }

    const firstItem = focusableItems[0];
    const lastItem = focusableItems[focusableItems.length - 1];

    if (event.shiftKey && document.activeElement === firstItem) {
      event.preventDefault();
      lastItem.focus();
    } else if (!event.shiftKey && document.activeElement === lastItem) {
      event.preventDefault();
      firstItem.focus();
    }
  };

  const handleLanguageToggle = () => {
    onToggleLanguage();
    closeSheet();
  };

  return (
    <>
      <div
        className={`mobile-app-nav__sheet-backdrop ${isMoreOpen ? "is-open" : ""}`}
        onClick={closeSheet}
        aria-hidden={!isMoreOpen}
      />

      <div
        id={moreSheetId}
        ref={sheetRef}
        className={`mobile-app-nav__sheet ${isMoreOpen ? "is-open" : ""}`}
        role="dialog"
        aria-modal="true"
        aria-hidden={!isMoreOpen}
        aria-label={t("nav.moreSheetTitle") ?? t("nav.more") ?? "More"}
        dir={isRTL ? "rtl" : "ltr"}
        onKeyDown={handleSheetKeyDown}
      >
        <div className="mobile-app-nav__sheet-header">
          <div>
            <p className="mobile-app-nav__sheet-eyebrow">
              {t("nav.utilitiesLabel") ?? "Explore more"}
            </p>
            <h2 className="mobile-app-nav__sheet-title">
              {t("nav.moreSheetTitle") ?? t("nav.more") ?? "More"}
            </h2>
          </div>
          <button
            type="button"
            className="mobile-app-nav__sheet-close"
            onClick={closeSheet}
            aria-label={t("nav.moreSheetClose") ?? "Close more menu"}
          >
            {ICONS.close}
          </button>
        </div>

        <div className="mobile-app-nav__sheet-grid">
          {sheetLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.key}
                href={link.href}
                className={`mobile-app-nav__sheet-link ${isActive ? "is-active" : ""}`}
                aria-current={isActive ? "page" : undefined}
                onClick={closeSheet}
              >
                <span className="mobile-app-nav__sheet-link-leading">
                  <span className="mobile-app-nav__sheet-link-icon">
                    {ICONS[link.icon]}
                  </span>
                  <span className="mobile-app-nav__sheet-link-label">
                    {t(`nav.links.${link.key}`)}
                  </span>
                </span>
                <span className="mobile-app-nav__sheet-link-arrow">
                  {ICONS.chevron}
                </span>
              </Link>
            );
          })}
        </div>

        <div className="mobile-app-nav__utility">
          <button
            type="button"
            className="mobile-app-nav__utility-button"
            onClick={handleLanguageToggle}
            aria-label={t("nav.languageToggleAria")}
            aria-pressed={language === "ar"}
          >
            <span className="mobile-app-nav__utility-content">
              <span className="mobile-app-nav__utility-title">
                {t("nav.languageLabel") ?? "Language"}
              </span>
              <span className="mobile-app-nav__utility-value">{buttonLabel}</span>
            </span>
            <span className="mobile-app-nav__utility-icon">{ICONS.language}</span>
          </button>

          <div className="mobile-app-nav__utility-row">
            <span className="mobile-app-nav__utility-content">
              <span className="mobile-app-nav__utility-title">
                {t("nav.themeLabel") ?? "Appearance"}
              </span>
              <span className="mobile-app-nav__utility-value">
                {currentThemeLabel}
              </span>
            </span>
            <ThemeToggle
              theme={theme}
              onToggle={onToggleTheme}
              ariaLabel={themeAria}
            />
          </div>
        </div>
      </div>

      <nav
        className="mobile-app-nav"
        aria-label={t("nav.bottomNavLabel") ?? "Primary navigation"}
        dir={isRTL ? "rtl" : "ltr"}
      >
        <div className="mobile-app-nav__bar">
          <ul className="mobile-app-nav__list">
            {bottomNavItems.map((item) => {
              const isMoreItem = item.key === "more";
              const isActive = isMoreItem
                ? isMoreOpen || moreActive
                : pathname === item.href;

              return (
                <li className="mobile-app-nav__list-item" key={item.key}>
                  {isMoreItem ? (
                    <button
                      type="button"
                      ref={moreButtonRef}
                      className={`mobile-app-nav__item ${isActive ? "is-active" : ""}`}
                      aria-label={t("nav.moreMenuAria") ?? "Open more navigation links"}
                      aria-expanded={isMoreOpen}
                      aria-controls={moreSheetId}
                      onClick={() => setIsMoreOpen((previous) => !previous)}
                    >
                      <span className="mobile-app-nav__item-icon">
                        {ICONS[item.icon]}
                      </span>
                      <span className="mobile-app-nav__item-label">
                        {t("nav.more") ?? "More"}
                      </span>
                    </button>
                  ) : (
                    <Link
                      href={item.href}
                      className={`mobile-app-nav__item ${isActive ? "is-active" : ""}`}
                      aria-current={isActive ? "page" : undefined}
                    >
                      <span className="mobile-app-nav__item-icon">
                        {ICONS[item.icon]}
                      </span>
                      <span className="mobile-app-nav__item-label">
                        {t(`nav.links.${item.key}`)}
                      </span>
                    </Link>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    </>
  );
};

export default MobileBottomNav;
