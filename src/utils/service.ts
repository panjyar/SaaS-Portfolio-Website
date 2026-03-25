export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export const NAV_ITEMS = [
  { label: "Products", href: "/products" },
  { label: "Industries", href: "/industries" },
  // { label: "Customers", href: "/customers" },
  { label: "Resources", href: "/resources" },
  { label: "Company", href: "/company" },
];

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

export const partners = [
  { src: "/partners/Austin Partner.svg", alt: "Austin" },
  { src: "/partners/AWS Partner.svg", alt: "AWS" },
  { src: "/partners/Azure Partner.svg", alt: "Azure" },
  { src: "/partners/Intel Partner.svg", alt: "Intel" },
  { src: "/partners/SAP Partner.svg", alt: "SAP" },
  { src: "/partners/Qualcomm Partner.svg", alt: "Qualcomm" },
  { src: "/partners/NetApp Partner.svg", alt: "NetApp" },
  { src: "/partners/RedHat Partner.svg", alt: "RedHat" },
  { src: "/partners/Motherson Partner.svg", alt: "Motherson" },
  { src: "/partners/SAS Partner.svg", alt: "SAS" },
];

export const slides = [
  {
    id: 1,
    title: "Exploring how safety initiatives drive productivity, trust, and long-term business growth in manufacturing",
    tag: "Resource",
    img: "/images/resource.jpg",
  },
  {
    id: 2,
    title: "Transforming Workplace Safety with Artificial Intelligence",
    tag: "AI & Safety",
    img: "/images/ai-safety.jpg",
  },
  {
    id: 3,
    title: "The SIF Playbook: Strategies to Prevent Serious Incidents",
    tag: "SIF Playbook",
    img: "/images/sif-playbook.png",
  },
  {
    id: 4,
    title: "Webinar: Innovations in Safety Technology for 2025",
    tag: "Event",
    img: "/images/webinar.png",
  },
];

export const events = [
  {
    id: 1,
    title: "Automation India Expo 2025",
    date: "August 2025",
    location: "Bombay Exhibition Centre, Mumbai",
    type: "EVENT",
    image: "https://media.licdn.com/dms/image/v2/D5622AQE0eM4Kupy_bg/feedshare-shrink_2048_1536/B56Zicy9jsHUA0-/0/1754977266942?e=1762387200&v=beta&t=0DZ4yW0U79kcIgapKnmFh2rW3B86OYGhoZCpjiMEa-I",
    description: `We at LivNSense GreenOps Private Limited, in collaboration with DFI, are proud to showcase our cutting-edge AI solutions designed to empower and reimagine safety in mining, factories, and heavy industries.`,
    pointstitle: `Our solutions focus on:`,
    points: `Real-time hazard detection using advanced AI-powered video and sensor analytics.
            Ensuring PPE compliance across industrial operations to safeguard workers.
            Incident prediction and prevention, enabling proactive safety management.
            Optimizing operational efficiency while maintaining the highest safety standards.`,
    description2: `We are committed to helping industries reduce risks, enhance productivity, and foster a safety-first culture.
            A heartfelt thanks to the organizers of Automation India Expo 2026 for providing this fantastic platform to 
            connect with industry leaders, innovators, and safety professionals. We look forward to demonstrating our innovative solutions, 
            exchanging ideas, and shaping the future of industrial safety together.`,
  },
  {
    id: 2,
    title: "𝗗𝗮𝘆 𝟮 𝗮𝘁 Automation India Expo 2025 — 𝗔𝗜 𝗦𝗮𝗳𝗲𝘁𝘆 𝗶𝗻 𝗔𝗰𝘁𝗶𝗼𝗻!",
    date: "August 2025",
    location: "Bombay Exhibition Centre, Mumbai",
    type: "EVENT",
    image: "https://media.licdn.com/dms/image/v2/D4D22AQERozG5WPlSSA/feedshare-shrink_800/B4DZih87ZtG8Ag-/0/1755063769535?e=1763596800&v=beta&t=EQHSvMVYdVfU1egIvX0ycRod1666wRrA_ccDBQ_jlMQ",
    description: `Day 2 at Automation India Expo 2026 was buzzing with energy as visitor footfall surged at our stall. Industry leaders and professionals explored the diverse applications of AI in mining 
            and industrial safety, witnessing firsthand how technology is transforming operational practices.`,
    points: `In collaboration with DFI, LivNSense GreenOps Private Limited proudly showcased cutting-edge AI solutions designed to enhance safety across mining sites, factories, 
            and heavy industries. Our demonstrations highlighted real-world applications where AI predicts risks, prevents accidents, and ensures safer workplaces.
            We were honored to host distinguished guests including Parvez Bearingwala (KHS Innovation & Engineering LLP), Mukul Chauhan (KEC International Ltd.), Sanjay Shembekar 
            (Lauritz Knudsen Electrical & Automation), and Jilesh Zaveri (P A Zaveri Energy Solutions LLP), among others, who engaged enthusiastically with our AI safety solutions, making the day truly special.`,
  },
  {
    id: 3,
    title: "India Mobile Congress 2025! Day 1",
    date: "October 2025",
    type: "EVENT",
    image: "https://media.licdn.com/dms/image/v2/D5622AQE8Xvrs1Hf0Ag/feedshare-shrink_1280/B56ZnH4NE2KIAs-/0/1759995049422?e=1762992000&v=beta&t=KeAQ1h2D2Uwu30OrDTAk62qHfxWGxqy1Jvg7TtLpNuM",
    description: `The India Mobile Congress (IMC) 2025 marks another milestone in India’s digital journey, echoing Narendra Modi vision that India’s success in the telecom sector reflects the strength of the Aatmanirbhar Bharat mission.
            We were also inspired by Union Minister Shri JYOTIRADITYA SCINDIA message that India is no longer a mere consumer of technology — we are the architects of its future.
            At LivNSense, we’re proud to contribute to this vision by showcasing our AI, IoT, and Digital Twin innovations, empowering smart cities and connected industries with intelligent, sustainable, and safety-driven solutions.
            It’s been an incredible experience engaging with industry leaders, innovators, and partners from across the country. The energy, ideas, and possibilities at India Mobile Congress are truly transformative!`,
    description2: `We look forward to more insightful discussions around AI-driven sustainability, safety, and digital transformation — shaping a smarter and greener India.`,
  },
  {
    id: 4,
    title: "India Mobile Congress 2025! Day 2",
    date: "October 2025",
    image: "https://media.licdn.com/dms/image/v2/D5622AQE_Wr-F9JkAXg/feedshare-shrink_2048_1536/B56ZnNCl_JJ4Aw-/0/1760081678222?e=1762992000&v=beta&t=zD3vw6tvXmRreruOVPnPWqdW8ttQ7Nz2o1ZSHyRF7Pg",
    type: "EVENT",
    description: `LivNSense™, Day 2 was all about showcasing how Safety and Sustainability are deeply interconnected across industries.
          VICAS™ demonstrated its impact across Traffic, Construction, 5G, and Industrial Workplaces, driving real-time safety intelligence and operational excellence.
          GreenOps™ highlighted its role in greening the value chain, helping industries achieve measurable GHG emission reductions and move toward net-zero goals.
          Together, these platforms reflect our vision — enabling a Safer, Greener, and Smarter Industry powered by AI and Digital Twin technologies.`,
  },
  {
    id: 5,
    title: "India Mobile Congress 2025! Day 3 and 4",
    date: "October 2025",
    image: "https://media.licdn.com/dms/image/v2/D5622AQENEmntvWQTqw/feedshare-shrink_2048_1536/B56ZnnXu4ZJQAw-/0/1760523449936?e=1763596800&v=beta&t=Vt4y-W5v4N_GrkOzPcn_DF4Kdc4Z2UBkg4Ed3vkQU4g",
    type: "EVENT",
    description: `Days 3 & 4 marked an exciting conclusion to our IMC experience with LivNSense — filled with insightful conversations, engaging demos, and overwhelming interest from visitors and industry leaders.
          It’s been truly inspiring to showcase how our innovations in AI and Digital Twin technologies are shaping the future of smart cities, safety, and sustainability.
          A heartfelt thank you to LivNSense GreenOps Private Limited for giving me this amazing opportunity to explore, learn, and represent our vision on such a grand stage.
          Grateful for all the interactions, ideas, and inspiration gathered over these four days. Here’s to more innovation, collaboration, and impact ahead!`,
    },
  {
    id: 6,
    title: "Smart Industrial Infrastructure and Predictive Maintenance",
    date: "October 2025",
    image: "https://media.licdn.com/dms/image/v2/D5622AQEvUldTPMdgLw/feedshare-shrink_2048_1536/B56ZnNGtATHAAw-/0/1760082711183?e=1762992000&v=beta&t=oTQKx7k7TE2fnzGTZbZIBoWLfQNOsEkml6riSF40IUw",
    type: "EVENT",
    description: `Presented by Mr. Avnish Kumar, CEO & Founder of LivNSense™, at India Mobile Congress 2025, we highlighted how smart industrial 
                infrastructure combined with predictive maintenance is transforming operations:`,
    points: `The industrial landscape is transforming—from prescriptive to predictive—driven by 
            Physical AI and Digital Twins. This shift empowers industries to anticipate challenges, 
            optimize resources, and operate sustainably.  Predictive Maintenance – Reducing downtime and operational costs
            Smart Industrial Infrastructure – Enhancing efficiency and safety
            Sustainability through Simulation – Driving measurable environmental impact
            AI that understands the physical world – Supporting informed decision-making`,
    description2: `For Bharat 🇮🇳, this is not just a technological upgrade—it’s an opportunity to boost economic growth, enhance 
            workplace safety, and advance net-zero initiatives.`
  },
  
];

export const prodcasts = [
  {
    id: 1,
    title: "LivNSense x Spill the C – A Deep Dive into Industrial Decarbonization!",
    date: "June 2025",
    youtube: "https://www.youtube.com/watch?feature=shared&v=j5a6eC013Bk",
    duration: "59:14",
    spotify: "https://open.spotify.com/episode/0tVAqTHwm9T9F2raR5TLQE?si=ZtmFsKbJT8ScZ4j3Gr9poQ&nd=1&dlsi=fb5d02f6d39e4b42",
    apple: "https://podcasts.apple.com/in/podcast/ai-at-the-helm-decarbonizing-industry-with-livnsense/id1796851602?i=1000715400408",
    img1: "/images/prodcast.jpg",
    img2: "/images/avinish.jpg",
    description: `This episode features an insightful collaboration between LivNSense and Spill the C, 
          where they explore the pressing topic of industrial decarbonization. Listeners are taken on a 
          journey through the strategies, technologies, and innovations shaping the transition toward a 
          low-carbon industrial sector. The discussion covers real-world applications, challenges industries 
          face, and how AI and smart solutions can accelerate sustainable practices.`
  }
]

export const awards = [
  {
    id: 1,
    Title: "Tech Sector Decarbonisation Innovation Challenge",
    Date: "January 2025",
    Given_By: "AIC-Synapses Innovation Foundation & Microsoft",
    Category: "Tech Sector Decarbonisation",
    Product: "GreenOps",
    img: "https://media.licdn.com/dms/image/v2/D5622AQGnsmYIBnXPLA/feedshare-shrink_800/feedshare-shrink_800/0/1732361932060?e=1763596800&v=beta&t=Ak5Ndnkd8u3dXy57o7wiurz7O8h4DXmxDXQ1dQHDoYU",
    href: "https://www.linkedin.com/posts/livnsense-technologies-pvt-ltd_waicf2025-aiinnovation-cleantech-activity-7297136207828856832-t1m0/?rcm=ACoAABoBou8BosXURIkJJnN5-mOVt_v5N26U4Vo"
  },
  {
    id: 2,
    Title: "YourStory's Tech30 at TechSparks2024",
    Date: "November 2024",
    Given_By: "YourStory",
    Category: "Sustainability",
    Product: "GreenOps",
    href: "https://www.linkedin.com/posts/livnsense-technologies-pvt-ltd_tech30-techsparks2024-ai-activity-7245795738406830080-AVn4/?rcm=ACoAABoBou8BosXURIkJJnN5-mOVt_v5N26U4Vo",
    img: "https://media.licdn.com/dms/image/v2/D5622AQEJTidsoRf_8g/feedshare-shrink_1280/feedshare-shrink_1280/0/1727532320084?e=1763596800&v=beta&t=kIAStu2Dv_lTfW912So_4HIULKyVFtjptl5krL18AIQ"
  },{
    id: 3,
    Title: "VIMARSH 2023 5G Hackathon",
    Date: "March 2023",
    Given_By: "Ministry Of Home Affairs",
    Category: "Intelligent Traffic management-5G enabled AI cameras crime scene management including 3D(AR/VR)",
    Product: "GreenOps",
    href: "linkedin.com/posts/livnsense-technologies-pvt-ltd_5g-vimarch2023-bprnd-activity-7174252975551373312-HdQV?rcm=ACoAABoBou8BosXURIkJJnN5-mOVt_v5N26U4Vo",
    img: "https://media.licdn.com/dms/image/v2/D4D22AQEYw80wO8bucg/feedshare-shrink_1280/feedshare-shrink_1280/0/1710437587731?e=1763596800&v=beta&t=3iPRyztgz9hQOihtjFQSW4yYbFu8ninmLWFirTIKkkM"
  },{
    id: 4,
    Title: "Bharat Pitchathon 3.0 - Emerging Startups of the year 2024",
    Date: "December 2023",
    Given_By: "Bharat Pitchathon",
    Category: "Industrial",
    Product: "GreenOps",
    href: "linkedin.com/posts/livnsense-technologies-pvt-ltd_presenting-the-bharat-pitchathon-emerging-activity-7229136336320962562-5RUV?rcm=ACoAABoBou8BosXURIkJJnN5-mOVt_v5N26U4Vo",
    img: "https://media.licdn.com/dms/image/v2/D4E22AQF0cWQfYVZU8g/feedshare-shrink_2048_1536/feedshare-shrink_2048_1536/0/1723551077954?e=1763596800&v=beta&t=Zd2giwoaxYlBQzxKPrZwZpjMMJqhgvBK-ev85qZEFPM"
  },{ 
    id: 5,
    Title: "New Energy Company Showcase",
    Date: "July 2024",
    Given_By: "India Energy Storage Week (IESW)",
    Category: "Net Zero",
    Product: "GreenOps",
    href: "linkedin.com/posts/livnsense-technologies-pvt-ltd_iesw-iesw2024-startupday-activity-7214276224179666945-xg2d?rcm=ACoAABoBou8BosXURIkJJnN5-mOVt_v5N26U4Vo",
    img: "https://media.licdn.com/dms/image/v2/D5622AQHVS-PrGzEloA/feedshare-shrink_2048_1536/feedshare-shrink_2048_1536/0/1719980760490?e=1763596800&v=beta&t=PdrO7IEzPhBtHBUo5MNJWXs0FopPOKElkRvyUa2EKeY"
  },{
    id: 6,
    Title: "Startup Story Entrepreneur Award 2024",
    Date: "November 2024",
    Given_By: "Startup Story",
    Category: "Excellence in Customer Service",
    Product: "GreenOps",
    href: "https://www.linkedin.com/posts/livnsense-technologies-pvt-ltd_startupstory-ssea2024-startupstoryentrepreneurawards2024-activity-7245393389108506624-HElw/?rcm=ACoAABoBou8BosXURIkJJnN5-mOVt_v5N26U4Vo",
    img: "https://media.licdn.com/dms/image/v2/D5622AQE1YdN0t-VcdQ/feedshare-shrink_1280/feedshare-shrink_1280/0/1727436395942?e=1763596800&v=beta&t=eXakMatJDG2pu7sLpfGm67HCrFqgdhEH9caoHF-P6X4"
  },{
    id: 7,
    Title: "Nasscom Emerge 50 Awards 2023",
    Date: "December 2023",
    Given_By: "Nasscom",
    Category: "Sustainability",
    Product: "GreenOps",
    href: "https://www.linkedin.com/feed/update/urn:li:activity:7140258475909046272/",
    img: "https://media.licdn.com/dms/image/v2/D4D22AQE2e6XBlfDuDA/feedshare-shrink_1280/feedshare-shrink_1280/0/1702370278187?e=1763596800&v=beta&t=5IF6c_-_mJWQIJ4b-CP_lWlwwAGKLgrnO8cGi6X1SkE"
  },{
    id: 8,
    Title: "Best DeepTech Startups",
    Date: "December 2023",
    Given_By: "Siliconindia",
    Category: "AI-Prowered industrial",
    Product: "GreenOps",
    href: "https://www.linkedin.com/posts/livnsense-technologies-pvt-ltd_livnsense-greenops-deeptechstartups-activity-7253320751032803329-crMa/?utm_source=share&utm_medium=member_desktop&rcm=ACoAABoBou8BosXURIkJJnN5-mOVt_v5N26U4Vo",
    img: "https://media.licdn.com/dms/image/v2/D5622AQHvhLwxoyvF-A/feedshare-shrink_2048_1536/feedshare-shrink_2048_1536/0/1729326424542?e=1763596800&v=beta&t=cPxhkBCtY-MQseX_FiGeAZwB6TAoEqLnZVoOLxBAvv0"
  },{
    id: 9,
    Title: "AI for Good",
    Date: "December 2023",
    Given_By: "WAICF- World AI Cannes Festival",
    Category: "AI-Powered industrial transformation",
    Product: "GreenOps",
    href: "https://www.linkedin.com/posts/livnsense-technologies-pvt-ltd_waicf2025-aiinnovation-cleantech-activity-7297136207828856832-t1m0/?rcm=ACoAABoBou8BosXURIkJJnN5-mOVt_v5N26U4Vo",
    img: "https://media.licdn.com/dms/image/v2/D5622AQGG6qcB4Wt4Ew/feedshare-shrink_2048_1536/B56ZUSijI6HQAs-/0/1739772844609?e=1763596800&v=beta&t=tEsNhdH9gWtleUgKugaU9KS2WZDypwEVYGkzKteOlG4"
  },
  {
    id: 10,
    Title: "Start-up awards",
    Date: "February 2023",
    Given_By: "Elecrama",
    Category: "Climate tech-energy startup-future engine of decarbonization",
    Product: "GreenOps",
    href: "https://www.linkedin.com/feed/update/urn:li:activity:7034185253866848256/",
    img: "https://media.licdn.com/dms/image/v2/C4D22AQHfiJElCoLt-g/feedshare-shrink_1280/feedshare-shrink_1280/0/1677080452240?e=1763596800&v=beta&t=iOOmYHFfb0TJzJWMnCmblE46upqPpAPoEvNC1_ch6Ew"
  },
  {
    id: 11,
    Title: "Indian Brancd Icon awards 2021-22",
    Date: "September 2022",
    Given_By: "Time cyber media",
    Category: "Industrial IOT",
    Product: "GreenOps",
    href: "https://www.linkedin.com/feed/update/urn:li:activity:6970748066211463168/",
    img: "https://media.licdn.com/dms/image/v2/C4D22AQHw8R8jroQBdg/feedshare-shrink_2048_1536/feedshare-shrink_2048_1536/0/1661955848505?e=1763596800&v=beta&t=OdTU4vi72sD5zfzRryGyXpp7v0bY2YSADVRAVixnZIM"
  },
  {
    id: 12,
    Title: "Award for women entrepreneus in manufacturing 2023",
    Date: "March 2023",
    Given_By: "Great company",
    Category: "Manufacturing",
    Product: "GreenOps",
    href: "https://www.linkedin.com/feed/update/urn:li:activity:7039835010467606528/",
    img: "https://media.licdn.com/dms/image/v2/C4D1FAQHP_QGv7iG0gA/feedshare-document-images_1920/feedshare-document-images_1920/1/1678427432418?e=1761782400&v=beta&t=HdHtIHMDxT34TGOJKx4N85lrMLGbTLp2E0yvJKx7C4I"
  },
  {
    id: 13,
    Title: "Intel Startup Program",
    Date: "April 2022",
    Given_By: "Intel - Yourstory",
    Category: "Deep tech startup ecosystem through high-impact collaboration",
    Product: "GreenOps",
    href: "https://www.intel.in/content/www/in/en/corporate/startup/overview.html",
    // img: "/Linked_IN Post/1645184835596.png"
  },
  {
    id: 14,
    Title: "NetApp Excellerator Program Winner",
    Date: "July 2022",
    Given_By: "NetApp",
    Category: "Best Growth Strategy Awards",
    Product: "LivNSense",
    href: "https://www.linkedin.com/feed/update/urn:li:activity:6956225216096206849/",
    // img: "/Linked_IN Post/1645184835596.png"
  },
  {
    id: 15,
    Title: "SAS Hackathon - Industry Winner",
    Date: "May 2021",
    Given_By: "SAS",
    Category: "Manufacturing, IOT and Industry winer",
    Product: "GreenOps",
    // href: "https://www.linkedin.com/feed/update/urn:li:activity:6956225216096206849/",
    // img: "/Linked_IN Post/1645184835596.png"
  },
  {
    id: 16,
    Title: "LivNSense wins the prestigious 9th Annual AEGIS Graham Bell Awards for Innovation in AI for COGNITIVE REACTORS, VICAS and WELDSENSE products",
    Date: "February 2019",
    Given_By: "AEGIS Graham Bell",
    Category: "Innovation in AI for COGNITIVE REACTORS, VICAS and WELDSENSE products",
    Product: "GreenOps",
    // href: "https://www.linkedin.com/feed/update/urn:li:activity:6956225216096206849/",
    // img: "/Linked_IN Post/1645184835596.png"
  },
  {
    id: 17,
    Title: "LivNSense ViCAS wins Liberty Mutual Safety Innovation Awards -2021 with honorable mention",
    Date: "June 2021",
    Given_By: "Sponsored by Liberty Mutual Insurance and administered by CPWR",
    Category: "Innovation evidence-based technologies, work practices, and program (interventions) designed to reduce or eliminate construction hazards that lead to injuries and pain in the construction industry",
    Product: "GreenOps",
    // href: "https://www.linkedin.com/feed/update/urn:li:activity:6956225216096206849/",
    // img: "/Linked_IN Post/1645184835596.png"
  },
  {
    id: 18,
    Title: "LivNSense wins the prestigious 11th Annual AEGIS Graham Bell Awards for 'AI powered innovation for Life Science'",
    Date: "February 2021",
    Given_By: "AEGIS Graham Bell",
    Category: "AI powered innovation for life science",
    Product: "GreenOps",
    // href: "https://www.linkedin.com/feed/update/urn:li:activity:6956225216096206849/",
    // img: "/Linked_IN Post/1645184835596.png"
  },
  {
    id: 19,
    Title: "LivNSense wins the prestigious 10th Annual AEGIS Graham Bell Awards for Innovation in AI for COGNITIVE REACTORS, VICAS and WELDSENSE products",
    Date: "March 2020",
    Given_By: "AEGIS Graham Bell",
    Category: "AI",
    Product: "GreenOps",
    // href: "https://www.linkedin.com/feed/update/urn:li:activity:6956225216096206849/",
    // img: "/Linked_IN Post/1645184835596.png"
  },
]

export const recognition = [
  {
    id: 1,
    Title: "Mann Ki Bhaat - Water leakage detection - Mentioned by Honorable PM Shri Narendra Modi Ji",
    Date: "May 2023",
    Given_By: "Honorable Prime Minister Shri Narendra Modi Ji",
    Category: "Smart Water Leakage Detection System",
    Product: "GreenOps",
    // img: "/Linked_IN Post/1645184835596.png",
    href: "https://www.youtube.com/watch?v=_2iTBOL8geI",
  },
  {
    id: 2,
    Title: "Creating 10X Women Entrepreneurs",
    Date: "March 2023",
    Given_By: "TiE Delhi-NCR, Zinnov, Google, NetApp, and IANS",
    Category: "GreenOps Operation Platform",
    Product: "GreenOps",
    // img: "/Linked_IN Post/1645184835596.png",
    href: "https://zinnov.com/innovation/creating-10x-women-entrepreneurship-in-india-2023-report/",
  },
  {
    id: 3,
    Title: "APAC Insider - Most Innovation Industrual Iot & AI platform 2022",
    Date: "March 2023",
    Given_By: "APAC insider",
    Category: "Industrial Iot & AI platform",
    Product: "GreenOps",
    // img: "/Linked_IN Post/1645184835596.png",
    href: "https://apacinsider.digital/issues/q1-2023/24/",
  },
  {
    id: 4,
    Title: "Top Women-Led startup",
    Date: "February 2023",
    Given_By: "AIC sangam innovation foundation",
    Category: "Science and tech - Cleantech",
    Product: "GreenOps",
    img: "https://media.licdn.com/dms/image/v2/C4D22AQFJ0bGssIsGCw/feedshare-shrink_800/feedshare-shrink_800/0/1676111943058?e=1762387200&v=beta&t=Ql4kiZTM23q2e2rPYKXjg6kDdFAp2SSFBRMHCmUoB68",
    href: "https://www.linkedin.com/feed/update/urn:li:activity:7030426965509554176/",
  },
  {
    id: 5,
    Title: "Top Innovation Pitches",
    Date: "February 2023",
    Given_By: "SynerLeap",
    Category: "Innovation pitch - Cutting edge solutions",
    Product: "GreenOps",
    // img: "https://media.licdn.com/dms/image/v2/C4D22AQFJ0bGssIsGCw/feedshare-shrink_800/feedshare-shrink_800/0/1676111943058?e=1762387200&v=beta&t=Ql4kiZTM23q2e2rPYKXjg6kDdFAp2SSFBRMHCmUoB68",
    href: "https://zinnov.com/innovation/creating-10x-women-entrepreneurship-in-india-2023-report/",
  },
  {
    id: 6,
    Title: "Mature Startup from India",
    Date: "February 2023",
    Given_By: "TechXchange UK",
    Category: "Mature CleanTech startup of India",
    Product: "GreenOps",
    // img: "https://media.licdn.com/dms/image/v2/C4D22AQFJ0bGssIsGCw/feedshare-shrink_800/feedshare-shrink_800/0/1676111943058?e=1762387200&v=beta&t=Ql4kiZTM23q2e2rPYKXjg6kDdFAp2SSFBRMHCmUoB68",
    href: "https://apacinsider.digital/issues/q1-2023/24/",
  },
  {
    id: 7,
    Title: "Top 10 Startuo in Accenture Sustainability Value Accelerator program for Cohort",
    Date: "January 2023",
    Given_By: "Accenture",
    Category: "Sustainable Value Accelerator Program",
    Product: "GreenOps",
    // img: "https://media.licdn.com/dms/image/v2/C4D22AQFJ0bGssIsGCw/feedshare-shrink_800/feedshare-shrink_800/0/1676111943058?e=1762387200&v=beta&t=Ql4kiZTM23q2e2rPYKXjg6kDdFAp2SSFBRMHCmUoB68",
    href: "https://www.linkedin.com/feed/update/urn:li:activity:7030426965509554176/",
  },
  {
    id: 8,
    Title: "Top Innovation Pitches",
    Date: "January 2023",
    Given_By: "Vedanta spark",
    Category: "IOT and AI platform",
    Product: "LivNSense",
    // img: "https://media.licdn.com/dms/image/v2/C4D22AQFJ0bGssIsGCw/feedshare-shrink_800/feedshare-shrink_800/0/1676111943058?e=1762387200&v=beta&t=Ql4kiZTM23q2e2rPYKXjg6kDdFAp2SSFBRMHCmUoB68",
    href: "https://zinnov.com/innovation/creating-10x-women-entrepreneurship-in-india-2023-report/",
  },
  {
    id: 9,
    Title: "'Deep-Decarbonization' Platofrm",
    Date: "January 2023",
    Given_By: "EAI Energy Alternatives India",
    Category: "CleanTech",
    Product: "GreenOps",
    // img: "https://media.licdn.com/dms/image/v2/C4D22AQFJ0bGssIsGCw/feedshare-shrink_800/feedshare-shrink_800/0/1676111943058?e=1762387200&v=beta&t=Ql4kiZTM23q2e2rPYKXjg6kDdFAp2SSFBRMHCmUoB68",
    href: "https://apacinsider.digital/issues/q1-2023/24/",
  },
  {
    id: 10,
    Title: "Most promosong SMEs Brand to watch 2023",
    Date: "January 2023",
    Given_By: "Great Company.io",
    Category: "LivNSense",
    Product: "LivNSense",
    // img: "https://media.licdn.com/dms/image/v2/C4D22AQFJ0bGssIsGCw/feedshare-shrink_800/feedshare-shrink_800/0/1676111943058?e=1762387200&v=beta&t=Ql4kiZTM23q2e2rPYKXjg6kDdFAp2SSFBRMHCmUoB68",
    href: "https://www.linkedin.com/feed/update/urn:li:activity:7030426965509554176/",
  },
   {
    id: 10,
    Title: "Featured in World of safety and health Asia E-Magazine Dec 2022",
    Date: "December 2022",
    Given_By: "WSHAisa",
    Category: "Digital Safety - wide range of issues, including Environmental Sustainability",
    Product: "GreenOps",
    // img: "https://media.licdn.com/dms/image/v2/C4D22AQFJ0bGssIsGCw/feedshare-shrink_800/feedshare-shrink_800/0/1676111943058?e=1762387200&v=beta&t=Ql4kiZTM23q2e2rPYKXjg6kDdFAp2SSFBRMHCmUoB68",
    href: "https://zinnov.com/innovation/creating-10x-women-entrepreneurship-in-india-2023-report/",
  },
]

export const jobs = [
  {
    id: "credit-manager",
    title: "Credit Manager",
    workType: "Full Time",
    locationType: "On-site",
    location: "San Francisco",
    jobType: "Finance",
  },
];