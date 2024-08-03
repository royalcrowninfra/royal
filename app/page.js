import AboutComponent from "../components/AboutComponent";
import BankingPartner from "../components/BankingPartner";
import CatalogSwiperSection from "../components/CatalogSwiperSection";
// import CompanySection from "../components/CompanySection";
import ContactSection from "../components/ContactSection";
import HeroSection from "../components/HeroSection";


export default function Home() {
  return (
    <>
      <HeroSection />
      {/* <CompanySection /> */}
      <AboutComponent />
      <CatalogSwiperSection />
      <ContactSection />
      <BankingPartner />
    </>
  );
}

