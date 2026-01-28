import React from "react";
import Image from "next/image";
import Loader from "../components/Loader";
import { useTranslation } from "../src/i18n/useTranslation";

const blogImages = {
  levels:
    "https://s3.eu-north-1.amazonaws.com/cdn-site.mediaplanet.com/app/uploads/sites/105/2021/09/08000229/MainImage_A9-888x500.jpg",
  svg:
    "https://www.adobe.com/creativecloud/file-types/image/vector/media_1c840d54c0c6d35eb38bebd13dec2f908cf9a275e.png?width=2000&format=webply&optimize=medium",
};

const Blog = () => {
  const { dictionary, t } = useTranslation();
  const { posts, byLine } = dictionary.blog;

  return (
    <div>
      <Loader />

      <div className="container">
        <div className="page__container">
          {posts.map((post) => (
            <div
              className="mycard d-flex flex-column"
              data-aos="fade-up"
              data-aos-duration="2000"
              key={post.id}>
              <div className="hero-image-container mb-4">
                <Image
                  src={blogImages[post.id]}
                  alt={post.heroImageAlt}
                  width={800}
                  height={400}
                  className="hero-image"
                  quality={70}
                  sizes="(min-width: 1200px) 60vw, (min-width: 768px) 80vw, 100vw"
                  priority={false}
                  style={{
                    objectFit: "cover",
                    borderRadius: "8px",
                    width: "100%",
                    height: "auto",
                  }}
                />
              </div>

              <div className="blog-header mb-4">
                <h2 className="blog-title">{post.title}</h2>
                <div className="d-flex align-items-center">
                  <Image
                    src="/images/omar.png"
                    alt="Omar Mokhtar"
                    width={40}
                    height={40}
                    className="rounded-circle me-2"
                    style={{ objectFit: "cover" }}
                  />
                  <small className="text-muted">{byLine}</small>
                </div>
              </div>

              <div className="mycard__details flex-column">
                {post.intro.map((paragraph, index) => (
                  <p className="w-100 blog-content" key={`${post.id}-intro-${index}`}>
                    {paragraph}
                  </p>
                ))}

                {post.definitions && (
                  <ul className="blog-list">
                    {post.definitions.map((definition) => (
                      <li key={definition.heading}>
                        {definition.heading}
                        <br />
                        {definition.lines.map((line, lineIndex) => (
                          <React.Fragment key={`${definition.heading}-${lineIndex}`}>
                            {line}
                            <br />
                          </React.Fragment>
                        ))}
                        <em>{definition.example}</em>
                      </li>
                    ))}
                  </ul>
                )}

                {post.methods && (
                  <ul className="blog-list">
                    {post.methods.map((method) => (
                      <li key={method.heading}>
                        {method.heading}
                        <br />
                        <strong>{t("blog.positiveLabel")}</strong>
                        <br />
                        {method.positives.map((positive, idx) => (
                          <React.Fragment key={`${method.heading}-positive-${idx}`}>
                            {positive}
                            <br />
                          </React.Fragment>
                        ))}
                        <br />
                        <strong>{t("blog.negativeLabel")}</strong>
                        <br />
                        {method.negatives.map((negative, idx) => (
                          <React.Fragment key={`${method.heading}-negative-${idx}`}>
                            {negative}
                            <br />
                          </React.Fragment>
                        ))}
                      </li>
                    ))}
                  </ul>
                )}

                {post.conclusion && (
                  <ul className="conclusion-list">
                    {post.conclusion.map((entry) => (
                      <li key={entry.term} className="mb-3">
                        <strong>{entry.term}</strong> {entry.detail}
                      </li>
                    ))}
                  </ul>
                )}

                {post.closing &&
                  post.closing.map((paragraph, index) => (
                    <p
                      key={`${post.id}-closing-${index}`}
                      className="blog-content">
                      {paragraph}
                    </p>
                  ))}

                {post.arabicQuote && (
                  <div className="arabic-text text-center mt-4">
                    {post.arabicQuote.map((quoteLine, index) => (
                      <p
                        key={`${post.id}-arabic-${index}`}
                        className={index === 0 ? "mb-1" : ""}>
                        {quoteLine}
                      </p>
                    ))}
                  </div>
                )}

                <div className="text-center mt-4">
                  <a
                    href={post.ctaHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline-primary"
                    aria-label={post.ctaAria}>
                    {post.ctaText}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
