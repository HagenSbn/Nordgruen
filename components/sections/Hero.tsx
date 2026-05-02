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
      className="relative min-h-[100svh] flex flex-col justify-center"
      style={{
        backgroundImage: "url(/nordgruenbanner.png)",
        backgroundSize: "cover",
        backgroundPosition: "center 30%",
      }}
    >
      <div
        className="absolute inset-0"
        style={{ background: "rgba(15, 40, 10, 0.65)" }}
      />

      <div className="relative z-10 w-full max-w-container mx-auto px-4 sm:px-6 pt-24 pb-16 sm:pb-20">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-[100px] text-white text-[12px] sm:text-sm font-medium font-body mb-6 sm:mb-8 max-w-full"
          style={{ background: "rgba(255, 255, 255, 0.15)" }}
        >
          <span className="break-words">FLL-ZERTIFIZIERT · EUROPEAN TREE WORKER</span>
        </motion.div>

        <h1
          className="font-display font-extrabold leading-[1.1] mb-5 sm:mb-6 [text-wrap:balance]"
          style={{ fontSize: "clamp(2rem, 6.5vw, 4rem)", hyphens: "auto" }}
        >
          <motion.span
            custom={0}
            variants={wordAnim}
            initial="hidden"
            animate="visible"
            className="text-white block break-words"
          >
            Baum- und Landschaftspflege
          </motion.span>
          <motion.span
            custom={1}
            variants={wordAnim}
            initial="hidden"
            animate="visible"
            className="text-[#4a9e30] block break-words"
          >
            in Schleswig-Holstein &amp; Hamburg
          </motion.span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5, ease: "easeOut" }}
          className="text-white/90 font-body leading-[1.7] mb-7 sm:mb-8 max-w-[35rem]"
          style={{ fontSize: "clamp(0.95rem, 1.6vw, 1.125rem)" }}
        >
          Professionelle Baum- und Landschaftspflege von zertifizierten
          Fachleuten. Kostenloser Vor-Ort-Termin – ehrlich, transparent, ohne
          versteckte Kosten.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5, ease: "easeOut" }}
          className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 mb-8 sm:mb-10"
        >
          <a
            href="#kontakt"
            className="flex items-center justify-center gap-2 bg-[#309c30] hover:bg-[#1e6b1e] text-white font-semibold px-6 sm:px-7 py-3.5 min-h-[48px] rounded-[6px] transition-all hover:scale-[1.02] font-body text-[15px] w-full sm:w-auto"
          >
            Kostenlosen Termin anfragen
          </a>
          <a
            href="tel:041212633100"
            className="flex items-center justify-center gap-2 border-2 border-white text-white font-semibold px-6 sm:px-7 py-3.5 min-h-[48px] rounded-[6px] hover:bg-white/10 transition-all font-body text-[15px] w-full sm:w-auto"
          >
            Jetzt anrufen
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="flex flex-wrap gap-x-5 gap-y-2 sm:gap-x-6"
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
              className="flex items-center gap-2 text-white text-[13px] sm:text-sm font-body font-semibold"
            >
              <span className="text-[#4a9e30]">{icon}</span>
              {label}
            </span>
          ))}
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        className="hidden sm:block absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
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
