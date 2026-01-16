import Link from "next/link";
import Image from "next/image";
import whatsapp from "@/assets/footerIcons/footer_whatsapp.svg";
import instagram from "@/assets/footerIcons/footer_instagram.svg";
import facebook from "@/assets/footerIcons/footer_facebook.svg";

const PostSubscribeWindow = () => {
  const socialMediaData = [
    {
      icon: whatsapp,
      link: "https://wa.me/905323891658",
    },
    {
      icon: instagram,
      link: "https://www.instagram.com/fontdijitalmedya/",
    },
    {
      icon: facebook,
      link: "https://www.facebook.com/people/Font-Dijital-Medya-Hizmetleri/61573947961660/",
    },
  ];

  return (
    <div className="p-6 bg-[#DBD4F5]/25 rounded-xl border-1 border-primaryColor flex flex-col gap-6 font-inter">
      <div className="flex flex-col gap-3">
        <h2 className="text-2xl font-medium text-primaryColor leading-8 whitespace-nowrap text-center">Abonelik Bülteni</h2>
        <p className="leading-6 text-primaryBlack text-center">Bağlı kalın ve en son güncellemeleri, hikayeleri ve özel içerikleri doğrudan e-posta kutunuza alın.</p>
      </div>
      <div className="w-full">
        <input className="w-full border border-primaryColor rounded-lg p-2.5" type="email" name="subscribeInput" id="subscribeInput" placeholder="E-mail Adresiniz..." />
      </div>
      <button className="bg-primaryColor text-center text-white font-semibold leading-6 w-full py-2.5 rounded-lg">Fırsatları Kaçırma</button>
      <div className="flex justify-center items-center gap-3">
        {socialMediaData.map((social, index) => (
          <Link key={index} href={social.link} className="bg-primaryColor rounded-full w-10 h-10 flex justify-center items-center">
            <Image src={social.icon} alt="sosyal medya ikonları" />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default PostSubscribeWindow;
