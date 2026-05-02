"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const steps = [
  {
    icon: (
      <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
      </svg>
    ),
    title: "Termin anfragen",
    desc: "Füllen Sie das Formular aus oder rufen Sie an. Wir melden uns innerhalb von 24 Stunden.",
  },
  {
    icon: (
      <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
      </svg>
    ),
    title: "Kostenfreie Prüfung vor Ort",
    desc: "Wir begutachten die Situation fachgerecht vor Ort – ehrlich und transparent.",
  },
  {
    icon: (
      <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
        <polyline points="14,2 14,8 20,8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
      </svg>
    ),
    title: "Detailliertes Angebot",
    desc: "Sie erhalten ein fair kalkuliertes Angebot ohne versteckte Kosten, vollständig unverbindlich.",
  },
];

export default function Prozess() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 md:py-24 bg-white" id="prozess">
      <div className="max-w-container mx-auto px-6">
        <div className="text-center mb-4">
          <span className="text-[13px] font-semibold text-[#309c30] uppercase tracking-[0.1em] font-body">
            SO EINFACH GEHT&apos;S
          </span>
        </div>
        <h2 className="text-center font-display font-bold text-[42px] text-[#111827] mb-16 leading-tight">
          In 3 Schritten zu Ihrem{" "}
          <span className="text-[#4a9e30]">Ergebnis</span>
        </h2>

        <div ref={ref} className="relative">
          {/* Gray base line */}
          <div className="hidden md:block absolute top-16 left-[16.66%] right-[16.66%] h-0.5 bg-[#e5e7eb]" />
          {/* Animated green progress line */}
          <motion.div
            className="hidden md:block absolute top-16 left-[16.66%] right-[16.66%] h-0.5 bg-[#309c30] origin-left"
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 1.2, ease: "easeInOut", delay: 0.3 }}
          />

          <div className="grid md:grid-cols-3 gap-10">
            {steps.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.2 + 0.3, duration: 0.5, ease: "easeOut" }}
                className="flex flex-col items-center text-center"
              >
                {/* Icon cluster */}
                <div className="relative w-32 h-32 flex items-center justify-center mb-6">
                  {/* Outer low-opacity halo */}
                  <div
                    className="absolute inset-0 rounded-full"
                    style={{ background: "rgba(48, 156, 48, 0.1)" }}
                  />
                  {/* Main green circle */}
                  <div className="relative w-20 h-20 rounded-full flex items-center justify-center bg-[#309c30] shadow-md">
                    {step.icon}
                  </div>
                  {/* Number badge */}
                  <span className="absolute top-0 right-0 w-10 h-10 bg-[#0d2b08] text-white text-sm font-bold rounded-full flex items-center justify-center font-display tracking-tight">
                    0{i + 1}
                  </span>
                </div>

                <h3 className="font-display font-bold text-[18px] text-[#111827] mb-3">
                  {step.title}
                </h3>
                <p className="text-[14px] text-[#6b7280] leading-relaxed font-body">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1, duration: 0.5, ease: "easeOut" }}
          className="mt-12"
        >
          <a
            href="#kontakt"
            className="block w-full md:max-w-md mx-auto text-center bg-[#309c30] hover:bg-[#1e6b1e] text-white font-semibold py-4 px-8 rounded-[6px] transition-all hover:scale-[1.02] font-body text-[15px]"
          >
            Jetzt kostenlosen Termin anfragen
          </a>
        </motion.div>
      </div>
    </section>
  );
}
