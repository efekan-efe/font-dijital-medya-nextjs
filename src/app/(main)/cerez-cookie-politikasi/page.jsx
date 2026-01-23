import LegalContent from "@/components/shared/LegalContent";
import { notFound } from "next/navigation";

// 1. VERİ ÇEKME FONKSİYONU
async function getCookiePageData() {
  // WordPress'teki sayfa slug'ının 'cerez-cookie-politikasi' olduğundan emin ol.
  // Eğer panelde sadece 'cerez-politikasi' yazıyorsa burayı ona göre düzeltmelisin.
  const res = await fetch("https://portal.fontdijitalmedya.com/wp-json/wp/v2/pages?slug=cerez-cookie-politikasi&_embed", {
    next: { revalidate: 60 },
  });

  if (!res.ok) return null;
  const data = await res.json();

  return data[0] || null;
}

// 2. METADATA (SEO)
export async function generateMetadata() {
  const pageData = await getCookiePageData();

  if (!pageData) {
    return {
      title: "Sayfa Bulunamadı - Font Dijital Medya",
    };
  }

  const seo = pageData.yoast_head_json || pageData.head_json;

  return {
    title: seo?.title || pageData.title.rendered,
    description: seo?.description || seo?.og_description,
    openGraph: {
      title: seo?.og_title || seo?.title,
      description: seo?.og_description || seo?.description,
      url: "https://fontdijitalmedya.com/cerez-cookie-politikasi",
      siteName: "Font Dijital Medya",
      locale: "tr_TR",
      type: "website",
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
      },
    },
  };
}

// 3. SAYFA BİLEŞENİ
export default async function CookiePage() {
  const pageData = await getCookiePageData();

  if (!pageData) {
    notFound();
  }

  // LegalContent bileşeni, WP'den gelen HTML'i otomatik olarak
  // o mavi kutucuklu, şık tasarıma dönüştürecek.
  return <LegalContent title={pageData.title.rendered} content={pageData.content.rendered} date={pageData.modified} />;
}
