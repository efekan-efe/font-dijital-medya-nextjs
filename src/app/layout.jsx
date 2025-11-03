import Header from "@/components/layout/Header";
import UpperHeader from "@/components/layout/UpperHeader";
import Footer from "@/components/layout/Footer";
import "./globals.css";
import { Inter } from "next/font/google";
import MobileHeader from "@/components/layout/MobileHeader";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter", // Bu değişkeni Tailwind'de kullanacağız
});

export const metadata = {
  title: "Font Dijital Medya",
  description: "Dijitalin Yeni Fontu",
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr" className={`${inter.variable} overflow-x-hidden`}>
      <body className="overflow-x-hidden">
        <UpperHeader />
        <Header />
        <MobileHeader />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
