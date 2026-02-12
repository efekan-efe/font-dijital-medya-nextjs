import { notFound } from "next/navigation";

// BLOG Bileşenleri
import BlogBreadcrumb from "@/components/views/blog/BlogBreadcrumb";
import BlogContent from "@/components/views/blog/BlogContent";
import BlogSideContent from "@/components/views/blog/BlogSideContent";

// YENİ: Hizmet Şablonunu İçe Aktar
import ServiceTemplate from "@/components/templates/ServiceTemplate";

// --- YARDIMCI FONKSİYONLAR ---
const stripHtml = (html) => html.replace(/<[^>]*>?/gm, "");

const calculateReadingTime = (content) => {
  const wordsPerMinute = 200;
  const text = stripHtml(content || "");
  const wordCount = text.split(/\s+/).length;
  const minutes = Math.ceil(wordCount / wordsPerMinute);
  return `${minutes} dk okuma`;
};

// --- AKILLI VERİ ÇEKME ---
async function getContent(slug) {
  const [postRes, pageRes] = await Promise.all([
    fetch(`https://portal.fontdijitalmedya.com/wp-json/wp/v2/posts?slug=${slug}&_embed`, { next: { revalidate: 0 } }),
    fetch(`https://portal.fontdijitalmedya.com/wp-json/wp/v2/pages?slug=${slug}&_embed`, { next: { revalidate: 0 } }),
  ]);

  const posts = await postRes.json();
  const pages = await pageRes.json();

  if (posts.length > 0) return { type: "post", data: posts[0] };
  if (pages.length > 0) return { type: "page", data: pages[0] };
  return null;
}

// --- GÜNCELLENMİŞ SEO ALANI ---
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const contentObj = await getContent(slug);

  if (!contentObj) return { title: "Sayfa Bulunamadı - Font Dijital Medya" };

  const { data } = contentObj;

  // 1. Yoast SEO Verisini Yakala
  // Ekran görüntünde kanıtladığın 'yoast_head_json' anahtarını kullanıyoruz.
  const seo = data.yoast_head_json;

  // 2. Eğer Yoast verisi varsa onu kullan (Panelden girdiğin veriler)
  if (seo) {
    return {
      title: seo.title, // Yoast paneline yazdığın "SEO Başlığı"
      description: seo.description || seo.og_description, // "Meta Açıklaması"

      // Google Botları için Kurallar (index, noindex vb.)
      robots: {
        index: seo.robots?.index !== "noindex", // "noindex" değilse her zaman TRUE (indexle)
        follow: seo.robots?.follow !== "nofollow",
        googleBot: {
          index: seo.robots?.index !== "noindex",
          follow: seo.robots?.follow !== "nofollow",
        },
      },

      // Sosyal Medya Paylaşımları (WhatsApp, LinkedIn, vb.)
      openGraph: {
        title: seo.og_title || seo.title,
        description: seo.og_description || seo.description,
        url: seo.og_url || `https://fontdijitalmedya.com/${slug}`,
        siteName: seo.og_site_name || "Font Dijital Medya",
        locale: seo.og_locale || "tr_TR",
        type: seo.og_type || "website",
        images: seo.og_image
          ? seo.og_image.map((img) => ({
              url: img.url,
              width: img.width,
              height: img.height,
              alt: img.alt || seo.title,
            }))
          : [],
      },

      // Twitter Kartları
      twitter: {
        card: "summary_large_image",
        title: seo.twitter_title || seo.og_title || seo.title,
        description: seo.twitter_description || seo.og_description || seo.description,
        images: seo.twitter_image ? [seo.twitter_image] : seo.og_image ? [seo.og_image[0].url] : [],
      },

      // Canonical URL (SEO çakışmasını önler)
      alternates: {
        canonical: seo.canonical || `https://fontdijitalmedya.com/${slug}`,
      },
    };
  }

  // 3. FALLBACK: Eğer Yoast verisi yoksa eski otomatik yöntemi kullan
  // (Örneğin Yoast eklentisi devre dışı kalırsa site patlamasın diye)
  const rawContent = stripHtml(data.excerpt?.rendered || data.content?.rendered || "");
  const fallbackDescription = rawContent.length > 160 ? rawContent.slice(0, 157) + "..." : rawContent;

  return {
    title: `${data.title.rendered} - Font Dijital Medya`,
    description: fallbackDescription,
    openGraph: {
      images: [data._embedded?.["wp:featuredmedia"]?.[0]?.source_url],
    },
  };
}

// --- ANA SAYFA BİLEŞENİ ---
export default async function DynamicPage({ params }) {
  const { slug } = await params;
  const contentObj = await getContent(slug);

  if (!contentObj) notFound();

  const { type, data } = contentObj;

  // --- SENARYO 1: BLOG YAZISI ---
  if (type === "post") {
    const title = data.title.rendered;
    const content = data.content.rendered;
    const featuredImage = data._embedded?.["wp:featuredmedia"]?.[0]?.source_url || "/placeholder-image.jpg";
    const date = new Date(data.date).toLocaleDateString("tr-TR", { year: "numeric", month: "long", day: "numeric" });
    const authorName = data._embedded?.["author"]?.[0]?.name || "Font Editör";
    const categories = data._embedded?.["wp:term"]?.[0] || [];
    const primaryCategoryName = categories.length > 0 ? categories[0].name : "Genel";
    const allTerms = data._embedded?.["wp:term"] || [];
    const tags = allTerms.flat().filter((term) => term.taxonomy === "post_tag");
    const readingTime = calculateReadingTime(content);

    return (
      <div className="font-inter">
        <BlogBreadcrumb blogTitle={title} />
        <div className="max-w-7xl mx-auto px-3 grid grid-cols-[1fr_380px] gap-4 py-5 max-[950px]:grid-cols-1">
          <BlogContent title={title} content={content} featuredImage={featuredImage} categories={categories} date={date} author={authorName} />
          <BlogSideContent author={authorName} date={date} category={primaryCategoryName} readingTime={readingTime} tags={tags} currentPostId={data.id} />
        </div>
      </div>
    );
  }

  // --- SENARYO 2: HİZMET SAYFASI (WordPress Page) ---
  if (type === "page") {
    // 🔥🔥🔥 RESİM ID DÜZELTME YAMASI BAŞLANGIÇ 🔥🔥🔥
    if (data?.acf?.hizmet_gorseli && typeof data.acf.hizmet_gorseli === "number") {
      try {
        const mediaRes = await fetch(`https://fontdijitalmedya.com/wp-json/wp/v2/media/${data.acf.hizmet_gorseli}`);
        if (mediaRes.ok) {
          const mediaData = await mediaRes.json();
          // Sadece URL değil, obje olarak ata:
          data.acf.hizmet_gorseli = {
            url: mediaData.source_url,
            alt: mediaData.alt_text || data.title.rendered, // Alt yoksa sayfa başlığını yedek yap
          };
        }
      } catch (error) {
        console.error("Resim verisi alınamadı:", error);
      }
    }
    // 🔥🔥🔥 RESİM ID DÜZELTME YAMASI BİTİŞ 🔥🔥🔥

    return <ServiceTemplate data={data} />;
  }
}
