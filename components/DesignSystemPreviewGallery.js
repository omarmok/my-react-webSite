import React, { useEffect, useState } from "react";
import Image from "next/image";

const overlayZIndex = 20050;

const DesignSystemPreviewGallery = ({
  items,
  highlightsTitle,
  highlights,
  closeLabel,
  openLabel,
}) => {
  const [activeIndex, setActiveIndex] = useState(null);

  useEffect(() => {
    if (activeIndex === null) {
      return undefined;
    }

    const previousOverflow = document.body.style.overflow;
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setActiveIndex(null);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeIndex]);

  return (
    <>
      <div className="ds-preview">
        <div className="ds-preview__grid">
          {items.map((item, index) => (
            <button
              key={item.alt}
              type="button"
              className="ds-preview__card"
              onClick={() => setActiveIndex(index)}
              aria-label={`${openLabel} ${index + 1}`}>
              <span className="ds-preview__frame">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  loading="lazy"
                  sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 33vw"
                  className="ds-preview__image"
                />
              </span>
            </button>
          ))}
        </div>

        <div className="ds-preview__highlights">
          <h3 className="ds-preview__highlights-title">{highlightsTitle}</h3>
          <div className="ds-preview__highlights-grid">
            {highlights.map((item) => (
              <div key={item} className="ds-preview__highlight-item">
                <span className="ds-preview__highlight-dot" aria-hidden="true" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {activeIndex !== null ? (
        <div
          className="ds-preview__lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={items[activeIndex].alt}
          onClick={(event) => {
            if (event.target === event.currentTarget) {
              setActiveIndex(null);
            }
          }}>
          <button
            type="button"
            className="ds-preview__lightbox-close"
            onClick={() => setActiveIndex(null)}
            aria-label={closeLabel}>
            ×
          </button>
          <div className="ds-preview__lightbox-content">
            <Image
              src={items[activeIndex].src}
              alt={items[activeIndex].alt}
              width={items[activeIndex].src.width}
              height={items[activeIndex].src.height}
              sizes="92vw"
              className="ds-preview__lightbox-image"
            />
          </div>
        </div>
      ) : null}

      <style jsx>{`
        .ds-preview {
          display: flex;
          flex-direction: column;
          gap: 28px;
        }

        .ds-preview__grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 24px;
        }

        .ds-preview__card {
          appearance: none;
          border: 1px solid rgba(15, 23, 42, 0.1);
          border-radius: 20px;
          background: #ffffff;
          padding: 10px;
          margin: 0;
          cursor: pointer;
          box-shadow: 0 10px 30px rgba(15, 23, 42, 0.06);
          transition:
            transform 0.22s ease,
            box-shadow 0.22s ease,
            border-color 0.22s ease;
          text-align: inherit;
          cursor: zoom-in;
        }

        .ds-preview__card:hover {
          transform: translateY(-4px);
          border-color: rgba(107, 71, 245, 0.24);
          box-shadow: 0 16px 36px rgba(15, 23, 42, 0.1);
        }

        .ds-preview__card:focus-visible,
        .ds-preview__lightbox-close:focus-visible {
          outline: 3px solid rgba(107, 71, 245, 0.35);
          outline-offset: 3px;
        }

        .ds-preview__frame {
          position: relative;
          display: block;
          width: 100%;
          aspect-ratio: 16 / 10;
          overflow: hidden;
          border-radius: 14px;
          background:
            linear-gradient(180deg, rgba(255, 255, 255, 0.95), rgba(248, 247, 255, 1));
        }

        .ds-preview__image {
          object-fit: cover;
          transition: transform 0.28s ease;
        }

        .ds-preview__card:hover .ds-preview__image {
          transform: scale(1.02);
        }

        .ds-preview__highlights {
          border: 1px solid rgba(15, 23, 42, 0.08);
          border-radius: 18px;
          background: #ffffff;
          padding: 22px;
          box-shadow: 0 8px 24px rgba(15, 23, 42, 0.04);
        }

        .ds-preview__highlights-title {
          margin: 0 0 16px;
          color: #0f172a;
          font-size: 1.05rem;
          font-weight: 800;
          line-height: 1.35;
        }

        .ds-preview__highlights-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 12px 18px;
        }

        .ds-preview__highlight-item {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          color: #334155;
          font-size: 0.96rem;
          line-height: 1.6;
        }

        .ds-preview__highlight-dot {
          width: 8px;
          height: 8px;
          margin-top: 9px;
          flex-shrink: 0;
          border-radius: 999px;
          background: #6b47f5;
        }

        .ds-preview__lightbox {
          position: fixed;
          inset: 0;
          z-index: ${overlayZIndex};
          background: rgba(15, 23, 42, 0.82);
          padding: 32px 20px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .ds-preview__lightbox-content {
          position: relative;
          width: min(1180px, 100%);
          max-height: calc(100vh - 96px);
          border-radius: 22px;
          overflow: hidden;
          border: 1px solid rgba(255, 255, 255, 0.16);
          box-shadow: 0 28px 60px rgba(0, 0, 0, 0.28);
          background: #ffffff;
        }

        .ds-preview__lightbox-image {
          display: block;
          width: 100%;
          height: auto;
          max-height: calc(100vh - 96px);
          object-fit: contain;
          background: #ffffff;
        }

        .ds-preview__lightbox-close {
          position: fixed;
          top: 20px;
          right: 20px;
          z-index: ${overlayZIndex + 1};
          width: 48px;
          height: 48px;
          border: 1px solid rgba(255, 255, 255, 0.24);
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.12);
          color: #ffffff;
          font-size: 1.75rem;
          line-height: 1;
          cursor: pointer;
          transition:
            background-color 0.2s ease,
            border-color 0.2s ease;
        }

        .ds-preview__lightbox-close:hover {
          background: rgba(255, 255, 255, 0.2);
          border-color: rgba(255, 255, 255, 0.36);
        }

        @media (max-width: 1023px) {
          .ds-preview__grid,
          .ds-preview__highlights-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        @media (max-width: 767px) {
          .ds-preview__grid,
          .ds-preview__highlights-grid {
            grid-template-columns: minmax(0, 1fr);
          }

          .ds-preview__card {
            padding: 8px;
          }

          .ds-preview__highlights {
            padding: 18px;
          }

          .ds-preview__lightbox {
            padding: 24px 12px;
          }

          .ds-preview__lightbox-content,
          .ds-preview__lightbox-image {
            max-height: calc(100vh - 72px);
          }

          .ds-preview__lightbox-close {
            top: 12px;
            right: 12px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .ds-preview__card,
          .ds-preview__image,
          .ds-preview__lightbox-close {
            transition: none;
          }
        }
      `}</style>
    </>
  );
};

export default DesignSystemPreviewGallery;
