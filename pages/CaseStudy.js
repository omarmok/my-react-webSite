import Link from "next/link";
import Image from "next/image";
import Loader from "../components/Loader";
import { useTranslation } from "../src/i18n/useTranslation";

/* ── shared values ─────────────────────────────────────────────────────── */
const purple = "#6b47f5";
const ink = "#0f172a";
const inkMid = "#334155";
const inkLight = "#64748b";
const border = "#e2e8f0";
const bg = "#f8f7ff";
const purpleLight = "#ede9fd";

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

const Wrap = ({ children, bg: background = "#fff", style = {} }) => (
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

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section
        style={{
          background: `linear-gradient(160deg, ${ink} 0%, #1e1654 100%)`,
          padding: "64px 0 48px",
        }}>
        <div style={{ width: "min(960px, 100% - 48px)", margin: "0 auto" }}>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 8,
              marginBottom: 24,
            }}>
            {cs.hero.tags.map((t) => (
              <span
                key={t}
                style={{
                  padding: "4px 12px",
                  borderRadius: 999,
                  border: "1px solid rgba(255,255,255,0.2)",
                  fontSize: 12,
                  fontWeight: 600,
                  color: "rgba(255,255,255,0.7)",
                  letterSpacing: "0.04em",
                }}>
                {t}
              </span>
            ))}
          </div>

          <h1
            style={{
              fontSize: "clamp(2rem, 5vw, 3.2rem)",
              fontWeight: 900,
              color: "#fff",
              lineHeight: 1.15,
              margin: "0 0 16px",
              maxWidth: "20ch",
            }}>
            {cs.hero.title}
          </h1>

          <p
            style={{
              fontSize: "clamp(15px, 2vw, 17px)",
              color: "rgba(255,255,255,0.6)",
              maxWidth: "52ch",
              lineHeight: 1.7,
              margin: "0 0 40px",
            }}>
            {cs.hero.subtitle}
          </p>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 32,
              borderTop: "1px solid rgba(255,255,255,0.12)",
              paddingTop: 28,
            }}>
            {cs.hero.meta.map(({ label, value }) => (
              <div key={label}>
                <div
                  style={{
                    fontSize: 11,
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                    color: "rgba(255,255,255,0.4)",
                    marginBottom: 4,
                  }}>
                  {label}
                </div>
                <div
                  style={{
                    fontSize: 14,
                    fontWeight: 700,
                    color: "rgba(255,255,255,0.85)",
                  }}>
                  {value}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HERO IMAGE ───────────────────────────────────────────────────── */}
      <div style={{ background: ink, padding: "0 24px 24px" }}>
        <div
          style={{
            width: "min(960px, 100%)",
            margin: "0 auto",
            height: 300,
            borderRadius: 12,
            overflow: "hidden",
            boxShadow: "0 24px 48px rgba(0,0,0,0.35)",
          }}>
          <Image
            src="/images/casstudymain.png"
            alt={cs.hero.imageAlt}
            width={960}
            height={540}
            style={{
              width: "100%",
              height: "300px",
              objectFit: "cover",
              display: "block",
            }}
            priority
          />
        </div>
      </div>

      {/* ── OVERVIEW ─────────────────────────────────────────────────────── */}
      <Wrap>
        <Label>{cs.overview.label}</Label>
        <H2>{cs.overview.h2}</H2>
        <Rule />

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
            gap: 36,
            alignItems: "start",
          }}>
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
                background: "#fff",
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

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "auto 1fr",
            gap: 32,
            alignItems: "start",
            background: bg,
            border: `1px solid ${border}`,
            borderRadius: 16,
            padding: "28px 28px",
          }}>
          <div
            style={{
              width: 72,
              height: 72,
              borderRadius: "50%",
              background: `linear-gradient(135deg, ${purple}, #9b72ff)`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 32,
              flexShrink: 0,
            }}>
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
      <Wrap bg="#fff">
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
            href="/Projects"
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
