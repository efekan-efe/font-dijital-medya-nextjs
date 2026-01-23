import ContactPageContent from "@/components/views/contact/ContactPageContent";

// 1. WordPress'ten "İletişim" sayfasının verisini çeken fonksiyon
async function getPageSeo() {
  // Slug'ın 'iletisim' olduğundan emin ol (WordPress panelinde "Kalıcı Bağlantı" kısmı)
  const res = await fetch("https://portal.fontdijitalmedya.com/wp-json/wp/v2/pages?slug=iletisim&_embed", {
    next: { revalidate: 60 }, // 60 saniyede bir güncellenir
  });

  if (!res.ok) return null;

  const pages = await res.json();
  return pages[0];
}

// 2. Metadata Oluşturucu (SEO Verilerini İşler)
export async function generateMetadata() {
  const pageData = await getPageSeo();

  // WordPress'te sayfa yoksa veya veri çekilemezse varsayılanlar:
  if (!pageData) {
    return {
      title: "İletişim - Font Dijital Medya",
      description: "Bizimle iletişime geçin, dijital dönüşümünüzü başlatalım.",
    };
  }

  // Yoast SEO / Rank Math verisini al
  const seo = pageData.yoast_head_json || pageData.head_json;

  if (seo) {
    return {
      title: seo.title, // Panelden girdiğin "SEO Başlığı"
      description: seo.description || seo.og_description, // "Meta Açıklaması"

      // Sosyal Medya Paylaşım Kartları
      openGraph: {
        title: seo.og_title || seo.title,
        description: seo.og_description || seo.description,
        url: "https://fontdijitalmedya.com/iletisim",
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
        canonical: "https://fontdijitalmedya.com/iletisim",
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

// 3. Sayfa İçeriği
export default function IletisimPage() {
  return <ContactPageContent />;
}
