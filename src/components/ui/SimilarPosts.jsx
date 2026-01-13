import Image from "next/image";
import Link from "next/link";

// Yardımcı Fonksiyon: Son yazıları çek
async function getRecentPosts(excludeId) {
  try {
    // DÜZELTME 1: '_fields' kısmına '_links' eklendi.
    // '_embed' özelliğinin çalışması için '_links' ZORUNLUDUR.
    const res = await fetch(`https://portal.fontdijitalmedya.com/wp-json/wp/v2/posts?_embed&per_page=4&_fields=id,title,slug,featured_media,_embedded,_links`, {
      next: { revalidate: 3600 },
    });

    if (!res.ok) return [];
    return await res.json();
  } catch (error) {
    console.error("Benzer yazılar hatası:", error);
    return [];
  }
}

const SimilarPosts = async ({ currentPostId }) => {
  const posts = await getRecentPosts(currentPostId);

  // Şu anki yazıyı listeden çıkar ve ilk 3 tanesini al
  const filteredPosts = posts.filter((p) => p.id !== currentPostId).slice(0, 3);

  if (filteredPosts.length === 0) return null;

  return (
    <div className="w-full flex flex-col gap-6 font-inter">
      <div className="flex justify-start items-center gap-3">
        <h2 className="text-2xl font-medium text-primaryColor leading-8 whitespace-nowrap">Benzer Yazılar</h2>
        <div className="w-full h-px bg-primaryColor"></div>
      </div>

      <div className="flex flex-col gap-4">
        {filteredPosts.map((post) => {
          // GÖRSEL SEÇİM MANTIĞI (GÜNCELLENDİ)
          const media = post._embedded?.["wp:featuredmedia"]?.[0];

          // 1. Önce thumbnail (küçük resim) var mı bak
          // 2. Yoksa medium (orta boy) var mı bak
          // 3. Yoksa orijinal boyutu (source_url) al
          // 4. Hiçbiri yoksa placeholder'a düş
          const imageUrl = media?.media_details?.sizes?.thumbnail?.source_url || media?.media_details?.sizes?.medium?.source_url || media?.source_url || "/placeholder-image.jpg";

          const categoryName = post._embedded?.["wp:term"]?.[0]?.[0]?.name || "Blog";

          return (
            <Link key={post.id} href={`/${post.slug}`} className="grid grid-cols-[100px_1fr] gap-4 border-b border-primaryColor/50 pb-4 group">
              <div className="w-[100px] h-[70px] rounded-2xl overflow-hidden relative">
                <Image className="object-cover group-hover:scale-105 transition-transform duration-300" src={imageUrl} alt={post.title.rendered} fill sizes="100px" />
              </div>
              <div className="flex flex-col gap-1 text-primaryBlack justify-center">
                <span className="w-fit text-[10px] font-medium py-0.5 px-2 text-center border border-primaryColor/50 rounded-full text-primaryColor">{categoryName}</span>
                <h4 className="font-medium leading-5 text-left text-sm line-clamp-2 group-hover:text-primaryColor transition-colors" dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default SimilarPosts;
