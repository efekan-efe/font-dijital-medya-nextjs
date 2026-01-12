"use client";

import { useRef, useLayoutEffect, useState } from "react";
// Server Action
import { sendContact } from "@/actions/sendContact";
// Icons
import { Loader2, CheckCircle2 } from "lucide-react";
// GSAP
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const ContactForm = () => {
  const container = useRef(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState(null); // null | 'success' | 'error'

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      // Form içi animasyonlar
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      });

      tl.from(".form-header", { y: -20, opacity: 0, duration: 0.5, ease: "power2.out" }).from(".form-divider", { scaleX: 0, transformOrigin: "left", duration: 0.5, ease: "power2.out" }, "-=0.3").from(
        ".form-item",
        {
          y: 20,
          opacity: 0,
          duration: 0.5,
          stagger: 0.1,
          ease: "back.out(1.2)",
        },
        "-=0.2"
      );
    }, container);

    return () => ctx.revert();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setFormStatus(null);

    const formData = new FormData(event.target);
    const result = await sendContact(formData);

    if (result.success) {
      setFormStatus("success");
      event.target.reset();
      // Başarı mesajını biraz gösterdikten sonra formu sıfırlamak istersen buraya setTimeout koyabilirsin.
      // Ben şu an kalıcı başarı ekranı gösteriyorum, kullanıcı sayfayı yenilerse form geri gelir.
    } else {
      setFormStatus("error");
      alert(result.message);
    }
    setIsSubmitting(false);
  };

  return (
    <div ref={container} className="w-full min-h-[500px] flex flex-col gap-6 px-5 py-8 border border-primaryColor/50 bg-white rounded-2xl shadow-sm transition-all duration-300">
      {/* BAŞARILI GÖNDERİM DURUMU */}
      {formStatus === "success" ? (
        <div className="flex flex-col items-center justify-center h-full gap-4 text-center animate-in fade-in zoom-in py-20">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center">
            <CheckCircle2 className="w-10 h-10 text-green-600" />
          </div>
          <h2 className="text-2xl font-bold text-gray-800">Mesajınız Alındı!</h2>
          <p className="text-gray-600 max-w-sm">Bizimle iletişime geçtiğiniz için teşekkür ederiz. Ekibimiz mesajınızı inceleyip en kısa sürede size dönüş yapacaktır.</p>
          <button onClick={() => setFormStatus(null)} className="mt-4 text-primaryColor font-medium hover:underline">
            Yeni bir mesaj gönder
          </button>
        </div>
      ) : (
        /* NORMAL FORM DURUMU */
        <>
          <div className="form-header">
            <h2 className="text-primaryColor font-bold text-3xl">Bize Ulaşın</h2>
            <p className="text-primaryBlack">Mesajınız bize iletildikten sonra sizlere en kısa sürede ulaşacağız.</p>
          </div>

          <div className="form-divider bg-primaryColor/25 w-full h-px"></div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <div className="form-item flex flex-col gap-2">
              <label className="text-sm font-medium text-primaryColor" htmlFor="nameSurname">
                Ad Soyad
              </label>
              <input
                required
                className="text-primaryBlack px-4 py-3 border border-primaryColor/50 rounded-lg outline-primaryColor transition-all focus:ring-2 focus:ring-primaryColor/20"
                placeholder="Ad Soyad"
                type="text"
                name="nameSurname"
                id="nameSurname"
              />
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
                required
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
                required
                rows={5}
                className="text-primaryBlack px-4 py-3 border border-primaryColor/50 rounded-lg outline-primaryColor transition-all focus:ring-2 focus:ring-primaryColor/20 resize-none"
                placeholder="Mesajınızı yazınız..."
                name="message"
                id="message"
              />
            </div>

            <button
              disabled={isSubmitting}
              className="form-item bg-gradient-to-r from-primaryColor to-secondaryColor text-white text-lg py-4 cursor-pointer rounded-lg hover:shadow-lg transition-shadow font-semibold flex justify-center items-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
              type="submit"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" /> Gönderiliyor...
                </>
              ) : (
                "Mesaj Gönder"
              )}
            </button>
          </form>
        </>
      )}
    </div>
  );
};

export default ContactForm;
