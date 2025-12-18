import GlobeSection from "./home/GlobeSection";
import EventCarouselBanner from "./home/EventCarouselBanner";
import { HeroSection } from "./home/HeroSection";
import TechShowcaseSection from "./home/TechShowcaseSection";
import AboutUsSection from "./home/AboutUsSection";
import WhyChooseUsSection from "./home/WhyChooseUsSection";
import { OurServicesSection } from "./home/OurServicesSection";
import ClientsSection from "./home/ClientsSection";
import ExpertiseSection from "./home/ExepertiseSection";
export default function Home() {
  return (
    <>
      <GlobeSection />
      <EventCarouselBanner></EventCarouselBanner>
      <HeroSection></HeroSection>
      <TechShowcaseSection></TechShowcaseSection>
      <AboutUsSection></AboutUsSection>
      <WhyChooseUsSection></WhyChooseUsSection>
      <OurServicesSection></OurServicesSection>
      <ClientsSection></ClientsSection>
      <ExpertiseSection></ExpertiseSection>
    </>
  );
}
