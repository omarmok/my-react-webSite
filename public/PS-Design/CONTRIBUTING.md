# How to Contribute
# كيفية المساهمة

We welcome contributions from anyone who cares about the Public Security Design System. To keep the system stable, governed, and audit-ready, follow the instructions below before making a change.

## Before You Start
## قبل أن تبدأ

- Review `GOVERNANCE.md` to understand the roles, responsibilities, versioning, breaking change policy, exception process, and documentation rules.  
  اطلع على ملف `GOVERNANCE.md` لفهم الأدوار والاستراتيجية والنُهج المتعلقة بالتوثيق.
- The canonical documentation exists at `DesignSystemDocumentation/` (plus `docs/overview/`). Non-canonical HTML files outside that folder are deprecated and kept only for reference. Always update the files inside the canonical folder.  
  التوثيق الرسمي موجود داخل `DesignSystemDocumentation/` و `docs/overview/`. لا تعدل الملفات المكررة في الجذر.
- Search issues, docs, and token catalogs to confirm the request is new. This prevents duplicate work and keeps the system lean.

## Reporting a Bug
## الإبلاغ عن خطأ

1. Open a new issue using the **Bug Report** template (link to the governance issue board).  
   افتح Issue باستخدام قالب **Bug Report**.
2. Provide: the version, steps to reproduce, expected vs actual behavior, and environment details (browser, OS, device). Screenshots or screen recordings are helpful.  
   ضمن كل المعلومات المطلوبة، وأرفق صورًا إن أمكن.
3. Mention whether the bug touches tokens, layout, or behavior; this helps classify the change as breaking or not.

## Proposing a Feature or Component
## اقتراح ميزة أو مكوّن جديد

1. Use the **Feature Request** template and focus on the underlying problem rather than a specific solution.  
   ركز على المشكلة وليس الحل.
2. Summarize how the new pattern will be discovered, reused, and validated.  
   وضّح كيف سيتفاعل المستخدم والمطور مع المكوّن أو النمط الجديد.
3. The working group evaluates feasibility, documentation needs, and accessibility impact before approval.

## Contribution Workflow
## سير عملية المساهمة

1. **Fork** the repository if you are not a direct collaborator.  
   أنشئ فرعًا جديدًا من `main` باسم واضح (`feature/`, `fix/`, `doc/`).
2. **Implement** the change: keep HTML structure intact, reuse existing tokens, and follow the documentation guidelines (see below). Do not override the `main.css`, `css/bootstrap-v5.css`, or core helper classes unless the change is explicitly scoped in the proposal.  
   لا تتجاوز الألوان أو الخطوط أو السلوكيات الأساسية.
3. **Test** locally and update or add relevant examples in `DesignSystemDocumentation/` or `__examples__/` as required.  
   احتفظ بالاختبارات اليدوية والمثال داخل المجلد المتفق عليه.
4. **Submit a Pull Request** linked to the issue and describe the change, testing steps, and documentation updates.  
   اربط الـ PR بـ Issue واكتب وصفًا واضحًا.
5. **Review**: at least one designer and one engineer from the working group must approve after verifying documentation, tokens, and accessibility.  
   التوثيق لا يُعتمد إلا بعد مراجعة فريق DesignOps.
6. **Owner Approval**: Omar Mokhtar signs off on breaking or high-impact changes before merging.

## Documentation Changes
## تعديلات التوثيق

Documentation is part of the product.
- Document component changes inside `DesignSystemDocumentation/` (foundation, component, and index pages).  
  سجّل كل تغيير في المجلد الأساسي.
- Include token mappings (colors, spacing, typography, icon names) and usage guidance (when to use, do/don’t, accessibility, RTL notes).  
  أدرج خرائط الرموز وتعليمات الاستخدام (متى تستخدم، ماذا لا تفعل، إمكانية الوصول، ملاحظات RTL).
- Link to `CONTRIBUTING.md`, `GOVERNANCE.md`, and `CHANGELOG.md` as needed.  
  أضف روابط للحوكمة والمساهمة وسجل التغييرات.
- Documentation-only changes are still reviewed, but the process is faster once the working group confirms accuracy.  
  التوثيق فقط يخضع لمراجعة أسرع.
- Update `CHANGELOG.md` with the release version and summary whenever you merge meaningful changes.

## What Not to Customize
## ما لا يجب تخصيصه

- Do not invent new color palettes, fonts, or token names. Use the SCSS variables in `css/helpers/_variables.scss` and typography helpers in `css/helpers/_mixins.scss`.  
  لا تضف ألوانًا أو خطوطًا جديدة.
- Avoid writing CSS overrides for `.btn`, `.form-control`, `.moi-alert`, or core helper classes. Extend the component via documented modifiers only.  
  لا تعدّل الأنماط الأساسية مباشرةً.
- Do not remove or replace icons without updating `icons.svg` and `icons.js`. Treat icons as a shared sprite with documented names.

## Exception & Escalation
## الاستثناءات والتصعيد

If you cannot wait for the regular cycle (e.g., a security requirement or enterprise directive):
1. Capture the business justification, scope, and duration in the exception request.  
   وثّق الحاجة والمدة والتأثير.
2. Share the request with the working group and await their feedback.  
   شارك الطلب مع مجموعة العمل للحصول على تعليقات سريعة.
3. If a solution is not reached, escalate to **Omar Mokhtar** for the final ruling.  
   في حال عدم الوصول لحل، اصعد القرار إلى عمر مختار.

## Ownership & Approval
## الملكية والموافقة

Design System Owner:  
**Omar Mokhtar (عمر مختار)**  
UX Team Lead – Public Security  
All contributions require final approval per the governance model.
