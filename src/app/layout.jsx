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
  title: "Font Dijital Medya",
  description: "Dijitalin Yeni Fontu",
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
