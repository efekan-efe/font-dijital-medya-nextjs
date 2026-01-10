import hizmetlerimiz from "@/assets/footerIcons/footer_hizmetlerimiz.svg";
import hizliErisim from "@/assets/footerIcons/footer_hizli_erisim.svg";
import iletisim from "@/assets/footerIcons/footer_iletisim.svg";
import { Phone, Mail, MapPin } from "lucide-react";

export const footerColumns = [
  {
    icon: hizmetlerimiz,
    title: "Hizmetlerimiz",
    color: "#F44336",
    items: [
      { text: "E-Ticaret Sitesi Kurulumu", href: "/e-ticaret-web-sitesi-kurulumu/" },
      { text: "Kurumsal Web Sitesi", href: "/kurumsal-web-sitesi/" },
      { text: "Sosyal Medya Yönetimi", href: "/sosyal-medya-yonetimi/" },
      { text: "Sosyal Medya Reklamları", href: "/sosyal-medya-reklamlari/" },
      { text: "Arama Motoru Opt.", href: "/arama-motoru-optimizasyonu-seo/" },
    ],
  },
  {
    icon: hizliErisim,
    title: "Hızlı Erişim",
    color: "#FFC107",
    items: [
      { text: "Ana sayfa", href: "/" },
      { text: "Hakkımızda", href: "/hakkimizda" },
      { text: "Yazılarımız", href: "/blog" },
      { text: "Sıkça Sorulan Sorular", href: "/sikca-sorulan-sorular" },
      { text: "Referanslar", href: "/referanslar" },
      { text: "İletişim", href: "/iletisim" },
    ],
  },
  {
    icon: iletisim,
    title: "İletişim",
    color: "#43A047",
    items: [
      { text: "+90 532 389 16 58", href: "tel:+905323891658", icon: Phone },
      { text: "info@fontdijitalmedya.com", href: "mailto:info@fontdijitalmedya.com", icon: Mail },
      { text: "Seyhan / Adana / Türkiye", href: "#", icon: MapPin },
    ],
  },
];
