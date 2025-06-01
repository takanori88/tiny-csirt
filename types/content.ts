// types/content.ts
import React from "react";

export type HeaderContentProps = {
  navItems: string[];
  languageSwitcher: {
    ja: string;
    en: string;
  };
};

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
  haeder: HeaderContentProps;
  hero: HeroSectionProps;
  about: AboutSectionProps;
  // audienceData, latestContent なども順次追加可能
};
