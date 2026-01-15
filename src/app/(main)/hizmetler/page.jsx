import Breadcrumb from "@/components/shared/Breadcrumb";
import ReferenceSlider from "@/components/shared/ReferenceSlider";
import OurServices from "@/components/views/home/OurServices";

// 1. VERİ ÇEKME FONKSİYONU
// (Hem Metadata hem de Sayfa İçeriği tarafından kullanılır)
async function getPageSeo() {
  const res = await fetch("https://portal.fontdijitalmedya.com/wp-json/wp/v2/pages?slug=hizmetler&_embed", {
    next: { revalidate: 60 },
  });

  if (!res.ok) return null;

  const pages = await res.json();
  return pages[0];
}

// 2. METADATA (Aynen Kalıyor)
export async function generateMetadata() {
  const pageData = await getPageSeo();

  if (!pageData) {
    return {
      title: "Hizmetlerimiz - Font Dijital Medya",
      description: "Profesyonel dijital çözümler.",
    };
  }

  const seo = pageData.yoast_head_json || pageData.head_json;

  if (seo) {
    return {
      title: seo.title,
      description: seo.description || seo.og_description,
      openGraph: {
        title: seo.og_title || seo.title,
        description: seo.og_description || seo.description,
        url: "https://fontdijitalmedya.com/hizmetler",
        siteName: seo.og_site_name || "Font Dijital Medya",
        locale: "tr_TR",
        type: "website",
        images: seo.og_image
          ? seo.og_image.map((img) => ({
              url: img.url,
              width: img.width,
              height: img.height,
              alt: img.alt || seo.title,
            }))
          : [],
      },
      robots: {
        index: seo.robots?.index !== "noindex",
        follow: seo.robots?.follow !== "nofollow",
      },
    };
  }
}

// 3. SAYFA BİLEŞENİ (GÜNCELLENEN KISIM)
export default async function Hizmetler() {
  // Veriyi burada da çekiyoruz
  const pageData = await getPageSeo();
  const acf = pageData?.acf || {};
  const hizmetler_kucuk_baslik = acf.hizmetler_kucuk_baslik || '<span class="text-primaryColor px-1">Dijital Dünya’daki</span> İlk Adımınız';

  const hizmetler_buyuk_baslik = acf.hizmetler_buyuk_baslik || '<span class="text-primaryColor px-1">Dijital Başarınız</span> için <br /> Performans Odaklı <span class="text-primaryColor px-1">Web Çözümleri</span>';

  // 2. HTML Olarak İşle (Breadcrumb için)
  const badgeContent = <p className="text-primaryBlack w-full font-medium" dangerouslySetInnerHTML={{ __html: hizmetler_kucuk_baslik }} />;

  const titleContent = <div dangerouslySetInnerHTML={{ __html: hizmetler_buyuk_baslik }} />;

  return (
    <main className="flex flex-col items-center justify-center gap-10 w-full font-inter">
      {/* Dinamik başlıkları gönderiyoruz */}
      <Breadcrumb badgeContent={badgeContent} titleContent={titleContent} />

      {/* İstersen OurServices'e de data gönderip oradaki hizmet listesini de dinamik yapabilirsin */}
      <OurServices data={acf} />

      <ReferenceSlider />
    </main>
  );
}
