"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

const WA_NUMBER = "595981000000";
const WA_MESSAGE =
  "Hola, estoy interesado/a en obtener información sobre Areguá Forest. ¿Podrían asesorarme?";

export default function WhatsAppButton() {
  return (
    <motion.a
      href={`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(WA_MESSAGE)}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 2, type: "spring", stiffness: 260, damping: 20 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-8 right-6 z-50 flex items-center gap-3 bg-[#25D366] text-white pl-4 pr-5 py-3 shadow-[0_8px_30px_rgb(37,211,102,0.35)] hover:shadow-[0_8px_40px_rgb(37,211,102,0.5)] transition-shadow duration-300"
      style={{ borderRadius: "100px" }}
    >
      <motion.div
        animate={{ scale: [1, 1.15, 1] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
      >
        <MessageCircle size={20} fill="white" strokeWidth={0} />
      </motion.div>
      <span className="text-xs tracking-widest uppercase font-medium hidden sm:block">
        Consultar
      </span>
    </motion.a>
  );
}
