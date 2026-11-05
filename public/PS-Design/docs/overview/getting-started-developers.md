# Getting Started for Developers

# البدء للمطورين

This guide helps engineers integrate the Public Security Design System while honoring governance, tokens, and accessibility expectations.  
يساعد هذا الدليل المطورين على استخدام نظام التصميم مع الحفاظ على الحوكمة والرموز وإمكانية الوصول.

---

## Core Principles
## المبادئ الأساسية

1. **Tokens are mandatory.** Always use SCSS variables (colors, spacers, typography mixins) instead of hard-coded values.  
   الرموز هي المصدر الوحيد للقيم؛ لا تستخدم الثوابت في HTML أو CSS.
2. **Respect HTML structure.** Components rely on `.btn`, `.moi-alert`, `.form-control`, etc., for accessibility and interaction.  
   لا تلتف حول بنية HTML؛ التعديلات الصغيرة تؤثر على الوصول.
3. **Document with every change.** If you touch a component or token, update the canonical doc in `DesignSystemDocumentation/` and bump `CHANGELOG.md`.  
   كل تغيير في المكوّن يتطلب توثيقًا محدثًا.

---

## Dependencies
## الاعتمادات

### CSS
- `css/bootstrap-v5.css` – foundation utilities and reset.  
  يقدم الهيكل الأساسي والمساعدات من Bootstrap 5.
- `css/animate.css`, `css/slick.css`, `css/slick-theme.css`, `css/font-awesome.min.css` – shared helpers used by the platform and docs.  
  ملفات المساعدة المشتركة تُستخدم عبر النظام والأمثلة.
- `css/main.css` – compiled entry point that imports helpers, components, and tokens.  
  يشمل الأنماط الرئيسية، الطبقات، والرموز من المجلد `css/`.

### JavaScript
- `js/jquery-3.6.0.min.js`, `js/popper.min.js`, `js/bootstrap.min.js` – foundation scripts required by Bootstrap components.  
  تأسيسية بوتستراب لأنماط الجافاسكربت.
- `js/slick.min.js`, `js/charts.js`, `js/app.js` – feature scripts that power the dashboard and interactions.  
  السكربتات الخاصة بالخرائط، الرسوم، والتفاعلات.
- `icons.js`/`icons.svg` – loads the shared SVG sprite for every component that uses `data-icon`.  
  يحافظ على رموز SVG قابلة لإعادة الاستخدام.

Always include the CSS/JS files in the order shown above before adding component markup.

---

## Tokens & SCSS usage
## الرموز واستعمال SCSS

- **Colors:** Defined in `css/helpers/_variables.scss` (e.g., `$Primary-500`, `$Info-600`, `$Neutral-800`). Use the tokens from `DesignSystemDocumentation/ColorSystem.html` and never hard-code hex values.  
  الألوان من `css/helpers/_variables.scss` فقط، وراجع القوائم في `DesignSystemDocumentation/ColorSystem.html`.
- **Typography:** Leverage the mixins in `css/helpers/_mixins.scss` (`font-*-*`). Apply `<code>font-4xl-600</code>` or similar instead of inline font sizes.  
  فئات `font-*-*` توفر حجم ووزن موحدين.
- **Spacing:** Use token names such as `$padding-lg`, `$gap-md`, or `$margin-4xl` from the same `_variables.scss`. The spacing page (`DesignSystemDocumentation/spacing.html`) lists aliases like `$padding-14`.  
  استخدم رموز المسافات الموحدة بدلاً من القيم الثابتة.
- **Icon tokens:** The icon sprite IDs (without the `icon-` prefix) are documented in `icons.svg`. Render them through `icons.js` by adding `data-icon="name"` to an inline container.

---

## Consuming Components Safely
## استخدام المكوّنات بأمان

- Point at the canonical docs under `DesignSystemDocumentation/` for purpose, anatomy, variants, and developer API details before copying HTML.  
  راجع التوثيق الرسمي قبل نسخ أي بنية HTML.
- Use the documented classes in combination: `.btn` + `.moi-btn` + `.moi-btn--Primary`, `<div class="alert moi-alert">`, `.form-control`, `.moi-tag--Warning`, etc.  
  اضبط الفئات كما هو موثق لتجنب اختراق الأنماط.
- Preserve required ARIA roles and labels (`role="alert"`, `aria-live`, `aria-describedby`, `aria-label`).  
  لا تُزيل السمات الدلالية؛ فهي تؤمن الوصول.
- When building layouts, rely on `DesignSystemDocumentation/layout.html`, spacing tokens, and `css/_helpers.scss` rather than inventing new grids.  
  استخدم الانماط المتوفرة لهيكل الصفحات.

---

## What NOT to Customize
## ما لا يجب تخصيصه

- Do not override core palettes, fonts, or the `main.css` file.  
  لا تُعدِل الألوان الرسمية أو الخطوط أو ملف `main.css`.
- Avoid writing custom CSS that changes `.moi-btn`, `.moi-alert`, `.form-control`, `.moi-tag`, `.stepper`, or `.switch` behaviors. Request a new variant via `CONTRIBUTING.md` if needed.  
  لا تكسر الفئات الأساسية؛ قدّم طلبًا رسميًا.
- Do not introduce new token names or color families unrelated to the SCSS helpers.  
  لا تضف رموزًا أو ألوانًا غير موثقة.
- Do not bypass `icons.js` when rendering SVG icons; always refer to `icons.svg` IDs.  
  لا تعيد إنشاء الرموز من الصفر.

---

## Known Gap
## فجوة معروفة

> The shared UI kit (Figma/Sketch/Adobe XD) currently lacks a documented URL. Teams must treat it as a known gap until a link is published in this repo.  
> لا يزال رابط مكتبة التصميم (UI Kit) غير موثّق؛ اعتبره فجوة معروفة حتى يتم نشره.
