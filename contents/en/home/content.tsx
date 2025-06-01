import type { HomepageContent } from "@/types/content";

const content: HomepageContent = {
  header: {
    navItems: ["Home", "For Families", "For Businesses", "Contact"],
    languageSwitcher: {
      ja: "Japanese",
      en: "English",
    },
  },
  hero: {
    title: (
      <>
        Welcome to <span className="text-blue-600">tiny-csirt </span>
        <br />
        your small cybersecurity team!
      </>
    ),
    subtitle: (
      <>
        Whether you're at home
        <br />
        or at work,
        <br />a little awareness goes a long way.
      </>
    ),
    buttonFamily: "See tips for families",
    buttonBusiness: "See tips for small businesses",
  },
  audience: [
    {
      emoji: "🏠",
      title: "For Families",
      description: "Start better online habits to protect your family.",
      commingSoon: true,
      items: [
        { icon: "Users", text: "Learn cybersecurity with your kids" },
        { icon: "Lock", text: "All about passwords and digital keys" },
        { icon: "Shield", text: "How to spot phishing emails and texts" },
      ],
    },
    {
      emoji: "💼",
      title: "For Businesses",
      description: "Take the first step in cybersecurity—starting today.",
      commingSoon: true,
      items: [
        { icon: "BookOpen", text: "What is EDR?" },
        { icon: "Shield", text: "Common pitfalls in user acceptance testing" },
        {
          icon: "Building2",
          text: "How to audit your company’s information assets",
        },
      ],
    },
  ],
  about: {
    title: "What is tiny-csirt?",
    description: (
      <>
        For those who want to take security into their own hands.{" "}
        <br className="hidden md:block" />
        tiny-csirt is a small experimental lab
        <br className="hidden md:block" />
        that helps households and small businesses
        <br className="hidden md:block" />
        think about cybersecurity as their own concern.
      </>
    ),
  },
};

export default content;
