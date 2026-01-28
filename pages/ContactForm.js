import { useEffect } from "react";
import emailjs from "@emailjs/browser";
import Image from "next/image";
import Loader from "../components/Loader";
import whatsapp from "../public/images/whatsapp.png";
import { useTranslation } from "../src/i18n/useTranslation";

export default function ContactUs() {
  const { t } = useTranslation();

  useEffect(() => {
    emailjs.init({
      publicKey: "user_FqpqgfibDaKCa9ntDdSum",
    });
  }, []);

  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_a7ig5vj", // Service ID
        "template_5mipgzv", // Template ID
        e.target, // form element
        "user_FqpqgfibDaKCa9ntDdSum", // Public key
      )
      .then(
        () => {
          alert(t("contact.successAlert"));
          e.target.reset();
        },
        (error) => {
          console.error("FAILED:", error.text);
          alert(t("contact.failureAlert"));
        },
      );
  }

  return (
    <div>
      <Loader />
      <div className="container">
        <div className="page__container">
          <h1
            className="mainpagetitle"
            data-aos="fade-in"
            data-aos-duration="500">
            {t("contact.title")}
          </h1>

          <form
            onSubmit={sendEmail}
            className="bg-white p-5 contact"
            data-aos="fade-up"
            data-aos-duration="2000">

            <div className="d-flex align-items-center justify-content-between w-100">
              <div className="form-group w-100 m-2 mt-3 mb-5">
                <label>
                  {t("contact.form.name")} <span className="requierd">*</span>
                </label>
                <input type="text" className="form-control" name="name" required />
              </div>

              <div className="form-group w-100 m-2 mt-3 mb-5">
                <label>
                  {t("contact.form.email")} <span className="requierd">*</span>
                </label>
                <input type="email" className="form-control" name="email" required />
              </div>
            </div>

            <div className="form-group m-2 mt-3 mb-5">
              <label>
                {t("contact.form.subject")} <span className="requierd">*</span>
              </label>
              <input
                type="text"
                className="form-control"
                name="subject"
                placeholder={t("contact.form.subjectPlaceholder")}
                required
              />
            </div>

            <div className="form-group m-2 mt-3 mb-5">
              <label>
                {t("contact.form.message")} <span className="requierd">*</span>
              </label>
              <textarea
                className="form-control"
                name="message"
                cols="30"
                rows="8"
                required></textarea>
            </div>

            <div className="pt-3 mx-auto m-2">
              <input
                type="submit"
                className="btn"
                aria-label={t("contact.form.submitAria")}
                value={t("contact.form.submitButton")}
              />
            </div>
          </form>

          <div className="whatsapp">
            <p>{t("contact.whatsapp")}</p>
            <div className="whimage">
              <a
                href="https://wa.me/966535468309"
                aria-label={t("contact.whatsappAria")}
                rel="noreferrer noopener"
                target="_blank">
                <Image
                  alt="WhatsApp"
                  src={whatsapp}
                  width={160}
                  height={160}
                  sizes="160px"
                  style={{ width: "100%", height: "auto" }}
                  quality={70}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
