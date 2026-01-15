import LegalContent from "@/components/shared/LegalContent";
import { notFound } from "next/navigation";

// 1. Veri Çekme
async function getPageData() {
  // Slug'a dikkat: 'gizlilik-sozlesmesi' veya WP'de ne yaptıysan o.
  const res = await fetch("https://portal.fontdijitalmedya.com/wp-json/wp/v2/pages?slug=gizlilik-politikasi&_embed", {
    next: { revalidate: 60 },
  });

  if (!res.ok) return null;
  const data = await res.json();
  return data[0];
}

// 2. Metadata (SEO)
export async function generateMetadata() {
  const pageData = await getPageData();
  if (!pageData) return { title: "Sayfa Bulunamadı" };

  const seo = pageData.yoast_head_json || pageData.head_json;
  return {
    title: seo?.title || pageData.title.rendered,
    description: seo?.description,
    // ... diğer meta tagler (önceki örneklerdeki gibi)
  };
}

// 3. Sayfa Görüntüsü
export default async function PrivacyPage() {
  const pageData = await getPageData();

  if (!pageData) {
    notFound();
  }

  return (
    <LegalContent
      title={pageData.title.rendered}
      content={pageData.content.rendered}
      date={pageData.modified} // WP'deki son güncelleme tarihi
    />
  );
}
