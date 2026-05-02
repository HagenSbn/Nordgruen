import type { Metadata, Viewport } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Nordgrün – Baum & Landschaftspflege Hamburg",
  description:
    "Professionelle Baum- und Landschaftspflege von zertifizierten Fachleuten in Hamburg. FLL-zertifiziert, European Tree Worker. Kostenloser Vor-Ort-Termin.",
  keywords:
    "Baumpflege Hamburg, Baumfällung Hamburg, Landschaftspflege Hamburg, FLL-zertifiziert, European Tree Worker",
  openGraph: {
    title: "Nordgrün – Baum & Landschaftspflege Hamburg",
    description:
      "Professionelle Baum- und Landschaftspflege von zertifizierten Fachleuten in Hamburg.",
    locale: "de_DE",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="de">
      <body
        className={`${montserrat.variable} font-body antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
