import BlogBreadcrumb from "@/components/views/blog/BlogBreadcrumb";
import BlogContent from "@/components/views/blog/BlogContent";
import BlogSideContent from "@/components/views/blog/BlogSideContent";

export default function BlogDetay() {
  return (
    <div className="font-inter">
      <BlogBreadcrumb blogTitle="2025’te Dijital Pazarlama Trendleri" />
      <div className="max-w-7xl mx-auto px-3 grid grid-cols-[1fr_380px] gap-4 py-5 max-[950px]:grid-cols-1">
        <BlogContent />
        <BlogSideContent />
      </div>
    </div>
  );
}
