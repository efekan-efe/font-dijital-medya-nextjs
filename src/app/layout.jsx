import Header from "@/components/layout/Header";
import UpperHeader from "@/components/layout/UpperHeader";
import "./globals.css";
import { Inter } from "next/font/google";

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
    <html lang="tr" className={`${inter.variable}`}>
      <body>
        <UpperHeader />
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
