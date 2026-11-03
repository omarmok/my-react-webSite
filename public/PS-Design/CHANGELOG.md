# Changelog

سجل التغييرات

All notable changes to this Design System are documented in this file.  
جميع التغييرات الجوهرية في نظام التصميم يتم توثيقها في هذا الملف.

The format follows **Keep a Changelog** and adheres to **Semantic Versioning (SemVer)**.  
يعتمد هذا الملف على معيار **Keep a Changelog** ويلتزم بمبادئ **الإصدارات الدلالية (SemVer)**.

---

## [Unreleased]

### Changed

- Card (2026-11-03): `.moi-card__details-column` (with an s) is an alias of `.moi-card__detail-column`, and any direct child of `.moi-card__details` with `w-25` / `w-50` / `w-75` / `w-100` counts the gap (before, `w-50` + `w-50` + gap wrapped into one column per row); `.moi-card__detail-value` fills the rest of the item (min height = `.moi-btn` md), no white strip.
- Card (2026-11-03): `.moi-card__details-column` (بحرف s) اسم بديل لـ `.moi-card__detail-column`، وأي عنصر مباشر في `.moi-card__details` يحمل `w-25` / `w-50` / `w-75` / `w-100` يحسب الـ gap (كان `w-50` + `w-50` + gap يلتف عمودًا واحدًا في الصف)؛ و`.moi-card__detail-value` تملأ ما تبقى من العنصر (حد أدنى = ارتفاع `.moi-btn` md) فلا شريط أبيض.
- Card (2026-11-03): `.moi-card` padding is `padding-md`  instead of `padding-xl` ; `.moi-card__details` is always 100% of the card body (`flex: 0 0 100%`, `width: 100%`), so its column widths (default, `w-50` …) are shares of the full width.
- Card (2026-11-03): padding `.moi-card` صار `padding-md`  بدل `padding-xl` ؛ و`.moi-card__details` يأخذ 100% من عرض جسم البطاقة دائمًا (`flex: 0 0 100%` و`width: 100%`) فتحسب أعمدته (الافتراضي و`w-50` …) من العرض الكامل.
- Card docs (2026-11-03): new section «Detail columns and the gap between them» — elements and classes, column widths (4 / 2 / 1, `w-*` with the gap counted), example, and the no-padding rule.
- توثيق Card (2026-11-03): قسم جديد «أعمدة التفاصيل والمسافة بينها (gap)» — العناصر والفئات وعرض العمود (4 / 2 / 1 وفئات `w-*` بحساب الـ gap) ومثال وقاعدة عدم إضافة padding.
- Card (2026-11-03): new test in `index.html` for the details columns — default (4 per row) and `w-50` (2 per row) with mixed content.
- Card (2026-11-03): اختبار جديد في `index.html` لأعمدة التفاصيل — الافتراضي (4 في الصف) و`w-50` (2 في الصف) بمحتوى مختلف.
- Card (2026-11-03): detail columns use `gap: $gap-lg` on `.moi-card__details` instead of padding on `.moi-card__detail-column`; widths are the row share minus the gaps (4 / 2 / 1 columns), and `w-25` / `w-50` / `w-75` / `w-100` on the columns account for the gap.
- Card (2026-11-03): أعمدة تفاصيل البطاقة تأخذ مسافتها بـ `gap: $gap-lg` على `.moi-card__details` بدل padding على `.moi-card__detail-column`؛ والعرض حصة الصف بعد طرح الـ gap (4 / 2 / 1)، وفئات `w-25` و`w-50` و`w-75` و`w-100` على الأعمدة تحسب الـ gap.
- Entity (2026-11-03): new `Entity__card__Details--items` styles in `css/components/_card.scss` — label + value cards side by side keep the same height, the gray value box fills the card (no white gap), min-height the md button height, long values wrap; card padding is now `padding-md`. Documented on the Entity page; before / after test added to `index.html`.
- Entity (2026-11-03): أنماط جديدة للفئة `Entity__card__Details--items` في `css/components/_card.scss` — كروت (label + value) المتجاورة بنفس الارتفاع، والصندوق الرمادي يملأ الكارت دون فراغ أبيض، وحد أدنى the md button height، والقيم الطويلة تلتف؛ وpadding الكارت صار `padding-md`. وُثّق في صفحة Entity وأُضيف اختبار قبل / بعد في `index.html`.
- Sweet Alert docs (2026-11-03): the page now describes the rebuilt theme (`.swal2-container` scope, native buttons inheriting `.moi-btn` via `@extend`, legacy `btn btn-primary` / `mx-2` neutralised) and has a new section on how the theme is built and its three stages.
- توثيق Sweet Alert (2026-11-03): تصف الصفحة الآن الثيم بعد إعادة البناء (نطاق `.swal2-container` والأزرار الأصلية التي ترث `.moi-btn` عبر `@extend` وتحييد `btn btn-primary` و`mx-2` القديمة)، وأضيف قسم جديد يشرح بناء الثيم ومراحله الثلاث.
- Sweet Alert (2026-11-03): SweetAlert2 theme rebuilt to work from CSS alone — scoped under `.swal2-container` (library CSS injected later by JS cannot override it); native confirm / cancel / deny buttons inherit `.moi-btn` rules, sizes and states via `@extend`; legacy `mx-*` margins zeroed; new `moi-btn-background` mixin in `_buttons.scss` keeps variant colours when the library adds an inline `*ButtonColor`.
- Sweet Alert (2026-11-03): أُعيد بناء ثيم SweetAlert2 ليعمل بالـ CSS وحده — داخل نطاق `.swal2-container` فلا يتغلب عليه CSS المكتبة المحقون لاحقًا؛ وأزرار التأكيد والإلغاء وعدم الحفظ الأصلية ترث قواعد `.moi-btn` وأحجامها وحالاتها عبر `@extend`؛ وتُصفَّر هوامش `mx-*` القديمة؛ وmixin جديد `moi-btn-background` في `_buttons.scss` يحفظ لون كل متغيّر حتى لو أضافت المكتبة لونًا مضمّنًا.
- Sweet Alert (2026-11-03): the SweetAlert2 theme now ships inside `main.css` (`css/components/_sweet-alert.scss`) instead of the hand-written `css/sweet-alert.css`, so screens loading only `main.css` get the project buttons, icons and header. Legacy v1 rules removed; `sweet-alert.css` kept empty for compatibility.
- Sweet Alert (2026-11-03): ثيم SweetAlert2 أصبح ضمن `main.css` (`css/components/_sweet-alert.scss`) بدل الملف اليدوي `css/sweet-alert.css`، فتصل الأزرار والأيقونات وشريط العنوان إلى كل شاشة تحمّل `main.css` وحده. حُذفت قواعد النسخة القديمة v1 وبقي `sweet-alert.css` ملفًا فارغًا للتوافق.

### Removed

- Docs (2026-11-02): removed the **Dropdown** page (`DesignSystemDocumentation/dropdown.html`), a duplicate of **Tree Select** (`treeselect.html`), with its sidebar link, home-page card and `i18n-audit.json` entry.
- المستندات (2026-11-02): حُذفت صفحة **القائمة المنسدلة** (`DesignSystemDocumentation/dropdown.html`) لأنها مكررة مع **القائمة الشجرية** (`treeselect.html`) مع رابطها في القائمة الجانبية وبطاقتها في الصفحة الرئيسية وإدخالها في `i18n-audit.json`.
- Docs (2026-11-02): removed the **New Feature** page (`DesignSystemDocumentation/NewFeature.html`) together with its sidebar link, its home-page card and its `i18n-audit.json` entry. Any external link to it no longer works.
- المستندات (2026-11-02): حُذفت صفحة **ميزة جديدة** (`DesignSystemDocumentation/NewFeature.html`) مع رابطها في القائمة الجانبية وبطاقتها في الصفحة الرئيسية وإدخالها في `i18n-audit.json`. أي رابط خارجي إليها لم يعد يعمل.

### Added

- Docs (2026-11-03): **Documentation** — A way back to Omar Mokhtar's website from every documentation page: a header on the web (Home, Projects, Design System, About, Recommendations, More, Contact) with a language button, and a five-icon bottom tab bar on phones like the site's own bar (with a More sheet). Design System is the current item and the floating buttons sit above the bar.
- المستندات (2026-11-03): **Documentation** — شريط للعودة إلى موقع عمر مختار من كل صفحات التوثيق: على الويب شريط علوي (الرئيسية، المشاريع، نظام التصميم، من أنا، التوصيات، المزيد، تواصل) مع زر اللغة، وعلى الموبايل شريط سفلي بخمس أيقونات مثل شريط الموقع (مع قائمة «المزيد»). نظام التصميم هو العنصر الحالي، والأزرار العائمة ارتفعت فوق الشريط.

- Docs (2026-11-03): **Documentation** — On mobile: the «Browse docs» card now shows a menu icon and a chevron that signals the menu opens and closes, and the watermark on the Governance Workflow page uses a smaller two-line tile that repeats across the page instead of a single line.
- المستندات (2026-11-03): **Documentation** — على الموبايل: بطاقة «تصفح التوثيق» صارت تعرض أيقونة قائمة وسهمًا يدل على فتح القائمة وإغلاقها، والعلامة المائية في صفحة سير العمل صارت بقطعة أصغر على سطرين تتكرر وتغطي الصفحة بدل سطر واحد.

- Code (2026-11-02): **Image Card** — Image Card: a second option where the View button opens a dialog with an image slider (previous / next arrows, counter, dots and arrow keys), and a .moi-image-card__count picture counter shown when the card holds more than one picture. Dev: rebuild main.css.
- الكود (2026-11-02): **Image Card** — بطاقة الصورة: خيار ثانٍ يفتح فيه زر «مشاهدة» نافذة بسلايدر للصور (أسهم سابق/تالي وعدّاد ونقاط ومفاتيح الأسهم)، وعدّاد صور .moi-image-card__count يظهر عند وجود أكثر من صورة. للمطور: أعد بناء main.css.

- Docs (2026-11-02): **Map** — The Map page (`map.html`) was removed from the documentation together with its sidebar and home links.
- المستندات (2026-11-02): **Map** — حُذفت صفحة الخريطة (`map.html`) من التوثيق مع روابطها في القائمة الجانبية والصفحة الرئيسية.

- Code (2026-11-02): **Image Card** — New .moi-image-card matching Figma (imageCard-V2): 324px card with a 1px border and $radius-md, a 200px slider with pager dots (.is-active), a 14px title, and Delete / View buttons 34px high with 16px icons in the button color. Listed in css/_components.scss. The legacy .imagecard stays for existing screens only. Dev: rebuild main.css.
- الكود (2026-11-02): **Image Card** — فئة جديدة .moi-image-card تطابق Figma (imageCard-V2): بطاقة 324px بحد 1px وزوايا $radius-md، وسلايدر 200px بنقاط تنقل (.is-active)، وعنوان 14px، وزرا حذف ومشاهدة بارتفاع 34px وأيقونات 16px بلون الزر. أُدرجت في css/_components.scss. .imagecard القديمة باقية للشاشات الحالية فقط. للمطور: أعد بناء main.css.

- Docs (2026-11-02): **Image Card** — The Image Card page now uses the shipped class, the View button opens a dialog showing the picture, and the button icons are SVG in the button color, placed on the right in Arabic.
- المستندات (2026-11-02): **Image Card** — صفحة بطاقة الصورة تستخدم الفئة المُسلَّمة، وزر «مشاهدة» يفتح نافذة تعرض الصورة، وأيقونات الأزرار SVG بلون الزر وعلى اليمين في العربية.

- Docs (2026-11-02): **Iconography** — The icon sizes section now uses the code names (.icon-sm 16px to .icon-3xl 48px, and .icon-4xl 64px in code only) instead of the Figma names; tokens.json was updated and figmaRadius removed; the radius scale follows the code.
- المستندات (2026-11-02): **Iconography** — قسم أحجام الأيقونات يتبع أسماء الكود (.icon-sm 16px حتى .icon-3xl 48px، و.icon-4xl 64px للكود فقط) بدل أسماء Figma، وحُدّث tokens.json وأُزيل figmaRadius؛ سلّم الـ radius يتبع الكود.

- Docs (2026-11-02): **Documentation** — Component page updates: Image Card re-documented from Figma node 25992:18805 (not the legacy code), Vehicle Card built like the Person Card shell, Avatar with a copyable HTML/CSS example, and Tags with the header before the table.
- المستندات (2026-11-02): **Documentation** — تحديثات صفحات المكوّنات: بطاقة الصورة أُعيد توثيقها من عقدة Figma 25992:18805 (لا من الكود القديم)، وبطاقة المركبة بنفس هيكل بطاقة الشخص، والصورة الرمزية بمثال HTML/CSS قابل للنسخ، وصفحة الوسوم بترتيب الترويسة قبل الجدول.

- Docs (2026-11-02): **Iconography** — The icon library now comes from Figma (page «Icons»): 4371 Stroke/Rounded icons in 61 categories with search, category filter and Copy SVG / Copy name, lazy loaded from icons/. It replaces the earlier entry (163 icons from images/icon-*.svg). Dev: python3 scripts/build-icons-library.py <folder>.
- المستندات (2026-11-02): **Iconography** — مكتبة الأيقونات الآن من Figma (صفحة «Icons»): 4371 أيقونة بنمط Stroke/Rounded في 61 فئة مع بحث وفئات ونسخ SVG أو الاسم، وتحمّل كسولًا من مجلد icons/. تحلّ محل إدخال الأيقونات القديم (163 أيقونة من images/icon-*.svg). للمطور: python3 scripts/build-icons-library.py <folder>.

- Code (2026-11-02): **Breadcrumb** — Breadcrumb rebuilt to match the improved Figma component: new .moi-breadcrumb with .moi-breadcrumb__item items that each own the separator before them (no dangling separator), 14px text (--lg = 16px), parent in $Neutral-500 and current page in $Neutral-800 SemiBold, a single non-wrapping line with ellipsis at 240px (items) / 320px (current page), and an automatically mirrored separator in RTL. _breadcrumb.scss was not included in the build and is now listed in css/_common.scss. The legacy .breadcrumb-container styling stays for existing screens. Dev: rebuild main.css.
- الكود (2026-11-02): **Breadcrumb** — إعادة بناء مسار التنقل حسب تحسينات Figma: فئة .moi-breadcrumb الجديدة بعناصر .moi-breadcrumb__item يملك كلٌّ منها الفاصل الذي قبله فلا يبقى فاصل معلّق، ونص 14px (والحجم الكبير --lg 16px)، والأب بلون $Neutral-500 والصفحة الحالية $Neutral-800 بخط SemiBold، وسطر واحد لا يلتف مع اقتطاع عند 240px للعناصر و320px للصفحة الحالية، وعكس الفاصل تلقائيًا في RTL. كان الملف _breadcrumb.scss غير مُدرج في البناء وأُدرج الآن في css/_common.scss. تنسيق .breadcrumb-container القديم باقٍ للشاشات الحالية. للمطور: أعد بناء main.css.

- Docs (2026-11-02): **Breadcrumb** — Breadcrumb page rebuilt on the unified template: anatomy, Figma properties vs code (Parent, Current page, Additional levels, Size), live examples (two and three levels, large size, long labels, narrow container, RTL with mixed content, hidden current page), what improved, usage rules, accessibility and developer API.
- المستندات (2026-11-02): **Breadcrumb** — صفحة مسار التنقل أُعيدت بالقالب الموحّد: التركيب، وخصائص Figma مقابل الكود (Parent وCurrent page وAdditional levels وSize)، وأمثلة حية (مستويان وثلاثة والحجم الكبير والتسميات الطويلة والحاوية الضيقة وRTL مع محتوى مختلط وإخفاء الصفحة الحالية)، وما الذي تحسّن، وقواعد الاستخدام والوصولية وواجهة المطور.

- Docs (2026-11-02): **Documentation** — Four new component pages in the documentation: Checkbox (with the Radio status), Avatar (Figma spec, code pending), Vehicle Card and Image Card. Each follows one template: overview with Figma/Code status pills, anatomy, states, live example or preview, code, accessibility, RTL notes, Do & Don't. Where the code has no shared class this is stated and no class was invented.
- المستندات (2026-11-02): **Documentation** — أربع صفحات مكوّنات جديدة في التوثيق: مربع الاختيار (مع حالة Radio)، والصورة الرمزية (مواصفات Figma، الكود قيد الاعتماد)، وبطاقة المركبة، وبطاقة الصورة. كل صفحة بقالب موحّد: نظرة عامة بشارات الحالة (Figma/الكود)، التركيب، الحالات، مثال حي أو معاينة، الكود، الوصولية، ملاحظات RTL، افعل ولا تفعل. حيث لا توجد فئة مشتركة في الكود ذُكر ذلك صراحة ولم تُخترع فئات.

- Docs (2026-11-02): **Patterns** — New «Patterns» group in the sidebar with Empty State (moved from Feedback & Overlays) and two new pages: Error Pages (404, 400, 401, generic) and Session Expired with a live MoiSwal example (SweetAlert2 with the system theme).
- المستندات (2026-11-02): **Patterns** — مجموعة «الأنماط» الجديدة في القائمة الجانبية تضم الحالة الفارغة (نُقلت من التنبيهات والنوافذ) وصفحتان جديدتان: صفحات الخطأ (404 و400 و401 والعام)، وانتهاء الجلسة بمثال حي بـ MoiSwal (SweetAlert2 بثيم النظام).


- Docs (2026-11-02): **Foundations** — Foundations completed from Figma: a «Grid, containers and devices» section in Layout (7 grid styles, containers, width scale, design devices, responsive modes), a «Backdrop blur» section in Shadows, and an «Alpha, charts and progress» section in Color System.
- المستندات (2026-11-02): **Foundations** — إكمال الأساسيات من Figma: قسم «الشبكة والحاويات والأجهزة» في صفحة الهيكل العام (7 أنماط شبكة، الحاويات، مقياس العرض، أجهزة التصميم، الأوضاع المتجاوبة)، وقسم «تمويه الخلفية» في الظلال، وقسم «الشفافية والمخططات والتقدم» في نظام الألوان.

- Docs (2026-11-02): **Iconography** — Figma icon library: 4,371 icons in 60 categories (Figma Icons page, Stroke / Rounded) with name search, category filter and «Copy SVG» / «Copy name»; categories load on demand from `icons/`. The old icons were removed from the displayed library. Plus an «Icon sizes» section from the Figma board with usage and a note that the naming differs from `$moi-icon-sizes`. Dev: re-export with `python3 scripts/build-icons-library.py`.
- المستندات (2026-11-02): **Iconography** — مكتبة أيقونات Figma: 4,371 أيقونة في 60 فئة (صفحة Icons في Figma بنمط Stroke / Rounded) مع بحث بالاسم وتصفية بالفئة و«نسخ SVG» و«نسخ الاسم»، وتُحمَّل الفئات عند الحاجة من ‎`icons/`‎. حُذفت الأيقونات القديمة من المكتبة المعروضة. مع قسم «أحجام الأيقونات» من لوحة Figma بالاستخدام وتنبيه لاختلاف التسمية عن ‎`$moi-icon-sizes`‎. للمطور: لإعادة التصدير شغّل ‎`python3 scripts/build-icons-library.py`‎.

- Docs (2026-11-02): **Registry** — Registry files updated: every component in components.json now has a documentation field pointing to its page, with 7 new components and a refreshed missingComponents list (Chip, Avatar, shared Radio, shared Vehicle Card, Dark theme). tokens.json gained themes (with alpha), icon sizes, containers, widths, devices, grid styles, button sizes, backdrop blur, responsive modes and the Figma radius scale.
- المستندات (2026-11-02): **Registry** — تحديث ملفي السجل: components.json صار لكل مكوّن حقل documentation يشير إلى صفحته، مع 7 مكوّنات جديدة وقائمة missingComponents محدّثة (Chip وAvatar وRadio مشترك وبطاقة مركبة مشتركة والوضع الداكن). وtokens.json أُضيفت له أقسام: الثيمات والشفافية، وأحجام الأيقونات، والحاويات، والعروض، والأجهزة، وأنماط الشبكة، وأحجام الأزرار، وتمويه الخلفية، والأوضاع المتجاوبة، وزوايا Figma.

- Code (2026-11-02): **Stepper** — Fix: _radial-stepper.scss was not listed in css/_components.scss, so .moi-radial-stepper was missing from main.css and its example on the Stepper page rendered unstyled. It is now included (@use "./components/radial-stepper"). Dev: rebuild main.css.
- الكود (2026-11-02): **Stepper** — إصلاح: _radial-stepper.scss لم يكن مُدرجًا في css/_components.scss فكانت فئة .moi-radial-stepper غائبة عن main.css ويظهر مثالها في صفحة الستبر بلا تنسيق. أُدرج الآن ببناء واحد (@use './components/radial-stepper'). للمطور: أعد بناء main.css.

- Docs (2026-11-02): **Governance** — The unified documentation page template was added to CONTRIBUTING.md: overview, anatomy, variants and states with tokens not raw values, live example, code, accessibility and RTL, Do & Don't; plus the bilingual rule and registering a page in the sidebar, home cards and changelog.
- المستندات (2026-11-02): **Governance** — قالب صفحة التوثيق الموحّد أُضيف إلى CONTRIBUTING.md: نظرة عامة، تركيب، متغيّرات وحالات برموز لا قيم خام، مثال حي، كود، وصولية وRTL، افعل ولا تفعل؛ مع قواعد الثنائية اللغة وتسجيل الصفحة في القائمة والبطاقات والسجل.

- Docs (2026-11-02): File Uploader page gets a **Live examples: the approved uploader** section with two interactive examples of the approved `.file__uploader` HTML (default, ready to save) and the full code; styling comes from `css/common/_common.scss`. The older `moi-file-uploader` sections remain.
- المستندات (2026-11-02): صفحة رافع الملفات فيها قسم جديد **أمثلة حيّة: رافع الملفات المعتمد** بمثالين تفاعليين لـ HTML المعتمد `.file__uploader` (افتراضي، جاهز للحفظ) مع الكود كاملًا، والتنسيق من `css/common/_common.scss`. أقسام `moi-file-uploader` القديمة ما زالت موجودة.

- Docs (2026-11-02): fixed the Date Picker calendar being painted under the next section card — `.section-card` has `backdrop-filter`, so the card holding an open field/popup now rises above the following cards (`:focus-within`, `:has()`) in `css/top-actions.css`.
- المستندات (2026-11-02): إصلاح قائمة التقويم في منتقي التاريخ التي كانت تُرسم تحت بطاقة القسم التالي؛ البطاقة التي تحوي حقلًا أو قائمة مفتوحة ترتفع فوق ما بعدها (`:focus-within` و`:has()`) في `css/top-actions.css`.

- Code (2026-11-02): fixed a false lock in the inspection protection (`js/top-actions.js`) caused by window resize, zoom or a 0-size window; size detection now re-measures on those changes.
- الكود (2026-11-02): إصلاح قفل زائف في حماية الفحص (`js/top-actions.js`) سببه تغيير حجم النافذة أو التكبير أو نافذة بحجم صفر؛ صار الكشف بالحجم يعيد القياس عند هذه التغييرات.

- Code (2026-11-02): alert border is now 1px instead of 3px for every type (neutral, info, error, warning, primary): `border-bottom: 1px solid` in `_Notification.scss`; markup uses `border-1 border-bottom` instead of `border-3 border-bottom`. Dev: replace `border-3` with `border-1` on any `moi-alert`.
- الكود (2026-11-02): سُمك حد التنبيه صار 1px بدل 3px في كل الأنواع (محايد، معلومة، خطأ، تحذير، أساسي): `border-bottom: 1px solid` في `_Notification.scss`، وفي الـ HTML `border-1 border-bottom` بدل `border-3 border-bottom`. للمطور: استبدل `border-3` بـ `border-1` في أي `moi-alert` عندك.

- Docs (2026-11-02): new **Governance Workflow** page (`DesignSystemDocumentation/governance-workflow.html`, sidebar link before Release Notes): partner handover and contribution governance — principles, main flowchart with connector arrows, swimlane, examples and glossary, in Arabic and English. SCSS/CSS is delivered for use only; additions are created in the company's own file, reviewed, then added by us. Includes Print and Download PDF buttons (static `governance-workflow-en.pdf` / `-ar.pdf`, rebuilt with `bash scripts/build-governance-pdf.sh`) and an ownership watermark.
- المستندات (2026-11-02): صفحة جديدة **سير عمل الحوكمة** (`DesignSystemDocumentation/governance-workflow.html`، رابطها في القائمة الجانبية قبل سجل التغييرات): تسليم الشركاء وحوكمة المساهمات — المبادئ والمخطط الرئيسي بأسهم الربط ومخطط المسارات والأمثلة والمسرد، بالعربية والإنجليزية. تُسلَّم ملفات SCSS/CSS للاستخدام فقط، وأي إضافة تُنشأ في ملف خاص بالشركة ويُراجَع ثم ندرجه نحن. تتضمن زر طباعة وتحميل PDF (ملفان ثابتان يُعاد توليدهما بـ `bash scripts/build-governance-pdf.sh`) وعلامة مائية بملكية الوثيقة.

- Code (2026-11-02): shared docs header (`.page-header`) restyled in `css/top-actions.css` only: dark green `#14573a` with a decorative `#1b8354` circle (35% opacity) on the empty side — right in English, left in Arabic. Applies to every docs page, no HTML change.
- الكود (2026-11-02): رأس صفحات التوثيق (`.page-header`) في `css/top-actions.css` فقط: أخضر داكن `#14573a` مع دائرة زخرفية `#1b8354` بشفافية 35% على الجهة الفارغة (يمين الرأس بالإنجليزية ويساره بالعربية). يشمل كل صفحات التوثيق دون تغيير في الـ HTML.

- Code (2026-11-02): inspection protection in `js/top-actions.js` (loaded by every docs page): blocks the context menu and developer-tools / view-source / save shortcuts, silences `console`, detects open developer tools and shows an ownership message with a Close / Continue button. A deterrent only; the site password is the real protection. `PROTECT_ENABLED` at the top of the file turns it off for debugging.
- الكود (2026-11-02): حماية صفحات التوثيق من الفحص في `js/top-actions.js` (يحمّله كل صفحات التوثيق): منع الزر الأيمن واختصارات أدوات المطوّر وعرض المصدر والحفظ، وإسكات `console`، وكشف فتح الأدوات مع رسالة ملكية بزر إغلاق/متابعة. طبقة ردع فقط والحماية الفعلية كلمة المرور على الموقع. المتغير `PROTECT_ENABLED` أول الملف يوقفها عند الفحص.

- Code (2026-11-01): upload styles in `css/common/_common.scss` (`.uploadedFiles`, `.attatched`, `.file__uploader`, `.disabeldBtn`, file-selector button) now use design-system tokens instead of hard-coded colors/shadows (e.g. `#ced0d4` to `$Neutral-300`, `#084cdf` to `$Info-600`, shadow to `$shadow-100`); the `var(--clr-*)` references, which were not defined anywhere, became `$Neutral-500`, `$Info-400`, `$Info-600`, `$white-100`. Dev: shades may shift slightly to the nearest token; rebuild `main.css`.
- الكود (2026-11-01): أنماط الرفع في `css/common/_common.scss` (‎.uploadedFiles‎ و‎.attatched‎ و‎.file__uploader‎ و‎.disabeldBtn‎ وزر اختيار الملف) صارت تستخدم متغيرات النظام بدل الألوان والظلال المكتوبة مباشرة (مثل `#ced0d4` إلى `$Neutral-300` و`#084cdf` إلى `$Info-600` والظل إلى `$shadow-100`)، وأُصلحت متغيرات ‎var(--clr-*)‎ غير المعرّفة فصارت `$Neutral-500` و`$Info-400` و`$Info-600` و`$white-100`. للمطور: قد تتغير الدرجات قليلًا إلى أقرب متغير؛ أعد بناء `main.css`.

- Code (2026-11-01): legacy `.file__uploader` upload button/drop zone restyled in `css/common/_common.scss` only (no HTML change): dashed `$Neutral-300` frame on `$Neutral-25`, file-up icon + title on `::before`, formats/size hint as a real `<div class="drop-zoon__hint">` in the markup, and the file input shown as an «إختر من الجهاز» pill with a plus icon. Replaces the old square upload-icon `input[type=file]::after`. Full width: the whole drop zone is clickable/droppable and the description fills the row beside the save button. Dev: add `<div class="drop-zoon__hint">` inside `#dropZoon` with the supported-formats text, and rebuild `main.css` (the icons are inline SVG in the SCSS, no image files); Arabic strings are in `content`.
- الكود (2026-11-01): تحديث زر ومنطقة الرفع القديمة `.file__uploader` في `css/common/_common.scss` فقط دون تغيير الـ HTML: إطار منقّط بلون `$Neutral-300` وخلفية `$Neutral-25`، أيقونة الملف والعنوان على ‎::before‎، نص الصيغ والحد الأقصى كعنصر حقيقي `<div class="drop-zoon__hint">` في الـ HTML، وزر اختيار الملف يظهر كزر «إختر من الجهاز» مع أيقونة زائد، بدل أيقونة الرفع المربعة القديمة. المكوّن بعرض 100%: صندوق الرفع كله قابل للضغط والإفلات والوصف يملأ الصف بجانب زر الحفظ. للمطور: أضف `<div class="drop-zoon__hint">` داخل `#dropZoon` بنص الصيغ المدعومة وأعد بناء `main.css` (الأيقونتان SVG داخل الـ SCSS ولا حاجة لملفات صور)؛ النصوص العربية داخل `content`.

- Code (2026-11-01): file-uploader drop zone restyled in `_file-uploader.scss` only (no HTML change): 1px dashed `$Info-500` frame, 40px file-up icon drawn via mask, title `font-lg-600`, subtitle `font-sm-400`, and `__dropzone-link` as a `$Neutral-100` pill with a plus-circle icon. Dev: rebuild `main.css`; markup unchanged.
- الكود (2026-11-01): تحديث تصميم منطقة الرفع في مكوّن رفع الملفات في `_file-uploader.scss` فقط دون تغيير الـ HTML: إطار منقّط 1px بلون `$Info-500`، أيقونة ملف 40px مرسومة بـ mask، العنوان `font-lg-600`، النص الفرعي `font-sm-400`، و‎__dropzone-link‎ زر بخلفية `$Neutral-100` مع أيقونة زائد. للمطور: أعد بناء `main.css`؛ الـ HTML كما هو.

- Code (2026-10-29): new `.report-search-box` class in `css/common/_common.scss` to lift the report search panel above other layers (`z-index: 99999999`, `top: 90px`). Both values are hard-coded rather than tokens and the class is not used in any documentation page yet; the rest of the file was only reformatted (box-shadow, multiple backgrounds) with no value changes. Dev: regenerate `main.css` and `main.css.map`.
- الكود (2026-10-29): إضافة الفئة ‎.report-search-box‎ في `css/common/_common.scss` لرفع لوحة بحث التقارير فوق باقي العناصر (‎z-index: 99999999‎ و‎top: 90px‎). القيمتان مكتوبتان مباشرة وليستا Token، والفئة غير مستخدمة بعد في أي صفحة توثيق؛ وباقي الملف أُعيد تنسيقه فقط (box-shadow والخلفيات المتعددة) دون تغيير القيم. للمطور: أعد توليد `main.css` و`main.css.map`.

- Code (2026-10-29): new shared `.helper-row` style in `_form.scss` (now wired into the build via `@use "./common/form"` in `css/_common.scss`) — a helper or warning message with an icon under any input type (text, select, date, textarea…), using the field's own state colours (default Neutral-600, `.is-warning` Warning-700, `.is-err`/`.is-invalid` Error-700, `.is-ok`/`.is-valid` Success-700). Replaces the page-local `.helper-text` that only existed on Text Fields. Live demo added to `text-fields.html`; the Figma ↔ code tables on `text-fields.html` and `dropdown.html` now point to it instead of flagging it as design-only.
- الكود (2026-10-29): إضافة تنسيق مشترك جديد ‎.helper-row‎ في `_form.scss` (مفعّل الآن في البناء عبر `@use "./common/form"` في `css/_common.scss`) — نص مساعد أو تحذير بأيقونة أسفل أي نوع حقل (نص، قائمة، تاريخ، textarea…)، بنفس ألوان حالة الحقل (افتراضي Neutral-600، ‎.is-warning‎ Warning-700، ‎.is-err/.is-invalid‎ Error-700، ‎.is-ok/.is-valid‎ Success-700). يحل محل ‎.helper-text‎ المحلي الذي كان موجودًا فقط في صفحة حقول النص. أُضيف عرض حي في `text-fields.html`، وجدول التصميم ↔ الكود في `text-fields.html` و`dropdown.html` أصبح يحيل إليه بدل وصفه بأنه في التصميم فقط.

- Code (2026-10-29): the Tree Select (vue-treeselect) option checkbox is now styled with the system Checkbox tokens instead of the library's default look — `.vue-treeselect__checkbox` (`_vue-treeselect.scss`) is 16×16 with a 2px border and radius-xs, Neutral-300 by default and Primary-600 when checked or indeterminate, using the same white tick-02 / minus-sign icons as `_checkbox.scss` instead of the library's fixed blue. Documented in `dropdown.html`'s Figma ↔ code table.
- الكود (2026-10-29): مربع اختيار الخيار في القائمة الشجرية (vue-treeselect) صار بتنسيق مربع الاختيار في النظام بدل شكل المكتبة الافتراضي — ‎.vue-treeselect__checkbox‎ (في `_vue-treeselect.scss`) مربع 16×16 بحد 2px ونصف قطر radius-xs، Neutral-300 افتراضي وPrimary-600 عند التحديد أو الحالة الوسيطة، بنفس أيقونتَي tick-02 وminus-sign المستخدمتين في `_checkbox.scss` بدل اللون الأزرق الثابت للمكتبة. موثّق في جدول التصميم ↔ الكود بصفحة `dropdown.html`.

- Governance, contribution, and onboarding documentation authored and maintained by **Omar Mokhtar (UX Team Lead & Design System Owner)**, establishing a clear single source of truth via the canonical documentation directory (`DesignSystemDocumentation/`).
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

- Added a "Dynamic Status Mapping" section to the Alerts documentation, showing front-end developers how to bind `.moi-notification`'s `data-status` dynamically to a backend/API `Status ID` via a mapping function, with a generic Vue example and a clear separation between business status and Design System status (`info`/`success`/`warning`/`error`).
- إضافة قسم "ربط الحالة ديناميكيًا بـ Status ID" إلى توثيق التنبيهات (Alerts)، يوضح لمطوري الواجهة الأمامية كيفية ربط data-status الخاص بـ .moi-notification ديناميكيًا مع Status ID القادم من الـ Backend أو الـ API عبر دالة Mapping، مع مثال عام بصيغة Vue وفصل واضح بين حالة منطق العمل وحالة نظام التصميم (info/success/warning/error).

- Added a "Dynamic Status Mapping" section to the Tags documentation, showing front-end developers how to bind `.moi-tag`'s `data-status` dynamically to a backend/API status ID via a mapping function, using only the `data-status` values already documented on the page (priority statuses and the `UnderProgress`/`Returned` workflow statuses), plus a complete, self-contained example with a live rendered tag.
- إضافة قسم "ربط الوسم ديناميكيًا بحالة قادمة من الباك اند" إلى توثيق الوسوم (Tags)، يوضح لمطوري الواجهة الأمامية كيفية ربط data-status الخاص بـ .moi-tag ديناميكيًا مع Status ID القادم من الـ Backend أو الـ API عبر دالة Mapping، باستخدام قيم data-status الموثّقة فعليًا في الصفحة فقط (حالات الأولوية وحالتا سير العمل UnderProgress وReturned)، مع مثال متكامل ومستقل يعرض الوسم النهائي كـ Live Preview.

- Documentation (2026-10-25): new **Date Picker** page (`datepicker.html`) — Hijri/Gregorian picker, anatomy, day-cell states, field classes (`.hijri-date-input`, `-past`, `-future`, `-current`, `-time`, `-future-time`), live demo and developer API; new **Sweet Alert** page (`sweet-alert.html`) — SweetAlert2 project theme, types (alert, confirm, danger, three options, input, toast, loader), live demos and `MoiSwal` API, matching the Figma `moi-sweet-alert` component; **Text Fields**: Checkbox section (`_checkbox.scss`, tick-02 / minus-sign, focus and disabled); **Layout**: sidebar items, sub-menu and states (`aria-current="page"`, collapsed flyout); **Alerts**: sizing, 44×44 touch target and mobile layout. Both new pages added to the sidebar of every documentation page, the index and the page switcher.
- التوثيق (2026-10-25): صفحة جديدة **منتقي التاريخ** (`datepicker.html`) — منتقي هجري/ميلادي، التركيب، حالات خلية اليوم، فئات الحقل، مثال حي وواجهة المطور؛ وصفحة جديدة **التنبيهات المنبثقة** (`sweet-alert.html`) — ثيم SweetAlert2 للمشروع، الأنواع (تنبيه، تأكيد، تأكيد خطِر، ثلاثة خيارات، إدخال، Toast، تحميل)، أمثلة حية وواجهة `MoiSwal`، مطابقة لمكوّن `moi-sweet-alert` في Figma؛ و**حقول النص**: قسم مربع الاختيار؛ و**الهيكل العام**: عناصر الشريط الجانبي والقائمة الفرعية وحالاتها؛ و**التنبيهات**: المقاسات ومساحة اللمس 44×44 وشكل الجوال. أُضيفت الصفحتان للقائمة الجانبية في كل صفحات التوثيق وللفهرس ومبدّل الصفحات.

- Documentation (2026-10-26): new component pages **Table** (`table.html`), **Modal** (`modal.html`), **Tooltip** (`tooltip.html`), **Breadcrumb** (`breadcrumb.html`), **Dropdown** (`dropdown.html`, vue-treeselect) and **Empty State** (`empty-state.html`), **Page Title** (`page-title.html`) and **Map** (`map.html`) — anatomy, states, preview, usage rules, accessibility/RTL, Figma ↔ code and developer API from the real SCSS. Added an «October 2026 updates — Figma ↔ code» section to File Uploader, Tabs, Stepper, Person Card, Tags, Timeline, Color System and Text Fields; the table section in New Feature now points to the Table page.
- التوثيق (2026-10-26): صفحات مكونات جديدة **الجدول** و**النافذة** و**التلميح** و**مسار التنقل** و**القائمة المنسدلة** (vue-treeselect) و**الحالة الفارغة** و**عنوان الصفحة** و**الخريطة** — التركيب والحالات والمعاينة وقواعد الاستخدام وإمكانية الوصول والاتجاه والمقارنة بين التصميم والكود وواجهة المطور من ملفات SCSS الفعلية. وأُضيف قسم «تحديثات أكتوبر 2026 — التصميم ↔ الكود» لصفحات رفع الملفات والتبويبات وشريط الخطوات وبطاقة الشخص والوسوم والخط الزمني ونظام الألوان وحقول النص؛ وقسم الجدول في «ميزة جديدة» أصبح يحيل إلى صفحة الجدول.

### Changed

- Code (2026-11-01): checked checkbox tick (`.form-check-input[type=checkbox]:checked`, `_checkbox.scss`) no longer sets `background-position: left` (the 22px background-size stays), reversing part of the 2026-10-27 change; the focus-ring `box-shadow` was only reformatted. Dev: regenerate `main.css` and `main.css.map` and check the tick in your products.
- الكود (2026-11-01): علامة الصح في مربع الاختيار المحدد (‎.form-check-input[type=checkbox]:checked‎ في `_checkbox.scss`) لم يعد يضبط ‎background-position: left‎ (ويبقى حجم الخلفية 22px)، بما يلغي جزءًا من تعديل 27 أكتوبر 2026؛ وأُعيد تنسيق ‎box-shadow‎ حلقة التركيز فقط. للمطور: أعد توليد `main.css` و`main.css.map` وراجع شكل العلامة في المنتجات.

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
  - `GOVERNANCE.md`: Defined system ownership (**Omar Mokhtar – UX Team Lead**), roles, responsibilities, versioning rules, and review workflows.
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
