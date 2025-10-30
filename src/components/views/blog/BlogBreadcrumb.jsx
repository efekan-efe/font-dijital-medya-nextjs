import { ChevronRight } from "lucide-react";
import Link from "next/link";

const BlogBreadcrumb = ({ blogTitle }) => {
  return (
    <div className="w-full bg-[#DBD4F5]/25 py-5">
      <div className="max-w-7xl mx-auto px-3 flex justify-start items-center gap-2.5">
        <Link className="font-medium text-primaryColor" href="/">
          Ana Sayfa
        </Link>
        <ChevronRight className="stroke-primaryColor" />
        <Link className="font-medium text-primaryColor" href="/blog">
          Dijital Rehber
        </Link>
        <ChevronRight className="stroke-primaryColor" />
        <p className="font-medium text-primaryBlack">{blogTitle}</p>
      </div>
    </div>
  );
};

export default BlogBreadcrumb;
