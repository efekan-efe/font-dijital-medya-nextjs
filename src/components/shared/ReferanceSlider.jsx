"use client";

import SparkleIcon from "../icons/SparkleIcon";
import { Button } from "../ui/Button";
import TitleBadge from "../ui/TitleBadge";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import "@splidejs/react-splide/css";
import bildem from "@/assets/aboutUs/images/referans_slider_bildem.png";
import Image from "next/image";

const ReferanceSlider = () => {
  return (
    <div
      style={{
        background: "linear-gradient(108deg, #000, #2E2483)",
      }}
      className="w-full text-white font-inter flex flex-col items-center gap-8 pt-8"
    >
      <div className="flex flex-col items-center gap-4">
        <div className="w-full flex flex-col justify-center items-center gap-2">
          <TitleBadge>
            <p className="text-primaryBlack w-full font-medium">
              <span className="text-primaryColor px-1">Dijital Dünya</span>
              Trendlerini Kaçırmayın
            </p>
          </TitleBadge>
          <h1 className="w-full text-4xl font-bold text-white text-center max-w-xl">
            <span className="text-primaryColor mx-1">100% Müşteri Memnuiyeti</span> Sağlayan <span className="text-primaryColor mx-1">İlkelerimiz</span>
          </h1>
        </div>

        <Button className={"text-lg border border-white/50"} leftComponent={<SparkleIcon className="fill-white" />} rightComponent={<SparkleIcon className="fill-white" />} variant="filledButton" sizes="lg">
          Tümünü İncele
        </Button>
      </div>

      <Splide
        extensions={{ AutoScroll }}
        options={{
          type: "loop",
          rewind: true,
          drag: "free",
          focus: "center",
          gap: "1rem",
          pagination: false,
          arrows: false,
          autoScroll: {
            speed: 1,
            pauseOnHover: true,
          },
        }}
        aria-label="Referance"
        className="w-full"
      >
        <SplideSlide className="!w-fit max-w-[570px] mx-auto">
          <Image src={bildem} alt="Referans Görseli" />
        </SplideSlide>
        <SplideSlide className="!w-fit max-w-[570px] mx-auto">
          <Image src={bildem} alt="Referans Görseli" />
        </SplideSlide>
        <SplideSlide className="!w-fit max-w-[570px] mx-auto">
          <Image src={bildem} alt="Referans Görseli" />
        </SplideSlide>
        <SplideSlide className="!w-fit max-w-[570px] mx-auto">
          <Image src={bildem} alt="Referans Görseli" />
        </SplideSlide>
        <SplideSlide className="!w-fit max-w-[570px] mx-auto">
          <Image src={bildem} alt="Referans Görseli" />
        </SplideSlide>
        <SplideSlide className="!w-fit max-w-[570px] mx-auto">
          <Image src={bildem} alt="Referans Görseli" />
        </SplideSlide>
        <SplideSlide className="!w-fit max-w-[570px] mx-auto">
          <Image src={bildem} alt="Referans Görseli" />
        </SplideSlide>
        <SplideSlide className="!w-fit max-w-[570px] mx-auto">
          <Image src={bildem} alt="Referans Görseli" />
        </SplideSlide>
        <SplideSlide className="!w-fit max-w-[570px] mx-auto">
          <Image src={bildem} alt="Referans Görseli" />
        </SplideSlide>
      </Splide>
    </div>
  );
};

export default ReferanceSlider;
