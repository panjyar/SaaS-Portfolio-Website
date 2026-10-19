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
        heading: "YatraGen and Darshan AI Platform",
        links: [
            { text: "Platform Overview", href: "#" },
            { text: "Architecture", href: "#" },
            { text: "Integrations", href: "#" },
        ],
    },
];

const productsDropdown: DropdownData = [
    {
        heading: "Products",
        links: [
            { text: "Darshan AI", href: "/products/darshanai" },
            { text: "YatraGen", href: "/products/yatragen" },
        ],
    },
];

const solutionsDropdown: DropdownData = [
    {
        heading: "Solutions",
        links: [
            { text: "For Individual Travelers", href: "#" },
            { text: "For Travel Agencies", href: "#" },
            { text: "Corporate & Business", href: "#" },
            { text: "Group Trip Coordination", href: "#" },
            { text: "Sustainable Travel", href: "#" },
            { text: "Last-Minute Getaways", href: "#" },
        ],
    },
];

const experiencesDropdown: DropdownData = [
    {
        heading: "Experiences",
        links: [
            { text: "Luxury & Wellness", href: "/industries/luxury-wellness" },
            { text: "Adventure & Trekking", href: "/industries/adventure-trekking" },
            { text: "Historical & Cultural", href: "/industries/historical-cultural" },
            { text: "Backpacking & Solo", href: "/industries/backpacking-solo" },
            { text: "Family Vacations", href: "/industries/family-vacations" },
            { text: "Cruises & Yachting", href: "/industries/cruises-yachting" },
        ],
    },
];

const technologyDropdown: DropdownData = [
    {
        heading: "Technology",
        links: [
            { text: "AI Recommendation Engine", href: "#" },
            { text: "Computer Vision", href: "#" },
            { text: "Real-Time Pricing Analytics", href: "#" },
        ],
    },
];

const successStoriesDropdown: DropdownData = [
    {
        heading: "Success Stories",
        links: [
            { text: "Traveler Stories", href: "#" },
            { text: "Agency Success", href: "#" },
            { text: "Time & Cost Saved", href: "#" },
        ],
    },
];

const insightsDropdown: DropdownData = [
    {
        heading: "Insights",
        links: [
            { text: "Travel Guides & Blogs", href: "#" },
            { text: "Travel Trends 2026", href: "/resources/events" },
            { text: "Podcasts", href: "/resources/prodcasts" },
            { text: "Press & Awards", href: "/resources/awards" },
        ],
    },
];

const companyDropdown: DropdownData = [
    {
        heading: "Company",
        links: [
            { text: "About Us", href: "/company/about" },
            { text: "Leadership", href: "/company/about#leadership" },
            { text: "Partners", href: "/company/partner" },
            { text: "Careers", href: "/company/careers" },
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
    { label: "Experiences", href: "/industries", dropdownData: experiencesDropdown, previewImage: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800" },
    { label: "Technology", href: "#", dropdownData: technologyDropdown, previewImage: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800" },
    { label: "Success Stories", href: "#", dropdownData: successStoriesDropdown, previewImage: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=800" },
    { label: "Insights", href: "/resources", dropdownData: insightsDropdown, previewImage: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800" },
    { label: "Company", href: "/company", dropdownData: companyDropdown, previewImage: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800" },
];

