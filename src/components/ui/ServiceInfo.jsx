// src/components/ui/ServiceInfo.jsx
"use client"; // Client component olduğundan emin olalım

import Image from "next/image";
import TitleBadge from "./TitleBadge";
import serviceTick from "@/assets/icons/service_tick.svg";
import { CustomButton } from "./CustomButton";
import SparkleIcon from "../icons/SparkleIcon";

// Varsayılan görseli import et (Yolu projene göre kontrol et!)
import defaultHizmetGorsel from "@/assets/images/hizmet_detay_yan_gorsel.webp";

const ServiceInfo = ({ title, description, image, listItems }) => {
  // Eğer 'image' geçerli bir string ise onu kullan, değilse 'defaultHizmetGorsel'i kullan.
  // defaultHizmetGorsel de yoksa (import hatası vb.) boş bir string yerine null ver ki Image hiç render edilmesin.
  const finalSrc = image && typeof image === "string" && image.trim() !== "" ? image : defaultHizmetGorsel;

  return (
    <div className="w-full flex justify-center items-center px-2 gap-2 max-w-7xl mx-auto max-md:flex-col">
      <div className="w-full max-md:max-w-sm max-md:mr-auto relative min-h-[300px] h-full">
        {/* Next.js Image bileşeni src null ise hata verir, o yüzden koşullu render yapıyoruz */}
        {finalSrc ? (
          <Image
            src={finalSrc}
            alt={title || "Hizmet Görseli"}
            width={546}
            height={400}
            className="object-cover rounded-xl w-full h-auto"
            priority // Sayfa açılışında hızlı yüklenmesi için
          />
        ) : (
          // Eğer ne API'den resim geldi ne de varsayılan resim varsa, gri bir kutu göster
          <div className="w-full h-[300px] bg-gray-200 rounded-xl flex items-center justify-center text-gray-500">Görsel Yok</div>
        )}
      </div>

      {/* Sağ taraftaki içerik kısmı aynı kalıyor... */}
      <div className="w-full flex flex-col gap-4">
        <div className="w-full flex flex-col justify-center items-start gap-1">
          <TitleBadge>
            <p className="text-primaryBlack w-full font-medium">
              <span className="text-primaryColor px-1">Neden</span>
              Bizi Tercih Etmelisiniz
            </p>
          </TitleBadge>

          <h1 className="w-full text-4xl font-bold text-primaryBlack max-md:text-3xl">{title ? <span dangerouslySetInnerHTML={{ __html: title }} /> : "Hizmet Detayları"}</h1>
        </div>

        <p className="text-[#12141D]/70 whitespace-pre-line">{description || "Hizmet açıklaması hazırlanıyor..."}</p>

        <ul className="list-none grid grid-cols-2 gap-2 max-sm:grid-cols-1">
          {listItems && listItems.length > 0
            ? listItems.map((item, index) => (
                <li key={index} className="flex justify-start items-center gap-1">
                  <Image src={serviceTick} alt="Tick" width={20} height={20} />
                  <p className="text-primaryBlack text-sm font-medium">{item}</p>
                </li>
              ))
            : null}
        </ul>

        <CustomButton className={"text-base border border-white/50 max-md:text-sm w-fit"} leftComponent={<SparkleIcon className="fill-white" />} rightComponent={<SparkleIcon className="fill-white" />} variant="filledButton" sizes="lg">
          Bizimle Yükselenler
        </CustomButton>
      </div>
    </div>
  );
};

export default ServiceInfo;
