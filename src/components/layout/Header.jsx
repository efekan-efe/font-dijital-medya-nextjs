"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { CustomButton } from "@/components/ui/CustomButton";
import { Search } from "lucide-react";
import FontLogo from "../icons/FontLogo";
import ServiceHeader from "./ServicesHeader";
import gsap from "gsap";

const Header = () => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const dropdownRef = useRef(null);
  const timeoutRef = useRef(null);

  const navLinks = [
    { href: "/hizmetler", label: "Hizmetler", hasDropdown: true },
    { href: "/referanslar", label: "Referanslar" },
    { href: "/blog", label: "Dijital Rehber" },
    { href: "/hakkimizda", label: "Kurumsal" },
    { href: "/sikca-sorulan-sorular", label: "SSS" },
    { href: "/iletisim", label: "İletişim" },
  ];

  useEffect(() => {
    const dropdown = dropdownRef.current;

    if (isServicesOpen) {
      // Show dropdown with animation
      gsap.fromTo(
        dropdown,
        {
          opacity: 0,
          y: -20,
          display: "none",
        },
        {
          display: "block",
          opacity: 1,
          y: 0,
          duration: 0.4,
          ease: "power3.out",
        }
      );
    } else {
      // Hide dropdown with animation
      gsap.to(dropdown, {
        opacity: 0,
        y: -10,
        duration: 0.3,
        ease: "power2.in",
        onComplete: () => {
          gsap.set(dropdown, { display: "none" });
        },
      });
    }
  }, [isServicesOpen]);

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIsServicesOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsServicesOpen(false);
    }, 100);
  };

  const handleDropdownMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  const handleDropdownMouseLeave = () => {
    setIsServicesOpen(false);
  };

  return (
    <>
      <header className="bg-white border-b border-gray-200 font-inter max-lg:hidden relative z-50">
        <nav className="max-w-7xl mx-auto px-4 flex justify-between items-center py-4">
          <Link href="/" className="w-full max-w-[150px]">
            <FontLogo className="w-full h-auto" />
          </Link>

          <div className="flex items-center gap-x-8">
            {navLinks.map((link) =>
              link.hasDropdown ? (
                <div key={link.href} className="relative" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                  <Link href={link.href} className="text-black font-medium hover:text-primaryColor transition-colors">
                    {link.label}
                  </Link>
                </div>
              ) : (
                <Link key={link.href} href={link.href} className="text-black font-medium hover:text-primaryColor transition-colors">
                  {link.label}
                </Link>
              )
            )}
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

      {/* Dropdown Menu */}
      <div ref={dropdownRef} className="absolute left-0 right-0 top-[120px] bg-white border-b border-gray-200 shadow-2xl z-40 hidden" style={{ display: "none" }} onMouseEnter={handleDropdownMouseEnter} onMouseLeave={handleDropdownMouseLeave}>
        <ServiceHeader isDropdown={true} />
      </div>
    </>
  );
};

export default Header;
