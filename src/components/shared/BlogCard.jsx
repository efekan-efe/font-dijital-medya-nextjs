import Image from "next/image";
import PostCategoryBadge from "../ui/PostCategoryBadge";
import PostMetaData from "../ui/PostMetaData";
import Link from "next/link";

const BlogCard = ({ slug, image, categories, title, description, authorImg, authorName, readingTime, publishDate }) => {
  return (
    <Link href={`/${slug}`} className="w-full max-w-[372px] flex flex-col gap-2 p-1 rounded-2xl border border-[#E9E9E9] font-inter">
      <div className="w-full h-full rounded-t-2xl overflow-hidden">
        <Image className="w-full h-full" src={image} alt={title} />
      </div>

      <div className="p-3 pt-2 flex flex-col gap-3">
        <div className="flex justify-start items-center gap-2">
          {categories.map((category, index) => (
            <PostCategoryBadge key={index} category={category} />
          ))}
        </div>

        <div className="flex flex-col gap-2 text-primaryBlack">
          <h3 className="text-xl font-bold">{title}</h3>
          <p className="leading-[25px]">{description}</p>
        </div>

        <PostMetaData authorImg={authorImg} authorName={authorName} readingTime={readingTime} publishDate={publishDate} />
      </div>
    </Link>
  );
};

export default BlogCard;
