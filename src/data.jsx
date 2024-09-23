import { nanoid } from "nanoid";

export const navLinks = [
  { id: nanoid(), href: "/", text: "home" },
  { id: nanoid(), href: "/services", text: "services" },
  { id: nanoid(), href: "/pricing", text: "pricing" },
  { id: nanoid(), href: "/about", text: "about" },
  { id: nanoid(), href: "/blog", text: "blog" },
];

import img1 from "./assets/dollar-sign.svg";
import img2 from "./assets/grid (1).svg";
import img3 from "./assets/briefcase.svg";
import img4 from "./assets/bolt.svg";

export const solutions = [
  {
    id: nanoid(),
    img: img1,
    title: "money management",
    text: "With experience in all market conditions, we recognize what processes and solutions.",
  },
  {
    id: nanoid(),
    img: img2,
    title: "financial planning",
    text: "These plans may include investment strategies, savings plans, etc.",
  },
  {
    id: nanoid(),
    img: img3,
    title: "strategic partner",
    text: "With experience in all market conditions, we recognize what processes and solutions.",
  },
  {
    id: nanoid(),
    img: img4,
    title: "risk management",
    text: "With experience in all market conditions, we recognize what processes and solutions.",
  },
];

import blogSectionImg1 from "./assets/finwise5 1.png";
import blogSectionImg2 from "./assets/finwise5 1 (1).png";
import blogSectionImg3 from "./assets/finwise5 1 (2).png";

export const blogSection = [
  {
    id: nanoid(),
    img: blogSectionImg1,
    title: "FIN-TECH",
    text: "The story of how Dave took the long road to become a neo-bank",
    bio: "BY ASHLEY VANCE",
  },
  {
    id: nanoid(),
    img: blogSectionImg2,
    title: "FIN-TECH",
    text: "The story of how Dave took the long road to become a neo-bank",
    bio: "BY ASHLEY VANCE",
  },
  {
    id: nanoid(),
    img: blogSectionImg3,
    title: "FIN-TECH",
    text: "The story of how Dave took the long road to become a neo-bank",
    bio: "BY ASHLEY VANCE",
  },
];

export const footerCompany = [
  { id: nanoid(), title: "company" },
  { id: nanoid(), href: "/", text: "home" },
  { id: nanoid(), href: "/services", text: "services" },
  { id: nanoid(), href: "/pricing", text: "pricing" },
];

export const footerInformation = [
  { id: nanoid(), title: "information" },
  { id: nanoid(), href: "/about", text: "about" },
  { id: nanoid(), href: "/blog", text: "blog" },
  { id: nanoid(), href: "/contact", text: "contact" },
];

export const footerSocial = [
  { id: nanoid(), title: "social" },
  { id: nanoid(), href: "#", text: "linkedin" },
  { id: nanoid(), href: "#", text: "facebook" },
  { id: nanoid(), href: "#", text: "instagram" },
];

export const finPlan = [
  {
    id: nanoid(),
    title: "First Funding",
    text: "Whether you're planning for retirement, saving for a child's education, or buying a home, we have the tools and resources you need to succeed.",
  },
  {
    id: nanoid(),
    title: "Business Operational",
    text: "Our team of experienced financial planners will work with you to understand your unique needs and develop a customized plan that fits your goals.",
  },
  {
    id: nanoid(),
    title: "Business Expansion",
    text: "We'll help you navigate complex financial issues, such as investment strategies, tax planning, and risk management, and provide ongoing support.",
  },
];

import servicesBlogImg1 from "./assets/servicesBlog 1.png";
import servicesBlogImg2 from "./assets/servicesBlog 2.png";
import servicesBlogImg3 from "./assets/servicesBlog 3.png";

export const servicesBlog = [
  {
    id: nanoid(),
    img: servicesBlogImg1,
    title: "Financial Education",
    text: "Use positioning to fix top-bars, sidebars, and backgrounds.",
  },
  {
    id: nanoid(),
    img: servicesBlogImg2,
    title: "Market Size",
    text: "Use positioning to fix top-bars, sidebars, and backgrounds.",
  },
  {
    id: nanoid(),
    img: servicesBlogImg3,
    title: "Investing",
    text: "Use positioning to fix top-bars, sidebars, and backgrounds.",
  },
];
