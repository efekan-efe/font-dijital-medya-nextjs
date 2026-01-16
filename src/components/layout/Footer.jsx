import Link from "next/link";
import Image from "next/image";
import fontLogo from "@/assets/icons/white_font_logo.svg";
import bizeUlasin from "@/assets/footerIcons/footer_bize_ulasin.svg";
import whatsapp from "@/assets/footerIcons/footer_whatsapp.svg";
import instagram from "@/assets/footerIcons/footer_instagram.svg";
import facebook from "@/assets/footerIcons/footer_facebook.svg";
import mail from "@/assets/footerIcons/footer_mail.svg";
import tiktok from "@/assets/footerIcons/footer_tiktok.svg";
import FooterLinkColumn from "../ui/FooterLinkColumn";
import { footerColumns } from "../../../data/footer-data";

const socialMediaData = [
  {
    icon: whatsapp,
    link: "https://wa.me/905323891658",
  },
  {
    icon: instagram,
    link: "https://www.instagram.com/fontdijitalmedya/",
  },
  {
    icon: facebook,
    link: "https://www.facebook.com/people/Font-Dijital-Medya-Hizmetleri/61573947961660/",
  },
  {
    icon: tiktok,
    link: "https://www.tiktok.com/@fontdijitalmedya",
  },
  {
    icon: mail,
    link: "mailto:info@fontdijitalmedya.com",
  },
];

const SocialLinks = () => (
  <div className="flex items-center gap-x-2 mt-3">
    {socialMediaData.map((social, index) => (
      <Link key={index} href={social.link} className="bg-primaryColor rounded-full w-10 h-10 flex justify-center items-center hover:scale-110 transition-transform duration-300">
        {/* Ufak bir hover efekti de ekledim :) */}
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
      className="text-white pt-16 pb-6 font-inter max-md:pt-8"
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-4 gap-12 max-[1150px]:grid-cols-3 max-[1150px]:gap-6 max-md:grid-cols-1">
          {/* Logo ve Hakkımızda (Sol Sütun) */}
          <div className="footer-left-col text-white flex flex-col gap-6 max-md:gap-3">
            <Image src={fontLogo} alt="Font Dijital Medya Logo" width={150} height={50} />
            <div>
              <p className="font-bold">Dijitalin Yeni Fontu</p>
              <p className="text-sm mt-2">Font Dijital Medya, markaların dijital dünyada güçlü bir varlık oluşturması için yenilikçi çözümler sunan, yaratıcı ve sonuç odaklı bir ajans.</p>
            </div>

            <div>
              <div className="flex justify-start items-center gap-2 max-md:hidden">
                <Image className="w-full h-full max-w-7" src={bizeUlasin} alt="Bize Ulaşın İkonu" />
                <h3 className="text-white font-bold text-2xl border-b-2 border-primaryColor">Bize Ulaşın</h3>
              </div>
              <SocialLinks />
            </div>
          </div>

          {/* Hizmetlerimiz, Hızlı Erişim ve İletişim (Link Sütunları) */}
          {footerColumns.map((column) => (
            <div key={column.title} className={`${column.title === "Hizmetlerimiz" ? "max-md:hidden" : ""}`}>
              <FooterLinkColumn icon={column.icon} color={column.color} title={column.title} items={column.items} />
            </div>
          ))}
        </div>

        {/* Copyright ve Hukuki Linkler (Alt Bar) */}
        <div className="mt-12 pt-6 border-t border-white/20 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400 max-md:mt-4">
          <p>&copy; {new Date().getFullYear()} Font Dijital Medya. Tüm hakları saklıdır.</p>
          <div className="flex gap-x-4 mt-4 md:mt-0 max-sm:text-center max-sm:gap-1">
            <Link href="/gizlilik-politikasi" className="hover:text-white transition-colors">
              Gizlilik Politikası
            </Link>
            <Link href="/kvkk" className="hover:text-white transition-colors">
              KVKK
            </Link>
            <Link href="/mesafeli-satis-sozlesmesi" className="hover:text-white transition-colors">
              Mesafeli Satış Sözleşmesi
            </Link>
            <Link href="/cerez-cookie-politikasi" className="hover:text-white transition-colors">
              Çerez Politikası
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
