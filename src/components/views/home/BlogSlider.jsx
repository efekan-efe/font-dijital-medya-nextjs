"use client"; // Client component olduğu için şart

import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import BlogCard from "@/components/shared/BlogCard";

export default function BlogSlider({ posts }) {
  return (
    <>
      {/* --- MOBİL VE TABLET GÖRÜNÜMÜ (SLIDER) --- */}
      <div className="block lg:hidden w-full">
        <Splide
          options={{
            perPage: 1,
            gap: "1rem",
            arrows: false,
            pagination: true,
            padding: "1rem",
          }}
        >
          {posts.map((post) => (
            <SplideSlide key={post.id} className="flex justify-center pb-10">
              <BlogCard {...post} />
            </SplideSlide>
          ))}
        </Splide>
      </div>

      {/* --- DESKTOP GÖRÜNÜMÜ (GRID / YAN YANA) --- */}
      <div className="hidden lg:flex flex-wrap justify-center items-stretch gap-6">
        {posts.map((post) => (
          <BlogCard key={post.id} {...post} />
        ))}
      </div>
    </>
  );
}
