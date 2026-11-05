# Design System Governance Model

نموذج حوكمة نظام التصميم

This document defines the ownership, decision authority, and governance workflow of the Public Security Design System, and explains how changes move from idea to production.  
توضح هذه الوثيقة ملكية نظام التصميم بالأمن العام، وسلطة اتخاذ القرار، وآلية الحوكمة التي تنظم انتقال التغييرات من الفكرة إلى بيئة الإنتاج.

---

## Single Source of Truth

## المصدر الوحيد للحقيقة

- The authoritative documentation lives in `DesignSystemDocumentation/`, in addition to onboarding materials under `docs/overview/`.
- التوثيق الرسمي والمعتمد موجود داخل مجلد `DesignSystemDocumentation/`، بالإضافة إلى ملفات بدء الاستخدام في `docs/overview/`.

- Legacy `.html` pages outside these folders are considered deprecated. Any updates must be applied to the canonical documentation unless an explicit exception is approved.
- تعتبر صفحات `.html` القديمة خارج هذه المجلدات منتهية الصلاحية (Deprecated)، ولا يُسمح بأي تعديل إلا داخل التوثيق الرسمي، ما لم يتم اعتماد استثناء صريح.

---

## System Ownership

## ملكية النظام

- **Design System Owner:** Omar Mokhtar (عمر مختار) – UX Team Lead – Public Security
- **مالك نظام التصميم:** عمر مختار – قائد فريق تجربة المستخدم – الأمن العام

Responsibilities and authority:  
الصلاحيات والمسؤوليات:

- Holds final decision-making authority over visual design, component APIs, tokens, and governance policies.
- يمتلك الصلاحية النهائية لاعتماد التصميم البصري، وواجهات المكونات، والـ Tokens، وسياسات الحوكمة.

- Approves all breaking changes, governance updates, escalations, and exception requests.
- يعتمد جميع التغييرات الجذرية (Breaking Changes)، وتحديثات الحوكمة، وطلبات الاستثناء والتصعيد.

- Ensures accessibility, security, and enterprise/government compliance across all releases.
- يضمن الالتزام بمعايير الوصول (Accessibility)، والأمن، ومتطلبات الجهات الحكومية والمؤسسية في جميع الإصدارات.

---

## Roles & Responsibilities

## الأدوار والمسؤوليات

- **DesignOps Working Group**  
  Designers and engineers responsible for reviews, documentation health, and escalation triage. Known gaps (such as missing members) are tracked via the governance board.  
  فريق من المصممين والمطورين مسؤول عن المراجعة، واستمرارية التوثيق، ومعالجة التصعيدات. يتم تتبع الفجوات المعروفة عبر لوحة الحوكمة.

- **Contributors**  
  Any individual proposing changes to design, code, or documentation across product teams.  
  أي شخص يقترح تغييرًا في التصميم أو الكود أو التوثيق من فرق المنتجات المختلفة.

- **Consumers**  
  Product and delivery teams that consume and build on top of the design system.  
  فرق التنفيذ والمنتجات التي تعتمد على نظام التصميم في بناء الأنظمة.

- **Documentation Stewards**  
  Ensure documentation remains synchronized with the codebase prior to releases.  
  مسؤولون عن ضمان تطابق التوثيق مع الكود قبل أي إصدار.

---

## Versioning & Releases

## الإصدارات وإدارتها

The design system follows **Semantic Versioning (SemVer)**: `<MAJOR>.<MINOR>.<PATCH>`.  
يعتمد نظام التصميم على **الإصدارات الدلالية (SemVer)**: `<MAJOR>.<MINOR>.<PATCH>`.

- `MAJOR`: Breaking changes requiring manual updates. Owner approval is mandatory.
- `MAJOR`: تغييرات جذرية تتطلب تعديلات يدوية، ولا تعتمد إلا بموافقة المالك.

- `MINOR`: New features, non-breaking variants, or documented foundation extensions.
- `MINOR`: ميزات جديدة أو إضافات غير مؤثرة على التوافق.

- `PATCH`: Bug fixes, documentation updates, and dependency changes.
- `PATCH`: إصلاحات أخطاء، تحسينات توثيق، أو تحديثات اعتمادات.

All releases are documented in `CHANGELOG.md` and communicated via the DesignOps working group.  
يتم توثيق جميع الإصدارات في `CHANGELOG.md` والتواصل بشأنها عبر فريق DesignOps.

---

## Breaking Change Policy

## سياسة التغييرات الجذرية

A change is considered breaking when consumers must modify existing markup, tokens, classes, or behavior.  
يُعد التغيير جذريًا إذا تطلب من الفرق تعديل الكود أو الـ Tokens أو السلوك الحالي.

Examples include:  
أمثلة على ذلك:

- Renaming or removing `.moi-btn--Primary`
- Changing `$Primary-500` token naming
- Altering required `aria` attributes

Breaking changes must:  
يجب على التغييرات الجذرية:

- Be submitted via the governance issue template
- Undergo working group review
- Receive final approval from the Design System Owner
- Include migration guidance and a deprecation timeline

---

## Contribution & Review Workflow

## آلية المساهمة والمراجعة

1. **Proposal**  
   Open an issue using the appropriate template (bug, feature, documentation).  
   فتح تذكرة باستخدام النموذج المناسب (خطأ، ميزة، توثيق).

2. **Triage**  
   Scope, risk, and documentation impact are reviewed by the working group.  
   مراجعة النطاق والمخاطر وتأثير التوثيق.

3. **Implementation**  
   Implement changes against `main` and update canonical documentation.  
   تنفيذ التغيير مع تحديث التوثيق الرسمي.

4. **Testing**  
   Validate locally; documentation changes should include screenshots or notes when applicable.  
   التحقق محليًا، مع إرفاق صور أو ملاحظات للتوثيق عند الحاجة.

5. **Pull Request & Review**  
   Requires at least one designer and one engineer approval.  
   يتطلب اعتماد مصمم ومطور على الأقل.

6. **Final Approval**  
   Omar Mokhtar reviews breaking, governance, and major changes before merge.  
   يراجع عمر مختار التغييرات الجذرية والحوكمية قبل الدمج.

7. **Release**  
   Merge, tag, and update `CHANGELOG.md`.  
   الدمج، إنشاء الإصدار، وتحديث سجل التغييرات.

---

## Documentation Update Rules

## قواعد تحديث التوثيق

- All changes must update the canonical documentation.
- أي تغيير يجب أن ينعكس في التوثيق الرسمي.

- Documentation must include usage rules, token references, and accessibility notes.
- يجب أن يتضمن التوثيق قواعد الاستخدام وربط الـ Tokens وإرشادات الوصول.

- Known gaps (e.g., missing UI Kit links) must be explicitly documented.
- يجب توثيق الفجوات المعروفة بوضوح داخل الصفحات.

---

## Exception & Escalation Process

## آلية الاستثناء والتصعيد

When standard workflow cannot be followed:  
في حال تعذر اتباع المسار المعتاد:

1. Document the business justification, scope, and duration.
2. Submit an exception request to the working group.
3. Escalate to **Omar Mokhtar** if unresolved.

Exception approvals are temporary, scoped, and reviewed during retrospectives to prevent system drift.  
الاستثناءات مؤقتة ومحدودة النطاق، ويتم مراجعتها لاحقًا لضمان عدم انحراف النظام.

---
