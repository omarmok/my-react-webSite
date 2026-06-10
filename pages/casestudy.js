import Link from "next/link";
import Image from "next/image";
import Loader from "../components/Loader";
import PageHeader from "../components/PageHeader";
import { useTranslation } from "../src/i18n/useTranslation";

/* ── shared values ─────────────────────────────────────────────────────── */
const purple = "var(--theme-brand-primary)";
const ink = "var(--theme-text-primary)";
const inkMid = "var(--theme-text-secondary)";
const inkLight = "var(--theme-text-muted)";
const border = "var(--theme-border)";
const bg = "var(--theme-bg-subtle)";
const purpleLight = "var(--theme-brand-soft)";
const surface = "var(--theme-bg-surface)";
const card = "var(--theme-bg-card)";

/* ── tiny reusable pieces ──────────────────────────────────────────────── */
const Label = ({ children }) => (
  <p
    style={{
      fontSize: 12,
      fontWeight: 700,
      letterSpacing: "0.1em",
      textTransform: "uppercase",
      color: purple,
      margin: "0 0 10px",
      display: "flex",
      alignItems: "center",
      gap: 8,
    }}>
    <span
      style={{
        width: 20,
        height: 2,
        background: purple,
        display: "inline-block",
        borderRadius: 2,
        flexShrink: 0,
      }}
    />
    {children}
  </p>
);

const H2 = ({ children }) => (
  <h2
    style={{
      fontSize: "clamp(1.5rem, 3vw, 2rem)",
      fontWeight: 800,
      color: ink,
      margin: "0 0 20px",
      lineHeight: 1.25,
    }}>
    {children}
  </h2>
);

const Body = ({ children, style = {} }) => (
  <p
    style={{
      fontSize: 16,
      color: inkMid,
      lineHeight: 1.8,
      margin: "0 0 16px",
      maxWidth: "none",
      ...style,
    }}>
    {children}
  </p>
);

const Rule = () => (
  <div
    style={{
      width: 40,
      height: 3,
      background: purple,
      borderRadius: 3,
      margin: "0 0 28px",
    }}
  />
);

const Wrap = ({ children, bg: background = surface, style = {} }) => (
  <section style={{ background: background, padding: "48px 0", ...style }}>
    <div style={{ width: "min(960px, 100% - 48px)", margin: "0 auto" }}>
      {children}
    </div>
  </section>
);

const Dot = () => (
  <span
    style={{
      display: "inline-block",
      width: 6,
      height: 6,
      borderRadius: "50%",
      background: purple,
      flexShrink: 0,
      marginTop: 7,
    }}
  />
);

const BulletItem = ({ children }) => (
  <li
    style={{
      display: "flex",
      gap: 12,
      alignItems: "flex-start",
      fontSize: 15,
      color: inkMid,
      lineHeight: 1.7,
      marginBottom: 10,
      listStyle: "none",
      padding: 0,
    }}>
    <Dot />
    <span>{children}</span>
  </li>
);

/* ──────────────────────────────────────────────────────────────────────────
   MAIN
────────────────────────────────────────────────────────────────────────── */
const CaseStudy = () => {
  const { dictionary, language } = useTranslation();
  const cs = dictionary.caseStudyPage;
  const isRTL = language === "ar";

  return (
    <div className="page-container" dir={isRTL ? "rtl" : "ltr"}>
      <Loader />
      <PageHeader
        eyebrow={dictionary?.nav?.links?.caseStudy}
        title={cs.hero.title}
        description={cs.hero.subtitle}
        tags={cs.hero.tags}
        meta={cs.hero.meta}
      />

      {/* ── HERO IMAGE ───────────────────────────────────────────────────── */}
      <div className="case-study-hero-image-wrap">
        <div className="case-study-hero-image">
          <Image
            src="/images/casstudymain.png"
            alt={cs.hero.imageAlt}
            width={960}
            height={540}
            className="case-study-hero-image__media"
            priority
          />
        </div>
      </div>

      {/* ── OVERVIEW ─────────────────────────────────────────────────────── */}
      <Wrap>
        <Label>{cs.overview.label}</Label>
        <H2>{cs.overview.h2}</H2>
        <Rule />

        <div className="case-study-overview-grid">
          <div>
            <Body>{cs.overview.body1}</Body>
            <Body>{cs.overview.body2}</Body>
            <Body style={{ marginBottom: 0 }}>{cs.overview.body3}</Body>
          </div>

          <div
            style={{
              background: bg,
              border: `1px solid ${border}`,
              borderRadius: 14,
              padding: 24,
            }}>
            <div
              style={{
                fontWeight: 700,
                fontSize: 13,
                color: ink,
                marginBottom: 16,
                textTransform: "uppercase",
                letterSpacing: "0.06em",
              }}>
              {cs.overview.sidebarTitle}
            </div>
            <ul style={{ margin: 0, padding: 0 }}>
              {cs.overview.bullets.map((item) => (
                <BulletItem key={item}>{item}</BulletItem>
              ))}
            </ul>
          </div>
        </div>
      </Wrap>

      {/* ── THE PROBLEM ──────────────────────────────────────────────────── */}
      <Wrap bg={bg}>
        <Label>{cs.problem.label}</Label>
        <H2>{cs.problem.h2}</H2>
        <Rule />

        <Body style={{ maxWidth: "60ch" }}>{cs.problem.intro}</Body>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: 16,
            marginTop: 8,
          }}>
          {cs.problem.cards.map(({ title, body }) => (
            <div
              key={title}
              style={{
                background: card,
                border: `1px solid ${border}`,
                borderRadius: 12,
                padding: "20px 18px",
                borderTop: `3px solid ${purple}`,
              }}>
              <div
                style={{
                  fontWeight: 700,
                  fontSize: 15,
                  color: ink,
                  marginBottom: 8,
                }}>
                {title}
              </div>
              <div style={{ fontSize: 14, color: inkMid, lineHeight: 1.7 }}>
                {body}
              </div>
            </div>
          ))}
        </div>
      </Wrap>

      {/* ── STUDENT PERSONA ──────────────────────────────────────────────── */}
      <Wrap>
        <Label>{cs.persona.label}</Label>
        <H2>{cs.persona.h2}</H2>
        <Rule />

        <Body style={{ maxWidth: "60ch", marginBottom: 24 }}>
          {cs.persona.intro}
        </Body>

        <div className="case-study-persona-card">
          <div className="case-study-persona-avatar">
            👨‍🎓
          </div>

          <div>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                alignItems: "baseline",
                gap: 12,
                marginBottom: 6,
              }}>
              <span style={{ fontWeight: 800, fontSize: 20, color: ink }}>
                {cs.persona.name}
              </span>
              <span style={{ fontSize: 14, color: inkLight }}>
                {cs.persona.age}
              </span>
            </div>

            <p
              style={{
                fontSize: 14,
                color: inkMid,
                lineHeight: 1.75,
                margin: "0 0 20px",
                maxWidth: "none",
              }}>
              {cs.persona.desc}
            </p>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
                gap: 12,
              }}>
              {[
                { heading: cs.persona.needsHeading, items: cs.persona.needs },
                { heading: cs.persona.slowedHeading, items: cs.persona.slowed },
              ].map(({ heading, items }) => (
                <div key={heading}>
                  <div
                    style={{
                      fontSize: 12,
                      fontWeight: 700,
                      textTransform: "uppercase",
                      letterSpacing: "0.07em",
                      color: purple,
                      marginBottom: 10,
                    }}>
                    {heading}
                  </div>
                  <ul style={{ margin: 0, padding: 0 }}>
                    {items.map((item) => (
                      <li
                        key={item}
                        style={{
                          display: "flex",
                          gap: 10,
                          fontSize: 13,
                          color: inkMid,
                          lineHeight: 1.6,
                          marginBottom: 8,
                          listStyle: "none",
                          padding: 0,
                          alignItems: "flex-start",
                        }}>
                        <span
                          style={{
                            color: purple,
                            flexShrink: 0,
                            marginTop: 1,
                          }}>
                          ›
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Wrap>

      {/* ── UX DECISIONS ─────────────────────────────────────────────────── */}
      <Wrap bg={bg}>
        <Label>{cs.uxDecisions.label}</Label>
        <H2>{cs.uxDecisions.h2}</H2>
        <Rule />

        <Body style={{ maxWidth: "60ch", marginBottom: 8 }}>
          {cs.uxDecisions.intro}
        </Body>

        <div style={{ display: "flex", flexDirection: "column" }}>
          {cs.uxDecisions.items.map(({ title, body }, i) => (
            <div
              key={title}
              style={{
                display: "grid",
                gridTemplateColumns: "auto 1fr",
                gap: 20,
                padding: "24px 0",
                borderBottom:
                  i < cs.uxDecisions.items.length - 1
                    ? `1px solid ${border}`
                    : "none",
                alignItems: "flex-start",
              }}>
              <div
                style={{
                  width: 32,
                  height: 32,
                  borderRadius: 8,
                  background: purpleLight,
                  color: purple,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 13,
                  fontWeight: 800,
                  flexShrink: 0,
                }}>
                {String(i + 1).padStart(2, "0")}
              </div>
              <div>
                <div
                  style={{
                    fontWeight: 700,
                    fontSize: 16,
                    color: ink,
                    marginBottom: 8,
                  }}>
                  {title}
                </div>
                <div style={{ fontSize: 15, color: inkMid, lineHeight: 1.75 }}>
                  {body}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Wrap>

      {/* ── KEY FEATURES ─────────────────────────────────────────────────── */}
      <Wrap bg={surface}>
        <Label>{cs.features.label}</Label>
        <H2>{cs.features.h2}</H2>
        <Rule />

        <Body style={{ maxWidth: "60ch" }}>{cs.features.intro}</Body>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: 12,
            marginTop: 8,
          }}>
          {cs.features.items.map(({ icon, name, note }) => (
            <div
              key={name}
              style={{
                background: bg,
                border: `1px solid ${border}`,
                borderRadius: 10,
                padding: "14px 16px",
                display: "flex",
                gap: 12,
                alignItems: "flex-start",
              }}>
              <span style={{ fontSize: 20, flexShrink: 0, lineHeight: 1.4 }}>
                {icon}
              </span>
              <div>
                <div style={{ fontWeight: 700, fontSize: 14, color: ink }}>
                  {name}
                </div>
                <div
                  style={{
                    fontSize: 12,
                    color: inkLight,
                    marginTop: 2,
                    lineHeight: 1.5,
                  }}>
                  {note}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Wrap>

      {/* ── BOTTOM — CHECK WEBSITE ───────────────────────────────────────── */}
      <div style={{ padding: "28px 0 44px" }}>
        <div
          style={{
            width: "min(960px, 100% - 48px)",
            margin: "0 auto",
            display: "flex",
            gap: 12,
            flexWrap: "wrap",
            alignItems: "center",
          }}>
          <Link
            href="https://omarmok.github.io/studentCode/"
            className="btn "
            aria-label={cs.checkWebsiteAria}
            style={{ padding: "8px 18px" }}>
            {cs.checkWebsite}
          </Link>
          <Link
            href="/projects"
            className="btn outlinebtn"
            aria-label={cs.backAria}
            style={{ padding: "8px 18px" }}>
            {cs.back}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CaseStudy;
