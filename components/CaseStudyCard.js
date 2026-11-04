import Image from "next/image";
import Link from "next/link";

const CaseStudyCard = ({ card, priority = false }) => (
  <div className="caseStudy m-1 mx-0">
    <div className="caseStudy__img">
      <Image
        alt={card.coverAlt}
        src={card.image}
        priority={priority}
        sizes="(min-width: 992px) 50vw, 100vw"
        quality={75}
        style={{ height: "auto", width: "100%" }}
      />
    </div>
    <div className="caseStudy__description">
      {card.kicker ? <p className="case-studies__kicker">{card.kicker}</p> : null}
      <h2 className="title">{card.title}</h2>
      <p>{card.intro}</p>
      <ul className="blog-list">
        {card.features.map((feature) => (
          <li key={feature}>{feature}</li>
        ))}
      </ul>
      <p>{card.closing}</p>
      <Link href={card.href} className="btn btn-warning" aria-label={card.buttonAria}>
        {card.button}
      </Link>
    </div>
  </div>
);

export default CaseStudyCard;
