import Breadcrumb from "@/components/shared/Breadcrumb";
import ReferenceCards from "@/components/views/references/ReferenceCards";

// 1. SEO Verisini Çeken Fonksiyon
async function getPageSeo() {
  // WordPress'te oluşturduğun sayfanın slug'ı 'referanslar' olmalı
  const res = await fetch("https://portal.fontdijitalmedya.com/wp-json/wp/v2/pages?slug=referanslar&_embed", {
    next: { revalidate: 60 },
  });

  if (!res.ok) return null;

  const pages = await res.json();
  return pages[0];
}

// 2. Metadata Oluşturucu (WordPress'ten gelen veriyi işler)
export async function generateMetadata() {
  const pageData = await getPageSeo();

  // Eğer WordPress'te sayfa yoksa veya çekilemezse varsayılan değerler
  if (!pageData) {
    return {
      title: "Referanslar - Font Dijital Medya",
      description: "Birlikte büyüdüğümüz markalar ve başarı hikayelerimiz.",
    };
  }

  // Yoast SEO verisini al
  const seo = pageData.yoast_head_json || pageData.head_json;

  if (seo) {
    return {
      title: seo.title,
      description: seo.description || seo.og_description,
      openGraph: {
        title: seo.og_title || seo.title,
        description: seo.og_description || seo.description,
        url: "https://fontdijitalmedya.com/referanslar",
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
        canonical: "https://fontdijitalmedya.com/referanslar",
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

// 3. Sayfa Bileşeni (Aynen koruyoruz)
export default function Referanslar() {
  const badgeContent = (
    <p className="text-primaryBlack w-full font-medium">
      <span className="text-primaryColor px-1">Dijital Dünya’daki</span>
      İlk Adımınız
    </p>
  );
  const titleContent = (
    <>
      Birlikte Büyüdüğümüz <br />
      <span className="text-primaryColor px-1">Markalar</span>
    </>
  );
  return (
    <div className="flex flex-col items-center justify-center gap-10">
      <Breadcrumb badgeContent={badgeContent} titleContent={titleContent} />
      <ReferenceCards />
    </div>
  );
}
