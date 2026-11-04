export const mainNavLinks = [
  { key: "home", href: "/" },
  { key: "about", href: "/about" },
  { key: "work", href: "/projects" },
  { key: "casebook", href: "/design-system" },
  { key: "caseStudy", href: "/case-studies" },
];

export const moreNavLinks = [
  { key: "governmentUx", href: "/government-ux", icon: "governmentUx" },
  { key: "designopsNav", href: "/designops", icon: "designopsNav" },
  { key: "uxLead", href: "/ux-lead", icon: "uxLead" },
  { key: "certifications", href: "/certifications", icon: "certifications" },
  { key: "blog", href: "/blog", icon: "blog" },
  { key: "recommendations", href: "/recommendations", icon: "recommendations" },
];

export const contactNavLink = {
  key: "contact",
  href: "/contact",
  icon: "contact",
};

export const mobileMoreNavLinks = [
  { key: "caseStudy", href: "/case-studies", icon: "caseStudy" },
  ...moreNavLinks,
  contactNavLink,
];
