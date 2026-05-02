"use client";

import { motion } from "framer-motion";

const items = [
  "Zertifizierte Fachkräfte",
  "Moderne Seiltechnik",
  "Sicher & normgerecht",
  "Zuverlässige Ausführung",
];

export default function TrustBar() {
  return (
    <motion.div
      initial={{ x: -40, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="bg-[#2d6a1f] py-3.5"
    >
      <div className="max-w-container mx-auto px-6">
        <div className="flex flex-wrap justify-center md:justify-between items-center gap-4">
          {items.map((item) => (
            <span
              key={item}
              className="flex items-center gap-2 text-white text-sm font-medium font-body"
            >
              <span className="font-bold">✓</span>
              {item}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
