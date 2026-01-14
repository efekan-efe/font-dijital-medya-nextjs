import BlogSection from "@/components/views/home/BlogSection";
import FeaturesSection from "@/components/views/home/FeaturesSection";
import GoogleReviews from "@/components/views/home/GoogleReviews";
import HeroSection from "@/components/views/home/HeroSection";
import OurServices from "@/components/views/home/OurServices";

// --- ORTAK VERİ ÇEKME FONKSİYONU ---
// Bu fonksiyon hem Metadata hem de Sayfa içeriği için çalışır.
// Next.js "Request Memoization" sayesinde bu isteği 2 kere yazsak da sunucuya 1 kere gider.
async function getHomePageData() {
  const res = await fetch("https://portal.fontdijitalmedya.com/wp-json/wp/v2/pages?slug=anasayfa&_embed", {
    next: { revalidate: 60 }, // 60 saniyede bir veriyi tazele (ISR)
  });

  if (!res.ok) return null;

  const data = await res.json();
  return data[0]; // Sayfa verisi + ACF + Yoast hepsi burada
}

// --- 1. SEO METADATA OLUŞTURUCU (Google İçin) ---
export async function generateMetadata() {
  const pageData = await getHomePageData();

  // Veri yoksa varsayılanı dön
  if (!pageData) {
    return {
      title: "Font Dijital Medya",
      description: "Dijital Çözüm Ortağınız",
    };
  }

  // Yoast SEO Verilerini İşle
  const seo = pageData.yoast_head_json || pageData.head_json;

  if (seo) {
    return {
      title: seo.title, // WP'den gelen başlık
      description: seo.description || seo.og_description, // WP'den gelen açıklama
      metadataBase: new URL("https://fontdijitalmedya.com"),
      openGraph: {
        title: seo.og_title || seo.title,
        description: seo.og_description || seo.description,
        url: "https://fontdijitalmedya.com",
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
      twitter: {
        card: "summary_large_image",
        title: seo.twitter_title || seo.og_title,
        description: seo.twitter_description || seo.og_description,
        images: seo.twitter_image ? [seo.twitter_image] : [],
      },
      robots: {
        index: seo.robots?.index !== "noindex",
        follow: seo.robots?.follow !== "nofollow",
      },
    };
  }
}

// --- 2. SAYFA İÇERİĞİ (Kullanıcı İçin) ---
export default async function HomePage() {
  const pageData = await getHomePageData();

  // ACF Verilerini Ayıkla (Eğer ACF yoksa boş obje olsun hata vermesin)
  const acf = pageData?.acf || {};

  return (
    <main className="homepageMain flex flex-col">
      <HeroSection data={acf} />
      <GoogleReviews data={acf} />
      <OurServices data={acf} />
      <FeaturesSection data={acf} />
      <BlogSection data={acf} />
    </main>
  );
}
