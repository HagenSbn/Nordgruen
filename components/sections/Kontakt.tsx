"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

function IconCircle({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="w-10 h-10 rounded-full flex items-center justify-center text-[#309c30] flex-shrink-0"
      style={{ background: "rgba(48, 156, 48, 0.1)" }}
    >
      {children}
    </div>
  );
}

export default function Kontakt() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const [form, setForm] = useState({ name: "", telefon: "", email: "", nachricht: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Unbekannter Fehler");
      }

      setStatus("success");
      setForm({ name: "", telefon: "", email: "", nachricht: "" });
    } catch (err: unknown) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Die Nachricht konnte nicht gesendet werden.");
    }
  }

  const inputClass =
    "w-full border border-[#e5e7eb] rounded-[6px] px-4 py-3 min-h-[48px] text-[15px] text-[#111827] font-body focus:outline-none focus:border-[#309c30] focus:ring-1 focus:ring-[#309c30] transition-colors";

  return (
    <section id="kontakt" className="py-14 sm:py-20 md:py-24 bg-white">
      <div className="max-w-container mx-auto px-4 sm:px-6">
        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <h2
              className="font-display font-bold text-[#111827] leading-tight mb-4 [text-wrap:balance]"
              style={{ fontSize: "clamp(1.75rem, 4.5vw, 2.625rem)" }}
            >
              Kontakt aufnehmen
            </h2>
            <p className="text-[15px] sm:text-[16px] text-[#374151] font-body leading-[1.7] mb-7 sm:mb-8">
              Wir freuen uns auf Ihre Anfrage. Rufen Sie uns an oder senden Sie
              uns eine Nachricht – wir melden uns innerhalb von 24 Stunden.
            </p>

            <div className="space-y-5 sm:space-y-6">
              <div className="flex items-start gap-4">
                <IconCircle>
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </IconCircle>
                <div className="min-w-0">
                  <p className="font-semibold text-[#111827] font-body text-[15px]">Adresse</p>
                  <p className="text-[#6b7280] text-[14px] font-body mt-0.5 leading-relaxed break-words">
                    Nordgrün<br />
                    Schulstraße 8<br />
                    25368 Kiebitzreihe
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <IconCircle>
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </IconCircle>
                <div className="min-w-0">
                  <p className="font-semibold text-[#111827] font-body text-[15px]">Telefon</p>
                  <a
                    href="tel:041212633100"
                    className="text-[#309c30] text-[14px] font-body hover:underline mt-0.5 block break-words"
                  >
                    04121 2633100
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <IconCircle>
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </IconCircle>
                <div className="min-w-0">
                  <p className="font-semibold text-[#111827] font-body text-[15px]">E-Mail</p>
                  <a
                    href="mailto:info@nordgruen.com"
                    className="text-[#309c30] text-[14px] font-body hover:underline mt-0.5 block break-all"
                  >
                    info@nordgruen.com
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.5, ease: "easeOut" }}
          >
            {status === "success" ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12 px-6 border border-[#309c30]/30 rounded-[8px] bg-[#f0faf0]">
                <div className="w-14 h-14 rounded-full bg-[#309c30] flex items-center justify-center mb-5">
                  <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="font-display font-bold text-[#111827] text-xl mb-2">Nachricht gesendet!</h3>
                <p className="text-[#374151] font-body text-[15px] leading-relaxed mb-6">
                  Vielen Dank für Ihre Anfrage. Wir melden uns innerhalb von 24 Stunden bei Ihnen.
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="text-[#309c30] font-semibold font-body text-[14px] hover:underline"
                >
                  Neue Anfrage senden
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                  <div>
                    <label className="block text-[14px] font-medium text-[#374151] font-body mb-1.5">
                      Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Ihr Name"
                      required
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className="block text-[14px] font-medium text-[#374151] font-body mb-1.5">
                      Telefon
                    </label>
                    <input
                      type="tel"
                      name="telefon"
                      value={form.telefon}
                      onChange={handleChange}
                      placeholder="Ihre Telefonnummer"
                      className={inputClass}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[14px] font-medium text-[#374151] font-body mb-1.5">
                    E-Mail <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="Ihre E-Mail-Adresse"
                    required
                    className={inputClass}
                  />
                </div>

                <div>
                  <label className="block text-[14px] font-medium text-[#374151] font-body mb-1.5">
                    Nachricht <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    name="nachricht"
                    value={form.nachricht}
                    onChange={handleChange}
                    rows={5}
                    placeholder="Beschreiben Sie Ihr Anliegen..."
                    required
                    className={`${inputClass} min-h-[unset] resize-none`}
                  />
                </div>

                {status === "error" && (
                  <p className="text-red-600 text-[14px] font-body">{errorMsg}</p>
                )}

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full bg-[#309c30] hover:bg-[#1e6b1e] disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold py-4 min-h-[48px] px-6 sm:px-8 rounded-[6px] transition-all hover:scale-[1.01] font-body text-[15px] flex items-center justify-center gap-2"
                >
                  {status === "loading" ? (
                    <>
                      <svg className="w-4 h-4 animate-spin" viewBox="0 0 24 24" fill="none">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
                      </svg>
                      Wird gesendet…
                    </>
                  ) : (
                    "Kostenlosen Termin anfragen"
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
