import ReferenceSlider from "@/components/shared/ReferenceSlider";
import InfoSection from "@/components/views/about/InfoSection";
import WorkRules from "@/components/views/about/WorkRules";
import GoogleReviews from "@/components/views/home/GoogleReviews";

// 1. WordPress'ten "Hakkımızda" sayfasının verisini çeken fonksiyon
async function getPageSeo() {
  // Slug'ın 'hakkimizda' olduğundan emin ol (WordPress panelinde "Kalıcı Bağlantı" kısmı)
  const res = await fetch("https://portal.fontdijitalmedya.com/wp-json/wp/v2/pages?slug=hakkimizda&_embed", {
    next: { revalidate: 60 }, // 60 saniyede bir güncellenir
  });

  if (!res.ok) return null;

  const pages = await res.json();
  return pages[0];
}

// 2. Metadata Oluşturucu
export async function generateMetadata() {
  const pageData = await getPageSeo();

  // WordPress'te sayfa yoksa varsayılan değerler
  if (!pageData) {
    return {
      title: "Hakkımızda - Font Dijital Medya",
      description: "Adana'nın dijital çözüm ortağı. Vizyonumuz, misyonumuz ve çalışma prensiplerimiz hakkında bilgi alın.",
    };
  }

  // Yoast SEO / Rank Math verisini al
  const seo = pageData.yoast_head_json || pageData.head_json;

  if (seo) {
    return {
      title: seo.title,
      description: seo.description || seo.og_description,
      openGraph: {
        title: seo.og_title || seo.title,
        description: seo.og_description || seo.description,
        url: "https://fontdijitalmedya.com/hakkimizda",
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
      alternates: {
        canonical: "https://fontdijitalmedya.com/hakkimizda",
      },
      robots: {
        index: seo.robots?.index !== "noindex",
        follow: seo.robots?.follow !== "nofollow",
      },
    };
  }
}

// 3. Sayfa Bileşeni (Mevcut yapıyı koruyoruz)
export default function Hakkimizda() {
  return (
    <main className="flex flex-col items-center justify-center gap-10 mt-5">
      <InfoSection />
      <WorkRules />
      <GoogleReviews />
      <ReferenceSlider />
    </main>
  );
}
