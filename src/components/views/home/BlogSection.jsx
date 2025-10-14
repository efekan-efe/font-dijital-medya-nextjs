import BlogCard from "@/components/shared/BlogCard";
import { dummyPosts } from "../../../../data/dummy-posts";
import TitleBadge from "@/components/ui/TitleBadge";

const BlogSection = () => {
  return (
    <div className="max-w-7xl mx-auto flex flex-col gap-8 px-2 font-inter">
      <div className="w-full flex flex-col justify-center items-center gap-1">
        <TitleBadge>
          <p className="text-primaryBlack w-full font-medium">
            <span className="text-primaryColor px-1">Dijital Dünya</span>
            Trendlerini Kaçırmayın
          </p>
        </TitleBadge>
        <h1 className="text-4xl font-bold text-primaryBlack">
          <span className="text-primaryColor">Dijital Pazarlama</span> Rehberleri
        </h1>
      </div>

      <div className="flex flex-wrap justify-center items-start gap-6">
        {dummyPosts.map((post, index) => (
          <BlogCard
            key={index}
            slug={post.slug}
            image={post.image}
            categories={post.categories}
            title={post.title}
            description={post.description}
            authorName={post.author.name}
            authorImg={post.author.avatar}
            readingTime={post.readingTime}
            publishDate={post.date}
          />
        ))}
      </div>
    </div>
  );
};

export default BlogSection;
