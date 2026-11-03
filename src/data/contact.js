// WhatsApp link used for Design System access requests (Home and /design-system).
const WHATSAPP_NUMBER = "966535468309";

const accessMessage = {
  en: "Hello Omar, I would like access to your Design System showcase.",
  ar: "مرحبًا عمر، أرغب في الحصول على صلاحية الوصول إلى عرض نظام التصميم.",
};

export const getWhatsAppAccessUrl = (language = "en") =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    accessMessage[language] ?? accessMessage.en,
  )}`;
