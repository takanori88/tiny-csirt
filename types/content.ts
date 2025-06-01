import React from "react";

// types/content.ts
export type HeroSectionProps = {
  title: React.ReactNode;
  subtitle: React.ReactNode;
  buttonFamily: string;
  buttonBusiness: string;
};

export type AboutSectionProps = {
  title: string;
  description: React.ReactNode;
};

export type HomepageContent = {
  hero: HeroSectionProps;
  about: AboutSectionProps;
  // audienceData, latestContent なども順次追加可能
};
