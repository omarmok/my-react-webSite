export const mainNavLinks = [
  { key: "home", href: "/" },
  { key: "about", href: "/about" },
  { key: "work", href: "/projects" },
  { key: "casebook", href: "/design-system" },
];

export const moreNavLinks = [
  { key: "governmentUx", href: "/government-ux", icon: "governmentUx" },
  { key: "designopsNav", href: "/designops", icon: "designopsNav" },
  { key: "uxLead", href: "/ux-lead", icon: "uxLead" },
  { key: "certifications", href: "/certifications", icon: "certifications" },
  { key: "recommendations", href: "/recommendations", icon: "recommendations" },
  { key: "blog", href: "/blog", icon: "blog" },
];

export const contactNavLink = {
  key: "contact",
  href: "/contact",
  icon: "contact",
};

export const mobileMoreNavLinks = [...moreNavLinks, contactNavLink];
