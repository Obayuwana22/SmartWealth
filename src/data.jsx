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

// services

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

export const featureCards = [
  {
    id: nanoid(),
    title: "Financial Planning",
    text: "Secure Your Financial Future with Expert Financial Planning. Start Today!",
  },
  {
    id: nanoid(),
    title: "Money Management",
    text: "With experience in all market conditions, we recognize what processes and solutions.",
  },
  {
    id: nanoid(),
    title: "Strategic Partner",
    text: "With experience in all market conditions, we recognize what processes and solutions.",
  },
];

// footer

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

import img from "./assets/add.svg";


export const pricingAccordion = [
  {
    id: nanoid(),
    img: img,
    question:
      "How do you ensure the security of my personal and financial information?",
    answer:
      "We prioritize the security of your personal and financial information by using advanced encryption technologies, secure server infrastructures, and regular security audits. We also comply with financial industry regulations and standards, such as GDPR and PCI DSS, to ensure your data is always protected.",
  },
  {
    id: nanoid(),
    img: img,
    question: "How do you help with finance management?",
    answer:
      "We offer personalized financial management tools that allow you to track spending, create budgets, and set financial goals. Our platform provides real-time insights, alerts for unusual transactions, and tips on how to improve your financial health.",
  },
  {
    id: nanoid(),
    img: img,
    question: "How can I apply for a loan with your company?",
    answer:
      "Applying for a loan is simple. Just fill out our online application form, provide the required financial documents, and we'll review your application. Once approved, you'll receive the funds directly into your account. Our team is available to assist you throughout the process.",
  },
  {
    id: nanoid(),
    img: img,
    question: "What services does your company offer?",
    answer:
      "We offer a wide range of financial services, including personal finance management, savings accounts, investment opportunities, loan applications, and financial planning. Our platform is designed to cater to individuals looking to take control of their finances with ease.",
  },
  {
    id: nanoid(),
    img: img,
    question: "How do I contact customer support?",
    answer:
      "You can contact our customer support team through multiple channels: by phone, email, or live chat on our website. We're available 24/7 to assist you with any inquiries or issues you may have.",
  },
];

import trendImg from "./assets/trending.svg";

export const aboutHistory = [
  {
    id: nanoid(),
    img: trendImg,
    year: 2005,
    text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Amet minim mollit non deserunt ullamco est sit",
    date: "07 June 2012",
  },
  {
    id: nanoid(),
    img: trendImg,
    year: 2010,
    text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Amet minim mollit non deserunt ullamco est sit",
    date: "07 June 2012",
  },
  {
    id: nanoid(),
    img: trendImg,
    year: 2013,
    text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Amet minim mollit non deserunt ullamco est sit",
    date: "07 June 2012",
  },
  {
    id: nanoid(),
    img: trendImg,
    year: ` ${2020} - Now `,
    text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Amet minim mollit non deserunt ullamco est sit",
    date: "07 June 2012",
  },
];
