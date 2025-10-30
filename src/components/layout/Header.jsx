import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Search } from "lucide-react";
import logo from "@/assets/icons/font_digital_media_logo.svg";
import FontLogo from "../icons/FontLogo";

const Header = () => {
  const navLinks = [
    { href: "/hizmetler", label: "Hizmetler" },
    { href: "/referanslar", label: "Referanslar" },
    { href: "/blog", label: "Dijital Rehber" },
    { href: "/hakkimizda", label: "Kurumsal" },
    { href: "/iletisim", label: "İletişim" },
  ];

  return (
    <header className="bg-white border-b border-gray-200 font-inter">
      <nav className="max-w-7xl mx-auto px-4 flex justify-between items-center py-4">
        <div>
          <Link href="/" className="text-2xl font-bold text-gray-800">
            <FontLogo className="max-w-[150px] h-auto" />
          </Link>
        </div>

        <div className="flex items-center gap-x-8 max-lg:hidden">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="text-black font-medium hover:text-primaryColor transition-colors">
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden md:flex">
          <Link href="/ucretsiz-analiz">
            <Button variant="header" size="md" iconLeft={Search}>
              Ücretsiz Analiz
            </Button>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
