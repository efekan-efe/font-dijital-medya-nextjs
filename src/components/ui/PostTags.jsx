import Link from "next/link";

const PostTags = () => {
  const tags = [
    {
      text: "Dijital",
      link: "/blog",
    },
    {
      text: "Pazarlama",
      link: "/blog",
    },
    {
      text: "Websitesi",
      link: "/blog",
    },
    {
      text: "SSL",
      link: "/blog",
    },
    {
      text: "Hosting",
      link: "/blog",
    },
    {
      text: "Adana",
      link: "/blog",
    },
    {
      text: "Reklam",
      link: "/blog",
    },
  ];

  return (
    <div className="w-full flex flex-col gap-6 font-inter">
      <div className="flex justify-start items-center gap-3">
        <h2 className="text-2xl font-medium text-primaryColor leading-8 whitespace-nowrap">Etiketler</h2>
        <div className="w-full h-px bg-primaryColor"></div>
      </div>

      <div className="p-6 bg-[#DBD4F5]/25 rounded-xl border-1 border-primaryColor gap-2">
        <div className="flex flex-wrap gap-2.5">
          {tags.map((tag, index) => (
            <Link key={index} href={tag.link} className="px-3 py-1 border border-primaryColor/50 rounded-sm text-primaryColor text-sm font-medium leading-5">
              #{tag.text}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PostTags;
