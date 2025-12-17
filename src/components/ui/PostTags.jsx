import Link from "next/link";

const PostTags = ({ tags }) => {
  // Eğer etiket gelmediyse veya boşsa bu bloğu hiç gösterme
  if (!tags || tags.length === 0) return null;

  return (
    <div className="w-full flex flex-col gap-6 font-inter">
      <div className="flex justify-start items-center gap-3">
        <h2 className="text-2xl font-medium text-primaryColor leading-8 whitespace-nowrap">Etiketler</h2>
        <div className="w-full h-px bg-primaryColor"></div>
      </div>

      <div className="p-6 bg-[#DBD4F5]/25 rounded-xl border-1 border-primaryColor gap-2">
        <div className="flex flex-wrap gap-2.5">
          {tags.map((tag) => (
            <Link
              key={tag.id}
              // Etiket linki henüz yapılmadıysa geçici olarak /blog'a atar
              href={`/blog`}
              className="px-3 py-1 border border-primaryColor/50 rounded-sm text-primaryColor text-sm font-medium leading-5 hover:bg-primaryColor hover:text-white transition-colors"
            >
              #{tag.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PostTags;
