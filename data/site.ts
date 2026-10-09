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
  role: "Premium WordPress & Web Developer",
  url: "https://umair-portfolio.vercel.app", // ⚠️ apna asli Vercel link (ya domain) yahan daalo
  email: "umairkhanniazi864@gmail.com",
  whatsapp: "923029076793",
  phoneDisplay: "+92 302 9076793",
  linkedin: "https://www.linkedin.com/in/umair-khan-niazi-759589158/",
  fiverr: "https://www.fiverr.com/umairdeveloper4",
};

export const stats = [
  { value: "200+", label: "Websites delivered" },
  { value: "50+", label: "Automations built" },
  { value: "25+", label: "GHL funnels & landing pages" },
  { value: "3+", label: "Years of experience" },
];

export const highlights = [
  "Custom Websites", "AI-Powered Sites", "Figma to WordPress", "Speed Optimization",
  "E-commerce Stores", "LMS Platforms", "GHL Funnels", "Automations",
];

export const platforms = [
  "WordPress", "Elementor", "Divi", "WPBakery", "WooCommerce", "Shopify",
  "Webflow", "Squarespace", "GoHighLevel", "Make.com", "n8n", "AI Chatbots",
];

export const services: Service[] = [
  {
    title: "Custom Website Design & Development",
    desc: "Luxury, conversion-focused websites built pixel-perfect on WordPress with Elementor, Divi or WPBakery. Designed to impress visitors and turn them into clients.",
    tags: ["WordPress", "Elementor", "Divi", "WPBakery"],
    wide: true,
    featured: true,
  },
  {
    title: "AI-Powered Websites",
    desc: "Modern websites designed with AI and built properly on WordPress, so you get speed of AI with quality of hand-crafted code.",
    tags: ["AI to WordPress", "Fast Delivery"],
  },
  {
    title: "Figma to WordPress",
    desc: "Your Figma or XD design converted into a pixel-perfect, fully responsive WordPress website.",
    tags: ["Figma", "Pixel-perfect"],
  },
  {
    title: "Speed Optimization & Bug Fixing",
    desc: "Slow or broken website? I fix layout bugs, plugin conflicts and builder issues, then optimize Core Web Vitals so your site loads fast and ranks better on Google.",
    tags: ["PageSpeed", "Core Web Vitals", "Bug Fixes", "Maintenance"],
    wide: true,
  },
  {
    title: "E-commerce Stores",
    desc: "WooCommerce and Shopify stores that are easy to manage and built to sell.",
    tags: ["WooCommerce", "Shopify"],
  },
  {
    title: "LMS & Membership Websites",
    desc: "Online course and membership platforms with lessons, quizzes and payments.",
    tags: ["LMS", "Courses", "Memberships"],
  },
  {
    title: "Webflow & Squarespace",
    desc: "High-end, animated sites on Webflow and Squarespace for brands that want a premium feel.",
    tags: ["Webflow", "Squarespace"],
  },
  {
    title: "Custom WordPress Plugins",
    desc: "Tailor-made plugins and WooCommerce extensions for features no ready-made plugin can handle.",
    tags: ["PHP", "REST API"],
  },
  {
    title: "GHL Funnels & Landing Pages",
    desc: "High-converting GoHighLevel funnels, landing pages, calendars and follow-up sequences.",
    tags: ["GoHighLevel", "Funnels", "CRM"],
  },
  {
    title: "Automations & AI Chatbots",
    desc: "Make.com and n8n workflows plus AI chatbots that capture leads and save hours every week.",
    tags: ["Make.com", "n8n", "AI"],
  },
];

// ⚠️ Sample projects: apne real projects se replace karo
export const projects: Project[] = [
  {
    title: "Project One",
    category: "Elementor Business Website",
    desc: "Short description of the project and the result you delivered.",
    tags: ["WordPress", "Elementor"],
    link: "https://example.com",
    gradient: "linear-gradient(135deg,#1a2e05,#4d7c0f)",
  },
  {
    title: "Project Two",
    category: "WooCommerce Store",
    desc: "Fast, conversion-focused online store with a custom design.",
    tags: ["WooCommerce", "Speed"],
    link: "https://example.com",
    gradient: "linear-gradient(135deg,#1e1b4b,#4338ca)",
  },
  {
    title: "Project Three",
    category: "LMS Website",
    desc: "Online course platform with lessons, quizzes and payments.",
    tags: ["WordPress", "LMS"],
    link: "https://example.com",
    gradient: "linear-gradient(135deg,#431407,#c2410c)",
  },
  {
    title: "Project Four",
    category: "GHL Funnel + Automation",
    desc: "Lead funnel with automated follow-ups and an AI chatbot.",
    tags: ["GoHighLevel", "n8n"],
    link: "https://example.com",
    gradient: "linear-gradient(135deg,#042f2e,#0f766e)",
  },
];

export const processSteps = [
  { title: "Discover", desc: "We talk about your goals, audience and what success looks like." },
  { title: "Design", desc: "A clean, premium layout planned around conversions." },
  { title: "Build", desc: "Pixel-perfect, responsive development on the platform that fits you best." },
  { title: "Launch & Grow", desc: "Speed, SEO and tracking set up, then funnels and automations connected." },
];

export const whyMe = [
  { title: "Speed-first builds", desc: "Optimized images, clean code and caching so pages load fast on every device." },
  { title: "SEO-ready from day one", desc: "Clean structure, meta tags, schema and mobile-first design built in." },
  { title: "Any builder, any platform", desc: "Elementor, Divi, WPBakery, Shopify, Webflow or Squarespace, I've got you covered." },
  { title: "Clear communication", desc: "Regular updates on WhatsApp or email from start to launch." },
];

export const faqs = [
  {
    q: "Which platforms and builders do you work with?",
    a: "WordPress with Elementor, Divi and WPBakery, plus WooCommerce, Shopify, Webflow and Squarespace. I also build GoHighLevel funnels and automations with Make.com and n8n.",
  },
  {
    q: "Can you fix or speed up my existing website?",
    a: "Yes. I fix layout bugs, plugin conflicts and builder issues, and optimize speed and Core Web Vitals so your site loads fast and performs better on Google.",
  },
  {
    q: "Can you convert my Figma or AI design into WordPress?",
    a: "Yes. I turn Figma designs and AI-generated designs into pixel-perfect, fully responsive WordPress websites.",
  },
  {
    q: "Will my website be SEO-friendly?",
    a: "Every website is built SEO-ready with clean structure, proper headings, meta tags, schema markup, fast loading and mobile-first design.",
  },
  {
    q: "How long does a website take?",
    a: "It depends on the number of pages and features. I share a clear timeline before we start, and keep you updated at every step.",
  },
  {
    q: "How can I hire you?",
    a: "Message me on WhatsApp, send an email, or order through my Fiverr profile, whichever you prefer.",
  },
];
