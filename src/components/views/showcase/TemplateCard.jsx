// components/showcase/TemplateCard.jsx
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, ExternalLink } from "lucide-react";
import { CustomButton } from "@/components/ui/CustomButton"; // Senin mevcut butonun

const TemplateCard = ({ image, title, description, features, link, price }) => {
  return (
    <div className="group flex flex-col gap-4 border border-primaryColor/20 hover:border-primaryColor/80 transition-all duration-300 rounded-t-[20px] rounded-b-xl p-3 font-inter bg-white shadow-sm hover:shadow-md h-full">
      {/* Görsel Alanı - Scrollbar gizlendi */}
      <div style={{ scrollbarWidth: "none" }} className="relative border border-gray-100 rounded-t-[18px] w-full h-[250px] overflow-hidden group-hover:opacity-90 transition-opacity">
        {/* Resim olmadığı durumlar için placeholder eklenebilir */}
        <Image
          src={image || "/placeholder.jpg"}
          alt={title}
          fill
          className="object-cover object-top hover:object-bottom transition-all duration-[3s] ease-in-out" // Hover'da aşağı kayan efekt
        />

        {/* Fiyat veya Paket Rozeti */}
        <div className="absolute top-3 right-3 bg-primaryColor text-white text-xs font-semibold px-2 py-1 rounded-full shadow-sm">{price}</div>
      </div>

      <div className="flex flex-col gap-3 flex-grow">
        <h3 className="text-primaryBlack text-lg leading-[120%] font-bold group-hover:text-primaryColor transition-colors">{title}</h3>
        <p className="text-[#555] text-sm leading-[140%]">{description}</p>

        {/* Özellikler Alanı (Müşteri Yorumu yerine) */}
        <div className="flex flex-col gap-2 bg-gray-50 rounded-lg p-2.5 border border-gray-100 mt-auto">
          <h4 className="text-xs font-semibold text-primaryColor flex items-center gap-1">Öne Çıkan Özellikler</h4>
          <ul className="flex flex-col gap-1">
            {features.map((feature, idx) => (
              <li key={idx} className="flex items-center gap-1.5 text-xs text-gray-600">
                <CheckCircle2 className="w-3.5 h-3.5 text-green-500" />
                {feature}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="pt-2">
        <Link href={link} target="_blank" className="w-full block">
          <CustomButton rightComponent={<ExternalLink className="w-4 h-4" />} size="lg" variant="filledButton" className="w-full py-3 px-4 text-sm text-center rounded-xl flex justify-center items-center gap-2">
            Canlı Demoyu İncele
          </CustomButton>
        </Link>
      </div>
    </div>
  );
};

export default TemplateCard;
