"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
// Logo bileşenini Header.jsx'teki gibi çağırıyoruz
import FontLogo from "../icons/FontLogo";
import {
  Menu,
  X,
  ChevronRight,
  ChevronLeft,
  Home,
  Briefcase,
  Award,
  BookOpen,
  Building2,
  HelpCircle,
  Phone,
  // Hizmet İkonları (Lucide Örnekleri)
  ShoppingCart,
  LayoutDashboard,
  Globe,
  PenTool,
  MonitorPlay,
  GraduationCap,
  Laptop,
  Megaphone,
  Share2,
  Search,
  Calendar,
  QrCode,
  Palette,
} from "lucide-react";

// --- VERİ YAPISI ---
const menuStructure = [
  { title: "Ana Sayfa", href: "/", icon: Home },
  {
    title: "Hizmetler",
    id: "hizmetler",
    icon: Briefcase,
    hasSubmenu: true,
  },
  { title: "Referanslar", href: "/referanslar", icon: Award },
  { title: "Dijital Rehber", href: "/blog", icon: BookOpen },
  { title: "Kurumsal", href: "/hakkimizda", icon: Building2 },
  { title: "SSS", href: "/sikca-sorulan-sorular", icon: HelpCircle },
  { title: "İletişim", href: "/iletisim", icon: Phone },
];

const servicesCategories = [
  { title: "Web Hizmetleri", id: "webServices", icon: Globe },
  { title: "Dijital Pazarlama", id: "digitalMarketing", icon: Megaphone },
  { title: "Diğer Hizmetler", id: "otherServices", icon: Calendar },
];

const servicesData = {
  webServices: [
    { title: "E-Ticaret Sitesi Kurulumu", link: "/e-ticaret-web-sitesi-kurulumu/", icon: ShoppingCart },
    { title: "E-Ticaret Sitesi Yönetimi", link: "/e-ticaret-web-sitesi-yonetimi/", icon: LayoutDashboard },
    { title: "Kurumsal Web Sitesi", link: "/kurumsal-web-sitesi/", icon: Globe },
    { title: "Blog Web Sitesi", link: "/blog-web-sitesi/", icon: PenTool },
    { title: "Haber Web Sitesi", link: "/haber-web-sitesi/", icon: MonitorPlay },
    { title: "Eğitim Web Sitesi", link: "/egitim-web-sitesi/", icon: GraduationCap },
    { title: "Web Tasarımı", link: "/web-sitesi-tasarimi/", icon: Laptop },
  ],
  digitalMarketing: [
    { title: "Dijital Pazarlama Danışmanlığı", link: "/dijital-pazarlama-danismanligi/", icon: Megaphone },
    { title: "Sosyal Medya Yönetimi", link: "/sosyal-medya-yonetimi/", icon: Share2 },
    { title: "Google Reklam Yönetimi", link: "/google-reklam-yonetimi/", icon: Search },
    { title: "Sosyal Medya Reklamları", link: "/sosyal-medya-reklamlari/", icon: Megaphone },
    { title: "Arama Motoru Optimizasyonu", link: "/arama-motoru-optimizasyonu-seo/", icon: Search },
  ],
  otherServices: [
    { title: "Randevu Sistemi", link: "/randevu-ve-rezervasyon-sistemi/", icon: Calendar },
    { title: "QR Menü", link: "/qr-menu/", icon: QrCode },
    { title: "Kurumsal Kimlik", link: "/kurumsal-kimlik/", icon: Palette },
  ],
};

const MobileHeader = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [history, setHistory] = useState(["main"]);

  useEffect(() => {
    if (!isOpen) {
      setTimeout(() => setHistory(["main"]), 300);
    }
  }, [isOpen]);

  // Sayfa kaydırmasını engelle (Menü açıkken)
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const currentView = history[history.length - 1];

  const navigateTo = (viewId) => {
    setHistory([...history, viewId]);
  };

  const goBack = () => {
    if (history.length > 1) {
      setHistory(history.slice(0, -1));
    }
  };

  // --- RENDER PARÇALARI ---
  const renderMainMenu = () => (
    <div className="flex flex-col animate-in fade-in slide-in-from-right-4 duration-300">
      <div className="flex flex-col space-y-2">
        {menuStructure.map((item, index) =>
          item.hasSubmenu ? (
            <button key={index} onClick={() => navigateTo(item.id)} className="flex items-center justify-between p-3 rounded-xl hover:bg-gray-50 active:bg-gray-100 transition-colors group w-full">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-softPink/30 text-primaryColor flex items-center justify-center group-hover:bg-primaryColor group-hover:text-white transition-colors">
                  <item.icon size={20} />
                </div>
                <span className="font-semibold text-gray-700">{item.title}</span>
              </div>
              <ChevronRight className="text-gray-400" size={20} />
            </button>
          ) : (
            <Link key={index} href={item.href} onClick={() => setIsOpen(false)} className="flex items-center gap-3 p-3 rounded-xl hover:bg-gray-50 active:bg-gray-100 transition-colors group w-full">
              <div className="w-10 h-10 rounded-lg bg-gray-100 text-gray-600 flex items-center justify-center group-hover:bg-primaryColor group-hover:text-white transition-colors">
                <item.icon size={20} />
              </div>
              <span className="font-medium text-gray-700">{item.title}</span>
            </Link>
          )
        )}
      </div>
    </div>
  );

  const renderServicesMenu = () => (
    <div className="flex flex-col animate-in fade-in slide-in-from-right-4 duration-300">
      <div className="flex items-center gap-2 mb-6 text-gray-500">
        <button onClick={goBack} className="flex items-center gap-1 text-sm font-medium hover:text-primaryColor transition-colors">
          <ChevronLeft size={18} />
          Geri
        </button>
      </div>
      <h2 className="text-xl font-bold text-gray-900 mb-6 px-2">Hizmetlerimiz</h2>

      <div className="flex flex-col space-y-2">
        {servicesCategories.map((category, index) => (
          <button key={index} onClick={() => navigateTo(category.id)} className="flex items-center justify-between p-4 rounded-xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-all active:scale-[0.98] w-full">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-softPink flex items-center justify-center text-primaryColor">
                <category.icon size={20} />
              </div>
              <span className="font-semibold text-gray-800">{category.title}</span>
            </div>
            <ChevronRight className="text-gray-400" size={20} />
          </button>
        ))}
      </div>
    </div>
  );

  const renderSubServices = (categoryKey, title) => (
    <div className="flex flex-col animate-in fade-in slide-in-from-right-4 duration-300">
      <div className="flex items-center gap-2 mb-6 text-gray-500">
        <button onClick={goBack} className="flex items-center gap-1 text-sm font-medium hover:text-primaryColor transition-colors">
          <ChevronLeft size={18} />
          Hizmetler
        </button>
      </div>
      <h2 className="text-xl font-bold text-gray-900 mb-6 px-2">{title}</h2>

      <div className="flex flex-col space-y-3">
        {servicesData[categoryKey]?.map((service, index) => (
          <Link key={index} href={service.link} onClick={() => setIsOpen(false)} className="flex items-center gap-3 p-3 rounded-xl hover:bg-gray-50 transition-colors border border-transparent hover:border-gray-100 w-full">
            <div className="w-10 h-10 rounded-lg bg-softPink/50 text-primaryColor flex items-center justify-center shrink-0">
              <service.icon size={20} />
            </div>
            <span className="font-medium text-gray-700 text-sm">{service.title}</span>
          </Link>
        ))}
      </div>
    </div>
  );

  return (
    <>
      {/* --- MOBİL HEADER BAR (Sadece Mobilde Görünür) --- */}
      {/* Header.jsx gizlendiği için bu bar, logo ve menü butonunu tutacak */}
      <div className="lg:hidden sticky top-0 w-full z-50 bg-white border-b border-gray-100 px-4 py-3 flex justify-between items-center shadow-sm">
        {/* Logo */}
        <Link href="/" className="max-w-[120px]">
          <FontLogo className="w-full h-auto" />
        </Link>

        {/* Hamburger Butonu */}
        <button onClick={() => setIsOpen(true)} className="p-2 -mr-2 text-primaryBlack active:scale-95 transition-transform">
          <Menu size={28} />
        </button>
      </div>

      {/* --- FULL SCREEN MENU OVERLAY --- */}
      <div className={`fixed inset-0 bg-white z-[60] transition-transform duration-500 ease-in-out font-inter ${isOpen ? "translate-x-0" : "translate-x-full"}`}>
        {/* Menü Header (Logo + Kapat) */}
        <div className="w-full flex justify-between items-center p-5 border-b border-gray-100">
          <Link href="/" className="max-w-[100px]" onClick={() => setIsOpen(false)}>
            <FontLogo className="w-full h-auto" />
          </Link>
          <button onClick={() => setIsOpen(false)} className="p-2 bg-gray-50 rounded-full text-gray-500 hover:bg-gray-100 hover:text-red-500 transition-colors">
            <X size={24} />
          </button>
        </div>

        {/* İçerik Alanı */}
        <div className="h-[calc(100vh-80px)] overflow-y-auto p-5 pb-20">
          {currentView === "main" && renderMainMenu()}

          {currentView === "hizmetler" && renderServicesMenu()}

          {currentView === "webServices" && renderSubServices("webServices", "Web Hizmetleri")}
          {currentView === "digitalMarketing" && renderSubServices("digitalMarketing", "Dijital Pazarlama")}
          {currentView === "otherServices" && renderSubServices("otherServices", "Diğer Hizmetler")}
        </div>
      </div>
    </>
  );
};

export default MobileHeader;
