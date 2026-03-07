import TopToast from "@/components/TopToast";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import GenderCategories from "@/components/GenderCategories";
import { MensCollection, WomensCollection } from "@/components/ClothesSelection";
import CTAMiddle from "@/components/CTAMiddle";
import WhyChoose from "@/components/WhyChoose";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <TopToast />
      <Navbar />
      <HeroSection />
      <GenderCategories />
      <MensCollection />
      <CTAMiddle />
      <WomensCollection />
      <WhyChoose />
      <Footer />
    </main>
  );
}
