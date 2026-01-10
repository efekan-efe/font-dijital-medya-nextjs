"use client";

import { useLayoutEffect, useRef, useState } from "react";
import Image from "next/image";
import { CustomButton } from "@/components/ui/CustomButton";
import Badge from "@/components/ui/Badge";
import hero_image_pattern from "@/assets/homepage/images/hero_image_pattern.png";
import { Search, Phone, Rocket, StarIcon, Loader2, CheckCircle2, Zap, TrendingUp } from "lucide-react";

// Splide Importları
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
// İstersen farklı temalar da kullanabilirsin: import '@splidejs/react-splide/css/skyblue';

// Server Action
import { sendAnalysis } from "@/actions/sendAnalysis";

// GSAP Importları
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// SLIDER VERİSİ (İçerikleri buradan yönetebilirsin)
const heroSlides = [
  {
    id: 1,
    badgeText: "50+ KOBİ Bizi Tercih Etti",
    badgeIcon: Rocket,
    title: (
      <>
        Web Siteniz <span className="text-primaryColor">Müşteri</span> Getirmiyor mu?
      </>
    ),
    desc: (
      <>
        Adana'nın en çok tercih edilen dijital ajansı olarak, <strong>KOBİ'niz için ayda ortalama %127 daha fazla müşteri kazandırıyoruz.</strong>
      </>
    ),
    btn1: "Ücretsiz Analiz",
    btn2: "Hemen Görüş",
  },
  {
    id: 2,
    badgeText: "SEO Uyumlu Altyapı",
    badgeIcon: TrendingUp,
    title: (
      <>
        Google'da <span className="text-primaryColor">İlk Sırada</span> Yer Alın!
      </>
    ),
    desc: (
      <>
        Rakiplerinizin önüne geçmek ister misiniz? <strong>SEO uyumlu yazılım ve içerik stratejilerimizle</strong> organik trafiğinizi ikiye katlayın.
      </>
    ),
    btn1: "SEO Teklifi Al",
    btn2: "Referanslar",
  },
  {
    id: 3,
    badgeText: "Hızlı ve Güvenli",
    badgeIcon: Zap,
    title: (
      <>
        Yavaş Siteler <span className="text-primaryColor">Satış</span> Kaybettirir.
      </>
    ),
    desc: (
      <>
        Kullanıcıların %40'ı yavaş açılan siteleri terk ediyor. <strong>Modern Next.js altyapımızla</strong> ışık hızında web siteleri tasarlıyoruz.
      </>
    ),
    btn1: "Hız Testi Yap",
    btn2: "Detaylı Bilgi",
  },
];

const HeroSection = () => {
  const container = useRef(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState(null);

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

      // SOL SÜTUN (Slider) ANİMASYONLARI
      // Not: Slider içindeki elemanları seçmek için class'ları kullanıyoruz.
      // İlk render'da GSAP bu elemanları yakalayıp giriş animasyonu yapacak.
      tl.from(".hero-badge", { y: -20, opacity: 0, duration: 0.6, ease: "power3.out" })
        .from(".hero-title", { y: 50, opacity: 0, duration: 0.8, ease: "power3.out" }, "-=0.4")
        .from(".hero-desc", { y: 30, opacity: 0, duration: 0.6, ease: "power2.out" }, "-=0.6")
        .from(".hero-btns", { y: 20, opacity: 0, duration: 0.6, ease: "back.out(1.7)" }, "-=0.4");

      // SAĞ SÜTUN ANİMASYONLARI
      tl.from(".hero-bg-images", { x: 50, opacity: 0, duration: 1, ease: "power3.out" }, "-=0.8").from(
        ".hero-form",
        {
          scale: 0.8,
          y: 30,
          opacity: 0,
          duration: 0.7,
          ease: "elastic.out(1, 0.5)",
        },
        "-=0.6"
      );
    }, container);

    return () => ctx.revert();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setFormStatus(null);

    const formData = new FormData(event.target);
    const result = await sendAnalysis(formData);

    if (result.success) {
      setFormStatus("success");
      event.target.reset();
    } else {
      setFormStatus("error");
      alert(result.message);
    }
    setIsSubmitting(false);
  };

  // Splide Ayarları
  const splideOptions = {
    type: "loop",
    arrows: false, // Oklu geçişi kapattım, daha temiz görünmesi için
    pagination: true, // Alt kısımdaki noktalar açık
    autoplay: true,
    interval: 5000,
    pauseOnHover: true,
    direction: "ttb", // 'ttb' (top-to-bottom) dikey kaydırma veya 'ltr' yatay. Hero için genelde 'ltr' iyidir ama dikey istersen burayı aç.
    // Ben yatay (varsayılan) bırakıyorum, height: 'auto' ile.
    direction: "ltr",
    gap: "1rem",
  };

  return (
    <section ref={container} className="heroSection max-w-7xl mx-auto px-2 py-8 pt-32 font-inter max-md:pb-0 max-md:pt-24 h-full flex items-center max-sm:pt-20">
      <div className="grid h-full gap-12 grid-cols-5 items-center w-full max-xl:gap-5 max-lg:gap-8 max-md:px-5 max-lg:flex max-lg:flex-col max-sm:gap-3">
        {/* SOL SÜTUN - SPLIDE SLIDER */}
        <div className="col-span-2 w-full max-lg:col-span-full max-sm:order-1">
          <Splide options={splideOptions} className="w-full">
            {heroSlides.map((slide) => (
              <SplideSlide key={slide.id} className="pb-8 flex justify-center">
                <div className="flex flex-col gap-y-2 items-center justify-center max-md:items-center py-2 px-1 max-sm:gap-y-1 ">
                  {/* Badge */}
                  <div className="hero-badge">
                    <Badge icon={slide.badgeIcon}>{slide.badgeText}</Badge>
                  </div>

                  {/* Title */}
                  <h1 className="hero-title mt-2 text-5xl max-w-xl leading-[120%] font-bold tracking-tighter text-primaryBlack max-xl:text-5xl max-md:text-center max-md:text-3xl max-sm:text-2xl">{slide.title}</h1>

                  {/* Description */}
                  <p className="hero-desc mt-2 text-primaryBlack max-md:text-center max-sm:text-sm text-lg leading-relaxed">{slide.desc}</p>

                  {/* Buttons */}
                  <div className="hero-btns flex items-center mt-2 gap-4 max-sm:gap-2">
                    <div className="relative">
                      <CustomButton size="lg" variant="filledButton" iconLeft={Search} className="max-sm:text-sm max-sm:p-3">
                        {slide.btn1}
                      </CustomButton>
                      {/* Sadece ilk slaytta veya hepsinde bu etiketi göstermek isteyebilirsin */}
                      <div className="w-fit whitespace-nowrap text-xs absolute -bottom-4 left-1/2 translate-x-[-50%] bg-white border border-primaryColor text-primaryColor font-semibold rounded-full py-1 px-2 max-sm:hidden">2 dakika • Ücret yok</div>
                    </div>
                    <div className="relative">
                      <CustomButton size="lg" variant="emptyButton" iconLeft={Phone} className="max-sm:text-sm max-sm:p-3">
                        {slide.btn2}
                      </CustomButton>
                    </div>
                  </div>
                </div>
              </SplideSlide>
            ))}
          </Splide>
        </div>

        {/* SAĞ SÜTUN (Değişiklik yapılmadı, aynı kaldı) */}
        <div className="col-span-3 h-full max-h-[570px] relative flex items-center justify-center lg:justify-end max-xl:max-h-[500px] max-lg:col-span-full max-lg:w-full max-lg:max-w-[600px] max-sm:max-h-fit">
          <div className="max-sm:hidden w-full h-full ">
            <Image src={hero_image_pattern} alt="Arkaplan Efekti" fill className="hero-bg-images flex w-full h-full object-contain" />
          </div>
          <form onSubmit={handleSubmit} className="hero-form absolute top-0 right-0 flex flex-col z-10 bg-white p-6 rounded-2xl shadow-xl border border-gray-100 max-w-xs w-full max-sm:w-full max-sm:relative">
            {formStatus === "success" ? (
              <div className="flex flex-col items-center justify-center h-64 text-center gap-3 animate-in fade-in zoom-in">
                <CheckCircle2 className="w-16 h-16 text-green-500" />
                <h3 className="text-xl font-bold text-gray-800">Harika! 🎉</h3>
                <p className="text-sm text-gray-600">Analiz talebiniz alındı. En kısa sürede size dönüş yapacağız.</p>
              </div>
            ) : (
              <>
                <div className="flex justify-center items-center gap-2 mb-2">
                  <StarIcon className="fill-yellow-300 stroke-1 text-2xl text-yellow-400" />
                  <h3 className="text-2xl font-bold text-gray-800">Ücretsiz Analiz</h3>
                  <StarIcon className="fill-yellow-300 stroke-1 text-2xl text-yellow-400" />
                </div>
                <p className="text-sm text-gray-600 leading-5 text-center mb-4">
                  Web Sitenizi 2 Dakikada Analiz Edin! <br />
                  Müşteri kaybeden noktaları keşfedin.
                </p>
                <div className="flex flex-col gap-3">
                  <div className="flex flex-col gap-1">
                    <label className="text-gray-700 text-sm font-medium" htmlFor="websitesi">
                      Web sitenizin adresi
                    </label>
                    <input
                      required
                      type="text"
                      className="px-3 py-2 text-gray-900 rounded-lg border border-gray-200 focus:border-primaryColor focus:ring-2 focus:ring-primaryColor/20 outline-none transition-all"
                      placeholder="www.isletmeniz.com"
                      name="websitesi"
                      id="websitesi"
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <label className="text-gray-700 text-sm font-medium" htmlFor="eposta_adresi">
                      E-posta adresiniz
                    </label>
                    <input
                      required
                      type="email"
                      className="px-3 py-2 text-gray-900 rounded-lg border border-gray-200 focus:border-primaryColor focus:ring-2 focus:ring-primaryColor/20 outline-none transition-all"
                      placeholder="isim@firma.com"
                      name="eposta_adresi"
                      id="eposta_adresi"
                    />
                  </div>
                </div>

                <button
                  disabled={isSubmitting}
                  type="submit"
                  className="bg-primaryColor hover:bg-secondaryColor transition-colors mt-5 py-2.5 rounded-lg text-white text-center w-full font-semibold text-sm flex justify-center items-center gap-2 disabled:opacity-70"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" /> Gönderiliyor...
                    </>
                  ) : (
                    "Analizimi Başlat"
                  )}
                </button>
              </>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
