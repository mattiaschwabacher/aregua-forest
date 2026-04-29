import { MapPin, Phone, Mail, Share2, Globe } from "lucide-react";

const navLinks = [
  { label: "El Proyecto", href: "#proyecto" },
  { label: "Amenities", href: "#amenities" },
  { label: "Avances", href: "#avances" },
  { label: "Roadmap", href: "#roadmap" },
  { label: "El Equipo", href: "#equipo" },
  { label: "Ubicación", href: "#ubicacion" },
];

export default function Footer() {
  return (
    <footer className="bg-stone text-white">
      <div className="max-w-7xl mx-auto px-6 pt-20 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {/* Brand */}
          <div>
            <p className="font-heading text-3xl font-light tracking-widest uppercase mb-1">
              Areguá
            </p>
            <p className="font-heading text-xs tracking-[0.5em] text-gold uppercase mb-6">
              Forest
            </p>
            <p className="text-white/40 text-sm leading-relaxed max-w-xs">
              Una experiencia de vida única en el corazón de Areguá. Lujo, naturaleza y comunidad en perfecta armonía.
            </p>
          </div>

          {/* Nav */}
          <div>
            <p className="text-xs tracking-[0.3em] text-white/30 uppercase mb-6">
              Navegación
            </p>
            <nav className="grid grid-cols-2 gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm text-white/50 hover:text-white transition-colors duration-200"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <p className="text-xs tracking-[0.3em] text-white/30 uppercase mb-6">
              Contacto
            </p>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="text-forest-light flex-shrink-0 mt-0.5" size={14} strokeWidth={1.5} />
                <span className="text-sm text-white/50">
                  Ruta 2 km 32, Areguá<br />
                  Dpto. Central, Paraguay
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-forest-light flex-shrink-0" size={14} strokeWidth={1.5} />
                <a
                  href="tel:+595972343516"
                  className="text-sm text-white/50 hover:text-white transition-colors"
                >
                  +595 972 343 516
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-forest-light flex-shrink-0" size={14} strokeWidth={1.5} />
                <a
                  href="mailto:info@areguaforest.com.py"
                  className="text-sm text-white/50 hover:text-white transition-colors"
                >
                  info@areguaforest.com.py
                </a>
              </li>
            </ul>

            <div className="flex items-center gap-4 mt-8">
              <a
                href="https://instagram.com/areguaforest"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:border-white/40 transition-all duration-200"
                aria-label="Instagram"
              >
                <Share2 size={14} strokeWidth={1.5} />
              </a>
              <a
                href="https://facebook.com/areguaforest"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:border-white/40 transition-all duration-200"
                aria-label="Facebook"
              >
                <Globe size={14} strokeWidth={1.5} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/20">
            © {new Date().getFullYear()} Areguá Forest. Todos los derechos reservados.
          </p>
          <p className="text-xs text-white/20">
            Areguá, Paraguay
          </p>
        </div>
      </div>
    </footer>
  );
}
