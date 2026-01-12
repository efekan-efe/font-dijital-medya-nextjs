"use client";

import { useRef, useLayoutEffect } from "react";
// GSAP
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const ContactForm = () => {
  const container = useRef(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      // Form içi animasyonlar
      // Parent (page.jsx) zaten kutuyu getiriyor, burada içeriği anime ediyoruz

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container.current,
          start: "top 85%", // Form görünmeye başladığında
          toggleActions: "play none none reverse",
        },
      });

      tl.from(".form-header", { y: -20, opacity: 0, duration: 0.5, ease: "power2.out" }).from(".form-divider", { scaleX: 0, transformOrigin: "left", duration: 0.5, ease: "power2.out" }, "-=0.3").from(
        ".form-item",
        {
          y: 20,
          opacity: 0,
          duration: 0.5,
          stagger: 0.1, // Inputlar sırayla gelsin
          ease: "back.out(1.2)",
        },
        "-=0.2"
      );
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={container} className="w-full flex flex-col gap-6 px-5 py-8 border border-primaryColor/50 bg-white rounded-2xl shadow-sm">
      <div className="form-header">
        <h2 className="text-primaryColor font-bold text-3xl">Bize Ulaşın</h2>
        <p className="text-primaryBlack">Mesajınız bize iletildikten sonra sizlere en kısa sürede ulaşacağız.</p>
      </div>

      <div className="form-divider bg-primaryColor/25 w-full h-px"></div>

      <form action="POST" method="post" className="flex flex-col gap-5">
        <div className="form-item flex flex-col gap-2">
          <label className="text-sm font-medium text-primaryColor" htmlFor="nameSurname">
            Ad Soyad
          </label>
          <input className="text-primaryBlack px-4 py-3 border border-primaryColor/50 rounded-lg outline-primaryColor transition-all focus:ring-2 focus:ring-primaryColor/20" placeholder="Ad Soyad" type="text" name="nameSurname" id="nameSurname" />
        </div>

        <div className="form-item flex flex-col gap-2">
          <label className="text-sm font-medium text-primaryColor" htmlFor="phoneNumber">
            Telefon Numarası
          </label>
          <input
            className="text-primaryBlack px-4 py-3 border border-primaryColor/50 rounded-lg outline-primaryColor transition-all focus:ring-2 focus:ring-primaryColor/20"
            placeholder="5XX XXX XX XX"
            type="tel"
            name="phoneNumber"
            id="phoneNumber"
          />
        </div>

        <div className="form-item flex flex-col gap-2">
          <label className="text-sm font-medium text-primaryColor" htmlFor="emailAddress">
            E-Posta Adresiniz
          </label>
          <input
            className="text-primaryBlack px-4 py-3 border border-primaryColor/50 rounded-lg outline-primaryColor transition-all focus:ring-2 focus:ring-primaryColor/20"
            placeholder="ornek@gmail.com"
            type="email"
            name="emailAddress"
            id="emailAddress"
          />
        </div>

        <div className="form-item flex flex-col gap-2">
          <label className="text-sm font-medium text-primaryColor" htmlFor="message">
            Mesajınız
          </label>
          <textarea
            rows={5}
            className="text-primaryBlack px-4 py-3 border border-primaryColor/50 rounded-lg outline-primaryColor transition-all focus:ring-2 focus:ring-primaryColor/20 resize-none"
            placeholder="Mesajınızı yazınız..."
            name="message"
            id="message"
          />
        </div>

        <button className="form-item bg-gradient-to-r from-primaryColor to-secondaryColor text-white text-lg py-4 cursor-pointer rounded-lg hover:shadow-lg transition-shadow font-semibold" type="submit">
          Mesaj Gönder
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
