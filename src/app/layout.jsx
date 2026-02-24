import Script from "next/script";
import Header from "@/components/layout/Header";
import UpperHeader from "@/components/layout/UpperHeader";
import Footer from "@/components/layout/Footer";
import "./globals.css";
import { Inter } from "next/font/google";
import MobileHeader from "@/components/layout/MobileHeader";
import Link from "next/link";
import Image from "next/image";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata = {
  metadataBase: new URL("https://www.fontdijitalmedya.com"),

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

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
        <Link className="fixed bottom-5 left-5 max-w-20 z-50 max-sm:max-w-16 max-sm:bottom-14" href="https://wa.me/905323891658">
          <Image width={128} height={128} className="w-full h-full" src="https://portal.fontdijitalmedya.com/wp-content/uploads/2026/01/whatsapp.webp" alt="WhatsApp" />
        </Link>
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

        <Script src="https://www.googletagmanager.com/gtag/js?id=G-D38PTJ791Z" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-D38PTJ791Z');
          `}
        </Script>

        <Script id="microsoft-clarity" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "qdbvhfa5hq");
          `}
        </Script>
      </body>
    </html>
  );
}
