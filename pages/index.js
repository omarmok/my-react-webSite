import React, { useEffect } from "react";
import Image from "next/image";
import photo from "../public/images/omar.png";

import {
  FaBehance,
  FaGithub,
  FaEnvelope,
  FaLinkedin,
  FaDownload,
} from "react-icons/fa";
import { useTranslation } from "../src/i18n/useTranslation";

// Inline SVGs for each stat — decorative, aria-hidden, currentColor
const STAT_ICONS = [
  // Calendar — Years Experience
  <svg
    key="years"
    className="hero-footer__icon"
    width="28"
    height="28"
    viewBox="0 0 24 24"
    fill="none"
    aria-hidden="true"
    focusable="false">
    <rect
      x="3"
      y="5"
      width="18"
      height="16"
      rx="2"
      stroke="currentColor"
      strokeWidth="2"
    />
    <path
      d="M8 3v4M16 3v4M3 10h18"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M8 14h3M8 17h6"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>,

  // Government building — UX Specialist
  <svg
    key="gov"
    className="hero-footer__icon"
    width="28"
    height="28"
    viewBox="0 0 24 24"
    fill="none"
    aria-hidden="true"
    focusable="false">
    <path
      d="M3 10h18L12 4 3 10Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinejoin="round"
    />
    <path
      d="M5 10v8M9 10v8M15 10v8M19 10v8"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M3 18h18M2 21h20"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>,

  // Layers / stack — Products Delivered
  <svg
    key="products"
    className="hero-footer__icon"
    width="28"
    height="28"
    viewBox="0 0 24 24"
    fill="none"
    aria-hidden="true"
    focusable="false">
    <path
      d="m12 3 8 4-8 4-8-4 8-4Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinejoin="round"
    />
    <path
      d="m4 12 8 4 8-4"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="m4 17 8 4 8-4"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>,

  // People — Cross-Functional Collaboration
  <svg
    key="collab"
    className="hero-footer__icon"
    width="28"
    height="28"
    viewBox="0 0 24 24"
    fill="none"
    aria-hidden="true"
    focusable="false">
    <circle cx="8" cy="8" r="3" stroke="currentColor" strokeWidth="2" />
    <circle cx="17" cy="7" r="2.5" stroke="currentColor" strokeWidth="2" />
    <path
      d="M3.5 20a4.5 4.5 0 0 1 9 0"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M14 18.5a3.5 3.5 0 0 1 7 0"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>,
];

export default function Home() {
  useEffect(() => {
    let cleanup = () => {};

    const enableTooltips = async () => {
      if (!document.querySelector('[data-bs-toggle="tooltip"]')) return;
      const bootstrap =
        await import("bootstrap/dist/js/bootstrap.bundle.min.js");
      const Tooltip = bootstrap.Tooltip || bootstrap.default?.Tooltip;
      if (!Tooltip) return;
      const instances = Array.from(
        document.querySelectorAll('[data-bs-toggle="tooltip"]'),
      ).map((el) => new Tooltip(el));
      cleanup = () => instances.forEach((i) => i.dispose?.());
    };

    let idleId;
    let timeoutId;
    if (typeof window !== "undefined" && "requestIdleCallback" in window) {
      idleId = window.requestIdleCallback(() => void enableTooltips());
    } else {
      timeoutId = window.setTimeout(() => void enableTooltips(), 200);
    }

    return () => {
      if (
        typeof window !== "undefined" &&
        idleId !== undefined &&
        "cancelIdleCallback" in window
      )
        window.cancelIdleCallback(idleId);
      if (timeoutId) window.clearTimeout(timeoutId);
      cleanup();
    };
  }, []);

  const { dictionary } = useTranslation();
  const { hero, paragraphs, focusAreas, stats, social, imageAlt } =
    dictionary.home;

  return (
    <main>
      <div className="container">
        <div className="index__details">
          <div className="row align-items-stretch g-0">
            {/* ── Left column: photo card ── */}
            <div className="col-lg-4 col-12">
              <div className="profile-left">
                <div className="home-image">
                  <div className="overlay" aria-hidden="true" />
                  <Image
                    alt={imageAlt}
                    src={photo}
                    loading="eager"
                    priority
                    quality={80}
                    sizes="(min-width: 1400px) 340px, (min-width: 1200px) 300px, (min-width: 992px) 280px, 100vw"
                    style={{ width: "100%", height: "100%", display: "block" }}
                  />
                  <div className="downloadresume">
                    <a
                      href="https://drive.google.com/file/d/1FdxcD3kPWXA-lyKWJLV3M8aLV6G1FGXo/view"
                      className="resume-cta"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={hero.downloadTitle}
                      title={hero.downloadTitle}>
                      <span className="resume-cta__label">
                        <FaDownload aria-hidden="true" focusable="false" />
                        {hero.downloadButton}
                      </span>
                      <span className="resume-cta__sub">
                        {hero.resumeSubtext}
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* ── Right column: content ── */}
            <div className="col-lg-8 col-12">
              <div className="hero-content">
                {/* 1 · Name + title */}
                <div className="title">
                  <h1 className="myname fw-bold">Omar Mokhtar</h1>
                  <span className="hero-role">{hero.role}</span>
                </div>

                {/* 2 · Expertise tags */}
                {Array.isArray(focusAreas) && focusAreas.length > 0 && (
                  <ul
                    className="home-expertise"
                    aria-label="Areas of expertise">
                    {focusAreas.map((tag) => (
                      <li key={tag} className="home-expertise__tag">
                        {tag}
                      </li>
                    ))}
                  </ul>
                )}

                {/* 3 · Professional summary */}
                <div className="hero-summary">
                  {paragraphs.map((paragraph, index) => (
                    <p key={`para-${index}`}>{paragraph.text}</p>
                  ))}
                </div>

                {/* 4 · Trust signal — Google UX credential */}
                <a
                  href="https://www.coursera.org/account/accomplishments/professional-cert/7HGU76DTMDGG"
                  className="googlecertificated"
                  target="_blank"
                  rel="noopener noreferrer"
                  title={hero.certificationTitle}
                  aria-label={`${hero.certificationTitle} — ${hero.certVerified}`}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="18"
                    viewBox="0 0 24 24"
                    width="18"
                    aria-hidden="true"
                    focusable="false"
                    style={{ flexShrink: 0 }}>
                    <path
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                      fill="#4285F4"
                    />
                    <path
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                      fill="#34A853"
                    />
                    <path
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                      fill="#FBBC05"
                    />
                    <path
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                      fill="#EA4335"
                    />
                    <path d="M1 1h22v22H1z" fill="none" />
                  </svg>
                  <span className="googlecertificated__title">
                    {hero.certificationBadge}
                  </span>
                  <span
                    className="googlecertificated__verified"
                    aria-label={hero.certVerified}>
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      aria-hidden="true"
                      focusable="false">
                      <circle cx="7" cy="7" r="7" fill="#22c55e" />
                      <path
                        d="M4 7l2 2.5L10 4.5"
                        stroke="#fff"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    {hero.certVerified}
                  </span>
                </a>

                {/* 5 · Stats + social */}
                <div className="hero-footer">
                  {/* Stat items with icons — drawn from translations */}
                  {Array.isArray(stats) && stats.length > 0 && (
                    <div
                      className="hero-footer__stats"
                      aria-label="Profile highlights">
                      {stats.map((stat, i) => (
                        <div key={`stat-${i}`} className="hero-footer__item">
                          {STAT_ICONS[i] ?? null}
                          <div className="hero-footer__item-text">
                            <span className="hero-footer__value">
                              {stat.value}
                            </span>
                            <span className="hero-footer__label">
                              {stat.label}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Social profile links */}
                  <nav className="hero-social" aria-label="Social profiles">
                    <a
                      href="https://www.linkedin.com/in/omarmokhtar22/"
                      aria-label={social.linkedin}
                      title={social.linkedin}>
                      <FaLinkedin aria-hidden="true" focusable="false" />
                    </a>
                    <a
                      href="https://www.behance.net/Omar_Mokhtar"
                      aria-label={social.behance}
                      title={social.behance}>
                      <FaBehance aria-hidden="true" focusable="false" />
                    </a>
                    <a
                      href="https://github.com/omarmok"
                      aria-label={social.github}
                      title={social.github}>
                      <FaGithub aria-hidden="true" focusable="false" />
                    </a>
                    <a
                      href="mailto:omarmokhtarayed@hotmail.com"
                      aria-label={social.email}
                      title={social.email}>
                      <FaEnvelope aria-hidden="true" focusable="false" />
                    </a>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
