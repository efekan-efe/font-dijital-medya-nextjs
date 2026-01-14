import Header from "@/components/layout/Header";
import UpperHeader from "@/components/layout/UpperHeader";
import Footer from "@/components/layout/Footer";
import "./globals.css";
import { Inter } from "next/font/google";
import MobileHeader from "@/components/layout/MobileHeader"; // Import edilmiş, süper.

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata = {
  metadataBase: new URL("https://www.fontdijitalmedya.com"),

  verification: {
    google: "B3uHCX_poeHLPrlFj_T8rfh6ollSe50qRA_Kxu5GQK0",
  },

  title: {
    default: "Font Dijital Medya",
    template: "%s | Font Dijital Medya",
  },
  description: "Dijitalin Yeni Fontu - Profesyonel Web Tasarım ve Dijital Pazarlama Ajansı",

  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: "https://fontdijitalmedya.com",
    siteName: "Font Dijital Medya",
    // ▼▼▼ MANUEL TANIMLAMA KISMI ▼▼▼
    images: [
      {
        url: "/opengraph-image.jpg", // public klasöründeki dosya yolu
        width: 1200,
        height: 630,
        alt: "Font Dijital Medya",
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr" className={`${inter.variable}`}>
      <body className="overflow-x-hidden">
        {/* --- DESKTOP HEADER GRUBU --- */}
        {/* max-lg:hidden ekledik. Böylece mobilde bu alan tamamen yok olur, çakışma yapmaz. */}
        <div className="absolute top-0 w-full z-50">
          <UpperHeader />
          <span className="max-lg:hidden">
            <Header />
          </span>
        </div>

        {/* --- MOBİL HEADER --- */}
        {/* Sahneye aldık! Kendi içinde lg:hidden olduğu için desktopta görünmez. */}
        <MobileHeader />

        {/* Main içeriği */}
        <main>{children}</main>

        {/* Footer */}
        <div className="snap-footer-wrapper">
          <Footer />
        </div>
      </body>
    </html>
  );
}
