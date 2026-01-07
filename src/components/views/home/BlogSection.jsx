import BlogSlider from "./BlogSlider";

// --- YARDIMCI FONKSİYONLAR ---
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

  // Section ve Başlık yapılarını BlogSlider'a taşıdığımız için
  // Burası sadece Component'i döndürüyor.
  return <BlogSlider posts={formattedPosts} />;
}
