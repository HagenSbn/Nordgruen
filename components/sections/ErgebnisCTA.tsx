"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function ErgebnisCTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      className="relative py-28 md:py-36"
      style={{
        backgroundImage:
          "url(https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1920&q=80)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div
        className="absolute inset-0"
        style={{ background: "rgba(13, 43, 8, 0.75)" }}
      />

      <div
        ref={ref}
        className="relative z-10 max-w-container mx-auto px-6 text-center"
      >
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-[13px] font-semibold text-[#4a9e30] uppercase tracking-[0.1em] font-body block mb-4"
        >
          IHR ERGEBNIS
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1, duration: 0.5, ease: "easeOut" }}
          className="font-display font-bold text-[42px] text-white leading-tight mb-10"
        >
          Ein gepflegtes Grundstück –{" "}
          <span className="text-[#4a9e30]">sicher und schön.</span>
        </motion.h2>

        <motion.a
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.5, ease: "easeOut" }}
          href="#kontakt"
          className="inline-flex items-center gap-2 bg-[#2d6a1f] hover:bg-[#1a3d12] text-white font-semibold px-10 py-4 rounded-[6px] transition-all hover:scale-[1.02] font-body text-[15px]"
        >
          📅 Jetzt kostenlosen Termin anfragen
        </motion.a>
      </div>
    </section>
  );
}
