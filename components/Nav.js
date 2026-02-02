import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
import mylogo from "../public/images/mylogo.png";
import { useTranslation } from "../src/i18n/useTranslation";

const SCROLL_THRESHOLD = 48;
const MOBILE_NAV_ID = "mobileNav";

const navLinks = [
  { key: "home", href: "/", delay: 200 },
  { key: "about", href: "/About", delay: 300 },
  { key: "work", href: "/Projects", delay: 400 },
  { key: "blog", href: "/Blog", delay: 500 },
  { key: "contact", href: "/ContactForm", delay: 600 },
];

const menuIcon = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    focusable="false">
    <path
      d="M6.03613 13.25C6.77528 13.25 7.3835 13.2501 7.875 13.2969C8.38561 13.3454 8.84809 13.4494 9.26855 13.707C9.68603 13.9629 10.0371 14.314 10.293 14.7314C10.5506 15.1519 10.6546 15.6144 10.7031 16.125C10.7499 16.6165 10.75 17.2247 10.75 17.9639V18.0361C10.75 18.7753 10.7499 19.3835 10.7031 19.875C10.6546 20.3856 10.5506 20.8481 10.293 21.2686C10.0371 21.686 9.68603 22.0371 9.26855 22.293C8.84809 22.5506 8.38561 22.6546 7.875 22.7031C7.38351 22.7499 6.77528 22.75 6.03613 22.75H5.96387C5.22473 22.75 4.61649 22.7499 4.125 22.7031C3.61439 22.6546 3.15191 22.5506 2.73145 22.293C2.31397 22.0371 1.96287 21.686 1.70703 21.2686C1.44937 20.8481 1.34545 20.3856 1.29688 19.875C1.25014 19.3835 1.24999 18.7753 1.25 18.0361V17.9639C1.24999 17.2247 1.25014 16.6165 1.29688 16.125C1.34545 15.6144 1.44937 15.1519 1.70703 14.7314C1.96287 14.314 2.31397 13.9629 2.73145 13.707C3.15191 13.4494 3.61439 13.3454 4.125 13.2969C4.6165 13.2501 5.22472 13.25 5.96387 13.25H6.03613ZM18.0361 13.25C18.7753 13.25 19.3835 13.2501 19.875 13.2969C20.3856 13.3454 20.8481 13.4494 21.2686 13.707C21.686 13.9629 22.0371 14.314 22.293 14.7314C22.5506 15.1519 22.6546 15.6144 22.7031 16.125C22.7499 16.6165 22.75 17.2247 22.75 17.9639V18.0361C22.75 18.7753 22.7499 19.3835 22.7031 19.875C22.6546 20.3856 22.5506 20.8481 22.293 21.2686C22.0371 21.686 21.686 22.0371 21.2686 22.293C20.8481 22.5506 20.3856 22.6546 19.875 22.7031C19.3835 22.7499 18.7753 22.75 18.0361 22.75H17.9639C17.2247 22.75 16.6165 22.7499 16.125 22.7031C15.6144 22.6546 15.1519 22.5506 14.7314 22.293C14.314 22.0371 13.9629 21.686 13.707 21.2686C13.4494 20.8481 13.3454 20.3856 13.2969 19.875C13.2501 19.3835 13.25 18.7753 13.25 18.0361V17.9639C13.25 17.2247 13.2501 16.6165 13.2969 16.125C13.3454 15.6144 13.4494 15.1519 13.707 14.7314C13.9629 14.314 14.314 13.9629 14.7314 13.707C15.1519 13.4494 15.6144 13.3454 16.125 13.2969C16.6165 13.2501 17.2247 13.25 17.9639 13.25H18.0361ZM6 14.75C5.21545 14.75 4.67964 14.7509 4.26758 14.79C3.86674 14.8282 3.66088 14.8973 3.51563 14.9863C3.29994 15.1185 3.1185 15.2999 2.98633 15.5156C2.89735 15.6609 2.82815 15.8667 2.79004 16.2676C2.75088 16.6796 2.75 17.2154 2.75 18C2.75 18.7846 2.75088 19.3204 2.79004 19.7324C2.82815 20.1333 2.89735 20.3391 2.98633 20.4844C3.1185 20.7001 3.29994 20.8815 3.51563 21.0137C3.66088 21.1027 3.86674 21.1718 4.26758 21.21C4.67964 21.2491 5.21545 21.25 6 21.25C6.78455 21.25 7.32036 21.2491 7.73242 21.21C8.13326 21.1718 8.33912 21.1027 8.48438 21.0137C8.70006 20.8815 8.8815 20.7001 9.01367 20.4844C9.10265 20.3391 9.17185 20.1333 9.20996 19.7324C9.24912 19.3204 9.25 18.7846 9.25 18C9.25 17.2154 9.24912 16.6796 9.20996 16.2676C9.17185 15.8667 9.10265 15.6609 9.01367 15.5156C8.8815 15.2999 8.70006 15.1185 8.48438 14.9863C8.33912 14.8973 8.13326 14.8282 7.73242 14.79C7.32036 14.7509 6.78455 14.75 6 14.75ZM18 14.75C17.2154 14.75 16.6796 14.7509 16.2676 14.79C15.8667 14.8282 15.6609 14.8973 15.5156 14.9863C15.2999 15.1185 15.1185 15.2999 14.9863 15.5156C14.8973 15.6609 14.8282 15.8667 14.79 16.2676C14.7509 16.6796 14.75 17.2154 14.75 18C14.75 18.7846 14.7509 19.3204 14.79 19.7324C14.8282 20.1333 14.8973 20.3391 14.9863 20.4844C15.1185 20.7001 15.2999 20.8815 15.5156 21.0137C15.6609 21.1027 15.8667 21.1718 16.2676 21.21C16.6796 21.2491 17.2154 21.25 18 21.25C18.7846 21.25 19.3204 21.2491 19.7324 21.21C20.1333 21.1718 20.3391 21.1027 20.4844 21.0137C20.7001 20.8815 20.8815 20.7001 21.0137 20.4844C21.1027 20.3391 21.1718 20.1333 21.21 19.7324C21.2491 19.3204 21.25 18.7846 21.25 18C21.25 17.2154 21.2491 16.6796 21.21 16.2676C21.1718 15.8667 21.1027 15.6609 21.0137 15.5156C20.8815 15.2999 20.7001 15.1185 20.4844 14.9863C20.3391 14.8973 20.1333 14.8282 19.7324 14.79C19.3204 14.7509 18.7846 14.75 18 14.75ZM6.03613 1.25C6.77528 1.24999 7.3835 1.25014 7.875 1.29688C8.38561 1.34545 8.84809 1.44937 9.26855 1.70703C9.68603 1.96287 10.0371 2.31397 10.293 2.73145C10.5506 3.15191 10.6546 3.61439 10.7031 4.125C10.7499 4.61649 10.75 5.22473 10.75 5.96387V6.03613C10.75 6.77528 10.7499 7.38351 10.7031 7.875C10.6546 8.38561 10.5506 8.84809 10.293 9.26855C10.0371 9.68603 9.68603 10.0371 9.26855 10.293C8.84809 10.5506 8.38561 10.6546 7.875 10.7031C7.38351 10.7499 6.77528 10.75 6.03613 10.75H5.96387C5.22473 10.75 4.61649 10.7499 4.125 10.7031C3.61439 10.6546 3.15191 10.5506 2.73145 10.293C2.31397 10.0371 1.96287 9.68603 1.70703 9.26855C1.44937 8.84809 1.34545 8.38561 1.29688 7.875C1.25014 7.3835 1.24999 6.77528 1.25 6.03613V5.96387C1.24999 5.22472 1.25014 4.6165 1.29688 4.125C1.34545 3.61439 1.44937 3.15191 1.70703 2.73145C1.96287 2.31397 2.31397 1.96287 2.73145 1.70703C3.15191 1.44937 3.61439 1.34545 4.125 1.29688C4.6165 1.25014 5.22472 1.24999 5.96387 1.25H6.03613ZM18.0361 1.25C18.7753 1.24999 19.3835 1.25014 19.875 1.29688C20.3856 1.34545 20.8481 1.44937 21.2686 1.70703C21.686 1.96287 22.0371 2.31397 22.293 2.73145C22.5506 3.15191 22.6546 3.61439 22.7031 4.125C22.7499 4.61649 22.75 5.22473 22.75 5.96387V6.03613C22.75 6.77528 22.7499 7.38351 22.7031 7.875C22.6546 8.38561 22.5506 8.84809 22.293 9.26855C22.0371 9.68603 21.686 10.0371 21.2686 10.293C20.8481 10.5506 20.3856 10.6546 19.875 10.7031C19.3835 10.7499 18.7753 10.75 18.0361 10.75H17.9639C17.2247 10.75 16.6165 10.7499 16.125 10.7031C15.6144 10.6546 15.1519 10.5506 14.7314 10.293C14.314 10.0371 13.9629 9.68603 13.707 9.26855C13.4494 8.84809 13.3454 8.38561 13.2969 7.875C13.2501 7.3835 13.25 6.77528 13.25 6.03613V5.96387C13.25 5.22472 13.2501 4.6165 13.2969 4.125C13.3454 3.61439 13.4494 3.15191 13.707 2.73145C13.9629 2.31397 14.314 1.96287 14.7314 1.70703C15.1519 1.44937 15.6144 1.34545 16.125 1.29688C16.6165 1.25014 17.2247 1.24999 17.9639 1.25H18.0361ZM6 2.75C5.21545 2.75 4.67964 2.75088 4.26758 2.79004C3.86674 2.82815 3.66088 2.89735 3.51563 2.98633C3.29994 3.1185 3.1185 3.29994 2.98633 3.51563C2.89735 3.66088 2.82815 3.86674 2.79004 4.26758C2.75088 4.67964 2.75 5.21545 2.75 6C2.75 6.78455 2.75088 7.32036 2.79004 7.73242C2.82815 8.13326 2.89735 8.33912 2.98633 8.48438C3.1185 8.70006 3.29994 8.8815 3.51563 9.01367C3.66088 9.10265 3.86674 9.17185 4.26758 9.20996C4.67964 9.24912 5.21545 9.25 6 9.25C6.78455 9.25 7.32036 9.24912 7.73242 9.20996C8.13326 9.17185 8.33912 9.10265 8.48438 9.01367C8.70006 8.8815 8.8815 8.70006 9.01367 8.48438C9.10265 8.33912 9.17185 8.13326 9.20996 7.73242C9.24912 7.32036 9.25 6.78455 9.25 6C9.25 5.21545 9.24912 4.67964 9.20996 4.26758C9.17185 3.86674 9.10265 3.66088 9.01367 3.51563C8.8815 3.29994 8.70006 3.1185 8.48438 2.98633C8.33912 2.89735 8.13326 2.82815 7.73242 2.79004C7.32036 2.75088 6.78455 2.75 6 2.75ZM18 2.75C17.2154 2.75 16.6796 2.75088 16.2676 2.79004C15.8667 2.82815 15.6609 2.89735 15.5156 2.98633C15.2999 3.1185 15.1185 3.29994 14.9863 3.51563C14.8973 3.66088 14.8282 3.86674 14.79 4.26758C14.7509 4.67964 14.75 5.21545 14.75 6C14.75 6.78455 14.7509 7.32036 14.79 7.73242C14.8282 8.13326 14.8973 8.33912 14.9863 8.48438C15.1185 8.70006 15.2999 8.8815 15.5156 9.01367C15.6609 9.10265 15.8667 9.17185 16.2676 9.20996C16.6796 9.24912 17.2154 9.25 18 9.25C18.7846 9.25 19.3204 9.24912 19.7324 9.20996C20.1333 9.17185 20.3391 9.10265 20.4844 9.01367C20.7001 8.8815 20.8815 8.70006 21.0137 8.48438C21.1027 8.33912 21.1718 8.13326 21.21 7.73242C21.2491 7.32036 21.25 6.78455 21.25 6C21.25 5.21545 21.2491 4.67964 21.21 4.26758C21.1718 3.86674 21.1027 3.66088 21.0137 3.51563C20.8815 3.29994 20.7001 3.1185 20.4844 2.98633C20.3391 2.89735 20.1333 2.82815 19.7324 2.79004C19.3204 2.75088 18.7846 2.75 18 2.75Z"
      fill="#161616"
    />
  </svg>
);

const closeIcon = (
  <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
    <path
      d="M18 6L6 18M6 6l12 12"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

const Nav = ({ onToggleLanguage = () => {} }) => {
  const router = useRouter();
  const { language, t } = useTranslation();
  const buttonLabel =
    t("nav.languageToggleButton") ||
    (language === "en" ? "العربية" : "English");
  const [navIsSolid, setNavIsSolid] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleButtonRef = useRef(null);
  const mobileNavRef = useRef(null);
  const prevMenuOpenRef = useRef(isMenuOpen);

  useEffect(() => {
    if (typeof window === "undefined") {
      return undefined;
    }

    let isMounted = true;
    let ticking = false;

    const updateNavState = () => {
      if (!isMounted) {
        return;
      }

      const offset = window.scrollY || window.pageYOffset || 0;
      const nextIsSolid = offset > SCROLL_THRESHOLD;
      setNavIsSolid((current) =>
        current === nextIsSolid ? current : nextIsSolid,
      );
      ticking = false;
    };

    const onScroll = () => {
      if (ticking) {
        return;
      }
      ticking = true;
      window.requestAnimationFrame(updateNavState);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    updateNavState();

    return () => {
      isMounted = false;
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") {
      return undefined;
    }

    const offset = window.scrollY || window.pageYOffset || 0;
    const nextIsSolid = offset > SCROLL_THRESHOLD;
    setNavIsSolid((current) =>
      current === nextIsSolid ? current : nextIsSolid,
    );
    setIsMenuOpen(false);

    return undefined;
  }, [router.asPath]);

  useEffect(() => {
    if (prevMenuOpenRef.current === isMenuOpen) {
      return;
    }

    if (isMenuOpen) {
      const firstFocusable =
        mobileNavRef.current?.querySelector("a, button");
      firstFocusable?.focus();
    } else {
      toggleButtonRef.current?.focus();
    }

    prevMenuOpenRef.current = isMenuOpen;
  }, [isMenuOpen]);

  useEffect(() => {
    if (!isMenuOpen || typeof window === "undefined") {
      return undefined;
    }

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        event.preventDefault();
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isMenuOpen]);

  useEffect(() => {
    if (typeof document === "undefined") {
      return undefined;
    }

    const body = document.body;
    if (isMenuOpen) {
      body.classList.add("mobile-menu-open");
    } else {
      body.classList.remove("mobile-menu-open");
    }

    return () => {
      body.classList.remove("mobile-menu-open");
    };
  }, [isMenuOpen]);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const handleLanguageToggle = () => {
    setIsMenuOpen(false);
    onToggleLanguage();
  };

  const buildLinkProps = (link, isMobile) => {
    const isActive = router.pathname === link.href;
    const props = {
      className: `nav-link ${isActive ? "active" : ""}`,
      "aria-current": isActive ? "page" : undefined,
      onClick: isMobile ? closeMenu : undefined,
    };

    if (!isMobile) {
      props["data-aos"] = "fade-down";
      props["data-aos-duration"] = "1000";
      props["data-aos-delay"] = link.delay;
    }

    return props;
  };

  const renderNavLinks = (isMobile = false) => (
    <ul className={`navbar-nav${isMobile ? " navbar-nav--mobile" : ""}`}>
      {navLinks.map((link) => (
        <li className="nav-item" key={link.key}>
          <Link href={link.href} passHref {...buildLinkProps(link, isMobile)}>
            {t(`nav.links.${link.key}`)}
          </Link>
        </li>
      ))}
    </ul>
  );

  const navBgClassName = `navBg ${navIsSolid || isMenuOpen ? "navBg--solid" : "navBg--glass"}`;
  const mobileMenuLabel =
    t("nav.mobileMenu.label") ?? "Main navigation";
  const toggleLabel = isMenuOpen
    ? t("nav.mobileMenu.close") ?? "Close menu"
    : t("nav.mobileMenu.open") ?? "Open menu";

  return (
    <div className={`nav-shell ${isMenuOpen ? "is-menu-open" : ""}`}>
      <div className={navBgClassName}>
        <div className="container">
          <nav
            className={`navbar navbar-expand-lg p-3 d-flex justify-content-between ${
              language === "ar" ? "rtl-navbar" : ""
            }`}
            dir={language === "ar" ? "rtl" : "ltr"}>
            <div className="navbar__inner">
              <div
                className="d-flex align-items-center brand"
                data-aos="fade-right"
                data-aos-duration="2000">
                <Link href="/" passHref className="navbar-brand">
                  <Image
                    alt={t("nav.logoAlt")}
                    src={mylogo}
                    width={48}
                    height={48}
                    sizes="(min-width: 992px) 48px, 40px"
                    quality={70}
                    style={{ width: "100%", height: "auto", maxWidth: 48 }}
                    loading="eager"
                  />
                </Link>
                <div className="navtitle">{t("nav.brand")}</div>
              </div>
              <button
                type="button"
                ref={toggleButtonRef}
                className="navbar__toggle"
                aria-controls={MOBILE_NAV_ID}
                aria-expanded={isMenuOpen}
                aria-label={toggleLabel}
                onClick={toggleMenu}>
                {isMenuOpen ? closeIcon : menuIcon}
              </button>
            </div>

            <div
              className={`navbg-container ${
                language === "ar" ? "rtl-container" : ""
              }`}>
              {renderNavLinks(false)}
              <button
                type="button"
                className="btn lang-btn"
                onClick={handleLanguageToggle}
                aria-label={t("nav.languageToggleAria")}
                aria-pressed={language === "ar"}>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  focusable="false">
                  <path
                    d="M12.0576 1.75C14.2479 1.74999 15.9683 1.75012 17.3115 1.93066C18.6882 2.11575 19.7805 2.50313 20.6387 3.36133C21.4969 4.21953 21.8842 5.31182 22.0693 6.68848C22.2499 8.03174 22.25 9.75212 22.25 11.9424V12.0576C22.25 14.2479 22.2499 15.9683 22.0693 17.3115C21.8842 18.6882 21.4969 19.7805 20.6387 20.6387C19.7805 21.4969 18.6882 21.8842 17.3115 22.0693C15.9683 22.2499 14.2479 22.25 12.0576 22.25H11.9424C9.75212 22.25 8.03174 22.2499 6.68848 22.0693C5.31182 21.8842 4.21953 21.4969 3.36133 20.6387C2.50313 19.7805 2.11575 18.6882 1.93066 17.3115C1.75012 15.9683 1.74999 14.2479 1.75 12.0576V11.9424C1.74999 9.75213 1.75012 8.03174 1.93066 6.68848C2.11575 5.31182 2.50313 4.21953 3.36133 3.36133C4.21953 2.50313 5.31182 2.11575 6.68848 1.93066C8.03174 1.75012 9.75213 1.74999 11.9424 1.75H12.0576ZM12 3.25C9.73963 3.25 8.1196 3.25137 6.8877 3.41699C5.67747 3.57972 4.9549 3.88885 4.42188 4.42188C3.88885 4.9549 3.57972 5.67747 3.41699 6.8877C3.25137 8.1196 3.25 9.73963 3.25 12C3.25 14.2604 3.25137 15.8804 3.41699 17.1123C3.57972 18.3225 3.88885 19.0451 4.42188 19.5781C4.9549 20.1111 5.67747 20.4203 6.8877 20.583C8.1196 20.7486 9.73963 20.75 12 20.75C14.2604 20.75 15.8804 20.7486 17.1123 20.583C18.3225 20.4203 19.0451 20.1111 19.5781 19.5781C20.1111 19.0451 20.4203 18.3225 20.583 17.1123C20.7486 15.8804 20.75 14.2604 20.75 12C20.75 9.73963 20.7486 8.1196 20.583 6.8877C20.4203 5.67747 20.1111 4.9549 19.5781 4.42188C19.0451 3.88885 18.3225 3.57972 17.1123 3.41699C15.8804 3.25137 14.2604 3.25 12 3.25ZM11.5 6.25C11.9142 6.25 12.25 6.58579 12.25 7V7.62891H17C17.4141 7.62891 17.7498 7.96488 17.75 8.37891C17.75 8.79312 17.4142 9.12891 17 9.12891H15.0537C14.5145 10.7297 13.6125 12.2286 12.5986 13.5645L14.0762 15.1006C14.3633 15.3991 14.3541 15.874 14.0557 16.1611C13.7571 16.4483 13.2823 16.4391 12.9951 16.1406L11.6475 14.7393C10.7276 15.8079 9.76355 16.758 8.90039 17.5518C8.59552 17.8321 8.1212 17.8126 7.84082 17.5078C7.56057 17.203 7.58024 16.7287 7.88477 16.4482C8.76141 15.6421 9.72982 14.6832 10.6357 13.6143C10.4072 13.3273 10.1707 13.0162 9.9541 12.7158C9.61732 12.2488 9.28875 11.7553 9.12695 11.4082C8.95198 11.0328 9.11484 10.5861 9.49023 10.4111C9.86567 10.2362 10.3123 10.399 10.4873 10.7744C10.5828 10.9791 10.8331 11.3704 11.1709 11.8389C11.3064 12.0268 11.4494 12.2193 11.5928 12.4053C12.355 11.368 13.0108 10.2651 13.457 9.12891H7C6.58579 9.12891 6.25 8.79312 6.25 8.37891C6.25022 7.96488 6.58592 7.62891 7 7.62891H10.75V7C10.75 6.58579 11.0858 6.25 11.5 6.25Z"
                    fill="#ffffff"
                  />
                </svg>
                {buttonLabel}
              </button>
            </div>
          </nav>
        </div>
      </div>

      <div
        className={`navbar__backdrop ${isMenuOpen ? "is-open" : ""}`}
        onClick={closeMenu}
        aria-hidden="true"
      />

      <nav
        id={MOBILE_NAV_ID}
        ref={mobileNavRef}
        className={`navbar__mobile ${isMenuOpen ? "is-open" : ""}`}
        role="dialog"
        aria-modal="true"
        aria-hidden={!isMenuOpen}
        aria-label={mobileMenuLabel}
        dir={language === "ar" ? "rtl" : "ltr"}>
        {renderNavLinks(true)}
      </nav>
    </div>
  );
};

export default Nav;
