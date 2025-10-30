import BlogInfoCard from "@/components/ui/BlogInfoCard";
import PostCategoryColumn from "@/components/ui/PostCategoryColumn";
import PostSubscribeWindow from "@/components/ui/PostSubscribeWindow";
import PostTags from "@/components/ui/PostTags";
import SimilarPosts from "@/components/ui/SimilarPosts";

const BlogSideContent = () => {
  return (
    <div className="w-full flex flex-col gap-10">
      <BlogInfoCard />
      <SimilarPosts />
      <PostCategoryColumn />
      <PostTags />
      <PostSubscribeWindow />
    </div>
  );
};

export default BlogSideContent;
