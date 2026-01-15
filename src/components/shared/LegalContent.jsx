import Breadcrumb from "@/components/shared/Breadcrumb";

const LegalContent = ({ title, content, date }) => {
  // Breadcrumb İçeriği
  const badgeContent = (
    <p className="text-primaryBlack w-full font-medium">
      <span className="text-primaryColor px-1">Kurumsal</span>
      Politikalarımız
    </p>
  );

  const titleContent = <span className="text-primaryColor">{title}</span>;

  return (
    <section className="w-full font-inter pb-20">
      {/* Üst Başlık Alanı */}
      <Breadcrumb badgeContent={badgeContent} titleContent={titleContent} />

      {/* İçerik Alanı */}
      <div className="max-w-4xl mx-auto px-4 mt-10">
        {/* Güncelleme Tarihi (Varsa) */}
        {date && <p className="text-sm text-gray-500 mb-6 text-right italic">Son Güncelleme: {new Date(date).toLocaleDateString("tr-TR")}</p>}

        {/* GÜZELLEŞTİRME SİHRİ BURADA: 'prose' sınıfı 
            Bu sınıf WP'den gelen çirkin HTML'i otomatik tasarlar.
        */}
        <article
          className="prose prose-lg max-w-none 
          prose-headings:text-primaryColor prose-headings:font-bold 
          prose-p:text-gray-600 prose-p:leading-relaxed
          prose-li:text-gray-600
          prose-strong:text-primaryBlack
          
          /* Alıntıları (Quote) o görseldeki renkli kutulara çevirelim */
          prose-blockquote:bg-blue-50 prose-blockquote:border-l-4 prose-blockquote:border-primaryColor prose-blockquote:py-4 prose-blockquote:px-6 prose-blockquote:rounded-r-lg prose-blockquote:not-italic prose-blockquote:text-gray-700
          "
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </div>
    </section>
  );
};

export default LegalContent;
