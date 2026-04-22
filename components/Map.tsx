import { MapPin, Navigation } from "lucide-react";

export default function Map() {
  return (
    <section id="ubicacion" className="py-28 bg-cream">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12">
          <p className="text-xs tracking-[0.4em] text-forest uppercase mb-3">
            Dónde Estamos
          </p>
          <h2 className="font-heading text-5xl md:text-6xl font-light text-stone leading-tight">
            Ubicación Privilegiada
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-px bg-stone/10 mb-px">
          <div className="bg-cream p-8 col-span-1">
            <div className="space-y-8">
              <div>
                <p className="text-xs tracking-widest text-stone/40 uppercase mb-2">
                  Dirección
                </p>
                <p className="font-heading text-lg font-light text-stone leading-snug">
                  Areguá Forest
                </p>
                <p className="text-sm text-stone/50 mt-1 leading-relaxed">
                  Ruta 2 km 32, Areguá<br />
                  Departamento Central, Paraguay
                </p>
              </div>

              <div>
                <p className="text-xs tracking-widest text-stone/40 uppercase mb-2">
                  Distancias
                </p>
                <ul className="space-y-2">
                  {[
                    ["Asunción (centro)", "32 km"],
                    ["Aeropuerto Silvio Pettirossi", "28 km"],
                    ["San Bernardino", "15 km"],
                    ["Lago Ypacaraí", "8 km"],
                  ].map(([lugar, dist]) => (
                    <li key={lugar} className="flex justify-between text-sm">
                      <span className="text-stone/50">{lugar}</span>
                      <span className="text-forest font-light">{dist}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <a
                href="https://maps.google.com/?q=Areguá+Paraguay"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs tracking-widest text-forest uppercase border-b border-forest/30 pb-px hover:border-forest transition-colors"
              >
                <Navigation size={12} strokeWidth={1.5} />
                Cómo llegar
              </a>
            </div>
          </div>

          <div className="col-span-2 min-h-[420px] relative overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57891.42059178!2d-57.4!3d-25.29!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x945da8fb99aa70f3%3A0x7a7cb4bc5ef6ebde!2sAregu%C3%A1%2C%20Paraguay!5e0!3m2!1ses!2spy!4v1714000000000"
              className="w-full h-full absolute inset-0"
              style={{ filter: "grayscale(100%) contrast(1.1) brightness(0.9)", border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mapa Areguá Forest"
            />
            <div className="absolute inset-0 pointer-events-none border border-stone/10" />
          </div>
        </div>

        <div className="bg-forest p-8 flex items-center gap-4">
          <MapPin className="text-gold flex-shrink-0" size={20} strokeWidth={1.5} />
          <p className="text-white/80 text-sm leading-relaxed">
            A solo <strong className="text-white font-normal">32 minutos de Asunción</strong>, Areguá Forest
            combina la tranquilidad del interior con la conectividad de la capital. Acceso directo por
            Ruta 2, pavimentada y en óptimas condiciones.
          </p>
        </div>
      </div>
    </section>
  );
}
