
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Headline from "./components/Headline";
import BrowseByGender from "./components/BrowseByGender";
import BestSelling from "./components/BestSelling";
import "./globals.css";
import MenCollection from "./components/MenCollection";
import UniqueMenCollection from "./components/UniqueMenCollection";

export default function Home() {
  return (
    <div>
      <Headline/>
      <Hero />
      <BrowseByGender/>
      <BestSelling/>
      <MenCollection/>
      <UniqueMenCollection/>
      <Footer/>
    </div>
  );
}
