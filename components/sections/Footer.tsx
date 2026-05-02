import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#0d2b08] text-white py-12">
      <div className="max-w-container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          {/* Logo */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src="/logo-icon.svg" alt="Nordgrün Icon" className="h-10 w-auto brightness-0 invert" />
              <img src="/logo-wordmark.svg" alt="Nordgrün" className="h-5 w-auto brightness-0 invert" />
            </div>
            <p className="text-white/50 text-sm font-body leading-relaxed">
              Professionelle Baum- und Landschaftspflege von zertifizierten
              Fachleuten in Hamburg und Umgebung.
            </p>
          </div>

          {/* Navigation */}
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

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-white text-[13px] mb-4 font-body uppercase tracking-[0.08em]">
              Kontakt
            </h4>
            <ul className="space-y-2.5">
              <li>
                <a
                  href="tel:041212633100"
                  className="text-white/50 hover:text-white text-sm font-body transition-colors"
                >
                  04121 2633100
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@nordgruen-hamburg.de"
                  className="text-white/50 hover:text-white text-sm font-body transition-colors"
                >
                  info@nordgruen-hamburg.de
                </a>
              </li>
              <li>
                <p className="text-white/50 text-sm font-body leading-relaxed">
                  Musterstraße 12<br />
                  25421 Pinneberg
                </p>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/30 text-sm font-body">
            © 2025 Nordgrün – Baum &amp; Landschaftspflege. Alle Rechte vorbehalten.
          </p>
          <div className="flex gap-6">
            <Link
              href="/impressum"
              className="text-white/30 hover:text-white/60 text-sm font-body transition-colors"
            >
              Impressum
            </Link>
            <Link
              href="/datenschutz"
              className="text-white/30 hover:text-white/60 text-sm font-body transition-colors"
            >
              Datenschutz
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
