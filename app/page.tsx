import Navbar from "@/components/Navbar";
import HeroSlider from "@/components/HeroSlider";
import ProjectIntro from "@/components/ProjectIntro";
import Amenities from "@/components/Amenities";
import LuxuryBanner from "@/components/LuxuryBanner";
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

        <LuxuryBanner
          image="https://images.unsplash.com/photo-1448630360428-65456885c650?auto=format&fit=crop&w=1920&q=80"
          alt="Naturaleza exuberante — Areguá Forest"
          eyebrow="Areguá Forest"
          quote="Vivir en Areguá Forest es abrazar una forma de vida que combina lujo, naturaleza y comunidad."
        />

        <ProjectProgress data={avancesData} />
        <Roadmap />

        <LuxuryBanner
          image="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1920&q=80"
          alt="Residencias de lujo — Areguá Forest"
          eyebrow="Tu Inversión"
          quote="Cada lote es una oportunidad de construir la vida que imaginas."
        />

        <Team />
        <Map />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
