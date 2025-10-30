import blog_1 from "@/assets/homepage/images/blogCard_1.png";
import blog_2 from "@/assets/homepage/images/blogCard_2.png";
import Image from "next/image";

const SimilarPosts = () => {
  const postData = [
    {
      image: blog_1,
      category: "Dijital Pazarlama",
      title: "Digital Nomad: Living and Working Anywhere, Anytime",
    },
    {
      image: blog_2,
      category: "Web Tasarım",
      title: "Creative Writers: Crafting Stories, One Word at a Time",
    },
  ];

  return (
    <div className="w-full flex flex-col gap-6 font-inter">
      <div className="flex justify-start items-center gap-3">
        <h2 className="text-2xl font-medium text-primaryColor leading-8 whitespace-nowrap">Benzer Yazılar</h2>
        <div className="w-full h-px bg-primaryColor"></div>
      </div>

      <div className="flex flex-col gap-4">
        {postData.map((blog, index) => (
          <div key={index} className="grid grid-cols-[100px_1fr] gap-4 border-b border-primaryColor/50 pb-4">
            <Image className="w-full h-full object-cover rounded-2xl" src={blog.image} alt={blog.title} />
            <div className="flex flex-col gap-1 text-primaryBlack">
              <span className="w-fit text-xs font-medium py-1 px-2 text-center border border-primaryColor/50 rounded-full">{blog.category}</span>
              <h4 className="font-medium leading-6 text-left">{blog.title}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SimilarPosts;
