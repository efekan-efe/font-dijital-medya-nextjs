import BlogCard from "@/components/shared/BlogCard";
import TitleBadge from "@/components/ui/TitleBadge";

// Yardımcı Fonksiyon: HTML etiketlerini temizlemek için (Excerpt için)
const stripHtml = (html) => {
  return html.replace(/<[^>]*>?/gm, "");
};

// Yardımcı Fonksiyon: Okuma süresi hesaplama (WordPress varsayılan olarak vermez)
const calculateReadingTime = (content) => {
  const wordsPerMinute = 200;
  const text = stripHtml(content);
  const wordCount = text.split(/\s+/).length;
  const minutes = Math.ceil(wordCount / wordsPerMinute);
  return `${minutes} dk okuma`;
};

async function getAllPosts() {
  const res = await fetch("https://fontdijitalmedya.com/wp-json/wp/v2/posts?_embed&per_page=3", {
    next: { revalidate: 3600 }, // 1 saatte bir cache yenile (performans için)
  });

  if (!res.ok) {
    throw new Error("Blog yazıları çekilemedi");
  }

  return res.json();
}

export default async function BlogSection() {
  const posts = await getAllPosts();
  return (
    <div className="max-w-7xl mx-auto flex flex-col gap-8 px-2 font-inter">
      <div className="w-full flex flex-col justify-center items-center gap-1">
        <TitleBadge>
          <p className="text-primaryBlack w-full font-medium">
            <span className="text-primaryColor px-1">Dijital Dünya</span>
            Trendlerini Kaçırmayın
          </p>
        </TitleBadge>
        <h1 className="text-4xl font-bold text-primaryBlack max-md:text-center">
          <span className="text-primaryColor">Dijital Pazarlama</span> Rehberleri
        </h1>
      </div>

      <div className="flex flex-wrap justify-center items-stretch gap-6">
        {posts.map((post) => {
          const imageUrl = post._embedded?.["wp:featuredmedia"]?.[0]?.source_url || "/placeholder-image.jpg";
          const authorName = post._embedded?.["author"]?.[0]?.name || "Admin";
          const categoryName = post._embedded?.["wp:term"]?.[0]?.[0]?.name || "Genel";
          const description = stripHtml(post.excerpt?.rendered || "");

          return (
            <BlogCard
              key={post.id} // WordPress 'id' kullanır
              title={post.title.rendered} // Başlık 'rendered' içindedir
              description={description}
              categories={categoryName} // Strapi'deki dizi yerine tek string veya dizi gönderimine göre ayarlayabilirsin
              slug={post.slug}
              authorName={authorName}
              image={imageUrl}
              publishDate={post.date}
              readingTime={calculateReadingTime(post.content.rendered)} // İçerikten hesapla
            />
          );
        })}
      </div>
    </div>
  );
}
