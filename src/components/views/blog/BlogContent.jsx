import Image from "next/image";
import PostCategoryBadge from "@/components/ui/PostCategoryBadge";
// import { Check } from "lucide-react"; // Bu ikon içerik metninde otomatik gelmez, WP editörden eklenmeli.

const BlogContent = ({ title, content, featuredImage, categories, date, author }) => {
  return (
    <div className="w-full flex flex-col gap-4 font-inter">
      {/* 1. Öne Çıkan Görsel */}
      <div className="w-full h-[400px] relative rounded-xl overflow-hidden">
        <Image className="object-cover" src={featuredImage} alt={title} fill priority />
      </div>

      {/* 2. Kategoriler */}
      <div className="flex justify-start items-center gap-3 flex-wrap">{categories.length > 0 ? categories.map((cat) => <PostCategoryBadge key={cat.id} category={cat.name} blank={true} />) : <PostCategoryBadge category="Genel" blank={true} />}</div>

      {/* 3. Başlık ve Meta Bilgi */}
      <div className="flex flex-col gap-2">
        <h1
          className="font-medium text-3xl leading-tight text-primaryBlack"
          dangerouslySetInnerHTML={{ __html: title }} // Başlıkta özel karakter varsa düzeltsin diye
        />
        <p className="text-sm text-gray-500">
          Yazar: <span className="font-medium text-primaryColor">{author}</span> • {date}
        </p>
      </div>

      {/* 4. WordPress İçeriği (HTML Render Alanı) */}
      <div className="flex flex-col gap-4 text-primaryBlack leading-7 [&>p]:mb-4 [&>h2]:text-2xl [&>h2]:font-bold [&>h2]:mt-6 [&>ul]:list-disc [&>ul]:pl-5 [&>li]:mb-2" dangerouslySetInnerHTML={{ __html: content }} />

      {/* Not: Yukarıdaki className içindeki özel seçiciler ([&>p]) 
          WordPress'ten gelen çıplak HTML etiketlerine stil verir. 
          Eğer Tailwind Typography pluginin varsa sadece 'prose prose-lg max-w-none' yazman yeterli olur. */}
    </div>
  );
};

export default BlogContent;
