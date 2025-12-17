import Image from "next/image";
import fontAuthorLogo from "@/assets/images/font_mini_logo.png";

const PostMetaData = ({ authorName, publishDate, readingTime }) => {
  return (
    <div className="flex justify-start items-center gap-2 font-inter">
      <div className="flex justify-center items-center">
        <Image className="w-10 h-10" src={fontAuthorLogo} alt="yazar" />
      </div>

      <div className="flex flex-col text-left">
        <p className="font-medium text-primaryBlack">{authorName}</p>
        <div className="flex justify-start items-center gap-1">
          <p className="text-sm text-[#697586]">{publishDate.slice(0, 10)}</p>
          <div className="w-1 h-1 bg-[#697586] rounded-full"></div>
          <p className="text-sm text-[#697586]">{readingTime} dk</p>
        </div>
      </div>
    </div>
  );
};

export default PostMetaData;
