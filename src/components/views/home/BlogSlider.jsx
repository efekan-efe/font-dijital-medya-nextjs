"use client";

import { useRef, useLayoutEffect } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import BlogCard from "@/components/shared/BlogCard";
import TitleBadge from "@/components/ui/TitleBadge"; // TitleBadge'i buraya taşıdık

// GSAP
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function BlogSlider({ posts, data }) {
  const blog_kucuk_baslik = data?.blog_kucuk_baslik;
  const blog_buyuk_baslik = data?.blog_buyuk_baslik;

  const container = useRef(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container.current,
          start: "top 60%",
          toggleActions: "play none none reverse",
        },
      });

      // 1. Rozet (TitleBadge)
      tl.from(".blog-badge", {
        y: -20,
        opacity: 0,
        duration: 0.6,
        ease: "power2.out",
      })
        // 2. Ana Başlık
        .from(
          ".blog-title",
          {
            y: 30,
            opacity: 0,
            duration: 0.6,
            ease: "power2.out",
          },
          "-=0.4",
        )
        // 3. Desktop Kartları (Stagger - Sırayla)
        .from(
          ".blog-card-desktop",
          {
            y: 50,
            opacity: 0,
            duration: 0.6,
            stagger: 0.2, // Kartlar arası 0.2sn gecikme
            ease: "back.out(1.7)",
          },
          "-=0.2",
        )
        // 4. Mobil Slider (Bütün olarak)
        .from(
          ".blog-slider-mobile",
          {
            scale: 0.9,
            opacity: 0,
            duration: 0.8,
            ease: "power2.out",
          },
          "<",
        ); // Desktop ile aynı anda başlasın (zaten biri gizli)
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    // Section etiketi ve Ref buraya taşındı
    <section ref={container} className="max-w-7xl mx-auto flex flex-col gap-8 px-2 font-inter w-full h-full justify-center">
      {/* Başlık Alanı (Buraya taşındı) */}
      <div className="w-full flex flex-col justify-center items-center gap-1 shrink-0">
        <div className="blog-badge">
          <TitleBadge>
            <p className="text-primaryBlack w-full font-medium" dangerouslySetInnerHTML={{ __html: blog_kucuk_baslik }}></p>
          </TitleBadge>
        </div>

        <h2 className="blog-title text-3xl md:text-4xl font-bold text-primaryBlack text-center" dangerouslySetInnerHTML={{ __html: blog_buyuk_baslik }}></h2>
      </div>

      {/* İçerik Alanı */}
      <div className="w-full">
        {/* --- MOBİL SLIDER --- */}
        <div className="blog-slider-mobile block lg:hidden w-full">
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

        {/* --- DESKTOP GRID --- */}
        <div className="hidden lg:flex flex-wrap justify-center items-stretch gap-6">
          {posts.map((post) => (
            <div key={post.id} className="blog-card-desktop">
              <BlogCard {...post} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
