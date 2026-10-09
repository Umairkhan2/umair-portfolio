export type Service = { title: string; desc: string; tags: string[]; wide?: boolean };
export type Project = {
  title: string;
  category: string;
  desc: string;
  tags: string[];
  link: string;
  image?: string;
  gradient: string;
};

export const site = {
  name: "Umair Khan",
  role: "WordPress Developer & Automation Expert",
  email: "umairkhanniazi864@gmail.com",
  whatsapp: "923029076793",
  phoneDisplay: "+92 302 9076793",
  linkedin: "https://www.linkedin.com/in/YOUR-PROFILE",
};

export const stats = [
  { value: "3+", label: "Years experience" },
  { value: "9+", label: "Platforms & tools" },
  { value: "24h", label: "Response time" },
  { value: "100%", label: "Responsive builds" },
];

export const skills = [
  "WordPress", "Elementor", "WooCommerce", "Shopify", "Webflow",
  "GoHighLevel", "Make.com", "n8n", "AI Chatbots", "Responsive Design", "Front-End Development",
];

export const services: Service[] = [
  {
    title: "WordPress & Elementor Websites",
    desc: "Custom, fast and conversion-focused websites built with WordPress and Elementor, pixel-perfect on every device.",
    tags: ["WordPress", "Elementor", "Responsive", "Speed Optimization"],
    wide: true,
  },
  {
    title: "E-commerce Stores",
    desc: "WooCommerce and Shopify stores that are easy to manage and built to sell.",
    tags: ["WooCommerce", "Shopify"],
  },
  {
    title: "Webflow Sites",
    desc: "Clean, animated Webflow builds for brands that want a premium feel.",
    tags: ["Webflow", "CMS"],
  },
  {
    title: "GoHighLevel Funnels & CRM",
    desc: "High-converting funnels, pipelines, booking calendars and follow-up sequences inside GHL, so leads never slip away.",
    tags: ["GHL Funnels", "CRM", "Email/SMS Workflows"],
    wide: true,
  },
  {
    title: "Business Automations",
    desc: "Make.com and n8n workflows that connect your apps and remove hours of manual work every week.",
    tags: ["Make.com", "n8n", "APIs", "Webhooks"],
    wide: true,
  },
  {
    title: "AI Chatbots",
    desc: "Smart AI assistants that answer customers, capture leads and book calls 24/7.",
    tags: ["AI", "Lead Capture"],
  },
];

export const experience = [
  {
    role: "WordPress Developer / WordPress Expert",
    company: "SofTechGenics",
    period: "Nov 2023 — Present",
    desc: "Building custom WordPress & Elementor websites, WooCommerce stores and responsive front-ends for clients.",
  },
];

export const projects: Project[] = [
  {
    title: "Project One",
    category: "WooCommerce Store",
    desc: "Short description of the project and the result you delivered.",
    tags: ["WordPress", "WooCommerce"],
    link: "https://example.com",
    gradient: "linear-gradient(135deg,#1a2e05,#3f6212)",
  },
  {
    title: "Project Two",
    category: "GHL Funnel + Automation",
    desc: "Lead funnel with automated follow-ups that increased bookings.",
    tags: ["GoHighLevel", "Make.com"],
    link: "https://example.com",
    gradient: "linear-gradient(135deg,#1e1b4b,#4338ca)",
  },
  {
    title: "Project Three",
    category: "Shopify Store",
    desc: "Custom Shopify store design with optimized checkout.",
    tags: ["Shopify"],
    link: "https://example.com",
    gradient: "linear-gradient(135deg,#431407,#c2410c)",
  },
  {
    title: "Project Four",
    category: "AI Chatbot + n8n",
    desc: "AI assistant that qualifies leads and syncs them to CRM.",
    tags: ["n8n", "AI"],
    link: "https://example.com",
    gradient: "linear-gradient(135deg,#042f2e,#0f766e)",
  },
];
