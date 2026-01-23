import TemplateShowcase from "@/components/views/showcase/TemplateShowcase";
import Breadcrumb from "@/components/shared/Breadcrumb";

export const metadata = {
  title: "Sektörel Web Tasarım Galerisi",
  description: "Diş hekimi, inşaat, emlak, avukat ve diğer sektörler için özel hazırlanmış, mobil uyumlu ve SEO dostu web sitesi tasarımlarımızı inceleyin.",
};

export default function SektorelCozumlerPage() {
  const badgeContent = (
    <p className="text-primaryBlack w-full font-medium">
      <span className="text-primaryColor px-1">Dijital Dünya’daki</span>
      İlk Adımınız
    </p>
  );
  const titleContent = (
    <>
      Sektörel Web Tasarım <br />
      <span className="text-primaryColor px-1">Çözümlerimiz</span>
    </>
  );
  return (
    <main className="flex flex-col items-center justify-center gap-5">
      <Breadcrumb badgeContent={badgeContent} titleContent={titleContent} />
      <TemplateShowcase />
    </main>
  );
}
