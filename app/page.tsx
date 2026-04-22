import Navbar from "@/components/Navbar";
import HeroSlider from "@/components/HeroSlider";
import ProjectIntro from "@/components/ProjectIntro";
import Amenities from "@/components/Amenities";
import ProjectProgress from "@/components/ProjectProgress";
import Roadmap from "@/components/Roadmap";
import Team from "@/components/Team";
import Map from "@/components/Map";
import WhatsAppButton from "@/components/WhatsAppButton";
import Footer from "@/components/Footer";
import avancesData from "@/data/avances.json";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSlider />
        <ProjectIntro />
        <Amenities />
        <ProjectProgress data={avancesData} />
        <Roadmap />
        <Team />
        <Map />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
