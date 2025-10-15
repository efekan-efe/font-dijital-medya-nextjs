import Link from "next/link";
import Image from "next/image";
import ContactItem from "@/components/ui/ContactItem";
import Facebook from "@/assets/headerIcons/facebook.svg";
import Twitter from "@/assets/headerIcons/twitter.svg";
import Instagram from "@/assets/headerIcons/instagram.svg";
import Youtube from "@/assets/headerIcons/youtube.svg";
import { Mail, Phone, MapPin } from "lucide-react";

const UpperHeader = () => {
  const socialLinks = [
    { href: "#", icon: Facebook, alt: "Facebook ikonu" },
    { href: "#", icon: Twitter, alt: "Twitter ikonu" },
    { href: "#", icon: Instagram, alt: "Instagram ikonu" },
    { href: "#", icon: Youtube, alt: "Youtube ikonu" },
  ];

  return (
    <div className="bg-secondaryColor text-white py-2 font-inter">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
        {/* Sol Taraf: İletişim Bilgileri */}
        <div className="flex items-center gap-x-6 max-md:hidden">
          <ContactItem icon={Mail} fill="#fff">
            <a href="mailto:info@fontdijitalmedya.com">info@fontdijitalmedya.com</a>
          </ContactItem>
          <ContactItem icon={Phone}>
            <a href="tel:+905323891658">+90 532 389 16 58</a>
          </ContactItem>
          <ContactItem icon={MapPin}>
            <span>Adana, Türkiye</span>
          </ContactItem>
        </div>

        {/* Sağ Taraf: Sosyal Medya İkonları */}
        <div className="flex items-center gap-x-2.5">
          {socialLinks.map((link, index) => (
            <Link key={index} href={link.href} className="w-8 h-8 flex justify-center items-center text-white border border-white p-2 rounded-full hover:opacity-80 transition-opacity">
              <Image className="w-auto h-auto" src={link.icon} alt={link.alt} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UpperHeader;
