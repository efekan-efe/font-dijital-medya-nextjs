import Link from "next/link";
import { CustomButton } from "@/components/ui/CustomButton";
import { Search } from "lucide-react";
import FontLogo from "../icons/FontLogo";

const Header = () => {
  const navLinks = [
    { href: "/hizmetler", label: "Hizmetler" },
    { href: "/referanslar", label: "Referanslar" },
    { href: "/blog", label: "Dijital Rehber" },
    { href: "/hakkimizda", label: "Kurumsal" },
    { href: "/sikca-sorulan-sorular", label: "SSS" },
    { href: "/iletisim", label: "İletişim" },
  ];

  return (
    <header className="bg-white border-b border-gray-200 font-inter max-lg:hidden">
      <nav className="max-w-7xl mx-auto px-4 flex justify-between items-center py-4">
        <Link href="/" className="w-full max-w-[150px]">
          <FontLogo className="w-full h-auto" />
        </Link>

        <div className="flex items-center gap-x-8 ">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="text-black font-medium hover:text-primaryColor transition-colors">
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden md:flex">
          <Link href="/ucretsiz-analiz">
            <CustomButton variant="header" size="md" iconLeft={Search}>
              Ücretsiz Analiz
            </CustomButton>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
