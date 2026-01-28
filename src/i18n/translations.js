import siteData from "../../data.json";

const baseUrl = "https://omarmokhtar.com";

const arabicCertificationTitles = {
  1: "شهادة جوجل المهنية في تصميم تجربة المستخدم",
  2: "شهادة PMI-ACP في إدارة المشاريع الرشيقة",
  3: "إنشاء نظام تصميم باستخدام Adobe XD",
  4: "تجربة العميل: رسم خريطة الرحلة",
  5: "أساسيات Git",
  6: "تعلم Adobe XD",
  7: "تعلم Webpack 4",
  8: "أساسيات تجربة المستخدم: تصميم التفاعل",
  9: "تصميم التفاعل: البنية",
  10: "أساسيات Sass",
};

const arabicCertifications = (() => {
  const sourceCertifications = Array.isArray(siteData.certifications)
    ? siteData.certifications
    : Array.isArray(siteData.Certifications)
    ? siteData.Certifications
    : [];

  return sourceCertifications.map((certification) => ({
    ...certification,
    info: arabicCertificationTitles[certification.id] ?? certification.info,
  }));
})();

export const translations = {
  en: {
    nav: {
      links: {
        home: "Home",
        about: "About",
        work: "Work",
        blog: "Blog",
        contact: "Contact",
      },
      brand: "UI/UX Designer",
      logoAlt: "Omar Mokhtar personal logo",
      languageToggleButton: "العربية",
      languageToggleAria: "Switch language to Arabic",
    },
    footer: {
      madeWithLove: "Made with ❤️ from scratch by © OMAR MOKHTAR",
      ariaLabel: "Visit Omar Mokhtar personal website",
    },
    loader: {
      loading: "Loading…",
    },
    audio: {
      playLabel: "Play summary audio description",
      pauseLabel: "Pause summary audio playback",
      playButton: "Listen to My Summary",
      pauseButton: "Stop",
      fallbackText: "Your browser does not support audio playback.",
    },
    home: {
      hero: {
        role: "UX & DesignOps Lead @ Confidential Government!",
        certificationBadge: "Google Professional UX Certified",
        certificationTitle: "Google UX Design Professional Certificate",
        downloadButton: "Download Resume",
        downloadTitle: "Download Omar Mokhtar resume from Google Drive",
      },
      paragraphs: [
        {
          text: "With over 17 years of experience as a UI/UX designer, I specialize in digital experiences, mobile interfaces, and dynamic web dashboards.",
          tooltip:
            "With over 17 years of experience as a UI/UX designer, I specialize in digital experiences, mobile interfaces, and dynamic web dashboards.",
        },
        {
          text: "Throughout my career, I have worked in sectors including renowned organizations, government ministries, and prestigious academic institutions.",
          tooltip:
            "Throughout my career, I have worked in sectors including renowned organizations, government ministries, and prestigious academic institutions.",
        },
        {
          text: "I take the helm in leading comprehensive redesign initiatives, transforming user experiences by seamlessly translating ideas into tangible solutions. From initial ideation to the final execution, my process involves meticulous sketching, precise wireframing, and crafting high-fidelity prototypes.",
          tooltip:
            "I take the helm in leading comprehensive redesign initiatives, transforming user experiences by seamlessly translating ideas into tangible solutions. From initial ideation to the final execution, my process involves meticulous sketching, precise wireframing, and crafting high-fidelity prototypes.",
        },
        {
          text: "I work closely with analysts, developers, and QA testers to ensure our designs smoothly become user-friendly products that match project goals perfectly.",
          tooltip:
            "I work closely with analysts, developers, and QA testers to ensure our designs smoothly become user-friendly products that match project goals perfectly.",
        },
      ],
      social: {
        behance: "Visit Omar Mokhtar on Behance",
        github: "Visit Omar Mokhtar on GitHub",
        linkedin: "Visit Omar Mokhtar on LinkedIn",
        email: "Send an email to Omar Mokhtar",
      },
      imageAlt: "Portrait of Omar Mokhtar",
    },
    about: {
      title: "About",
      downloadButton: "Download Resume",
      downloadTitle: "Download Omar Mokhtar resume from Google Drive",
      videoLink: "You can find more about me in this video",
      emptyExperience: "Experience data is currently unavailable.",
    },
    certifications: {
      title: "Certifications",
      description:
        "I usually prefer investing in self-learning to improve my experiences.",
      showCredential: "Show credential",
      showCredentialTitle: "Show credential",
      emptyState:
        "Certifications will appear here once fresh data is available.",
    },
    tools: {
      title: "Tools",
    },
    blog: {
      byLine: "By Omar Mokhtar",
      ctaText: "Read Original LinkedIn Post",
      positiveLabel: "Positives:",
      negativeLabel: "Defects:",
      posts: [
        {
          id: "levels",
          title:
            "Pity, Empathy, and Sympathy: Important Terms in User Experience",
          heroImageAlt:
            "Pity, Empathy, and Sympathy in UX Design - Understanding user experience design principles and emotional responses in design thinking",
          intro: [
            'Important Terms in User Experience. In defining the terms, we saw that they are very similar to what was mentioned in the hadith of the Prophet, may God bless him and grant him peace, "Whoever among you sees an evil, let him change it with his hand; if he is unable to do so, then with his tongue; if he is unable to do so, then with his heart, and that is the weakest of faith." We see clear guidance from our master the Prophet in dealing with problems.',
            "How do we connect them together? Let's come to the definitions:",
          ],
          definitions: [
            {
              heading: "1. Pity",
              lines: [
                "Pity means noticing a problem or difficulty and feeling sorry for it but not taking action to solve it; it is just pity.",
                'This is similar to "in your heart," in which the hadith is described as the weakest level of response.',
                "In user experience, pity doesn't make a big difference.",
              ],
              example:
                "Example: If a designer notices that users are having difficulty using an application but doesn't do anything about it, that's just compassion.",
            },
            {
              heading: "2. Empathy",
              lines: [
                "Empathy is understanding the problem and feeling sad or concerned for the person suffering from it, and trying to talk about it or take small steps to address it.",
                'This is similar to "change by the tongue" as in hadith.',
                "In UX, this means that the designer listens to the user's feedback and makes some adjustments, but these adjustments may not solve the problem entirely.",
              ],
              example:
                "UX example: The designer listens to the user's complaints and makes small changes to the interface to make it easier, but these changes may be superficial or insufficient.",
            },
            {
              heading: "3. Sympathy",
              lines: [
                "Sympathy is the highest level of responsiveness.",
                "It means not only understanding the problem but also putting yourself in the user's shoes and feeling what they feel.",
                'This is similar to "change by the hand," the most powerful level of action mentioned in hadith.',
                "In UX, empathy is what drives the designer to completely redesign the experience to better meet the users' needs and solve their problems comprehensively.",
              ],
              example:
                "UX example: The designer conducts deep research, tests the product as users do, and completely redesigns the application to solve all the problems that users face.",
            },
          ],
          conclusion: [
            {
              term: "Pity:",
              detail:
                'Just noticing the problem and feeling bad without taking action. This is similar to "change by the heart."',
            },
            {
              term: "Empathy:",
              detail:
                'Understanding the problem and trying to make small improvements. This is similar to "change by the tongue."',
            },
            {
              term: "Sympathy:",
              detail:
                'Deeply engaging with the problem and solving it from the ground up. This is like "hand-shifting."',
            },
          ],
          closing: [
            'As the talk goes, "hand-shifting" is the most powerful form of work. In UX, empathy is what enables designers to deliver the best possible experience because it drives them to truly understand the user\'s needs and fix problems at their root.',
            "Ultimately, to be successful UX designers, we must aim for work to deliver effective solutions rather than merely offering distant sympathy or pity.",
          ],
          arabicQuote: [
            "(وما ينطق عن الهوى، إن هو إلا وحي يوحى)",
            "صلي الله عليه وسلم",
          ],
          ctaAria: "Read the original LinkedIn post about empathy levels in UX",
          ctaHref:
            "https://www.linkedin.com/posts/omarmokhtar22_ux-activity-7249664621257641984-Hwtv?utm_source=share&utm_medium=member_desktop&rcm=ACoAAAyBkfYBusmou5-gf08ENyka9h55cIflNbw",
        },
        {
          id: "svg",
          title: "SVG in Web Development: Three Methods Compared",
          heroImageAlt:
            "SVG in Web Development - Three methods comparison for scalable vector graphics implementation in modern web projects",
          intro: [
            "As a UI/UX designer, I had an interesting discussion with our .NET and front-end developer about the best ways to use SVG in our web projects. After this, I decided to show them the differences between the three methods of using SVG.",
          ],
          methods: [
            {
              heading: "1. SVG as Inline Code in HTML",
              positives: [
                "Direct Embedding: You can put SVG directly into your HTML using the <svg> tag. This is good for small icons or graphics.",
                "Easy Styling: You can change the look of SVGs with CSS and JavaScript.",
                "Faster Loading: It can reduce the number of files the browser needs to load.",
              ],
              negatives: [
                "Bigger HTML File: Large SVGs can make your HTML file bigger.",
                "Complex HTML: Having many SVGs in HTML can make it hard to read and manage.",
              ],
            },
            {
              heading: "2. SVG as an Image",
              positives: [
                "Separate Files: Using the <img> tag with SVG keeps your HTML clean.",
                "Browser Caching: The browser can save SVG files, so it loads faster next time.",
                "Easy to Use: Simple to add to your web page.",
              ],
              negatives: [
                "Extra Request: The browser needs to load the SVG file separately, which can take a bit more time.",
                "Less Flexible: You can't easily style or interact with the SVG like you can with inline SVG.",
              ],
            },
            {
              heading: "3. SVG as a Font (Icon Fonts)",
              positives: [
                "Scalable Icons: SVG fonts are great for icons that can change size without losing quality.",
                "CSS Styling: You can change the color and size of SVG fonts with CSS.",
                "Text-like Behavior: SVG fonts work like text, so they are easy to align and position.",
              ],
              negatives: [
                "Single Color: SVG fonts usually only support one color.",
                "Accessibility Issues: SVG fonts are treated as text by screen readers, which can be tricky for accessibility.",
              ],
            },
          ],
          conclusion: [
            "Inline SVG: Best for small icons and when you need full CSS/JS control, but can make HTML larger.",
            "SVG as Image: Good for clean HTML and browser caching, but less flexible for styling.",
            "SVG Fonts: Great for scalable icons with CSS styling, but limited to single color and accessibility issues.",
          ],
          closing: [
            "Each method has its own benefits and drawbacks. The choice depends on your specific project needs, performance requirements, and design goals. Understanding these differences helps make better decisions when implementing SVG in web projects.",
          ],
          ctaAria: "Read the original LinkedIn post comparing SVG methods",
          ctaHref:
            "https://www.linkedin.com/posts/omarmokhtar22_as-a-uiux-designer-i-had-an-interesting-activity-7219603541919682560-xFKF?utm_source=share&utm_medium=member_desktop&rcm=ACoAAAyBkfYBusmou5-gf08ENyka9h55cIflNbw",
        },
      ],
    },
    projects: {
      title: "Work",
      description: [
        "I\'m always excited about learning new techniques and expanding my skills.",
        "Every project I\'ve worked on, whether alone or with others, has taught me something valuable.",
        "Sometimes, I\'ve used these lessons directly in my work. Other times, the technologies used in the workplace limited what I could apply.",
        "Adapting to these tools influenced how I worked, but it also motivated me to explore more beyond those limits.",
      ],
      descriptionTooltip:
        "I\'m always excited about learning new techniques and expanding my skills. Every project I\'ve worked on, whether alone or with others, has taught me something valuable. Sometimes, I\'ve used these lessons directly in my work. Other times, the technologies used in the workplace limited what I could apply. Adapting to these tools influenced how I worked, but it also motivated me to explore more beyond those limits.",
      caseStudy: {
        title: "Student Internal Portal",
        intro:
          "Portals have become an urgent necessity in the field of education and higher education: From this standpoint, MAJMAAH UNIVERSITY suggested establishing an internal portal for students, characterized by the following:",
        tooltip:
          "Portals have become an urgent necessity in the field of education and higher education: From this standpoint, MAJMAAH UNIVERSITY suggested establishing an internal portal for students, characterized by the following:",
        features: [
          "Single sign-on",
          "Providing more than 15 services",
          "View the news and events announced by the university",
          "Quick access: Submit applications across the various systems of the university and collect them in one place.",
          "Review their classes and exam schedules.",
        ],
        closing:
          "The portal centralizes critical student services so requests, announcements, and schedules are easy to reach from a single place.",
        button: "Case Study",
        buttonAria: "Read the full case study for the student internal portal",
        coverAlt: "Case study cover",
      },
      caseStudyExternal: {
        text: "Check website",
        aria: "View the student portal live prototype",
      },
      moreProjectsTitle: "More Projects",
      linkedInButton: {
        text: "Find more @ linkedin",
        aria: "Visit Omar Mokhtar LinkedIn profile for more projects",
      },
      projectLinkAria: "Open {{project}} project details in new tab",
    },
    caseStudyPage: {
      iframeTitle: "Figma case study",
      back: "Back to Projects",
      backAria: "Back to the projects page",
      checkWebsite: "Check website",
      checkWebsiteAria: "View the student portal live prototype",
    },
    contact: {
      title: "Contact",
      form: {
        name: "Name",
        email: "Email Address",
        subject: "Subject",
        message: "Your message",
        subjectPlaceholder: "Subject",
        submitButton: "Send Message",
        submitAria: "Send message through contact form",
      },
      whatsapp: "Contact me via WhatsApp",
      whatsappAria: "Open WhatsApp chat with Omar Mokhtar",
      successAlert: "✅ Message sent successfully!",
      failureAlert:
        "❌ Failed to send the message, please reconnect Gmail or check the settings.",
    },
    meta: {
      "/": {
        title: "Omar Mokhtar - UX Design Lead | 17+ Years Experience",
        description:
          "Omar Mokhtar is a UX Design Lead with 17+ years of experience in digital experiences, mobile interfaces, and web dashboards. Google Professional UX Certified.",
        keywords:
          "UX Designer, UI Designer, User Experience, Mobile Design, Web Dashboards, Saudi Arabia, Government Projects",
        canonical: baseUrl,
        ogImage: `${baseUrl}/images/omar.png`,
        ogLocale: "en_US",
        language: "English",
        structuredData: {
          "@context": "https://schema.org",
          "@type": "Person",
          name: "عمر مختار",
          jobTitle: "UX Design Lead",
          description:
            "UX Design Lead with 17+ years of experience in digital experiences, mobile interfaces, and web dashboards",
          url: baseUrl,
          image: `${baseUrl}/images/omar.png`,
          sameAs: [
            "https://www.linkedin.com/in/omarmokhtar22/",
            "https://www.behance.net/Omar_Mokhtar",
            "https://github.com/omarmok",
          ],
          worksFor: {
            "@type": "Organization",
            name: "Confidential Government",
          },
          hasCredential: {
            "@type": "EducationalOccupationalCredential",
            name: "Google Professional UX Certificate",
          },
        },
      },
      "/About": {
        title: "Experience & Career - Omar Mokhtar | UX Design Lead",
        description:
          "Professional experience and career journey of Omar Mokhtar, UX Design Lead. View certifications, skills, and 17+ years of design expertise.",
        keywords:
          "UX Designer Experience, Career Journey, Design Certifications, UI/UX Skills, Professional Portfolio",
        canonical: `${baseUrl}/About`,
        ogImage: `${baseUrl}/images/omar.png`,
        ogLocale: "en_US",
        language: "English",
      },
      "/Blog": {
        title: "UI/UX Design Blog - Omar Mokhtar | Design Insights & Tips",
        description:
          "Latest insights and thoughts on UI/UX design, web development, and user experience. Expert articles on design thinking, empathy, and SVG optimization.",
        keywords:
          "UX Design Blog, UI/UX Articles, Design Thinking, User Experience Tips, SVG Optimization, Design Empathy",
        canonical: `${baseUrl}/Blog`,
        ogImage: `${baseUrl}/images/blog-hero.jpg`,
        ogLocale: "en_US",
        language: "English",
      },
      "/Projects": {
        title:
          "UX/UI Design Portfolio - Omar Mokhtar | Case Studies & Projects",
        description:
          "Portfolio of UI/UX design projects and case studies by Omar Mokhtar. Government projects, web applications, and mobile interfaces.",
        keywords:
          "UX Portfolio, UI Design Projects, Case Studies, Government Projects, Web Applications, Mobile Design",
        canonical: `${baseUrl}/Projects`,
        ogImage: `${baseUrl}/images/projects-hero.jpg`,
        ogLocale: "en_US",
        language: "English",
      },
      "/ContactForm": {
        title: "Contact Omar Mokhtar | UX Design Lead | Get In Touch",
        description:
          "Get in touch with Omar Mokhtar, UX Design Lead for collaboration, consultation, and design inquiries. Available for freelance and project work.",
        keywords:
          "Contact UX Designer, Design Consultation, Freelance UX Designer, Design Services, Collaboration",
        canonical: `${baseUrl}/ContactForm`,
        ogImage: `${baseUrl}/images/omar.png`,
        ogLocale: "en_US",
        language: "English",
      },
      "/CaseStudy": {
        title: "Student Internal Portal Case Study | Omar Mokhtar",
        description:
          "Detailed case study of the Student Internal Portal built for Majmaah University with Figma prototypes and user research.",
        keywords:
          "Student Portal Case Study, Majmaah University, UX Case Study, Figma Showcase",
        canonical: `${baseUrl}/CaseStudy`,
        ogImage: `${baseUrl}/images/casstudymain.png`,
        ogLocale: "en_US",
        language: "English",
      },
      default: {
        title: "Omar Mokhtar - UX Design Lead",
        description:
          "UI/UX Designer with 17+ years of experience in digital experiences and mobile interfaces",
        keywords: "UX Designer, UI Designer, User Experience",
        canonical: baseUrl,
        ogImage: `${baseUrl}/images/omar.png`,
        ogLocale: "en_US",
        language: "English",
      },
    },
    data: {
      experience: siteData.Experience,
      projects: siteData.Projects,
      certifications: arabicCertifications,
    },
  },
  ar: {
    nav: {
      links: {
        home: "الرئيسية",
        about: "من أنا",
        work: "الأعمال",
        blog: "المدونة",
        contact: "تواصل",
      },
      brand: "UI/UX Designer",
      logoAlt: "شعار عمر مختار الشخصي",
      languageToggleButton: "English",
      languageToggleAria: "التبديل إلى اللغة الإنجليزية",
    },
    footer: {
      madeWithLove: "صُنع بحب من الصفر بواسطة © عمر مختار",
      ariaLabel: "زيارة موقع عمر مختار الشخصي",
    },
    loader: {
      loading: "جاري التحميل…",
    },
    audio: {
      playLabel: "تشغيل وصف ملخص صوتي",
      pauseLabel: "إيقاف تشغيل الوصف الصوتي المختصر",
      playButton: "استمع إلى ملخصي",
      pauseButton: "إيقاف",
      fallbackText: "المتصفح لا يدعم تشغيل الصوت.",
    },
    home: {
      hero: {
        role: "قائد تجربة المستخدم وعمليات التصميم في جهة حكومية",
        certificationBadge: "معتمد من جوجل في تصميم تجربة المستخدم",
        certificationTitle: "شهادة جوجل في تصميم تجربة المستخدم",
        downloadButton: "تحميل السيرة الذاتية",
        downloadTitle: "تحميل سيرة عمر مختار الذاتية من Google Drive",
      },
      paragraphs: [
        {
          text: "أمتلك أكثر من 17 عامًا من الخبرة كمصمم واجهات وتجربة مستخدم، أتخصص في التجارب الرقمية والواجهات المحمولة ولوحات المعلومات الديناميكية.",
          tooltip:
            "أمتلك أكثر من 17 عامًا من الخبرة كمصمم واجهات وتجربة مستخدم، أتخصص في التجارب الرقمية والواجهات المحمولة ولوحات المعلومات الديناميكية.",
        },
        {
          text: "طوال مسيرتي المهنية، عملت مع مؤسسات مشهورة ووزارات حكومية ومؤسسات أكاديمية مرموقة.",
          tooltip:
            "طوال مسيرتي المهنية، عملت مع مؤسسات مشهورة ووزارات حكومية ومؤسسات أكاديمية مرموقة.",
        },
        {
          text: "أتولى قيادة مبادرات إعادة تصميم شاملة، وأحوّل الأفكار إلى حلول ملموسة بدءًا من التفكير الأولي وحتى التنفيذ، مع الاعتماد على الرسم السريع والهياكل السلكية الدقيقة والنماذج الأولية عالية الجودة.",
          tooltip:
            "أتولى قيادة مبادرات إعادة تصميم شاملة، وأحوّل الأفكار إلى حلول ملموسة بدءًا من التفكير الأولي وحتى التنفيذ، مع الاعتماد على الرسم السريع والهياكل السلكية الدقيقة والنماذج الأولية عالية الجودة.",
        },
        {
          text: "أتعاون مع المحللين والمطورين ومختبري ضمان الجودة لضمان أن تتحول تصميماتنا إلى منتجات سهلة الاستخدام ومتوافقة تمامًا مع أهداف المشروع.",
          tooltip:
            "أتعاون مع المحللين والمطورين ومختبري ضمان الجودة لضمان أن تتحول تصميماتنا إلى منتجات سهلة الاستخدام ومتوافقة تمامًا مع أهداف المشروع.",
        },
      ],
      social: {
        behance: "زيارة عمر مختار على Behance",
        github: "زيارة عمر مختار على GitHub",
        linkedin: "زيارة عمر مختار على LinkedIn",
        email: "إرسال بريد إلكتروني إلى عمر مختار",
      },
      imageAlt: "صورة عمر مختار",
    },
    about: {
      title: "من أنا",
      downloadButton: "تحميل السيرة الذاتية",
      downloadTitle: "تحميل سيرة عمر مختار الذاتية من Google Drive",
      videoLink: "يمكنك معرفة المزيد عني من خلال هذا الفيديو",
      emptyExperience: "بيانات الخبرة غير متوفرة حاليًا.",
    },
    certifications: {
      title: "الشهادات",
      description: "أفضل الاستثمار في التعلم الذاتي لتعزيز خبراتي.",
      showCredential: "عرض الشهادة",
      showCredentialTitle: "عرض الشهادة",
      emptyState: "سيتم عرض الشهادات هنا حال توفر بيانات جديدة.",
    },
    tools: {
      title: "الأدوات",
    },
    blog: {
      byLine: "بقلم عمر مختار",
      ctaText: "اقرأ منشور لينكدإن الأصلي",
      positiveLabel: "الإيجابيات:",
      negativeLabel: "السلبيات:",
      posts: [
        {
          id: "levels",
          title:
            "الشفقة، التعاطف، والتعاطف العميق: مصطلحات مهمة في تجربة المستخدم",
          heroImageAlt:
            "الشفقة والتعاطف والتعاطف العميق في تصميم تجربة المستخدم - فهم مبادئ تجربة المستخدم والاستجابات العاطفية في التفكير التصميمي",
          intro: [
            'مصطلحات مهمة في تجربة المستخدم. عندما عرفنا المصطلحات، وجدنا أنها مشابهة جدًا لما ورد في حديث رسول الله ﷺ: "من رأى منكم منكراً فليغيره بيده، فإن لم يستطع فبلسانه، فإن لم يستطع فبقلبه، وذلك أضعف الإيمان". نرى هدىً واضحًا من نبينا في التعامل مع المشكلات.',
            "كيف نربط بينها؟ لننتقل إلى التعاريف:",
          ],
          definitions: [
            {
              heading: "1. الشفقة",
              lines: [
                "الشفقة هي أن تلاحظ مشكلة أو صعوبة وتشعر بالحزن عليها دون أن تبادر بحلها؛ هي مجرد شعور.",
                "هذا يشبه ما ورد في الحديث عن 'في قلبك'، حيث يُوصف بأنه أضعف درجات الاستجابة.",
                "في تجربة المستخدم، لا تحدث الشفقة فرقًا كبيرًا.",
              ],
              example:
                "مثال: إذا لاحظ المصمم أن المستخدمين يواجهون صعوبة في التطبيق ولم يفعل شيئًا، فهذه شفقة فقط.",
            },
            {
              heading: "2. التعاطف",
              lines: [
                "التعاطف يعني فهم المشكلة والشعور بالحزن أو القلق تجاه من يعاني منها، ومحاولة الحديث عنها أو اتخاذ خطوات بسيطة لمعالجتها.",
                "يشبه هذا ما ورد في الحديث عن 'التغيير باللسان'.",
                "في UX، يعني هذا أن المصمم يستمع إلى ملاحظات المستخدم ويُجري بعض التعديلات، لكن هذه التعديلات قد لا تحل المشكلة بالكامل.",
              ],
              example:
                "مثال في تجربة المستخدم: يستمع المصمم لشكاوى المستخدم ويجري تغييرات صغيرة على الواجهة لتسهيلها، لكنها قد تظل سطحية أو غير كافية.",
            },
            {
              heading: "3. التعاطف العميق",
              lines: [
                "التعاطف العميق هو أعلى مستويات الاستجابة.",
                "يعني ألا تكتفي بفهم المشكلة، بل تضع نفسك مكان المستخدم وتُشعر بما يشعر به.",
                "هذا يشبه 'التغيير باليد'، أقوى مستويات العمل المذكورة في الحديث.",
                "في تجربة المستخدم، يدفعنا هذا النوع من التعاطف لإعادة تصميم التجربة بالكامل لتلبية احتياجات المستخدمين وحل مشاكلهم بشكل شامل.",
              ],
              example:
                "مثال UX: يجري المصمم بحثًا عميقًا، ويختبر المنتج كما يفعل المستخدمون، ويُعيد تصميم التطبيق لحل كل العقبات التي يواجهونها.",
            },
          ],
          conclusion: [
            {
              term: "الشفقة:",
              detail:
                "مجرد ملاحظة المشكلة والشعور بالسوء بدون عمل. يشبه 'التغيير بالقلب'.",
            },
            {
              term: "التعاطف:",
              detail:
                "فهم المشكلة والسعي إلى تحسينات صغيرة. يشبه 'التغيير باللسان'.",
            },
            {
              term: "التعاطف العميق:",
              detail:
                "الانخراط الكامل مع المشكلة وحلها من الأساس. يشبه 'التغيير باليد'.",
            },
          ],
          closing: [
            "كما يورد الحديث، 'التغيير باليد' هو أقوى شكل للعمل. في UX، يمنحنا التعاطف القدرة على تقديم أفضل تجربة لأنه يدفعنا لفهم احتياجات المستخدم وحل المشاكل من جذورها.",
            "في النهاية، لكي ننجح كمصممي تجربة المستخدم، يجب أن نسعى لتقديم حلول فعلية بدلًا من الاكتفاء بالتعاطف أو الشفقة من بعيد.",
          ],
          arabicQuote: [
            "(وما ينطق عن الهوى، إن هو إلا وحي يوحى)",
            "صلي الله عليه وسلم",
          ],
          ctaAria:
            "اقرأ منشور لينكدإن الأصلي حول درجات التعاطف في تجربة المستخدم",
          ctaHref:
            "https://www.linkedin.com/posts/omarmokhtar22_ux-activity-7249664621257641984-Hwtv?utm_source=share&utm_medium=member_desktop&rcm=ACoAAAyBkfYBusmou5-gf08ENyka9h55cIflNbw",
        },
        {
          id: "svg",
          title: "SVG في تطوير الويب: مقارنة بين ثلاث طرق",
          heroImageAlt:
            "SVG في تطوير الويب - مقارنة بين ثلاث طرق لتنفيذ الرسومات المتجهة القابلة للتوسع في المشاريع الحديثة",
          intro: [
            "بصفتي مصمم واجهات وتجربة المستخدم، أجريت نقاشًا ممتعًا مع مطور .NET والمطور الأمامي حول أفضل طرق استخدام SVG في مشاريع الويب. بعد ذلك، قررت أن أوضح لهم الفروقات بين الطرق الثلاث لاستخدام SVG.",
          ],
          methods: [
            {
              heading: "1. SVG ككود مضمن داخل HTML",
              positives: [
                "التضمين المباشر: يمكنك وضع SVG داخل HTML باستخدام وسم <svg>، وهذا مناسب للرموز أو الرسومات الصغيرة.",
                "سهولة التنسيق: يمكنك تغيير مظهر SVG بواسطة CSS وJavaScript.",
                "تحميل أسرع: يقلل عدد الملفات التي يحتاج المتصفح لتحميلها.",
              ],
              negatives: [
                "زيادة حجم HTML: قد يجعل SVG الكبير ملف HTML أكبر.",
                "تعقيد HTML: وجود العديد من SVG ضمن HTML قد يصعب قراءة الكود وإدارته.",
              ],
            },
            {
              heading: "2. SVG كصورة",
              positives: [
                "ملفات منفصلة: استخدام وسم <img> مع SVG يحافظ على نظافة HTML.",
                "التخزين المؤقت: يمكن للمتصفح حفظ ملف SVG، ما يجعل التحميل أسرع لاحقًا.",
                "سهولة الاستخدام: من السهل إضافته إلى الصفحة.",
              ],
              negatives: [
                "طلب إضافي: يحتاج المتصفح إلى تحميل ملف SVG منفصل، مما قد يطيل زمن التحميل قليلًا.",
                "مرونة أقل: لا يمكنك تنسيق SVG أو التفاعل معه بسهولة كما في SVG المضمن.",
              ],
            },
            {
              heading: "3. SVG كخط أيقونات",
              positives: [
                "أيقونات قابلة للتكبير: خطوط SVG ممتازة للأيقونات التي تتغير أحجامها دون فقد جودة.",
                "تنسيق CSS: يمكنك تغيير اللون والحجم عبر CSS.",
                "سلوك مشابه للنص: تتصرف مثل النص، مما يسهل محاذاتها.",
              ],
              negatives: [
                "لون واحد: عادةً ما تدعم خطوط SVG لونًا واحدًا.",
                "قضايا في الوصول: تعامل قارئات الشاشة خطوط SVG كنص، ما قد يعقّد الوصول.",
              ],
            },
          ],
          conclusion: [
            "SVG المضمن: أفضل للرموز الصغيرة وعندما تحتاج تحكمًا كاملاً بالـ CSS/JS، لكنه قد يزيد حجم HTML.",
            "SVG كصورة: مناسب لصفحات HTML النظيفة والتخزين المؤقت، لكنه أقل مرونة للتنسيق.",
            "خطوط SVG: ممتازة للأيقونات القابلة للتكبير مع تنسيق CSS، لكنها مقيدة بلون واحد وتواجه تحديات في الوصول.",
          ],
          closing: [
            "لكل طريقة مزايا وعيوب. يعتمد الاختيار على احتياجات مشروعك ومتطلبات الأداء وأهداف التصميم. فهم هذه الفروق يساعدك على اتخاذ قرارات أذكى عند استخدام SVG في مشاريع الويب.",
          ],
          ctaAria: "اقرأ منشور لينكدإن الذي يقارن طرق استخدام SVG",
          ctaHref:
            "https://www.linkedin.com/posts/omarmokhtar22_as-a-uiux-designer-i-had-an-interesting-activity-7219603541919682560-xFKF?utm_source=share&utm_medium=member_desktop&rcm=ACoAAAyBkfYBusmou5-gf08ENyka9h55cIflNbw",
        },
      ],
    },
    projects: {
      title: "الأعمال",
      description: [
        "أنا متحمس دائمًا لتعلم تقنيات جديدة وتوسيع مهاراتي.",
        "كل مشروع عملت عليه، سواء منفردًا أو مع فرق، علمني شيئًا ذا قيمة.",
        "أحيانًا أطبق هذه الدروس مباشرة، وأحيانًا تقيّدني التقنيات المستخدمة في بيئة العمل.",
        "تأثر أسلوبي بهذه الأدوات، لكنه شجعني أيضًا على استكشاف ما هو أبعد من تلك الحدود.",
      ],
      descriptionTooltip:
        "أنا متحمس دائمًا لتعلم تقنيات جديدة وتوسيع مهاراتي. كل مشروع عملت عليه، سواء منفردًا أو مع فرق، علمني شيئًا ذا قيمة. أحيانًا أطبق هذه الدروس مباشرة، وأحيانًا تقيّدني التقنيات المستخدمة في بيئة العمل. تأثر أسلوبي بهذه الأدوات، لكنه شجعني أيضًا على استكشاف ما هو أبعد من تلك الحدود.",
      caseStudy: {
        title: "بوابة الطالب الداخلية",
        intro:
          "أصبحت البوابات الرقمية ضرورة ملحة في التعليم العالي. من هذا المنطلق، اقترحت جامعة المجمعة إنشاء بوابة داخلية للطلاب تتميز بما يلي:",
        tooltip:
          "أصبحت البوابات الإلكترونية ضرورة ملحة في مجال التعليم والتعليم العالي: ومن هذا المنطلق اقترحت جامعة المجمعة إنشاء بوابة داخلية للطلاب تتميز بما يلي: الدخول الموحد تقديم أكثر من 15 خدمة الاطلاع على الأخبار والفعاليات التي أعلن عنها الوصول السريع للجامعة: تقديم الطلبات عبر أنظمة الجامعة المختلفة وجمعها في مكان واحد. مراجعة دروسهم وجداول الامتحانات.",
        features: [
          "دخول موحد",
          "توفير أكثر من 15 خدمة",
          "عرض الأخبار والفعاليات المعلنة",
          "وصول سريع: تقديم الطلبات عبر أنظمة الجامعة المختلفة وجمعها في مكان واحد.",
          "مراجعة الدروس وجداول الامتحانات.",
        ],
        closing:
          "تجمع البوابة الخدمات المهمة للطلاب في مكان واحد حتى يسهل عليهم متابعة الطلبات والإعلانات والجداول.",
        button: "دراسة حالة",
        buttonAria: "قراءة دراسة الحالة الكاملة لبوابة الطالب الداخلية",
        coverAlt: "غلاف دراسة الحالة",
      },
      caseStudyExternal: {
        text: "تفقّد الموقع",
        aria: "عرض النموذج الحي لبوابة الطالب الداخلية",
      },
      moreProjectsTitle: "مشاريع إضافية",
      linkedInButton: {
        text: "اكتشف المزيد على لينكدإن",
        aria: "زيارة حساب عمر مختار على لينكدإن لمزيد من المشاريع",
      },
      projectLinkAria: "فتح تفاصيل مشروع {{project}} في علامة تبويب جديدة",
    },
    caseStudyPage: {
      iframeTitle: "دراسة حالة في فيجما",
      back: "العودة إلى المشاريع",
      backAria: "الرجوع إلى صفحة المشاريع",
      checkWebsite: "تفقّد الموقع",
      checkWebsiteAria: "عرض النموذج الحي لبوابة الطالب الداخلية",
    },
    contact: {
      title: "تواصل",
      form: {
        name: "الاسم",
        email: "البريد الإلكتروني",
        subject: "الموضوع",
        message: "رسالتك",
        subjectPlaceholder: "الموضوع",
        submitButton: "إرسال الرسالة",
        submitAria: "إرسال رسالة عبر نموذج التواصل",
      },
      whatsapp: "تواصل معي عبر واتساب",
      whatsappAria: "افتح محادثة واتساب مع عمر مختار",
      successAlert: "✅ تم إرسال الرسالة بنجاح!",
      failureAlert:
        "❌ فشل إرسال الرسالة، يرجى إعادة توصيل Gmail أو التحقق من الإعدادات.",
    },
    meta: {
      "/": {
        title: "عمر مختار - قائد تصميم تجربة المستخدم | خبرة أكثر من 17 عامًا",
        description:
          "عمر مختار قائد تصميم تجربة المستخدم بخبرة تزيد عن 17 عامًا في التجارب الرقمية والواجهات المحمولة ولوحات المعلومات. معتمد من جوجل في تصميم تجربة المستخدم.",
        keywords:
          "مصمم تجربة المستخدم, مصمم واجهات المستخدم, تجربة المستخدم, تصميم المحمول, لوحات المعلومات, السعودية, مشاريع حكومية",
        canonical: baseUrl,
        ogImage: `${baseUrl}/images/omar.png`,
        ogLocale: "ar_SA",
        language: "Arabic",
        structuredData: {
          "@context": "https://schema.org",
          "@type": "Person",
          name: "عمر مختار",
          jobTitle: "UX Design Lead",
          description:
            "قائد تصميم تجربة المستخدم بخبرة أكثر من 17 عامًا في التجارب الرقمية والواجهات المحمولة ولوحات المعلومات",
          url: baseUrl,
          image: `${baseUrl}/images/omar.png`,
          sameAs: [
            "https://www.linkedin.com/in/omarmokhtar22/",
            "https://www.behance.net/Omar_Mokhtar",
            "https://github.com/omarmok",
          ],
          worksFor: {
            "@type": "Organization",
            name: "Confidential Government",
          },
          hasCredential: {
            "@type": "EducationalOccupationalCredential",
            name: "Google Professional UX Certificate",
          },
        },
      },
      "/About": {
        title: "الخبرة والمسار المهني - عمر مختار | قائد تصميم تجربة المستخدم",
        description:
          "مسار الخبرة المهنية لعمر مختار، قائد تصميم تجربة المستخدم. اكتشف الشهادات والمهارات وتجربة التصميم التي تمتد لأكثر من 17 عامًا.",
        keywords:
          "خبرة مصمم UX, المسار المهني, شهادات التصميم, مهارات UI/UX, الملف المهني",
        canonical: `${baseUrl}/About`,
        ogImage: `${baseUrl}/images/omar.png`,
        ogLocale: "ar_SA",
        language: "Arabic",
      },
      "/Blog": {
        title: "مدونة تصميم UX/UI - عمر مختار | رؤى ونصائح",
        description:
          "أحدث الرؤى والأفكار حول تصميم UX/UI، وتطوير الويب، وتجربة المستخدم. مقالات تخصصية في التفكير التصميمي، التعاطف، وتحسين SVG.",
        keywords:
          "مدونة UX, مقالات تجربة المستخدم, التفكير التصميمي, تحسين SVG, التعاطف",
        canonical: `${baseUrl}/Blog`,
        ogImage: `${baseUrl}/images/blog-hero.jpg`,
        ogLocale: "ar_SA",
        language: "Arabic",
      },
      "/Projects": {
        title: "محفظة تصميم UX/UI - عمر مختار | دراسات حالة ومشاريع",
        description:
          "محفظة مشاريع تصميم UX/UI ودراسات حالة لعمر مختار. مشاريع حكومية، تطبيقات الويب، وواجهات الجوال.",
        keywords:
          "محفظة تصميم, مشاريع واجهات المستخدم, دراسات حالة, مشاريع حكومية, تطبيقات الويب, تصميم الجوال",
        canonical: `${baseUrl}/Projects`,
        ogImage: `${baseUrl}/images/projects-hero.jpg`,
        ogLocale: "ar_SA",
        language: "Arabic",
      },
      "/ContactForm": {
        title: "تواصل مع عمر مختار | قائد تصميم تجربة المستخدم",
        description:
          "تواصل مع عمر مختار للتعاون أو الاستشارات أو مشروعات التصميم. متاح للعمل الحر والاستشارات.",
        keywords:
          "تواصل مع مصمم UX, استشارات التصميم, مصمم UX حر, خدمات التصميم, تعاون",
        canonical: `${baseUrl}/ContactForm`,
        ogImage: `${baseUrl}/images/omar.png`,
        ogLocale: "ar_SA",
        language: "Arabic",
      },
      "/CaseStudy": {
        title: "دراسة حالة بوابة الطالب الداخلية | عمر مختار",
        description:
          "دراسة حالة مفصلة لبوابة الطالب الداخلية بجامعة المجمعة مع نماذج فيجما وأبحاث المستخدم.",
        keywords:
          "دراسة حالة بوابة الطالب, جامعة المجمعة, UX Case Study, فيجما",
        canonical: `${baseUrl}/CaseStudy`,
        ogImage: `${baseUrl}/images/casstudymain.png`,
        ogLocale: "ar_SA",
        language: "Arabic",
      },
      default: {
        title: "عمر مختار - قائد تصميم تجربة المستخدم",
        description:
          "مصمم واجهات وتجربة المستخدم بخبرة أكثر من 17 عامًا في التجارب الرقمية والواجهات المحمولة.",
        keywords: "مصمم UX, مصمم واجهات المستخدم, تجربة المستخدم",
        canonical: baseUrl,
        ogImage: `${baseUrl}/images/omar.png`,
        ogLocale: "ar_SA",
        language: "Arabic",
      },
    },
    data: {
      experience: [
        {
          id: 1,
          url: "...",
          date: "أغسطس 2025 – الآن",
          role: "أتولى قيادة تجربة المستخدم وعمليات التصميم عبر المنصة الإلكترونية وتطبيق الجوال، وأقود استراتيجية تجربة المستخدم وتدفقات الخدمة ومواصفات الواجهات بينما أدير عمليات DesignOps وحوكمتها. أعمل على بناء وتوسيع نظام التصميم للمنصة والتطبيق (الرموز، والمكونات، والأنماط، والتوثيق) لضمان الاتساق وسهولة الوصول. أؤسس مسارات العمل التصميمية، ومراسم المراجعة، ومعايير التسليم مع محللي الأعمال والمطورين وضمان الجودة لمواءمة المتطلبات، وتقليل إعادة العمل، وتسريع التسليم. أساند التنفيذ من خلال التوضيحات، والتحقق من قبول المستخدم، وضمان الجودة التصميمية. تعاونت مع فريق الهندسة لإعادة بناء صفحات رئيسية باستخدام HTML وCSS وJavaScript، مما أضمن تنفيذًا دقيقًا وتحسّنًا قابلًا للقياس في قابلية الاستخدام.",
          jobtitle: "قائد تجربة المستخدم وعمليات التصميم",
          companyname: "Confidential Government",
        },
        {
          id: 2,
          url: "...",
          date: "يناير 2023 – أغسطس 2025",
          role: "مهندس تصميم تجربة المستخدم وواجهة المستخدم يعمل على تحسين عملية تجربة المستخدم في المنصة والتطبيق. أنشأت نظام تصميم للمنصة والتطبيق، وأتعاون مع محللي الأعمال والمطورين ومختبري ضمان الجودة لضمان تطوير المنتج وفق تجربة المستخدم والمواصفات التصميمية. كما شاركت فريق التطوير في إعادة بناء جميع الصفحات باستخدام HTML وCSS وJavaScript.",
          jobtitle: "مهندس تصميم تجربة المستخدم وواجهة المستخدم",
          companyname: "Confidential Government",
        },
        {
          id: 3,
          url: "https://hrc.gov.sa/",
          date: "2021 – 2022",
          role: "كنت قائد UX/UI ضمن فريق مكون من أربعة، وأكملنا المشروع خلال خمسة أشهر. كنت مسؤولًا عن ابتكار أفكار لإعادة تصميم التخطيط وتحسين تجربة المستخدم عبر الرسومات السريعة، والهياكل السلكية، والنماذج الأولية. كما شاركت فريق التطوير الذي استخدم HTML وVUE.js وJavaScript لإعادة بناء جميع الصفحات.",
          jobtitle: "مصمم واجهات وتجربة المستخدم",
          companyname:
            "هيئة حقوق الإنسان في المملكة العربية السعودية (متعاون مستقل)",
        },
        {
          id: 4,
          url: "https://nhc.sa/",
          date: "فبراير 2019 – ديسمبر 2022",
          role: "مصمم واجهات وتجربة المستخدم مسؤول عن رسم الهياكل السلكية وتطوير الواجهة الأمامية (HTML، CSS، JS، Vue.js). قدمت مجموعات واجهات (UI kits) وحلول تصميمية لكل من منصات الشركة. تعاونت عن قرب مع المحللين والمطورين ومختبري ضمان الجودة لضمان تطوير المنتج وفق تجربة المستخدم والمواصفات التصميمية.",
          jobtitle: "مصمم واجهات وتجربة المستخدم",
          companyname: "الشركة الوطنية للإسكان (NHC)",
        },
        {
          id: 5,
          url: "https://www.mu.edu.sa/ar",
          date: "مارس 2016 – فبراير 2019",
          role: "مصمم واجهات وتجربة المستخدم مطور واجهات أمامية، عملت أيضًا كمصمم جرافيك في وحدة البوابة الإلكترونية. فهمت احتياجات الطلاب والموظفين لصياغة حلول داعمة، وتواصلت يوميًا مع المحللين والمطورين ومختبري الجودة لضمان تطابق التطوير مع متطلبات أصحاب المصلحة. ناقشت أفكارًا جديدة مع العمداء لتحسين المنتجات القديمة.",
          jobtitle: "مطوِّر أمامي",
          companyname: "جامعة المجمعة",
        },
        {
          id: 6,
          url: "https://www.sure.com.sa/en/",
          date: "نوفمبر 2013 – فبراير 2016",
          role: "مصمم واجهات (HTML، CSS). عملت في فريق التصميم لمؤسسات حكومية وجامعات منها الحرس الوطني وجامعة شقراء وهيئة الغذاء والدواء.",
          jobtitle: "مصمم واجهات",
          companyname: "شركة شور العالمية للتقنية (SURE)",
        },
        {
          id: 7,
          url: "https://www.jazanu.edu.sa/ar",
          date: "مايو 2012 – 2013",
          role: "مصمم ومطور واجهات وتجربة المستخدم يعمل على رسم الهياكل السلكية وتطوير الواجهة الأمامية (HTML، CSS، JS). عملت كمصمم جرافيك في وحدة البوابة الإلكترونية، وشاركت في فهم احتياجات الطلاب والمستخدمين لصنع حلول مستدامة. تعاونت مع المحللين والمطورين ومختبري الجودة وتواصلت مع أصحاب المصلحة لتحسين المنتجات القائمة.",
          jobtitle: "مصمم ومطور واجهات وتجربة المستخدم",
          companyname: "جامعة جازان",
        },
      ],
      projects: [
        {
          id: 2,
          url: "https://hrc.gov.sa/",
          info: "حقوق الإنسان في السعودية (HRC) - تحت التطوير",
          image: "https://i.postimg.cc/ZKGcBc7c/hrc.png",
          Issued: "أغسطس 2021 – الآن",
        },
        {
          id: 3,
          url: "https://reac.sa/",
          info: "مركز التحكيم العقاري السعودي",
          image: "https://i.postimg.cc/pdZYSt2G/reac.png",
          Issued: "أبريل 2019 – الآن",
        },
        {
          id: 4,
          url: "https://mullak.housing.gov.sa/",
          info: "مولّاك",
          image: "https://i.postimg.cc/9XSPKbhh/mullak.png",
          Issued: "مارس 2019 – الآن",
        },
        {
          id: 5,
          url: "https://idlelands-services.housing.gov.sa/Account/Login",
          info: "أيديلاندز",
          image: "https://i.postimg.cc/5NYg2G3y/idland.png",
          Issued: "مارس 2019 – الآن",
        },
        {
          id: 6,
          url: "https://tanmawi.housing.sa/",
          info: "الإسكان التنموي",
          image: "https://i.postimg.cc/Y0J1Fr39/tanmaei.png",
          Issued: "فبراير 2019 – الآن",
        },
        {
          id: 7,
          url: "https://www.mu.edu.sa/ar",
          info: "بوابة جامعة المجمعة",
          image: "https://i.postimg.cc/9QyBG7sj/mjmaahun.png",
          Issued: "أغسطس 2019 – سبتمبر 2020",
        },
        {
          id: 8,
          url: "https://qm.org.sa/",
          info: "جمعية المجمعة الخيرية",
          image: "https://i.postimg.cc/9fVY1fjw/qm.jpg",
          Issued: "مايو 2020 – سبتمبر 2020",
        },
        {
          id: 9,
          url: "https://omarmok.github.io/dashboard/",
          info: "التقارير",
          image: "https://i.postimg.cc/Kzp7Zr3t/REPORTS.png",
          Issued: "أغسطس 2021 – الآن",
        },
        {
          id: 10,
          url: "https://card.mu.edu.sa/",
          info: "بطاقة MU GREATINS",
          image: "https://i.postimg.cc/HWP3HHbF/cards.jpg",
          Issued: "يونيو 2016 – سبتمبر 2017",
        },
        {
          id: 11,
          url: "https://omarmok.github.io/testDean/",
          info: "عمادة تقنية المعلومات",
          image: "https://i.postimg.cc/MKQ0SB6j/dean.png",
          Issued: "أكتوبر 2017 – سبتمبر 2018",
        },
        {
          id: 12,
          url: "https://www.su.edu.sa/ar",
          info: "بوابة جامعة شقراء",
          image: "https://i.postimg.cc/3RxC5bNK/shaqraa.jpg",
          Issued: "أغسطس 2014 – سبتمبر 2015",
        },
      ],
      certifications: arabicCertifications,
    },
  },
};
