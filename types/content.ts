// types/content.ts
export type HeroSectionProps = {
  title: React.ReactNode;
  subtitle: React.ReactNode;
  buttonFamily: string;
  buttonBusiness: string;
};

export type HomepageContent = {
  hero: HeroSectionProps;
  // audienceData, latestContent なども順次追加可能
};
