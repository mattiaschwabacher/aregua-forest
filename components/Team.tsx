import Image from "next/image";
import { MessageCircle } from "lucide-react";

const team = [
  {
    name: "Franco Bertoni",
    role: "Gerente de Ventas",
    photo: "https://i.pravatar.cc/300?img=11",
    whatsapp: "595972343516",
    message: "Hola Franco, me interesa conocer más sobre Areguá Forest.",
  },
  {
    name: "Betania Toledo",
    role: "Asesora Comercial",
    photo: "https://i.pravatar.cc/300?img=47",
    whatsapp: "595972343516",
    message: "Hola Betania, me interesa conocer más sobre Areguá Forest.",
  },
  {
    name: "David Echeverría",
    role: "Asesor Comercial",
    photo: "https://i.pravatar.cc/300?img=12",
    whatsapp: "595972343516",
    message: "Hola David, me interesa conocer más sobre Areguá Forest.",
  },
  {
    name: "Max Da Silva Mello",
    role: "Asesor Comercial",
    photo: "https://i.pravatar.cc/300?img=15",
    whatsapp: "595972343516",
    message: "Hola Max, me interesa conocer más sobre Areguá Forest.",
  },
];

export default function Team() {
  return (
    <section id="equipo" className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 max-w-xl">
          <p className="text-xs tracking-[0.4em] text-forest uppercase mb-3">
            Oficina Digital
          </p>
          <h2 className="font-heading text-5xl md:text-6xl font-light text-stone leading-tight">
            Nuestro Equipo
          </h2>
          <p className="text-stone/40 text-sm mt-4 leading-relaxed">
            Asesores especializados listos para acompañarte en cada paso de tu inversión.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-stone/10">
          {team.map((member) => (
            <div
              key={member.name}
              className="bg-white p-10 group hover:bg-cream transition-colors duration-300"
            >
              {/* Photo */}
              <div className="w-20 h-20 rounded-full overflow-hidden relative mb-6 ring-2 ring-stone/10 group-hover:ring-forest/30 transition-all duration-300">
                <Image
                  src={member.photo}
                  alt={member.name}
                  fill
                  className="object-cover"
                  sizes="80px"
                />
              </div>

              <h3 className="font-heading text-xl font-light text-stone mb-1">
                {member.name}
              </h3>
              <p className="text-xs tracking-widest text-stone/40 uppercase mb-6">
                {member.role}
              </p>

              <a
                href={`https://wa.me/${member.whatsapp}?text=${encodeURIComponent(member.message)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs tracking-widest text-forest uppercase border-b border-forest/30 pb-px hover:border-forest transition-colors duration-200"
              >
                <MessageCircle size={12} strokeWidth={1.5} />
                Consultar
              </a>
            </div>
          ))}
        </div>

        <div className="mt-16 p-10 bg-cream flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="font-heading text-2xl font-light text-stone">
              ¿Listo para dar el primer paso?
            </p>
            <p className="text-sm text-stone/40 mt-1">
              Contáctanos y un asesor te guiará de forma personalizada.
            </p>
          </div>
          <a
            id="contacto"
            href="https://wa.me/595972343516?text=Hola%2C%20me%20interesa%20obtener%20información%20sobre%20Areguá%20Forest."
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 bg-forest text-white text-xs tracking-widest uppercase px-10 py-4 hover:bg-forest-dark transition-colors duration-300"
          >
            Comunicate con un Asesor
          </a>
        </div>
      </div>
    </section>
  );
}
