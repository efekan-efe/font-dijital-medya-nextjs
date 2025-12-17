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

// --- SEO ---
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const contentObj = await getContent(slug);

  if (!contentObj) return { title: "Sayfa Bulunamadı - Font Dijital Medya" };

  const { data } = contentObj;
  const description = stripHtml(data.excerpt.rendered).slice(0, 160);

  return {
    title: `${data.title.rendered} - Font Dijital Medya`,
    description: description,
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
    // Eğer 'hizmet_gorseli' bir SAYI (ID) olarak geliyorsa, gerçek URL'i çekelim.
    if (data?.acf?.hizmet_gorseli && typeof data.acf.hizmet_gorseli === "number") {
      try {
        const mediaRes = await fetch(`https://fontdijitalmedya.com/wp-json/wp/v2/media/${data.acf.hizmet_gorseli}`);
        if (mediaRes.ok) {
          const mediaData = await mediaRes.json();
          // ID'yi gerçek URL ile değiştiriyoruz
          data.acf.hizmet_gorseli = mediaData.source_url;
        }
      } catch (error) {
        console.error("Resim ID'den URL'e dönüştürülemedi:", error);
      }
    }
    // 🔥🔥🔥 RESİM ID DÜZELTME YAMASI BİTİŞ 🔥🔥🔥

    return <ServiceTemplate data={data} />;
  }
}
