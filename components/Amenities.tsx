import {
  Building2,
  Waves,
  Dumbbell,
  Trees,
  Car,
  Baby,
  Bike,
  Users,
  ShoppingBag,
  Volleyball,
} from "lucide-react";

const amenities = [
  {
    icon: Building2,
    title: "Club House",
    desc: "Centro social exclusivo con salones de usos múltiples.",
  },
  {
    icon: Waves,
    title: "Lagunas & Piscinas",
    desc: "Lagunas naturales y piscinas de diseño integradas al entorno.",
  },
  {
    icon: Volleyball,
    title: "Canchas Deportivas",
    desc: "Tenis, pádel y deportes en instalaciones de nivel profesional.",
  },
  {
    icon: Dumbbell,
    title: "Gimnasio",
    desc: "Equipamiento de última generación con vista al bosque.",
  },
  {
    icon: Trees,
    title: "Parques & Senderos",
    desc: "Hectáreas de verde natural con senderos para caminar y correr.",
  },
  {
    icon: Bike,
    title: "Ciclovías",
    desc: "Red de ciclovías que conecta todos los sectores del proyecto.",
  },
  {
    icon: Baby,
    title: "Juegos Infantiles",
    desc: "Espacios lúdicos diseñados para el desarrollo de los más pequeños.",
  },
  {
    icon: Users,
    title: "Espacios Sociales",
    desc: "Áreas de encuentro diseñadas para fomentar la comunidad.",
  },
  {
    icon: ShoppingBag,
    title: "Centro Comercial",
    desc: "Acceso directo a un moderno centro comercial en el ingreso.",
  },
  {
    icon: Car,
    title: "Seguridad 24/7",
    desc: "Ingreso controlado y vigilancia permanente en todo el predio.",
  },
];

export default function Amenities() {
  return (
    <section id="amenities" className="py-28 bg-cream">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 max-w-xl">
          <p className="text-xs tracking-[0.4em] text-forest uppercase mb-3">
            Lifestyle
          </p>
          <h2 className="font-heading text-5xl md:text-6xl font-light text-stone leading-tight">
            Amenities que{" "}
            <em className="not-italic text-forest">transforman</em> tu día a día
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-px bg-stone/10">
          {amenities.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="bg-cream p-8 group hover:bg-forest transition-colors duration-300"
              >
                <Icon
                  className="mb-5 text-forest group-hover:text-gold transition-colors duration-300"
                  size={28}
                  strokeWidth={1.5}
                />
                <h3 className="font-heading text-lg font-light text-stone group-hover:text-white mb-2 transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-xs text-stone/50 group-hover:text-white/60 leading-relaxed transition-colors duration-300">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
