// data/footer-data.js
import { Zap, Hand, MessageSquare, Phone, Mail, MapPin } from "lucide-react";

export const footerColumns = [
  {
    icon: Zap,
    title: "Hizmetlerimiz",
    items: [
      { text: "Web Hizmetleri", href: "/hizmetler/web" },
      { text: "Tasarım", href: "/hizmetler/tasarim" },
      { text: "Dijital Pazarlama", href: "/hizmetler/dijital-pazarlama" },
      { text: "Sosyal Medya Yönetimi", href: "/hizmetler/sosyal-medya" },
      { text: "Dijital Danışmanlık", href: "/hizmetler/danismanlik" },
    ],
  },
  {
    icon: Hand,
    title: "Hızlı Erişim",
    items: [
      { text: "Ana sayfa", href: "/" },
      { text: "Hakkımızda", href: "/hakkimizda" },
      { text: "Yazılarımız", href: "/blog" },
      { text: "Sıkça Sorulan Sorular", href: "/sss" },
      { text: "Referanslar", href: "/referanslar" },
      { text: "İletişim", href: "/iletisim" },
    ],
  },
  {
    icon: MessageSquare,
    title: "İletişim",
    items: [
      { text: "+90 532 389 16 58", href: "tel:+905323891658", icon: Phone },
      { text: "info@fontdijitalmedya.com", href: "mailto:info@fontdijitalmedya.com", icon: Mail },
      { text: "Seyhan / Adana / Türkiye", href: "#", icon: MapPin },
    ],
  },
];
