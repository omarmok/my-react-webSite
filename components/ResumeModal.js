import { useEffect, useId, useRef } from "react";
import { useTranslation } from "../src/i18n/useTranslation";

const resumeFiles = {
  pdf: "/docs/Omar-Mokhtar-CV.pdf",
  docx: "/docs/Omar-Mokhtar-CV.docx",
};

// Download CV button that asks how to open the CV: download Word, or view the PDF in a new tab.
const ResumeModal = ({ className = "" }) => {
  const { dictionary } = useTranslation();
  const copy = dictionary.about;
  const dialogRef = useRef(null);
  const triggerRef = useRef(null);
  const titleId = useId();
  const descId = useId();

  // The native <dialog> owns open/closed state, so Esc, the close button and the backdrop stay in sync.
  const open = () => dialogRef.current?.showModal();
  const close = () => dialogRef.current?.close();

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return undefined;
    const returnFocus = () => triggerRef.current?.focus();
    dialog.addEventListener("close", returnFocus);
    return () => dialog.removeEventListener("close", returnFocus);
  }, []);

  return (
    <>
      <button
        type="button"
        ref={triggerRef}
        className={`page-header__action page-header__action--solid resume-modal__trigger ${className}`.trim()}
        aria-haspopup="dialog"
        aria-label={copy.downloadTitle}
        onClick={open}>
        {copy.downloadButton}
      </button>

      <dialog
        ref={dialogRef}
        className="resume-modal"
        aria-labelledby={titleId}
        aria-describedby={descId}
        onClick={(event) => {
          if (event.target === dialogRef.current) close();
        }}>
        <div className="resume-modal__panel">
          <div className="resume-modal__head">
            <h2 id={titleId}>{copy.modalTitle}</h2>
            <button
              type="button"
              className="resume-modal__close"
              aria-label={copy.modalClose}
              onClick={close}>
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <p id={descId} className="resume-modal__text">
            {copy.modalText}
          </p>
          <div className="resume-modal__options">
            <a
              href={resumeFiles.docx}
              download
              className="resume-modal__option"
              onClick={close}>
              <span className="resume-modal__option-title">{copy.modalWord}</span>
              <span className="resume-modal__option-meta">{copy.modalWordMeta}</span>
            </a>
            <a
              href={resumeFiles.pdf}
              target="_blank"
              rel="noopener noreferrer"
              className="resume-modal__option"
              onClick={close}>
              <span className="resume-modal__option-title">{copy.modalPdf}</span>
              <span className="resume-modal__option-meta">{copy.modalPdfMeta}</span>
            </a>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default ResumeModal;
