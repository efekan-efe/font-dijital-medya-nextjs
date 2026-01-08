"use client";

import { useLayoutEffect, useRef, useState } from "react";
import Image from "next/image";
import { CustomButton } from "@/components/ui/CustomButton";
import Badge from "@/components/ui/Badge";
import hero_mor_arkaplan from "@/assets/homepage/images/hero_mor_arkaplan.png";
import is_adami from "@/assets/homepage/images/is_adami.png";
import { Search, Phone, Rocket, StarIcon, Loader2, CheckCircle2 } from "lucide-react";

// Server Action
import { sendAnalysis } from "@/actions/sendAnalysis";

// GSAP Importları
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const HeroSection = () => {
  const container = useRef(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState(null); // 'success' | 'error' | null

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

      // SOL SÜTUN ANİMASYONLARI
      tl.from(".hero-badge", { y: -20, opacity: 0, duration: 0.6, ease: "power3.out" })
        .from(".hero-title", { y: 50, opacity: 0, duration: 0.8, ease: "power3.out" }, "-=0.4")
        .from(".hero-desc", { y: 30, opacity: 0, duration: 0.6, ease: "power2.out" }, "-=0.6")
        .from(".hero-btns", { y: 20, opacity: 0, duration: 0.6, ease: "back.out(1.7)" }, "-=0.4");

      // SAĞ SÜTUN ANİMASYONLARI (Form ve Resimler)
      // Önce arka plan resmi ve adam gelsin
      tl.from(".hero-bg-images", { x: 50, opacity: 0, duration: 1, ease: "power3.out" }, "-=0.8")
        // Sonra FORM "pop" diye belirsin (Dikkat çekici nokta)
        .from(
          ".hero-form",
          {
            scale: 0.8,
            y: 30,
            opacity: 0,
            duration: 0.7,
            ease: "elastic.out(1, 0.5)", // Yaylanma efekti
          },
          "-=0.6"
        );
    }, container);

    return () => ctx.revert();
  }, []);

  // Form Gönderim Fonksiyonu
  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setFormStatus(null);

    const formData = new FormData(event.target);
    const result = await sendAnalysis(formData);

    if (result.success) {
      setFormStatus("success");
      event.target.reset(); // Formu temizle
    } else {
      setFormStatus("error");
      alert(result.message);
    }
    setIsSubmitting(false);
  };

  return (
    <section ref={container} className="max-w-7xl mx-auto px-2 py-8 pt-32 font-inter max-md:pb-0 max-md:pt-24 h-full flex items-center">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 items-center w-full max-md:gap-6">
        {/* Sol Sütun */}
        <div className="flex flex-col gap-y-2 max-md:items-center">
          <div className="hero-badge">
            <Badge icon={Rocket}>500+ KOBİ Bizi Tercih Etti</Badge>
          </div>

          <h1 className="hero-title text-6xl max-w-xl leading-[120%] font-bold tracking-tighter text-primaryBlack max-lg:text-5xl max-md:text-center max-md:text-2xl">
            Web Siteniz <span className="text-primaryColor">Müşteri</span> Getirmiyor mu?
          </h1>

          <p className="hero-desc text-primaryBlack max-md:text-center">
            Adana'nın en çok tercih edilen dijital ajansı olarak, <strong>KOBİ'niz için ayda ortalama %127 daha fazla müşteri kazandırıyoruz.</strong>
          </p>

          <div className="hero-btns flex items-center gap-4 mt-4 max-sm:flex-col">
            <div className="relative">
              <CustomButton size="lg" variant="filledButton" iconLeft={Search}>
                Ücretsiz Analiz
              </CustomButton>
              <div className="w-fit whitespace-nowrap text-xs absolute -bottom-5 left-1/2 translate-x-[-50%] bg-white border border-primaryColor text-primaryColor font-semibold rounded-full py-1.5 px-2">2 dakika • Ücret yok</div>
            </div>
            <div className="relative">
              <CustomButton size="lg" variant="emptyButton" iconLeft={Phone}>
                Hemen Görüş
              </CustomButton>
              <div className="w-fit whitespace-nowrap text-xs absolute -bottom-5 left-1/2 translate-x-[-50%] bg-gradient-to-r from-primaryColor to-secondaryColor text-white border border-primaryColor font-semibold rounded-full py-1.5 px-2">
                7/24 Anında Cevap
              </div>
            </div>
          </div>
        </div>

        {/* Sağ Sütun */}
        <div className="relative min-h-[500px] flex items-center justify-center lg:justify-end">
          {/* Arka Plan Görselleri Grubu (GSAP için sınıf: hero-bg-images) */}
          <div className="hero-bg-images absolute inset-0 z-0 max-[550px]:hidden">
            <Image src={hero_mor_arkaplan} alt="Arkaplan Efekti" fill className="object-contain object-right" priority />
            <Image src={is_adami} alt="İş Adamı" width={463} height={370} className="max-w-[390px] w-full h-auto absolute bottom-5 left-0" priority />
          </div>

          {/* İletişim Formu (GSAP için sınıf: hero-form) */}
          {/* Form artık sunucu aksiyonuna bağlı */}
          <form onSubmit={handleSubmit} className="hero-form mb-20 flex flex-col relative z-10 bg-white p-6 rounded-2xl shadow-xl border border-gray-100 max-w-xs w-full max-[550px]:mr-0">
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
                  className="bg-primaryColor hover:bg-secondaryColor transition-colors mt-5 mb-3 py-2.5 rounded-lg text-white text-center w-full font-semibold text-sm flex justify-center items-center gap-2 disabled:opacity-70"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" /> Gönderiliyor...
                    </>
                  ) : (
                    "Analizimi Başlat"
                  )}
                </button>

                <div className="flex flex-col items-center gap-1 opacity-80">
                  <p className="text-green-600 text-[12px] font-medium flex items-center gap-1">✓ Kredi kartı gerekmez</p>
                  <p className="text-green-600 text-[12px] font-medium flex items-center gap-1">✓ 2 dakikada hazır</p>
                </div>
              </>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
