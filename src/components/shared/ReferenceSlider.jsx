"use client";

import Image from "next/image";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import "@splidejs/react-splide/css";
import { CustomButton } from "../ui/CustomButton";
import TitleBadge from "../ui/TitleBadge";
import SparkleIcon from "../icons/SparkleIcon";
import bildem from "@/assets/aboutUs/images/referans_slider_bildem.png";
import dentilion from "@/assets/aboutUs/images/slider_dentilion.webp";
import gano from "@/assets/aboutUs/images/slider_gano.webp";
import greengap from "@/assets/aboutUs/images/slider_greengap.webp";
import istasyapi from "@/assets/aboutUs/images/slider_istasyapi.webp";
import itavista from "@/assets/aboutUs/images/slider_itavista.webp";
import mertmode from "@/assets/aboutUs/images/slider_mertmode.webp";
import psikologasena from "@/assets/aboutUs/images/slider_psikologasena.webp";
import ziel from "@/assets/aboutUs/images/slider_ziel.webp";
import Link from "next/link";

const ReferenceSlider = () => {
  const sliderData = [
    {
      link: "https://bilisimdestekmerkezi.com/",
      image: bildem,
      alt: "Bildem Referans Görseli",
    },
    {
      link: "https://canakkaledis.net/",
      image: dentilion,
      alt: "Dentilion Referans Görseli",
    },
    {
      link: "https://ganoucretsizkayit.com/",
      image: gano,
      alt: "Gano Excel Referans Görseli",
    },
    {
      link: "https://greengap.com.tr/",
      image: greengap,
      alt: "Greengap Referans Görseli",
    },
    {
      link: "https://istasyapimarket.com/",
      image: istasyapi,
      alt: "İştaş Yapı Referans Görseli",
    },
    {
      link: "https://itavista.com/",
      image: itavista,
      alt: "İtavista Referans Görseli",
    },
    {
      link: "https://mertmodemedikalgiyim.com/",
      image: mertmode,
      alt: "MertModeMedikal Referans Görseli",
    },
    {
      link: "https://psikologasenakusmus.com/",
      image: psikologasena,
      alt: "Psikolog Asena Küsmüş Referans Görseli",
    },
    {
      link: "https://zielpmglobal.com/",
      image: ziel,
      alt: "Ziel PM Referans Görseli",
    },
  ];

  return (
    <div
      style={{
        background: "linear-gradient(108deg, #000, #2E2483)",
      }}
      className="w-full text-white font-inter flex flex-col items-center gap-8 pt-8"
    >
      <div className="flex flex-col items-center gap-4">
        <div className="w-full flex flex-col justify-center items-center gap-1">
          <TitleBadge>
            <p className="text-primaryBlack w-full font-medium max-sm:text-sm">
              <span className="text-primaryColor px-1">Neden</span>
              Bizi Tercih Etmelisiniz
            </p>
          </TitleBadge>
          <h1 className="w-full text-4xl font-bold text-white text-center max-md:text-3xl max-sm:text-2xl">Dijitalde Müşteri Kazanmaya Bugün Başlayın</h1>
        </div>

        <CustomButton className={"text-lg border border-white/50 max-md:text-sm"} leftComponent={<SparkleIcon className="fill-white" />} rightComponent={<SparkleIcon className="fill-white" />} variant="filledButton" sizes="lg">
          Tümünü İncele
        </CustomButton>
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
        aria-label="Reference"
        className="w-full"
      >
        {sliderData.map((slider, index) => (
          <SplideSlide key={index} className="!w-fit max-w-[570px] mx-auto">
            <Link href={slider.link}>
              <Image src={slider.image} alt={slider.alt} />
            </Link>
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
};

export default ReferenceSlider;
