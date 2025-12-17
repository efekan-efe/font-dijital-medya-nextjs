import { ChevronRight } from "lucide-react";
import Link from "next/link";

const BlogBreadcrumb = ({ blogTitle }) => {
  return (
    <div className="w-full bg-[#DBD4F5]/25 py-5">
      <div className="max-w-7xl mx-auto px-3 flex justify-start items-center gap-2.5 flex-wrap">
        <Link className="font-medium text-primaryColor hover:underline" href="/">
          Ana Sayfa
        </Link>
        <ChevronRight className="stroke-primaryColor w-4 h-4" />
        <Link className="font-medium text-primaryColor hover:underline" href="/blog">
          Dijital Rehber
        </Link>
        <ChevronRight className="stroke-primaryColor w-4 h-4 min-w-[16px]" />

        {/* Başlık çok uzunsa mobilde taşmasın diye truncate eklendi */}
        <p className="font-medium text-primaryBlack line-clamp-1" dangerouslySetInnerHTML={{ __html: blogTitle }} />
      </div>
    </div>
  );
};

export default BlogBreadcrumb;
