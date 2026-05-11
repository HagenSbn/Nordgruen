import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#0d2b08] text-white py-10 sm:py-12">
      <div className="max-w-container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-10 mb-8 sm:mb-10">
          <div className="sm:col-span-2 md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <img src="/logo-icon.svg" alt="Nordgrün Icon" className="h-9 sm:h-10 w-auto brightness-0 invert" />
              <img src="/logo-wordmark.svg" alt="Nordgrün" className="h-4 sm:h-5 w-auto brightness-0 invert" />
            </div>
            <p className="text-white/50 text-sm font-body leading-relaxed max-w-md">
              Professionelle Baum- und Landschaftspflege von zertifizierten
              Fachleuten in Hamburg und Umgebung.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-white text-[13px] mb-4 font-body uppercase tracking-[0.08em]">
              Navigation
            </h4>
            <ul className="space-y-2.5">
              {[
                { label: "Start", href: "/" },
                { label: "Leistungen", href: "/leistungen" },
                { label: "Einsatzgebiete", href: "/standorte" },
                { label: "Über Uns", href: "/ueber-uns" },
                { label: "Kontakt", href: "/#kontakt" },
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-white/50 hover:text-white text-sm font-body transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white text-[13px] mb-4 font-body uppercase tracking-[0.08em]">
              Kontakt
            </h4>
            <ul className="space-y-2.5">
              <li>
                <a
                  href="tel:041212633100"
                  className="text-white/50 hover:text-white text-sm font-body transition-colors break-words"
                >
                  04121 2633100
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@nordgruen.com"
                  className="text-white/50 hover:text-white text-sm font-body transition-colors break-words"
                >
                  info@nordgruen.com
                </a>
              </li>
              <li>
                <p className="text-white/50 text-sm font-body leading-relaxed">
                  Schulstraße 8<br />
                  25368 Kiebitzreihe
                </p>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <p className="text-white/30 text-[13px] sm:text-sm font-body">
              © 2026 Nordgrün – Baum &amp; Landschaftspflege. Alle Rechte vorbehalten.
            </p>
            <p className="text-white/20 text-[12px] font-body mt-1">
              Erstellt von{" "}
              <a
                href="https://schoenborndigital.de"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white/40 transition-colors"
              >
                schoenborndigital.de
              </a>
            </p>
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <Link
              href="/impressum"
              className="text-white/30 hover:text-white/60 text-[13px] sm:text-sm font-body transition-colors"
            >
              Impressum
            </Link>
            <Link
              href="/datenschutz"
              className="text-white/30 hover:text-white/60 text-[13px] sm:text-sm font-body transition-colors"
            >
              Datenschutz
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
