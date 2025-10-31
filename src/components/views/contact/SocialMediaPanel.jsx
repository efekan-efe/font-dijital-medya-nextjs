import whatsapp from "@/assets/footerIcons/footer_whatsapp.svg";
import instagram from "@/assets/footerIcons/footer_instagram.svg";
import facebook from "@/assets/footerIcons/footer_facebook.svg";
import mail from "@/assets/footerIcons/footer_mail.svg";
import Image from "next/image";
import Link from "next/link";

const SocialMediaPanel = () => {
  const socialMediaData = [
    {
      title: "WhatsApp",
      textColor: "text-[#29A71A]",
      icon: whatsapp,
      iconBackground: "bg-[#29A71A]",
      background: "bg-[#29A71A]/25",
      value: "+90 532 389 16 58",
      link: "https://wa.me/+905323891658",
    },
    {
      title: "Instagram",
      textColor: "text-[#741CCC]",
      icon: instagram,
      iconBackground: "bg-gradient-to-r from-[#FBD624] via-[#FA3284] to-[#741CCC]",
      background: "bg-gradient-to-r from-[#FBD624]/25 via-[#FA3284]/25 to-[#741CCC]/25",
      value: "@fontdijitalmedya",
      link: "https://www.instagram.com/fontdijitalmedya?igsh=MWxpczd6MHBxcGxocw%3D%3D",
    },
    {
      title: "Facebook",
      textColor: "text-[#1877F2]",
      icon: facebook,
      iconBackground: "bg-[#1877F2]",
      background: "bg-[#1877F2]/25",
      value: "Font Dijital Medya Hizmetleri",
      link: "https://www.facebook.com/share/1W5RWGUFbc/?mibextid=LQQJ4d",
    },
    {
      title: "E-posta Adresi",
      textColor: "text-[#5C45FD]",
      icon: mail,
      iconBackground: "bg-[#5C45FD]",
      background: "bg-[#5C45FD]/25",
      value: "info@fontdijitalmedya.com",
      link: "mailto:info@fontdijitalmedya.com",
    },
  ];

  return (
    <div className="border border-primaryColor/50 p-4 flex flex-col gap-4">
      {socialMediaData.map((media, index) => (
        <Link href={media.link} key={index} className={`grid grid-cols-[64px_1fr] items-center gap-2.5 p-4 rounded-2xl ${media.background}`}>
          <div className={`w-16 h-16 flex justify-center items-center rounded-full ${media.iconBackground}`}>
            <Image className="w-8 h-8" src={media.icon} alt={media.title} />
          </div>
          <div className="w-full flex flex-col gap-0">
            <h3 className={`font-semibold text-xl ${media.textColor}`}>{media.title}</h3>
            <p className="font-medium text-lg text-primaryBlack">{media.value}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default SocialMediaPanel;
