import { useEffect, useId, useRef, useState } from "react";
import { FaDownload } from "react-icons/fa";
import { useTranslation } from "../src/i18n/useTranslation";

const resumeFiles = {
  pdf: "/docs/Omar-Mokhtar-CV.pdf",
  docx: "/docs/Omar-Mokhtar-CV.docx",
};

const ResumeDownloadMenu = ({ className = "" }) => {
  const { dictionary } = useTranslation();
  const { hero } = dictionary.home;
  const [isOpen, setIsOpen] = useState(false);
  const menuId = useId();
  const containerRef = useRef(null);
  const triggerRef = useRef(null);

  useEffect(() => {
    if (!isOpen) return undefined;

    const handlePointerDown = (event) => {
      if (containerRef.current?.contains(event.target)) return;
      setIsOpen(false);
    };

    const handleKeyDown = (event) => {
      if (event.key !== "Escape") return;
      event.preventDefault();
      setIsOpen(false);
      triggerRef.current?.focus();
    };

    document.addEventListener("mousedown", handlePointerDown);
    document.addEventListener("touchstart", handlePointerDown, { passive: true });
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("touchstart", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  const closeMenu = () => setIsOpen(false);
  const toggleMenu = () => setIsOpen((prev) => !prev);

  return (
    <div className={`resume-cta-menu ${className}`.trim()} ref={containerRef}>
      <button
        type="button"
        ref={triggerRef}
        className="resume-cta resume-cta--trigger"
        aria-haspopup="menu"
        aria-expanded={isOpen}
        aria-controls={menuId}
        aria-label={hero.downloadTitle}
        onClick={toggleMenu}
      >
        <span className="resume-cta__label">
          <FaDownload aria-hidden="true" focusable="false" />
          {hero.downloadButton} <span aria-hidden="true">▼</span>
        </span>
        <span className="resume-cta__sub">{hero.resumeSubtext}</span>
      </button>

      <ul
        id={menuId}
        role="menu"
        className={`resume-cta-menu__list ${isOpen ? "is-open" : ""}`}
        aria-label={hero.downloadButton}
      >
        <li role="none">
          <a
            role="menuitem"
            href={resumeFiles.pdf}
            download
            className="resume-cta-menu__item"
            onClick={closeMenu}
          >
            {hero.resumeOptionPdf}
          </a>
        </li>
        <li role="none">
          <a
            role="menuitem"
            href={resumeFiles.docx}
            download
            className="resume-cta-menu__item"
            onClick={closeMenu}
          >
            {hero.resumeOptionDocx}
          </a>
        </li>
      </ul>
    </div>
  );
};

export default ResumeDownloadMenu;
