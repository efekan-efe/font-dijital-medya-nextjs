// src/components/layout/Footer.jsx
import Link from "next/link";
import Image from "next/image";
import fontLogo from "@/assets/icons/white_font_logo.svg";
import bizeUlasin from "@/assets/footerIcons/footer_bize_ulasin.svg";
import whatsapp from "@/assets/footerIcons/footer_whatsapp.svg";
import instagram from "@/assets/footerIcons/footer_instagram.svg";
import facebook from "@/assets/footerIcons/footer_facebook.svg";
import tiktok from "@/assets/footerIcons/footer_tiktok.svg";
import mail from "@/assets/footerIcons/footer_mail.svg";
import FooterLinkColumn from "../ui/FooterLinkColumn";
import { footerColumns } from "../../../data/footer-data";

const socialMediaData = [
  {
    icon: whatsapp,
    link: "/",
  },
  {
    icon: instagram,
    link: "/",
  },
  {
    icon: facebook,
    link: "/",
  },
  {
    icon: tiktok,
    link: "/",
  },
  {
    icon: mail,
    link: "/",
  },
];

const SocialLinks = () => (
  <div className="flex items-center gap-x-2 mt-3">
    {socialMediaData.map((social, index) => (
      <Link key={index} href={social.link} className="bg-primaryColor rounded-full w-10 h-10 flex justify-center items-center">
        <Image src={social.icon} alt="sosyal medya ikonları" />
      </Link>
    ))}
  </div>
);

const Footer = () => {
  return (
    <footer
      style={{
        background: "linear-gradient(108deg, #000, #2E2483)",
      }}
      className="text-white pt-16 pb-6 font-inter"
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-4 gap-12 max-[1150px]:grid-cols-3 max-[1150px]:gap-6 max-md:grid-cols-1">
          {/* Logo ve Hakkımızda */}
          <div className="text-white flex flex-col gap-6">
            <Image src={fontLogo} alt="Font Dijital Medya Logo" width={150} height={50} />
            <div>
              <p className="font-bold">Dijitalin Yeni Fontu</p>
              <p className="text-sm">Font Dijital Medya, markaların dijital dünyada güçlü bir varlık oluşturması için yenilikçi çözümler sunan, yaratıcı ve sonuç odaklı bir ajans.</p>
            </div>

            <div>
              <div className="flex justify-start items-center gap-2">
                <Image className="w-full h-full max-w-7" src={bizeUlasin} alt="Bize Ulaşın İkonu" />
                <h3 className="text-white font-bold text-2xl border-b-2 border-primaryColor">Bize Ulaşın</h3>
              </div>
              <SocialLinks />
            </div>
          </div>

          {/* Hizmetlerimiz, Hızlı Erişim ve İletişim */}
          {footerColumns.map((column) => (
            <FooterLinkColumn key={column.title} icon={column.icon} color={column.color} title={column.title} items={column.items} />
          ))}
        </div>

        {/* Copyright ve Hukuki Linkler */}
        <div className="mt-12 pt-6 border-t border-white/20 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Font Dijital Medya. Tüm hakları saklıdır.</p>
          <div className="flex gap-x-4 mt-4 md:mt-0">
            <Link href="/gizlilik-politikasi" className="hover:text-white">
              Gizlilik Politikası
            </Link>
            <Link href="/kullanim-kosullari" className="hover:text-white">
              Kullanım Koşulları
            </Link>
            <Link href="/cerez-politikasi" className="hover:text-white">
              Çerez Politikası
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
