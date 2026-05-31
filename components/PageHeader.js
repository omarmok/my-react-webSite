import Link from "next/link";

const isExternalHref = (href = "") =>
  typeof href === "string" && /^(https?:)?\/\//.test(href);

const ActionLink = ({ action }) => {
  const {
    href = "#",
    label,
    ariaLabel,
    variant = "solid",
    rel,
    target,
  } = action;
  const className = `page-header__action page-header__action--${variant === "ghost" ? "ghost" : "solid"}`;
  const safeRel =
    target === "_blank" && !rel ? "noopener noreferrer" : rel || undefined;

  if (isExternalHref(href)) {
    return (
      <a
        href={href}
        className={className}
        aria-label={ariaLabel}
        target={target}
        rel={safeRel}>
        {label}
      </a>
    );
  }

  return (
    <Link href={href} className={className} aria-label={ariaLabel}>
      {label}
    </Link>
  );
};

const PageHeader = ({
  eyebrow,
  title,
  description,
  tags = [],
  meta = [],
  actions = [],
}) => {
  const lines = Array.isArray(description)
    ? description.filter(Boolean)
    : description
      ? [description]
      : [];

  return (
    <header className="page-header">
      <div className="page-header__inner">
        {eyebrow ? <p className="page-header__eyebrow">{eyebrow}</p> : null}

        {Array.isArray(tags) && tags.length > 0 ? (
          <ul className="page-header__tags" aria-label={`${title} tags`}>
            {tags.map((tag) => (
              <li className="page-header__tag" key={tag}>
                {tag}
              </li>
            ))}
          </ul>
        ) : null}

        <h1 className="page-header__title">{title}</h1>

        {lines.length > 0 ? (
          <div className="page-header__description">
            {lines.map((line, index) => (
              <p key={`${title}-desc-${index}`}>{line}</p>
            ))}
          </div>
        ) : null}

        {Array.isArray(actions) && actions.length > 0 ? (
          <div className="page-header__actions">
            {actions.map((action) => (
              <ActionLink
                action={action}
                key={`${action.href}-${action.label}`}
              />
            ))}
          </div>
        ) : null}

        {Array.isArray(meta) && meta.length > 0 ? (
          <dl className="page-header__meta">
            {meta.map(({ label, value }) => (
              <div className="page-header__meta-item" key={label}>
                <dt className="page-header__meta-label">{label}</dt>
                <dd className="page-header__meta-value">{value}</dd>
              </div>
            ))}
          </dl>
        ) : null}
      </div>
    </header>
  );
};

export default PageHeader;
