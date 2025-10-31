import Breadcrumb from "@/components/shared/Breadcrumb";
import ContactForm from "@/components/views/contact/ContactForm";
import SocialMediaPanel from "@/components/views/contact/SocialMediaPanel";

export default function İletisim() {
  const badgeContent = (
    <p className="text-primaryBlack w-full font-medium">
      <span className="text-primaryColor px-1">Dijital Dünya’daki</span>
      Dostunuz
    </p>
  );
  const titleContent = (
    <>
      Dijital Dönüşümüzün İlk Adımı için <br />
      <span className="text-primaryColor px-1">Bize Ulaşın</span>
    </>
  );

  return (
    <div className="font-inter pb-10 px-2">
      <Breadcrumb badgeContent={badgeContent} titleContent={titleContent} />
      <div className="max-w-7xl mx-auto flex justify-center items-start gap-8 mt-10 max-[1130px]:flex-col">
        <div className="w-full flex flex-col gap-8">
          <ContactForm />
          <SocialMediaPanel />
        </div>
        <div className="w-full h-full">
          <iframe
            className="w-full min-h-[1220px] max-[1130px]:min-h-96"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3186.313996484279!2d35.32314200892759!3d37.00230483349505!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15288f6ab7a8b87f%3A0xde5177949b03cab5!2sGazipa%C5%9Fa%20Blv.%2C%20Seyhan%2FAdana!5e0!3m2!1sen!2str!4v1761918948561!5m2!1sen!2str"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

/* 

*/
