# Getting Started for Designers

# البدء للمصممين

This guide helps designers understand the Public Security Design System's structure, principles, and how to use it effectively.  
يساعد هذا الدليل المصممين على فهم **نظام التصميم بالأمن العام** من حيث البنية، والمبادئ، وكيفية استخدامه بفعالية.

## Single Source of Truth

## المصدر الوحيد للحقيقة

All canonical guidance is inside `DesignSystemDocumentation/` and `docs/overview/`. Refer to these files before creating new patterns or updating layouts.  
كل التوجيهات الرسمية داخل `DesignSystemDocumentation/` و `docs/overview/`. الرجاء الرجوع إليها قبل إنشاء أنماط جديدة.

## Dependencies

## الاعتمادات

Design documentation pages load the same assets used by the platform. Designers should verify styles against the deps below:

- `css/bootstrap-v5.css`, `css/main.css`, `css/animate.css`, `css/font-awesome.min.css`, `css/slick.css`, `css/slick-theme.css`  
  تتضمن صفحات التوثيق نفس ملفات CSS التي يستخدمها النظام.
- `js/jquery-3.6.0.min.js`, `js/popper.min.js`, `js/bootstrap.min.js`, `js/slick.min.js`, `js/charts.js`, `js/app.js`, `icons.js`  
  السكربتات الرئيسية والرموز المشتركة تُحمَّل بنفس الترتيب لضمان توافق الـ DOM.

## Tokens & Foundations

## الرموز والأساسيات

- **Colors:** Use the ranges documented in `DesignSystemDocumentation/ColorSystem.html`. Adopt tokens like `primary`, `semantic-error`, and `neutral` inside your designs so developers can map them directly to `$Primary-*`, `$Error-*`, `$Neutral-*`.  
  استخدم الرموز المذكورة في صفحة نظام الألوان، وانقل الأسماء (مثل `primary-blue`, `semantic-error`) للمطابقة مع الـ SCSS.
- **Typography:** Respect the `font-*-*` mixins described in `css/helpers/_mixins.scss` and in the typography page. Apply text styles consistently for headlines, body copy, captions, and overlines.  
  التزم بمجموعة الأحجام `font-xs` إلى `font-7xl` وأوزان 400–700.
- **Spacing:** Stick to spacing tokens (`$padding-*-*`, `$gap-*-*`, `$margin-*-*`) so layouts align with the grid documented in `DesignSystemDocumentation/spacing.html`.  
  استخدم المسافات المعتمدة للهوامش والحشوات بدلاً من القيم الحرة.
- **Icons:** Reference names from `icons.svg` and use `data-icon="name"` in specs. Designers should call out icon IDs (without the `icon-` prefix) so engineers can pull the correct symbol from the sprite.  
  اذكر اسم الرمز (بدون البادئة `icon-`) في ملفات التصميم.

## How to Consume Components

## كيفية استخدام المكوّنات

- Start every composition by reviewing the component doc inside `DesignSystemDocumentation/` (Buttons, Alerts, Tags, Text Fields, Switch, Stepper, etc.).  
  ابدأ دائمًا بمراجعة صفحة المكوّن داخل `DesignSystemDocumentation/`.
- Respect the documented anatomy (wrapper, icon, helper text, actions) and copy the structure in your specs. Components update frequently, so reuse the documented variants instead of inventing new ones.  
  التزم ببنية المكوّن المتاحة، ولا تستحدث أنماطًا جديدة.
- Annotate artboards with token names (`$Primary-500`, `font-lg-500`, `padding-xl`), aria cues, and state descriptions to align with the developer docs.  
  حدد أسماء الرموز والسمات لتسريع التسليم للمطورين.

## What Not to Customize

## ما لا يجب تخصيصه

- Do not replace the IBM Plex Arabic or 29LT Bukra families defined in `css/helpers/_changeFont.scss` and `_fonts.scss`.  
  لا تغير العائلات الخطية المعتمدة.
- Avoid deviating from the color token palette or introducing non-documented variants.  
  لا تضف ألوانًا جديدة أو تعديلات غير موثقة.
- Don't remove focus outlines, ARIA hints, or helper text requirements.  
  لا تزيل حدود التركيز أو تعليمات الوصول.
- Refrain from suggesting layout tweaks that require overriding `main.css` or `_helpers.scss`; use spacing tokens instead.  
  استخدم الرموز المعتمدة للمسافات بدلًا من تعديل CSS.

## Known Gap

## فجوة معروفة

> The location of the shared UI Kit (Figma/Sketch/Adobe XD) is still undocumented. Designers must treat it as a known gap until a link is published here.  
> لا يزال رابط مكتبة التصميم المشتركة غير مدوّن؛ اعتبره فجوة معروفة حتى يتم إضافته.

## Proposing Changes

## اقتراح التعديلات

When you need new variants, workflow improvements, or governance updates, follow the workflow documented in `GOVERNANCE.md` and `CONTRIBUTING.md`.  
لحظة الاقتراحات الجديدة، اتبع آلية الحوكمة المذكورة في الملفات.

## Ownership

## الملكية

Design System Owner:  
**Omar Mokhtar Ayed (عمر مختار)**  
UX Team Lead – Public Security  
All design decisions and changes must align with the documented governance model.
