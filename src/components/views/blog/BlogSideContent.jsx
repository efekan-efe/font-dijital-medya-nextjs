import BlogInfoCard from "@/components/ui/BlogInfoCard";
import PostCategoryColumn from "@/components/ui/PostCategoryColumn";
import PostSubscribeWindow from "@/components/ui/PostSubscribeWindow";
import PostTags from "@/components/ui/PostTags";
import SimilarPosts from "@/components/ui/SimilarPosts";

const BlogSideContent = ({ author, date, category, readingTime, tags, currentPostId }) => {
  return (
    <div className="w-full flex flex-col gap-10">
      {/* 1. Dinamik Yazı Bilgileri */}
      <BlogInfoCard author={author} date={date} category={category} readingTime={readingTime} />

      {/* 2. Benzer Yazılar (API'den kendi çeker ama şu anki ID'yi hariç tutmak için gönderiyoruz) */}
      <SimilarPosts currentPostId={currentPostId} />

      {/* 3. Sabit Kategoriler (Tasarım bozulmasın diye statik bıraktık) */}
      <PostCategoryColumn />

      {/* 4. Dinamik Etiketler */}
      <PostTags tags={tags} />

      {/* 5. Abonelik Formu (Statik) */}
      <PostSubscribeWindow />
    </div>
  );
};

export default BlogSideContent;
