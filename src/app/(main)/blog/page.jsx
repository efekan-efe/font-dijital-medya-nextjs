"use client";

import React, { useState } from "react";
import Breadcrumb from "@/components/shared/Breadcrumb";
import { dummyPosts } from "../../../../data/dummy-posts";
import BlogCard from "@/components/shared/BlogCard";
import RocketIcon from "@/components/icons/RocketIcon";
import WebIcon from "@/components/icons/WebIcon";
import NewIdeaIcon from "@/components/icons/NewIdeaIcon";
import { PanelsTopLeft, Sparkle, SearchCheck, ChevronDown } from "lucide-react";

export default function Blog() {
  const badgeContent = (
    <p className="text-primaryBlack w-full font-medium">
      <span className="text-primaryColor px-1">Dijital Dünya’daki</span>
      Dostunuz
    </p>
  );
  const titleContent = (
    <>
      Başarı için <br />
      <span className="text-primaryColor px-1">Dijital Pazarlama</span> İpuçları
    </>
  );

  const categories = [
    {
      title: "Tümü",
      icon: "",
    },
    {
      title: "Dijital Pazarlama",
      icon: <RocketIcon className="fill-none stroke-primaryColor w-[18px] h-[18px]" />,
    },
    {
      title: "Web Tasarım",
      icon: <WebIcon className="fill-none stroke-primaryColor w-[18px] h-[18px]" />,
    },
    {
      title: "Kurumsal Kimlik",
      icon: <NewIdeaIcon className="fill-none stroke-primaryColor w-[18px] h-[18px]" />,
    },
    {
      title: "SEO Optimizasyonu",
      icon: <SearchCheck className="fill-none stroke-primaryColor w-[18px] h-[18px]" />,
    },
  ];

  const [selectedCategory, setSelectedCategory] = useState("Tümü");
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const postsByCategory = selectedCategory === "Tümü" ? dummyPosts : dummyPosts.filter((post) => post.categories.includes(selectedCategory));
  const filteredPosts = postsByCategory.filter((post) => post.title.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <div className="font-inter">
      <Breadcrumb badgeContent={badgeContent} titleContent={titleContent} search={true} searchTerm={searchTerm} onSearchChange={handleSearchChange} />

      <div className="max-w-7xl mx-auto py-5">
        <div className="max-w-7xl p-5 w-full flex justify-between items-center max-sm:flex-col max-sm:gap-5">
          <div className="w-full flex justify-start items-center flex-wrap gap-2">
            {categories.map((category, index) => (
              <button
                className={`flex justify-start items-center gap-1 rounded-full w-fit border border-primaryColor py-2 px-4 cursor-pointer transition-colors duration-200 max-sm:w-full max-sm:text-sm ${
                  selectedCategory === category.title ? "bg-primaryColor" : "bg-transparent"
                }`}
                key={index}
                onClick={() => setSelectedCategory(category.title)}
              >
                {category.icon
                  ? React.cloneElement(category.icon, {
                      className: `fill-none w-[18px] h-[18px] ${selectedCategory === category.title ? "stroke-white" : "stroke-primaryColor"}`,
                    })
                  : null}
                <p className={`${selectedCategory === category.title ? "text-white" : "text-primaryColor"}`}>{category.title}</p>
              </button>
            ))}
          </div>
          <div className="w-fit">
            <button className="text-primaryBlack whitespace-nowrap border border-primaryColor rounded-full py-2 px-4 flex justify-between items-center gap-5">
              En Yeni
              <ChevronDown className="stroke-primaryColor stroke-[1.5]" />
            </button>
          </div>
        </div>

        <div className="flex flex-wrap justify-center items-start gap-6 px-1">
          {filteredPosts.map((post, index) => (
            <BlogCard
              key={index}
              slug={post.slug}
              image={post.image}
              categories={post.categories}
              title={post.title}
              description={post.description}
              authorName={post.author.name}
              authorImg={post.author.avatar}
              readingTime={post.readingTime}
              publishDate={post.date}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
