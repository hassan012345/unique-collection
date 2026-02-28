import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Headline from "./components/Headline";
import BrowseByGender from "./components/BrowseByGender";
import BestSelling from "./components/BestSelling";
import "./globals.css";
import MenCollection from "./components/MenCollection";
import UniqueMenCollection from "./components/UniqueMenCollection";
import HowItWorks from "./components/HowItWorks";
import VisualizeAi from "./components/VisualizeAi";
import LovedByWomen from "./components/LovedByWomen";
import UniqueWomenCollection from "./components/UniqueWomenCollection";
import SwiperCmp from "./components/swiper";
import CustomizedClothing from "./components/CustomizedClothing";
import WhyChooseUs from "./components/WhyChooseUs";

export default function Home() {
  return (
    <div>
      <Headline />
      <Hero />
      <BrowseByGender />
      {/* <BestSelling />
      <MenCollection /> */}
      <UniqueMenCollection />
      <CustomizedClothing />
      {/* <HowItWorks />
      <VisualizeAi />
      <LovedByWomen /> */}
      <UniqueWomenCollection />
      <WhyChooseUs />
      <Footer />
    </div>
  );
}