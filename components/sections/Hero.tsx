"use client";

import { motion } from "framer-motion";

const wordAnim = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" },
  }),
};

export default function Hero() {
  return (
    <section
      id="start"
      className="relative min-h-screen flex flex-col justify-center"
      style={{
        backgroundImage: "url(/nordgruenbanner.png)",
        backgroundSize: "cover",
        backgroundPosition: "center 30%",
      }}
    >
      {/* Overlay */}
      <div
        className="absolute inset-0"
        style={{ background: "rgba(15, 40, 10, 0.65)" }}
      />

      <div className="relative z-10 max-w-container mx-auto px-6 pt-24 pb-20">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-[100px] text-white text-sm font-medium font-body mb-8"
          style={{ background: "rgba(255, 255, 255, 0.15)" }}
        >
          FLL-ZERTIFIZIERT · EUROPEAN TREE WORKER
        </motion.div>

        {/* Headline */}
        <h1 className="font-display font-extrabold text-5xl md:text-[64px] leading-tight mb-6">
          <motion.span
            custom={0}
            variants={wordAnim}
            initial="hidden"
            animate="visible"
            className="text-white block"
          >
            Baum- und Landschaftspflege
          </motion.span>
          <motion.span
            custom={1}
            variants={wordAnim}
            initial="hidden"
            animate="visible"
            className="text-[#4a9e30] block"
          >
            in Schleswig-Holstein &amp; Hamburg
          </motion.span>
        </h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5, ease: "easeOut" }}
          className="text-white/90 text-lg font-body max-w-[560px] leading-[1.7] mb-8"
        >
          Professionelle Baum- und Landschaftspflege von zertifizierten
          Fachleuten. Kostenloser Vor-Ort-Termin – ehrlich, transparent, ohne
          versteckte Kosten.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5, ease: "easeOut" }}
          className="flex flex-wrap gap-4 mb-10"
        >
          <a
            href="#kontakt"
            className="flex items-center gap-2 bg-[#2d6a1f] hover:bg-[#1a3d12] text-white font-semibold px-7 py-3.5 rounded-[6px] transition-all hover:scale-[1.02] font-body text-[15px]"
          >
            📅 Kostenlosen Termin anfragen
          </a>
          <a
            href="tel:041212633100"
            className="flex items-center gap-2 border-2 border-white text-white font-semibold px-7 py-3.5 rounded-[6px] hover:bg-white/10 transition-all font-body text-[15px]"
          >
            Jetzt anrufen
          </a>
        </motion.div>

        {/* Trust items */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="flex flex-wrap gap-6"
        >
          {[
            {
              label: "Kostenlos & unverbindlich",
              icon: (
                <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="9,12 11,14 15,10" />
                </svg>
              ),
            },
            {
              label: "Voll versichert",
              icon: (
                <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              ),
            },
            {
              label: "ETW · FLL Baumkontrolleur",
              icon: (
                <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="8" r="6" />
                  <path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11" />
                </svg>
              ),
            },
          ].map(({ label, icon }) => (
            <span
              key={label}
              className="flex items-center gap-2 text-white text-sm font-body font-semibold"
            >
              <span className="text-[#4a9e30]">{icon}</span>
              {label}
            </span>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="text-white/60"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}
