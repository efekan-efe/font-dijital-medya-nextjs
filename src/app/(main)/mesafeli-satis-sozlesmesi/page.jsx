import LegalContent from "@/components/shared/LegalContent";
import { notFound } from "next/navigation";

// 1. VERİ ÇEKME FONKSİYONU
async function getSalesAgreementData() {
  // WordPress'teki sayfa slug'ının birebir aynı olduğundan emin ol.
  const res = await fetch("https://portal.fontdijitalmedya.com/wp-json/wp/v2/pages?slug=mesafeli-satis-sozlesmesi&_embed", {
    next: { revalidate: 60 },
  });

  if (!res.ok) return null;
  const data = await res.json();

  return data[0] || null;
}

// 2. METADATA (SEO)
export async function generateMetadata() {
  const pageData = await getSalesAgreementData();

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
      url: "https://fontdijitalmedya.com/mesafeli-satis-sozlesmesi",
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
export default async function DistanceSalesPage() {
  const pageData = await getSalesAgreementData();

  if (!pageData) {
    notFound();
  }

  // LegalContent, HTML içeriği alıp o standart mavi/gri kutucuklu tasarıma çevirecek.
  return <LegalContent title={pageData.title.rendered} content={pageData.content.rendered} date={pageData.modified} />;
}
