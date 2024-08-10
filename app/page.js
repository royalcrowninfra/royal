import AboutComponent from "../components/AboutComponent";
import BankingPartner from "../components/BankingPartner";
import CatalogSwiperSection from "../components/CatalogSwiperSection";
import ContactSection from "../components/ContactSection";
import HeroSection from "../components/HeroSection";


export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutComponent />
      <CatalogSwiperSection />
      <ContactSection />
      <BankingPartner />
    </>
  );
}

