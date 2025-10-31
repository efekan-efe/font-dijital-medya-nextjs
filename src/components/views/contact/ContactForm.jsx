const ContactForm = () => {
  return (
    <div className="w-full flex flex-col gap-6 px-5 py-8 border border-primaryColor/50">
      <div>
        <h2 className="text-primaryColor font-bold text-3xl">Bize Ulaşın</h2>
        <p className="text-primaryBlack">Mesajınız bize iletildikten sonra sizlere en kısa sürede ulaşacağız.</p>
      </div>

      <div className="bg-primaryColor/25 w-full h-px"></div>

      <form action="POST" method="post" className="flex flex-col gap-5">
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium text-primaryColor" htmlFor="nameSurname">
            Ad Soyad
          </label>
          <input className="text-primaryBlack px-4 py-3 border border-primaryColor/50" placeholder="Ad Soyad" type="text" name="nameSurname" id="nameSurname" />
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium text-primaryColor" htmlFor="phoneNumber">
            Telefon Numarası
          </label>
          <input className="text-primaryBlack px-4 py-3 border border-primaryColor/50" placeholder="5XX XXX XX XX" type="tel" name="phoneNumber" id="phoneNumber" />
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium text-primaryColor" htmlFor="emailAddress">
            E-Posta Adresiniz
          </label>
          <input className="text-primaryBlack px-4 py-3 border border-primaryColor/50" placeholder="ornek@gmail.com" type="email" name="emailAddress" id="emailAddress" />
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium text-primaryColor" htmlFor="emailAddress">
            Mesajınız
          </label>
          <textarea rows={5} className="text-primaryBlack px-4 py-3 border border-primaryColor/50" placeholder="Mesajınızı yazınız..." name="emailAddress" id="emailAddress" />
        </div>

        <button className="bg-gradient-to-r from-primaryColor to-secondaryColor text-white text-lg py-4 cursor-pointer" type="submit">
          Mesaj Gönder
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
