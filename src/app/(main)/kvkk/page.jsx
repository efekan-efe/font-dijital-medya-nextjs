import LegalContent from "@/components/shared/LegalContent";
import { notFound } from "next/navigation";

// 1. VERİ ÇEKME FONKSİYONU
async function getKvkkPageData() {
  // WordPress'teki slug'ın 'kvkk' olduğundan eminsen burası doğru çalışır.
  const res = await fetch("https://portal.fontdijitalmedya.com/wp-json/wp/v2/pages?slug=kvkk&_embed", {
    next: { revalidate: 60 },
  });

  if (!res.ok) return null;
  const data = await res.json();

  // Dizi boşsa (Sayfa bulunamadıysa) null dön
  return data[0] || null;
}

// 2. METADATA (SEO)
export async function generateMetadata() {
  const pageData = await getKvkkPageData();

  if (!pageData) {
    return {
      title: "Sayfa Bulunamadı - Font Dijital Medya",
    };
  }

  // Yoast SEO verilerini al
  const seo = pageData.yoast_head_json || pageData.head_json;

  return {
    title: seo?.title || pageData.title.rendered,
    description: seo?.description || seo?.og_description,
    openGraph: {
      title: seo?.og_title || seo?.title,
      description: seo?.og_description || seo?.description,
      url: "https://fontdijitalmedya.com/kvkk",
      siteName: "Font Dijital Medya",
      locale: "tr_TR",
      type: "website",
    },
    robots: {
      index: seo?.robots?.index !== "noindex",
      follow: seo?.robots?.follow !== "nofollow",
    },
  };
}

// 3. SAYFA BİLEŞENİ
export default async function KvkkPage() {
  const pageData = await getKvkkPageData();

  // Veri yoksa 404 sayfasına yönlendir
  if (!pageData) {
    notFound();
  }

  // LegalContent bileşenine verileri gönderiyoruz.
  // Bu bileşen, önceki adımda kurduğumuz 'prose' yapısı sayesinde
  // WordPress'ten gelen HTML'i o şık tasarıma otomatik çevirecek.
  return (
    <LegalContent
      title={pageData.title.rendered}
      content={pageData.content.rendered}
      date={pageData.modified} // Son güncelleme tarihini gösterir
    />
  );
}
