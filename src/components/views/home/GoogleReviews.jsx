"use client";

import { useRef, useLayoutEffect } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import ReviewCard from "@/components/ui/ReviewCard";
import TitleBadge from "@/components/ui/TitleBadge";
import { dummyReviews } from "../../../../data/dummy-reviews";
import { CustomButton } from "@/components/ui/CustomButton";
import SparkleIcon from "@/components/icons/SparkleIcon";
import Link from "next/link";
import "@splidejs/react-splide/css";

// GSAP Importları
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const GoogleReviews = ({ data }) => {
  const google_yorumlari_kucuk_baslik = data?.google_yorumlari_kucuk_baslik;
  const google_yorumlari_buyuk_baslik = data?.google_yorumlari_buyuk_baslik;

  const container = useRef(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container.current,
          start: "top 60%", // Ekranın %60'ına gelince başla
          toggleActions: "play none none reverse",
        },
      });

      // 1. Başlık Alanı (Yukarıdan iner)
      tl.from(".reviews-header", {
        y: -30,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      })
        // 2. Slider (Sağdan kayarak gelir)
        .from(
          ".reviews-slider",
          {
            x: 50,
            opacity: 0,
            duration: 1, // Biraz daha ağır/oturaklı gelsin
            ease: "power3.out",
          },
          "-=0.4",
        )
        // 3. Buton (Alttan zıplayarak belirir)
        .from(
          ".reviews-btn",
          {
            y: 20,
            opacity: 0,
            duration: 0.6,
            ease: "back.out(1.7)",
          },
          "-=0.6",
        );
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={container} className="flex flex-col gap-8 px-2 pb-5 font-inter relative max-sm:items-center justify-center h-full">
      {/* Başlık Alanı */}
      <div className="reviews-header w-full flex flex-col justify-center items-center gap-1">
        <TitleBadge>
          <p className="text-primaryBlack w-full font-medium" dangerouslySetInnerHTML={{ __html: google_yorumlari_kucuk_baslik }}></p>
        </TitleBadge>
        <h2 className="text-4xl font-bold text-primaryBlack max-md:text-center" dangerouslySetInnerHTML={{ __html: google_yorumlari_buyuk_baslik }}></h2>
      </div>

      {/* Slider Alanı - Animasyon için sarmalayıcı div ekledik */}
      <div className="reviews-slider w-full flex justify-center">
        <Splide
          options={{
            width: 1280,
            perPage: 3,
            pagination: false,
            gap: "1rem",
            perMove: 1,
            breakpoints: {
              1280: { perPage: 2, gap: "1rem", width: 800 },
              850: { perPage: 1, width: 400 },
              400: { width: "90vw" },
            },
          }}
          aria-label="Google Reviews"
        >
          {dummyReviews.map((review, index) => (
            <SplideSlide key={review.id}>
              <ReviewCard key={index} name={review.author.name} image={review.author.avatar} rating={review.rating} date={review.date} comment={review.comment} />
            </SplideSlide>
          ))}
        </Splide>
      </div>

      {/* Buton Alanı */}
      <div className="reviews-btn mx-auto">
        <Link href="https://www.google.com/search?sa=X&sca_esv=552fb68e3d08662a&tbm=lcl&sxsrf=AE3TifPo8VdCvRpR_oGV91lrQDssXi84Lw:1760513944946&q=Font+Dijital+Medya+Reviews&rflfq=1&num=20&stick=H4sIAAAAAAAAAONgkxIxNDCzMDEzNjKyNDWyMDI3MzY2MdrAyPiKUcotP69EwSUzK7MkMUfBNzWlMlEhKLUsM7W8eBErHkkAG4qsyFUAAAA&rldimm=10684632295282763342&hl=en-TR&ved=2ahUKEwiU8L3C2aWQAxXVRPEDHcKtHysQ9fQKegQIWRAF&cshid=1760513956874236&biw=1920&bih=945&dpr=1#lkt=LocalPoiReviews">
          <CustomButton className="mt-8" variant="filledButton" rightComponent={<SparkleIcon className="fill-white" />} leftComponent={<SparkleIcon className="fill-white" />}>
            Bizimle Yükselenler
          </CustomButton>
        </Link>
      </div>
    </section>
  );
};

export default GoogleReviews;
