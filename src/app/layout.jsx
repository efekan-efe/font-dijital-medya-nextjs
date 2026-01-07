import Header from "@/components/layout/Header";
import UpperHeader from "@/components/layout/UpperHeader";
import Footer from "@/components/layout/Footer";
import "./globals.css";
import { Inter } from "next/font/google";
import MobileHeader from "@/components/layout/MobileHeader";

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
      {/* overflow-x-hidden body'de kalsın, html'den silebiliriz */}
      <body className="overflow-x-hidden">
        <div className="absolute top-0 w-full z-50">
          <UpperHeader />
          <Header />
        </div>

        {/* Main içeriği */}
        <main>{children}</main>

        {/* KRİTİK NOKTA: Footer'ı bir div ile sarmalayıp ona snap özelliği veriyoruz */}
        <div className="snap-footer-wrapper">
          <Footer />
        </div>
      </body>
    </html>
  );
}
