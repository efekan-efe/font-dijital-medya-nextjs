import Image from "next/image";
import PostCategoryBadge from "../ui/PostCategoryBadge";
import PostMetaData from "../ui/PostMetaData";
import Link from "next/link";

const BlogCard = ({ slug, image, categories, title, description, authorImg, authorName, readingTime, publishDate }) => {
  return (
    <Link href={`/${slug}`} className="w-full max-w-[372px] flex flex-col gap-2 p-1 rounded-2xl border border-[#E9E9E9] font-inter">
      <div className="w-full rounded-t-2xl overflow-hidden relative h-[242px]">
        {/* DÜZELTME 1: localhost prefix'i kaldırıldı. Artık direkt 'image' değişkenini kullanıyoruz. */}
        {/* Güvenlik önlemi: image boş gelirse placeholder göster */}
        <Image width={362} height={242} className="w-full h-full object-cover" src={image || "/placeholder-image.jpg"} alt={title} />
      </div>

      <div className="p-3 pt-2 flex flex-col gap-3">
        <div className="flex justify-start items-center gap-2">
          {/* DÜZELTME 2: categories.name yerine direkt categories kullanıldı */}
          {/* Çünkü BlogSection'dan veriyi direkt string olarak gönderdik */}
          <PostCategoryBadge category={categories} />
        </div>

        <div className="flex flex-col gap-2 text-primaryBlack">
          <h3 className="text-lg font-bold">{title}</h3>
          <p className="leading-[25px] line-clamp-3">{description}</p>
        </div>
      </div>
      <div className="p-3 pt-2">
        <PostMetaData authorImg={authorImg} authorName={authorName} readingTime={readingTime} publishDate={publishDate} />
      </div>
    </Link>
  );
};

export default BlogCard;
