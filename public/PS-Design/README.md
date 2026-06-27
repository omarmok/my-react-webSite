# Public Security – Design System (Code name: AMN)

# نظام التصميم – الأمن العام (الاسم الرمزي: AMN)

**Version | الإصدار: 0.1.0-alpha**

The Public Security Design System is a governed UI framework built for enterprise and government-grade security platforms.  
It establishes a shared vocabulary for foundations, components, and governance rules to ensure consistency, accessibility, security, and auditability across all digital products.

نظام تصميم الأمن العام هو إطار واجهات مستخدم محكوم ومصمم للأنظمة الحكومية والمؤسسية.  
يهدف إلى توحيد المفاهيم الأساسية والمكونات وقواعد الحوكمة، لضمان الاتساق، وسهولة الوصول، والأمن، وقابلية التدقيق عبر جميع المنتجات الرقمية.

---

## Single Source of Truth

## المصدر الوحيد للحقيقة

The canonical documentation lives inside `DesignSystemDocumentation/`  
(starting at `DesignSystemDocumentation/index.html`).

This directory contains:

- Foundation guidance (colors, typography, spacing, tokens)
- Component specifications and usage rules
- Governance and policy references

Anything outside this directory (including legacy root-level `.html` files) is considered **deprecated** and retained for archival purposes only.

يوجد التوثيق الرسمي والمعتمد داخل مجلد `DesignSystemDocumentation/`  
(ويبدأ من `DesignSystemDocumentation/index.html`).

ويشمل هذا المجلد:

- توثيق الأسس (الألوان، الخطوط، المسافات، الـ Tokens)
- مواصفات المكونات وقواعد استخدامها
- مراجع الحوكمة والسياسات

أي ملفات خارج هذا المجلد (بما في ذلك صفحات `.html` القديمة في الجذر) تُعد **منتهية الصلاحية** وموجودة للأرشفة فقط.

Always reference:

- `DesignSystemDocumentation/`
- or the managed markdown files under `docs/overview/`

ويجب دائمًا الاعتماد على:

- `DesignSystemDocumentation/`
- أو ملفات Markdown المعتمدة داخل `docs/overview/`

---

## Governance & Ownership

## الحوكمة والملكية

- **Design System Owner:**  
  **Omar Mokhtar Ayed (عمر مختار)** – UX Team Lead – Public Security  
  (مالك نظام التصميم وقائد فريق تجربة المستخدم بالأمن العام)

  Omar holds final authority over:
  - Design system changes
  - Versioning decisions
  - Breaking changes
  - Governance exceptions

  يمتلك عمر مختار الصلاحية النهائية لاعتماد:
  - أي تغيير في نظام التصميم
  - قرارات الإصدارات
  - التغييرات الجذرية
  - الاستثناءات الخاصة بالحوكمة

- **DesignOps & Working Group:**  
  A cross-functional group of designers and engineers responsible for:
  - Day-to-day reviews
  - Documentation accuracy
  - Enforcing governance rules
  - Managing escalation and exception flows defined in `GOVERNANCE.md`

  فريق مشترك من المصممين والمطورين مسؤول عن:
  - المراجعات اليومية
  - سلامة التوثيق
  - تطبيق سياسات الحوكمة
  - إدارة التصعيد والاستثناءات وفق `GOVERNANCE.md`

---

## Getting Started

## البدء باستخدام النظام

- **Design System Introduction**  
  `DesignSystemDocumentation/index.html`  
  Provides the English/Arabic overview, token catalogs, and component matrix.  
  يقدم نظرة عامة ثنائية اللغة، مع كتالوج الـ Tokens وخريطة المكونات.

- **Getting Started for Designers**  
  `docs/overview/getting-started-designers.md`  
  Covers workflows, token usage, contribution expectations, and UX standards.  
  يشرح آلية العمل، استخدام الـ Tokens، ومتطلبات المساهمة للمصممين.

- **Getting Started for Developers**  
  `docs/overview/getting-started-developers.md`  
  Lists dependencies, token consumption rules, component APIs, and preservation constraints.  
  يوضح الاعتمادات، وقواعد استهلاك الـ Tokens، وواجهات المكونات، والقيود التقنية.

---

## Contribution & Release

## المساهمة والإصدارات

All contributions must follow the defined governance process.

- Start with `GOVERNANCE.md`  
  to understand ownership, roles, versioning rules, breaking change policy, and documentation requirements.

- Follow `CONTRIBUTING.md`  
  for issue reporting, proposals, branching strategy, and review workflow.

- Track every release and notable change in `CHANGELOG.md`,  
  following **Keep a Changelog** and **Semantic Versioning (SemVer)**.

تخضع جميع المساهمات لمسار الحوكمة المعتمد:

- ابدأ بقراءة `GOVERNANCE.md`  
  لفهم الملكية، والأدوار، وسياسات الإصدارات والتغييرات الجذرية.

- التزم بـ `CONTRIBUTING.md`  
  عند الإبلاغ عن المشكلات أو اقتراح التعديلات.

- يتم تسجيل جميع الإصدارات والتغييرات في `CHANGELOG.md`  
  وفق معيار Keep a Changelog والإصدارات الدلالية (SemVer).

---

## Status

## حالة النظام

This design system is currently in **ALPHA**.

Features, component APIs, tokens, and documentation may evolve between iterations.  
Teams must consult the governance owners before relying on undocumented or experimental behavior in production environments.

نظام التصميم حاليًا في مرحلة **ALPHA**.

قد تتغير الميزات، وواجهات المكونات، والـ Tokens، والتوثيق بين الإصدارات.  
يجب الرجوع لمالك النظام قبل الاعتماد على أي سلوك غير موثق في بيئات الإنتاج.

---
