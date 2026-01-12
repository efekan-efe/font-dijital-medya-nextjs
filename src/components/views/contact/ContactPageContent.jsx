"use client"; // Animasyonlar olduğu için burası Client Component kalacak

import { useRef, useLayoutEffect } from "react";
import Breadcrumb from "@/components/shared/Breadcrumb";
import ContactForm from "@/components/views/contact/ContactForm";
import SocialMediaPanel from "@/components/views/contact/SocialMediaPanel";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const ContactPageContent = () => {
  const container = useRef(null);

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

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });

      tl.from(".contact-left-col", {
        x: -50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      }).from(
        ".contact-map-col",
        {
          x: 50,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
        },
        "-=0.8"
      );
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={container} className="font-inter pb-10 px-2">
      <Breadcrumb badgeContent={badgeContent} titleContent={titleContent} />
      <div className="max-w-7xl mx-auto flex justify-center items-start gap-8 mt-10 max-[1130px]:flex-col">
        <div className="contact-left-col w-full flex flex-col gap-8">
          <ContactForm />
          <SocialMediaPanel />
        </div>
        <div className="contact-map-col w-full h-full">
          <iframe
            className="w-full min-h-[1220px] max-[1130px]:min-h-96 rounded-2xl shadow-lg border border-primaryColor/20"
            src="https://www.google.com/maps/embed?..." // Buraya kendi embed linkini koy
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactPageContent;
