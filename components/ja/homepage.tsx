import HeroSection from "@/components/sections/HeroSection";
import AudienceCards from "@/components/sections/AudienceCards";
import LatestContent from "@/components/sections/LatestContent";
import AboutSection from "@/components/sections/AboutSection";
import Footer from "@/components/sections/Footer";
import Header from "@/components/sections/Header";

export default function Homepage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <HeroSection />
      <AudienceCards />
      <LatestContent />
      <AboutSection />
      <Footer />
    </div>
  );
}
