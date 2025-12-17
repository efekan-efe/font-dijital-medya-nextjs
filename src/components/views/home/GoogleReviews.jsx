"use client";

import { Splide, SplideSlide } from "@splidejs/react-splide";
import ReviewCard from "@/components/ui/ReviewCard";
import TitleBadge from "@/components/ui/TitleBadge";
import { dummyReviews } from "../../../../data/dummy-reviews";
import { CustomButton } from "@/components/ui/CustomButton";
import SparkleIcon from "@/components/icons/SparkleIcon";
import Link from "next/link";
import "@splidejs/react-splide/css";

const GoogleReviews = () => {
  return (
    <div className="flex flex-col gap-8 px-2 pb-5 font-inter relative max-sm:items-center">
      <div className="w-full flex flex-col justify-center items-center gap-1">
        <TitleBadge>
          <p className="text-primaryBlack w-full font-medium">
            <span className="text-primaryColor px-1">Dijital Dünya</span>
            Trendlerini Kaçırmayın
          </p>
        </TitleBadge>
        <h1 className="text-4xl font-bold text-primaryBlack max-md:text-center">
          <span className="text-primaryColor">Dijital Pazarlama</span> Rehberleri
        </h1>
      </div>

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

      <Link href="https://www.google.com/search?sa=X&sca_esv=552fb68e3d08662a&tbm=lcl&sxsrf=AE3TifPo8VdCvRpR_oGV91lrQDssXi84Lw:1760513944946&q=Font+Dijital+Medya+Reviews&rflfq=1&num=20&stick=H4sIAAAAAAAAAONgkxIxNDCzMDEzNjKyNDWyMDI3MzY2MdrAyPiKUcotP69EwSUzK7MkMUfBNzWlMlEhKLUsM7W8eBErHkkAG4qsyFUAAAA&rldimm=10684632295282763342&hl=en-TR&ved=2ahUKEwiU8L3C2aWQAxXVRPEDHcKtHysQ9fQKegQIWRAF&cshid=1760513956874236&biw=1920&bih=945&dpr=1#lkt=LocalPoiReviews">
        <CustomButton className="mt-8 mx-auto" variant="filledButton" rightComponent={<SparkleIcon className="fill-white" />} leftComponent={<SparkleIcon className="fill-white" />}>
          Bizimle Yükselenler
        </CustomButton>
      </Link>
    </div>
  );
};

export default GoogleReviews;
