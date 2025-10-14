"use client";

import { Splide, SplideSlide } from "@splidejs/react-splide";
import ReviewCard from "@/components/ui/ReviewCard";
import TitleBadge from "@/components/ui/TitleBadge";
import { dummyReviews } from "../../../../data/dummy-reviews";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "@splidejs/react-splide/css";

const GoogleReviews = () => {
  return (
    <div className="flex flex-col gap-8 px-2 font-inter relative mb-20">
      <div className="w-full flex flex-col justify-center items-center gap-1">
        <TitleBadge>
          <p className="text-primaryBlack w-full font-medium">
            <span className="text-primaryColor px-1">Dijital Dünya</span>
            Trendlerini Kaçırmayın
          </p>
        </TitleBadge>
        <h1 className="text-4xl font-bold text-primaryBlack">
          <span className="text-primaryColor">Dijital Pazarlama</span> Rehberleri
        </h1>
      </div>

      <Splide
        options={{
          width: 1280,
          perPage: 3,
          gap: "1rem",
          perMove: 1,
          breakpoints: {
            1280: { perPage: 2, gap: "1rem", width: 800 },
            850: { perPage: 1, width: 400 },
          },
        }}
        aria-label="My Favorite Images"
      >
        {dummyReviews.map((review, index) => (
          <SplideSlide key={review.id}>
            <ReviewCard key={index} name={review.author.name} image={review.author.avatar} rating={review.rating} date={review.date} comment={review.comment} />
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
};

export default GoogleReviews;
