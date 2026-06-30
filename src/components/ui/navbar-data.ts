// ─── Types ───────────────────────────────────────────────

export interface NavLink {
    text: string;
    href: string;
}

export interface DropdownColumn {
    heading: string;
    links: NavLink[];
}

export type DropdownData = DropdownColumn[];

export interface MenuItem {
    label: string;
    href: string;
    dropdownData?: DropdownData;
    previewImage?: string;
}

export type AnimationDirection = "right-to-left" | "left-to-right";

// ─── Menu Data ───────────────────────────────────────────────

export const platformDropdown: DropdownData = [
    {
        heading: "GreenOps Platform",
        links: [
            { text: "Platform Overview", href: "#" },
            { text: "Architecture", href: "#" },
            { text: "Integrations", href: "#" },
        ],
    },
];

const productsDropdown: DropdownData = [
    {
        heading: "VICAS",
        links: [
            { text: "Overview", href: "/products/vicas" },
            { text: "Safety Monitoring", href: "/products/vicas#safety-monitoring" },
            { text: "Collision Avoidance", href: "/products/vicas#collision-avoidance" },
            { text: "Computer Vision AI", href: "/products/vicas#computer-vision-ai" },
        ],
    },
    {
        heading: "GreenOps",
        links: [
            { text: "Overview", href: "/products/greenops" },
            { text: "Energy Optimization", href: "/products/greenops#energy-optimization" },
            { text: "Carbon Intelligence", href: "/products/greenops#carbon-intelligence" },
            { text: "AI Industrial Copilot", href: "/products/greenops#ai-industrial-copilot" },
        ],
    },
    
];


const industriesDropdown: DropdownData = [
    {
        heading: "Industries",
        links: [
            { text: "Cement", href: "/industries/cement" },
            { text: "Steel & Mining", href: "/industries/steel-mining" },
            { text: "Oil & Gas", href: "/industries/oil-gas" },
            { text: "Chemicals & Pharma", href: "/industries/chemicals-pharma" },
            { text: "Railways", href: "/industries/railways" },
            { text: "Ports", href: "/industries/ports" },
            { text: "Manufacturing", href: "/industries/manufacturing" },
            { text: "Construction", href: "/industries/construction" },
            { text: "Power & Utilities", href: "/industries/power-utilities" },
        ],
    },
];
const solutionsDropdown: DropdownData = [
    {
        heading: "Solutions",
        links: [
            { text: "Safety", href: "#" },
            { text: "Quality Inspection", href: "#" },
            { text: "PPE Non-Compliance", href: "#" },
            { text: "AI for decarbonization", href: "#" },
            { text: "Energy Efficiency", href: "#" },
            { text: "Digital Twin", href: "#" },
            { text: "Leakage Detection", href: "#" },
        ],
    },
];

const technologyDropdown: DropdownData = [
    {
        heading: "Technology",
        links: [
            { text: "AI & Machine Learning", href: "#" },
            { text: "Industrial IoT", href: "#" },
            { text: "Digital Twin", href: "#" },
            { text: "Edge AI", href: "#" },
        ],
    },
];

const caseStudiesDropdown: DropdownData = [
    {
        heading: "Case Studies",
        links: [
            { text: "Customer Success", href: "#" },
            { text: "Industry Results", href: "#" },
            { text: "ROI & Impact", href: "#" },
        ],
    },
];

const insightsDropdown: DropdownData = [
    {
        heading: "Insights",
        links: [
            { text: "Blog", href: "#" },
            { text: "Events", href: "/resources/events" },
            { text: "Whitepapers", href: "#" },
            { text: "Awards & Recognition", href: "/resources/awards" },
            { text: "Podcasts", href: "/resources/prodcasts" },
        ],
    },
];

const companyDropdown: DropdownData = [
    {
        heading: "Company",
        links: [
            { text: "About Us", href: "/company/about" },
            { text: "Leadership", href: "#" },
            { text: "Partners", href: "/company/partner" },
            { text: "News", href: "#" },
            { text: "Contact", href: "/company/contact" },
        ],
    },
];

export const careersDropdown: DropdownData = [
    {
        heading: "Careers",
        links: [
            { text: "Open Positions", href: "/company/careers" },
            { text: "Life at LivNSense", href: "#" },
            { text: "Internship Programs", href: "#" },
        ],
    },
];

export const menuItems: MenuItem[] = [
    { label: "Products", href: "/#products", dropdownData: productsDropdown, previewImage: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800" },
    { label: "Solutions", href: "/solutions", dropdownData: solutionsDropdown, previewImage: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800" },
    { label: "Industries", href: "/industries", dropdownData: industriesDropdown, previewImage: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800" },
    { label: "Technology", href: "#", dropdownData: technologyDropdown, previewImage: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800" },
    { label: "Case Studies", href: "#", dropdownData: caseStudiesDropdown, previewImage: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=800" },
    { label: "Insights", href: "/resources", dropdownData: insightsDropdown, previewImage: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800" },
    { label: "Company", href: "/company", dropdownData: companyDropdown, previewImage: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800" },
];
