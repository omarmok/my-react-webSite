// Building blocks shared by the case study pages.
export const Section = ({ tone = "surface", label, title, children }) => (
  <section className={`cs-section cs-section--${tone}`}>
    <div className="site-container">
      <p className="cs-label">{label}</p>
      <h2 className="cs-title">{title}</h2>
      {children}
    </div>
  </section>
);

export const List = ({ items }) => (
  <ul className="cs-list">
    {items.map((item) => (
      <li key={item}>{item}</li>
    ))}
  </ul>
);

export const Glance = ({ title, items }) => (
  <section className="cs-glance" aria-labelledby="cs-glance-title">
    <div className="site-container">
      <h2 id="cs-glance-title" className="cs-glance__title">
        {title}
      </h2>
      <dl className="cs-glance__grid">
        {items.map(([term, detail]) => (
          <div key={term}>
            <dt>{term}</dt>
            <dd>{detail}</dd>
          </div>
        ))}
      </dl>
    </div>
  </section>
);
