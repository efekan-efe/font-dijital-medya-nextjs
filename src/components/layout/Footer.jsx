// src/components/layout/Footer.jsx
import Link from "next/link";
import Image from "next/image"; // Logo için
import FooterLinkColumn from "../ui/FooterLinkColumn";
import { footerColumns } from "../../../data/footer-data";
import { Instagram, Facebook, Mail } from "lucide-react";

// SocialLinks bileşenini doğrudan burada tanımlayabilir veya ayrı dosyaya taşıyabiliriz.
const SocialLinks = () => (
  <div className="flex items-center gap-x-3 mt-4">
    {/* Örnek Sosyal Medya Linkleri */}
    <a href="#" className="p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition"></a>
    <a href="#" className="p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition">
      <Instagram size={20} />
    </a>
    <a href="#" className="p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition">
      <Facebook size={20} />
    </a>
    <a href="#" className="p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition"></a>
    <a href="#" className="p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition">
      <Mail size={20} />
    </a>
  </div>
);

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-[#1a1a2e] to-[#16213e] text-white pt-16 pb-6">
      <div className="container mx-auto px-4">
        {/* Üst Kısım: 4 Sütunlu Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Sütun 1: Logo ve Hakkında */}
          <div className="md:col-span-2 lg:col-span-1">
            <Image src="/logo-white.svg" alt="Font Dijital Medya Logo" width={150} height={50} />
            <p className="mt-4 text-gray-300">Font Dijital Medya, markaların dijital dünyada güçlü bir varlık oluşturması için yenilikçi çözümler sunan, yaratıcı ve sonuç odaklı bir ajans.</p>
            <h4 className="font-semibold text-lg mt-6 border-b-2 border-white/20 inline-block pb-1">Bize Ulaşın</h4>
            <SocialLinks />
          </div>

          {/* Sütun 2, 3, 4: Veriyi map'leyerek dinamik olarak oluşturuluyor */}
          {footerColumns.map((column) => (
            <FooterLinkColumn key={column.title} icon={column.icon} title={column.title} items={column.items} />
          ))}
        </div>

        {/* Alt Kısım: Copyright ve Hukuki Linkler */}
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
