# Changelog

سجل التغييرات

All notable changes to this Design System are documented in this file.  
جميع التغييرات الجوهرية في نظام التصميم يتم توثيقها في هذا الملف.

The format follows **Keep a Changelog** and adheres to **Semantic Versioning (SemVer)**.  
يعتمد هذا الملف على معيار **Keep a Changelog** ويلتزم بمبادئ **الإصدارات الدلالية (SemVer)**.

---

## [Unreleased]

### Added

- Governance, contribution, and onboarding documentation authored and maintained by **Omar Mokhtar Ayed (UX Team Lead & Design System Owner)**, establishing a clear single source of truth via the canonical documentation directory (`DesignSystemDocumentation/`).
- إضافة وثائق الحوكمة والمشاركة وبدء الاستخدام، بإشراف وإدارة **عمر مختار (قائد تجربة المستخدم ومالك نظام التصميم)**، مع اعتماد مجلد التوثيق الرسمي كمصدر وحيد للحقيقة.

- Developer and designer getting-started guides defining dependencies, token usage rules, component consumption standards, and strict non-customization principles.
- أدلة بدء الاستخدام للمطورين والمصممين، توضح الاعتمادات، واستخدام الـ Tokens، وقواعد استهلاك المكونات، ومنع التخصيص خارج النظام.

- Expanded foundations and component documentation (Colors, Typography, Spacing, Shadows, Iconography, Alerts, Tags, Text Fields, Switches, Steppers), including:
  - Usage rules
  - Accessibility guidance
  - Developer-facing APIs
  - Copy-ready examples
- توسيع توثيق الأسس والمكونات (الألوان، الخطوط، المسافات، الظلال، الأيقونات، التنبيهات، الوسوم، الحقول النصية، المفاتيح، الخطوات) مع:
  - قواعد الاستخدام
  - إرشادات الوصول Accessibility
  - واجهات برمجية للمطورين
  - أمثلة جاهزة للاستخدام

### Changed

- Reinforced all README files and documentation links to explicitly point to the canonical `DesignSystemDocumentation/` directory as the only supported reference.
- تعزيز جميع ملفات README والروابط لتشير بوضوح إلى مجلد التوثيق الرسمي كمصدر معتمد وحيد.

- Marked legacy root-level HTML pages (`alert.html`, `layout.html`, `spacing.html`, `shadows.html`, `stepper.html`, `index.html`, `Switch.html`) as **deprecated**, with updated messaging directing users to the canonical documentation.
- تعليم صفحات HTML القديمة بأنها **منتهية الصلاحية (Deprecated)** مع توجيه المستخدمين للتوثيق الرسمي.

- Updated governance documentation to explicitly define:
  - Versioning strategy
  - Breaking-change policy
  - Documentation update requirements
  - Exception and escalation workflow under design system ownership
- تحديث وثائق الحوكمة لتوضيح:
  - سياسة الإصدارات
  - التغييرات الجذرية (Breaking Changes)
  - إلزامية تحديث التوثيق
  - آلية الاستثناءات والتصعيد تحت إشراف مالك النظام

### Known Gaps

- The shared Designer UI Kit (e.g., Figma or Sketch library) does not yet have a published canonical location and is considered a known gap until formally linked.
- مكتبة واجهة المستخدم للمصممين (مثل Figma أو Sketch) لم يتم نشر رابطها الرسمي بعد وتُعد فجوة معروفة مؤقتًا.

- Additional tokens, icons, and interaction patterns may be introduced in future releases and will require corresponding documentation updates.
- قد تتم إضافة Tokens وأيقونات وأنماط تفاعل جديدة مستقبلًا، مع إلزامية توثيقها بشكل متزامن.

---

## [0.1.0] – 2026-01-25

### Added

- **Initial Governance and Ownership Definition**
  - `README.md`: Established the design system documentation as the single source of truth and clarified project status.
  - `GOVERNANCE.md`: Defined system ownership (**Omar Mokhtar Ayed – UX Team Lead**), roles, responsibilities, versioning rules, and review workflows.
  - `CONTRIBUTING.md`: Documented the official process for reporting issues and proposing enhancements.
  - `CHANGELOG.md`: Introduced this file to ensure transparent tracking of all future changes.

- **Developer and Designer Onboarding**
  - Created `docs/overview/getting-started-developers.md`.
  - Created `docs/overview/getting-started-designers.md`.

- **إرساء الحوكمة وتحديد الملكية**
  - تحديد أن **عمر مختار** هو المالك الرسمي لنظام التصميم وصاحب القرار النهائي.
  - إنشاء هيكل واضح للحوكمة، والمراجعة، واعتماد التغييرات.

### Changed

- **Project Status**
  - Formally designated the design system as **v0.1.0-alpha**, indicating an initial governance-first release.
- **حالة المشروع**
  - اعتماد النظام كنسخة **Alpha** تركز على الحوكمة قبل التوسع في المكونات.

### Known Gaps

- This initial release focused on governance and structure; component-level documentation, token mappings, and developer APIs were not yet finalized.
- الإصدار الأول ركّز على الحوكمة والبنية، دون اكتمال توثيق المكونات أو ربط الـ Tokens.

- Legacy documentation pages had not yet been fully removed or redirected.
- الصفحات القديمة لم تكن قد أُزيلت أو أُعيد توجيهها بعد.

- The designer UI Kit had not been linked or audited.
- مكتبة المصممين لم يتم ربطها أو مراجعتها بعد.

- JavaScript dependencies had not yet undergone a full audit.
- لم يتم بعد إجراء مراجعة شاملة لاعتمادات JavaScript.

---
