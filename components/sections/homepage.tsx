import HeroSection from "@/components/sections/HeroSection";
import AudienceCards from "@/components/sections/AudienceCards";
import LatestContent from "@/components/sections/LatestContent";
import AboutSection from "@/components/sections/AboutSection";
import Footer from "@/components/sections/Footer";
import Header from "@/components/sections/Header";
import { HomepageContent } from "@/types/content";

type HomepageProps = {
  content: HomepageContent;
};

export default function Homepage({ content }: HomepageProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <HeroSection
        title={content.hero.title}
        subtitle={content.hero.subtitle}
        buttonFamily={content.hero.buttonFamily}
        buttonBusiness={content.hero.buttonBusiness}
      />
      <AudienceCards />
      <LatestContent />
      <AboutSection />
      <Footer />
    </div>
  );
}
