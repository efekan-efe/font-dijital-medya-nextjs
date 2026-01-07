import TitleBadge from "@/components/ui/TitleBadge";
import BlogSlider from "./BlogSlider"; // Yeni oluşturduğumuz bileşeni çağırıyoruz

// --- YARDIMCI FONKSİYONLAR (Server tarafında çalışır) ---
const stripHtml = (html) => {
  return html.replace(/<[^>]*>?/gm, "");
};

const calculateReadingTime = (content) => {
  const wordsPerMinute = 200;
  const text = stripHtml(content);
  const wordCount = text.split(/\s+/).length;
  const minutes = Math.ceil(wordCount / wordsPerMinute);
  return `${minutes} dk okuma`;
};

async function getAllPosts() {
  // WordPress API'den veriyi çekiyoruz
  const res = await fetch("https://fontdijitalmedya.com/wp-json/wp/v2/posts?_embed&per_page=3", {
    next: { revalidate: 3600 },
  });

  if (!res.ok) {
    throw new Error("Blog yazıları çekilemedi");
  }

  return res.json();
}

export default async function BlogSection() {
  const rawPosts = await getAllPosts();

  // Veriyi burada işleyip temiz bir nesne haline getiriyoruz (Map işlemi)
  // Böylece Client Component'e (BlogSlider) tertemiz veri gidiyor.
  const formattedPosts = rawPosts.map((post) => {
    const imageUrl = post._embedded?.["wp:featuredmedia"]?.[0]?.source_url || "/placeholder-image.jpg";
    const authorName = post._embedded?.["author"]?.[0]?.name || "Admin";
    const categoryName = post._embedded?.["wp:term"]?.[0]?.[0]?.name || "Genel";
    const description = stripHtml(post.excerpt?.rendered || "");
    const readingTime = calculateReadingTime(post.content.rendered);

    return {
      id: post.id,
      title: post.title.rendered,
      description: description,
      categories: categoryName,
      slug: post.slug,
      authorName: authorName,
      image: imageUrl,
      publishDate: post.date,
      readingTime: readingTime,
    };
  });

  return (
    <section className="max-w-7xl mx-auto flex flex-col gap-8 px-2 font-inter w-full h-full justify-center">
      {/* Başlık Alanı */}
      <div className="w-full flex flex-col justify-center items-center gap-1 shrink-0">
        <TitleBadge>
          <p className="text-primaryBlack w-full font-medium">
            <span className="text-primaryColor px-1">Dijital Dünya</span>
            Trendlerini Kaçırmayın
          </p>
        </TitleBadge>
        <h1 className="text-3xl md:text-4xl font-bold text-primaryBlack text-center">
          <span className="text-primaryColor">Dijital Pazarlama</span> Rehberleri
        </h1>
      </div>

      {/* İçerik Alanı (Slider veya Grid kararını BlogSlider verecek) */}
      <div className="w-full">
        <BlogSlider posts={formattedPosts} />
      </div>
    </section>
  );
}
