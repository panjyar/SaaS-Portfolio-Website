export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export const SUBMENUS: { [key: string]: NavItem[] } = {
  "/resources": [
    { label: "All resource", href: "/resources/all_resource" },
    { label: "Events", href: "/resources/events" },
    { label: "Awards & Recognition", href: "/resources/awards" },
    { label: "Podcasts", href: "/resources/prodcasts" },
    { label: "FAQs", href: "/resources/faq" },
  ],
  "/company": [
    { label: "About Us", href: "/company/about" },
    { label: "Careers", href: "/company/careers" },
    { label: "Partner", href: "/company/partner" },
    { label: "Contact", href: "/company/contact" },
  ],
};
