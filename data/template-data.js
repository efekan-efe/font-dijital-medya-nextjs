import {
  Stethoscope, // Dişçi & Doktor
  Salad, // Diyetisyen
  HardHat, // İnşaat
  Home, // Emlak
  Wrench, // Beyaz Eşya & Tamir
  Utensils, // Restoran
  Hotel, // Otel
  Scale, // Avukat
  Truck, // Nakliye
  ShieldCheck, // Sigorta
  Armchair, // Mobilya
  HeartPulse, // Doktor Geneli
  Cpu, // Teknik Servis
  PawPrint, // Veteriner (Dog yerine daha genel)
  GraduationCap, // Eğitim
  HeartHandshake, // Dernek & Vakıf
  Scissors, // Kuaför
  Dumbbell, // Spor
  Gem, // Düğün & Organizasyon
  LayoutGrid, // Tümü
} from "lucide-react";

export const categories = [
  { id: "all", name: "Tüm Sektörler", icon: LayoutGrid },
  { id: "disci", name: "Diş Hekimi", icon: Stethoscope },
  { id: "diyetisyen", name: "Diyetisyen", icon: Salad },
  { id: "insaat", name: "İnşaat & Mimarlık", icon: HardHat },
  { id: "emlak", name: "Emlak & Gayrimenkul", icon: Home },
  { id: "beyaz-esya", name: "Beyaz Eşya Servisi", icon: Wrench },
  { id: "restoran", name: "Restoran & Kafe", icon: Utensils },
  { id: "otel", name: "Otel & Turizm", icon: Hotel },
  { id: "avukat", name: "Avukat & Hukuk", icon: Scale },
  { id: "nakliye", name: "Nakliye & Lojistik", icon: Truck },
  { id: "sigorta", name: "Sigorta & Kasko", icon: ShieldCheck },
  { id: "mobilya", name: "Mobilya & Dekorasyon", icon: Armchair },
  { id: "doktor", name: "Doktor & Klinik", icon: HeartPulse },
  { id: "teknik-servis", name: "Teknik Servis", icon: Cpu },
  { id: "veteriner", name: "Veteriner", icon: PawPrint },
  { id: "egitim", name: "Eğitim Kurumu", icon: GraduationCap },
  { id: "dernek", name: "Dernek & Vakıf", icon: HeartHandshake },
  { id: "guzellik", name: "Kuaför & Güzellik", icon: Scissors },
  { id: "spor", name: "Spor & Fitness", icon: Dumbbell },
  { id: "dugun", name: "Düğün Salonu", icon: Gem },
];

export const templates = [
  // 1. DİŞÇİ
  {
    id: 1,
    categoryId: "disci",
    title: "Dentist Pro V1",
    description: "Diş klinikleri için özel tasarlanmış, online randevu modüllü ve ferah arayüz.",
    features: ["Online Randevu", "Tedavi Öncesi/Sonrası", "WhatsApp İletişim"],
    image: "https://placehold.co/600x400/e2e8f0/1e293b?text=Dis+Hekimi+Demo+1",
    demoLink: "https://disci.fontdijitalmedya.com",
    price: "Kurumsal Paket",
  },
  // 2. DİYETİSYEN
  {
    id: 2,
    categoryId: "diyetisyen",
    title: "Fit Life Diyetisyen",
    description: "Diyetisyenler için blog odaklı, danışan formu içeren modern tasarım.",
    features: ["Vücut Kitle İndeksi Hesapla", "Blog Yönetimi", "Randevu Formu"],
    image: "https://placehold.co/600x400/dcfce7/166534?text=Diyetisyen+Demo",
    demoLink: "#",
    price: "Ekonomik Paket",
  },
  // 3. İNŞAAT
  {
    id: 3,
    categoryId: "insaat",
    title: "Yapı İnşaat Kurumsal",
    description: "Tamamlanan projelerinizi sergileyebileceğiniz güçlü ve prestijli yapı.",
    features: ["Proje Galerisi", "Teklif Formu", "Katalog İndirme"],
    image: "https://placehold.co/600x400/f1f5f9/0f172a?text=Insaat+Demo",
    demoLink: "#",
    price: "Kurumsal Paket",
  },
  // 4. EMLAK
  {
    id: 4,
    categoryId: "emlak",
    title: "Real Estate Portföy",
    description: "İlan filtreleme ve detaylı portföy sunumu için ideal emlak sitesi.",
    features: ["İlan Filtreleme", "Harita Konumu", "Danışman Sayfaları"],
    image: "https://placehold.co/600x400/fff7ed/9a3412?text=Emlak+Demo",
    demoLink: "#",
    price: "Profesyonel Paket",
  },
  // 5. BEYAZ EŞYA
  {
    id: 5,
    categoryId: "beyaz-esya",
    title: "Servis 7/24",
    description: "Hızlı servis çağırma odaklı, sade ve anlaşılır teknik servis teması.",
    features: ["Hemen Ara Butonu", "Servis Talep Formu", "Marka Logoları"],
    image: "https://placehold.co/600x400/eff6ff/1e40af?text=Servis+Demo",
    demoLink: "#",
    price: "Ekonomik Paket",
  },
  // 6. RESTORAN
  {
    id: 6,
    categoryId: "restoran",
    title: "Lezzet Durağı",
    description: "Dijital QR menü entegrasyonuna uygun, iştah açıcı restoran tasarımı.",
    features: ["Dijital Menü", "Rezervasyon Sistemi", "Galeri"],
    image: "https://placehold.co/600x400/fef2f2/991b1b?text=Restoran+Demo",
    demoLink: "#",
    price: "Kurumsal Paket",
  },
  // 7. OTEL
  {
    id: 7,
    categoryId: "otel",
    title: "Boutique Hotel",
    description: "Oteller ve pansiyonlar için oda tanıtımı ve rezervasyon odaklı yapı.",
    features: ["Oda Özellikleri", "Rezervasyon Modülü", "Turistik Rehber Blog"],
    image: "https://placehold.co/600x400/fafaf9/57534e?text=Otel+Demo",
    demoLink: "#",
    price: "Profesyonel Paket",
  },
  // 8. AVUKAT
  {
    id: 8,
    categoryId: "avukat",
    title: "Adalet Hukuk Bürosu",
    description: "Güven veren renkler ve ciddi bir duruşla hukuk büroları için ideal.",
    features: ["Uzmanlık Alanları", "Avukat Kadrosu", "Hızlı İletişim"],
    image: "https://placehold.co/600x400/f8fafc/334155?text=Avukat+Demo",
    demoLink: "#",
    price: "Kurumsal Paket",
  },
  // 9. NAKLİYE
  {
    id: 9,
    categoryId: "nakliye",
    title: "Lojistik & Nakliye",
    description: "Evden eve nakliyat ve lojistik firmaları için fiyat teklifi odaklı.",
    features: ["Fiyat Hesaplama Formu", "Hizmet Bölgeleri", "Referanslar"],
    image: "https://placehold.co/600x400/fffbeb/b45309?text=Nakliye+Demo",
    demoLink: "#",
    price: "Ekonomik Paket",
  },
  // 10. SİGORTA
  {
    id: 10,
    categoryId: "sigorta",
    title: "Güven Sigorta Acentesi",
    description: "Trafik, kasko ve sağlık sigortası teklifleri için dönüşüm odaklı tasarım.",
    features: ["Teklif Al Butonları", "Anlaşmalı Kurumlar", "SSS Bölümü"],
    image: "https://placehold.co/600x400/f0f9ff/0369a1?text=Sigorta+Demo",
    demoLink: "#",
    price: "Ekonomik Paket",
  },
  // 11. MOBİLYA
  {
    id: 11,
    categoryId: "mobilya",
    title: "Modern Mobilya Vitrini",
    description: "Ürün kataloglarını sergilemek isteyen mobilya mağazaları için.",
    features: ["Ürün Filtreleme", "Katalog Modu", "WhatsApp Sipariş"],
    image: "https://placehold.co/600x400/fff1f2/be123c?text=Mobilya+Demo",
    demoLink: "#",
    price: "E-Ticaret Paketi",
  },
  // 12. DOKTOR (Genel)
  {
    id: 12,
    categoryId: "doktor",
    title: "Klinik Doktorum",
    description: "Uzman doktorlar ve cerrahlar için kişisel marka odaklı web sitesi.",
    features: ["Akademik Geçmiş", "Basında Biz", "Video Galeri"],
    image: "https://placehold.co/600x400/eff6ff/2563eb?text=Doktor+Demo",
    demoLink: "#",
    price: "Kurumsal Paket",
  },
  // 13. TEKNİK SERVİS (Genel)
  {
    id: 13,
    categoryId: "teknik-servis",
    title: "Tech Fix Servis",
    description: "Kombi, klima ve elektronik servisleri için mobil uyumlu hızlı arayüz.",
    features: ["Arıza Bildirim Formu", "Canlı Destek", "Bölge Haritası"],
    image: "https://placehold.co/600x400/f3f4f6/374151?text=Teknik+Servis",
    demoLink: "#",
    price: "Ekonomik Paket",
  },
  // 14. VETERİNER
  {
    id: 14,
    categoryId: "veteriner",
    title: "Pati Dostu Klinik",
    description: "Sevimli ve güven veren renklerle veteriner klinikleri için özel tasarım.",
    features: ["Acil Durum Butonu", "Hizmetlerimiz", "Pati Galeri"],
    image: "https://placehold.co/600x400/fff7ed/c2410c?text=Veteriner+Demo",
    demoLink: "#",
    price: "Kurumsal Paket",
  },
  // 15. EĞİTİM
  {
    id: 15,
    categoryId: "egitim",
    title: "Eğitim Kurumu & Kolej",
    description: "Kreş, kolej ve kurslar için kayıt formu ve etkinlik takvimi içeren yapı.",
    features: ["Kayıt Formu", "Eğitmen Kadrosu", "Ders Programı"],
    image: "https://placehold.co/600x400/eef2ff/4338ca?text=Egitim+Demo",
    demoLink: "#",
    price: "Kurumsal Paket",
  },
  // 16. DERNEK
  {
    id: 16,
    categoryId: "dernek",
    title: "Sivil Toplum Kuruluşu",
    description: "Dernek ve vakıflar için bağış, üyelik ve haber duyuru odaklı.",
    features: ["Bağış Entegrasyonu", "Üyelik Formu", "Etkinlik Duyuruları"],
    image: "https://placehold.co/600x400/ecfdf5/047857?text=Dernek+Demo",
    demoLink: "#",
    price: "Profesyonel Paket",
  },
  // 17. KUAFÖR
  {
    id: 17,
    categoryId: "guzellik",
    title: "Güzellik Merkezi",
    description: "Estetik, kuaför ve güzellik salonları için görsel ağırlıklı şık tasarım.",
    features: ["Fiyat Listesi", "Randevu Al", "Instagram Galeri"],
    image: "https://placehold.co/600x400/fdf2f8/db2777?text=Guzellik+Demo",
    demoLink: "#",
    price: "Ekonomik Paket",
  },
  // 18. SPOR SALONU
  {
    id: 18,
    categoryId: "spor",
    title: "Power Gym Fitness",
    description: "Spor salonları ve PT'ler için dinamik ve enerji veren tasarım.",
    features: ["Ders Programı", "Vücut Endeksi", "Üyelik Paketleri"],
    image: "https://placehold.co/600x400/18181b/eab308?text=Spor+Salonu",
    demoLink: "#",
    price: "Ekonomik Paket",
  },
  // 19. DÜĞÜN SALONU
  {
    id: 19,
    categoryId: "dugun",
    title: "Wedding Palace",
    description: "Düğün salonları için salon görsellerini ve paketleri öne çıkaran yapı.",
    features: ["Salon 360 Tur", "Tarih Sorgulama", "Paket Fiyatları"],
    image: "https://placehold.co/600x400/faf5ff/7e22ce?text=Dugun+Salonu",
    demoLink: "#",
    price: "Kurumsal Paket",
  },
];
