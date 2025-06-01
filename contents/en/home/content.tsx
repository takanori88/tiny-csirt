import type { HomepageContent } from "@/types/content";

const content: HomepageContent = {
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
