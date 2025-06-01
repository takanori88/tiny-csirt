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

export type AudienceItem = {
  icon: "Users" | "Lock" | "Shield" | "BookOpen" | "Building2";
  text: string;
};

export type AudienceCard = {
  emoji: string;
  title: string;
  description: string;
  items: AudienceItem[];
  commingSoon?: boolean; // オプションで「coming soon」を表示するかどうか
};

export type AudienceContentProps = AudienceCard[];

export type AboutSectionProps = {
  title: string;
  description: React.ReactNode;
};

export type FooterContentProps = {
  description: string;
  sections: {
    title: string;
    links: { label: string; href: string }[];
  }[];
  copyright: string;
};

export type HomepageContent = {
  header: HeaderContentProps;
  audience: AudienceContentProps;
  hero: HeroSectionProps;
  about: AboutSectionProps;
  footer: FooterContentProps;
};
