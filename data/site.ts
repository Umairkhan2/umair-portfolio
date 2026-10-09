export type Service = { title: string; desc: string; tags: string[]; wide?: boolean; featured?: boolean };
export type Project = {
  title: string;
  category: string;
  desc: string;
  tags: string[];
  link: string;
  image?: string; // e.g. "/projects/store.jpg"
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
  { value: "3+", label: "Years of experience" },
  { value: "10+", label: "Platforms & tools" },
  { value: "24h", label: "Response time" },
  { value: "100%", label: "Responsive builds" },
];

// Total items EVEN rakhna (abhi 12 hain) taake marquee smooth chale
export const skills = [
  "WordPress", "Elementor", "WooCommerce", "Plugin Development",
  "Shopify", "Webflow", "GoHighLevel", "Make.com",
  "n8n", "AI Chatbots", "Responsive Design", "Front-End",
];

export const services: Service[] = [
  {
    title: "WordPress & Elementor Websites",
    desc: "Premium, fast and conversion-focused websites built with WordPress and Elementor, pixel-perfect on every screen.",
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
    title: "Custom WordPress Plugin Development",
    desc: "Tailor-made plugins for features no off-the-shelf plugin can handle: custom functionality, WooCommerce extensions, API integrations and admin dashboards, written clean and secure.",
    tags: ["PHP", "Custom Plugins", "REST API", "WooCommerce Extensions"],
    wide: true,
    featured: true,
  },
  {
    title: "GoHighLevel Funnels & CRM",
    desc: "High-converting funnels, pipelines, calendars and follow-up sequences so leads never slip away.",
    tags: ["GHL", "Funnels", "CRM"],
  },
  {
    title: "Business Automations",
    desc: "Make.com and n8n workflows that connect your apps and remove hours of manual work.",
    tags: ["Make.com", "n8n", "Webhooks"],
  },
  {
    title: "AI Chatbots",
    desc: "Smart AI assistants that answer customers, capture leads and book calls 24/7.",
    tags: ["AI", "Lead Capture"],
  },
];

// ⚠️ Sample projects: apne real projects se replace karo
export const projects: Project[] = [
  {
    title: "Project One",
    category: "WooCommerce Store",
    desc: "Short description of the project and the result you delivered.",
    tags: ["WordPress", "WooCommerce"],
    link: "https://example.com",
    gradient: "linear-gradient(135deg,#1a2e05,#4d7c0f)",
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
    category: "Custom Plugin",
    desc: "Custom WordPress plugin built for a client-specific workflow.",
    tags: ["PHP", "WordPress"],
    link: "https://example.com",
    gradient: "linear-gradient(135deg,#431407,#c2410c)",
  },
  {
    title: "Project Four",
    category: "AI Chatbot + n8n",
    desc: "AI assistant that qualifies leads and syncs them to the CRM.",
    tags: ["n8n", "AI"],
    link: "https://example.com",
    gradient: "linear-gradient(135deg,#042f2e,#0f766e)",
  },
];

export const processSteps = [
  { title: "Discover", desc: "We talk about your goals, audience and what success looks like." },
  { title: "Design", desc: "A clean, premium layout planned around conversions." },
  { title: "Build", desc: "Fast, responsive development with WordPress, Shopify, Webflow or custom plugins." },
  { title: "Launch & Automate", desc: "Go live, connect funnels, CRM and automations, then keep improving." },
];

export const whyMe = [
  { title: "Speed-first builds", desc: "Optimized images, clean code and caching so pages load fast on every device." },
  { title: "Pixel-perfect & responsive", desc: "Every layout is tested on mobile, tablet and desktop." },
  { title: "Automation mindset", desc: "Your site doesn't stop at design. It connects to your CRM, funnels and AI tools." },
  { title: "Clear communication", desc: "Regular updates on WhatsApp or email from start to launch." },
];
