"use client";

import Image from "next/image";
import PostCategoryBadge from "../ui/PostCategoryBadge";
import PostMetaData from "../ui/PostMetaData";
import Link from "next/link";

const BlogCard = ({ slug, image, categories, title, description, authorImg, authorName, readingTime, publishDate }) => {
  return (
    <Link href={`/${slug}`} className="w-full max-w-[372px] h-full flex flex-col justify-around gap-2 p-1 rounded-2xl border border-[#E9E9E9] font-inter hover:shadow-lg transition-shadow duration-300 bg-white">
      <div className="w-full rounded-t-2xl overflow-hidden relative h-[242px]">
        <Image width={362} height={242} className="w-full h-full object-contain hover:scale-105 transition-transform duration-500" src={image || "/placeholder-image.jpg"} alt={title} />
      </div>

      <div className="p-3 pt-2 flex flex-col gap-3">
        <div className="flex justify-start items-center gap-2">
          <PostCategoryBadge category={categories} />
        </div>

        <div className="flex flex-col gap-2 text-primaryBlack">
          <h3 className="text-lg font-bold">{title}</h3>
          <p className="leading-[25px] line-clamp-3">{description}</p>
        </div>
      </div>
      <div className="p-3 pt-2 mt-auto">
        <PostMetaData authorImg={authorImg} authorName={authorName} readingTime={readingTime} publishDate={publishDate} />
      </div>
    </Link>
  );
};

export default BlogCard;
