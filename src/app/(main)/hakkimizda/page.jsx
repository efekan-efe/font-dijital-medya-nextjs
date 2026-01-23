import ReferenceSlider from "@/components/shared/ReferenceSlider";
import InfoSection from "@/components/views/about/InfoSection";
import WorkRules from "@/components/views/about/WorkRules";
import GoogleReviews from "@/components/views/home/GoogleReviews";
import { notFound } from "next/navigation";

// 1. TEK MERKEZLİ VERİ ÇEKME FONKSİYONU
// Hem SEO hem de Sayfa İçeriği bunu kullanacak.
async function getAboutPageData() {
  const res = await fetch("https://portal.fontdijitalmedya.com/wp-json/wp/v2/pages?slug=hakkimizda&_embed", {
    next: { revalidate: 60 },
  });

  if (!res.ok) return null;

  const data = await res.json();

  // Eğer dizi boşsa (Sayfa yoksa) null dön
  if (data.length === 0) return null;

  return data[0];
}

// 2. METADATA (Google İçin)
export async function generateMetadata() {
  const pageData = await getAboutPageData();

  if (!pageData) {
    return {
      title: "Hakkımızda - Font Dijital Medya",
    };
  }

  const seo = pageData.yoast_head_json || pageData.head_json;

  if (seo) {
    return {
      title: seo.title,
      description: seo.description || seo.og_description,
      metadataBase: new URL("https://fontdijitalmedya.com"),
      openGraph: {
        title: seo.og_title || seo.title,
        description: seo.og_description || seo.description,
        url: "https://fontdijitalmedya.com/hakkimizda", // URL'i özelleştirdik
        siteName: seo.og_site_name || "Font Dijital Medya",
        locale: "tr_TR",
        type: "website",
        images: seo.og_image
          ? seo.og_image.map((img) => ({
              url: img.url,
              width: img.width,
              height: img.height,
              alt: img.alt || seo.title,
            }))
          : [],
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
}

// 3. SAYFA BİLEŞENİ (Kullanıcı İçin)
export default async function Hakkimizda() {
  // Veriyi burada da çekiyoruz (Next.js cache sayesinde sunucuya ekstra yük binmez)
  const pageData = await getAboutPageData();

  // Eğer sayfa WP'de yoksa 404 sayfasına yönlendir
  if (!pageData) {
    notFound();
  }

  // ACF Verilerini Ayıkla (Yoksa boş obje ver ki hata patlamasın)
  const acf = pageData.acf || {};

  return (
    <main className="flex flex-col items-center justify-center gap-10 mt-5">
      <InfoSection data={acf} />
      <WorkRules data={acf} />
      <GoogleReviews data={acf} />
      <ReferenceSlider />
    </main>
  );
}
