// "use client" BURADA YOK! Burası Server Component.

import ContactPageContent from "@/components/views/contact/ContactPageContent";

// İşte SEO Sihri Burada:
export const metadata = {
  title: "İletişim | Font Dijital Medya",
  description: "Dijital dönüşüm projeleriniz için Adana'nın en iyi dijital ajansı Font Dijital Medya ile iletişime geçin. Web tasarım, SEO ve sosyal medya yönetimi.",
  openGraph: {
    title: "İletişim | Font Dijital Medya",
    description: "Dijital dönüşüm projeleriniz için bizimle iletişime geçin.",
    url: "https://fontdijitalmedya.com/iletisim",
    siteName: "Font Dijital Medya",
    images: [
      {
        url: "https://fontdijitalmedya.com/og-iletisim.jpg", // Varsa özel görsel
        width: 1200,
        height: 630,
      },
    ],
    locale: "tr_TR",
    type: "website",
  },
};

export default function IletisimPage() {
  return <ContactPageContent />;
}
