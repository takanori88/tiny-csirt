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
};

export default content;
