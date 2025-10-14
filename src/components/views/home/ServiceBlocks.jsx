import ServiceBlock from "@/components/ui/ServiceBlock";
import TitleBadge from "@/components/ui/TitleBadge";
import ServiceBlockImg_1 from "@/assets/homepage/images/serviceBlockImg_1.png";
import ServiceBlockImg_2 from "@/assets/homepage/images/serviceBlockImg_2.png";
import ServiceBlockImg_3 from "@/assets/homepage/images/serviceBlockImg_3.png";

const features = [
  {
    badgeTitle: `<span class="text-primaryColor">Dijital Dünya'da </span> Yerinizi Alın!`,
    normalBadgeTitle: "Yeriniz Alın",
    coloredBadgeTitle: "Dijital Dünya'da",
    imageSrc: ServiceBlockImg_1,
    imageAlt: "Performans odaklı reklam stratejileri",
    imagePosition: "right",
    title: "Performans Odaklı Reklam Stratejileriyle Yatırımınızı Büyütün",
    description: [
      "İşinizin dijitalde sağlam adımlarla büyümesi için ihtiyaç duyduğunuz tüm stratejik destek burada.",
      "E-ticaret danışmanlığı, reklam stratejisi oluşturma, hedef kitle ve rakip analizi gibi hizmetlerle işletmenizin dijital yol haritasını birlikte şekillendiriyoruz.",
      "Web sitesi ve sosyal medya varlıklarınız için satış artırıcı öneriler sunuyor, her adımda veriye dayalı büyüme stratejileri geliştiriyoruz.",
      "GA4, Tag Manager ve dönüşüm hunisi takibi gibi araçlarla web analitik altyapınızı kuruyor, özel dashboard'larla kampanyalarınızı ölçülebilir hale getiriyoruz.",
    ],
  },
  {
    badgeTitle: `<span class="text-primaryColor">Dijital Dünya'da </span> Yerinizi Alın!`,
    imageSrc: ServiceBlockImg_2,
    imageAlt: "Veriye dayalı reklam optimizasyonu",
    imagePosition: "left",
    title: "Performans Odaklı Reklam Stratejileriyle Yatırımınızı Büyütün",
    description: [
      "İşinizin dijitalde sağlam adımlarla büyümesi için ihtiyaç duyduğunuz tüm stratejik destek burada.",
      "E-ticaret danışmanlığı, reklam stratejisi oluşturma, hedef kitle ve rakip analizi gibi hizmetlerle işletmenizin dijital yol haritasını birlikte şekillendiriyoruz.",
    ],
  },
  {
    badgeTitle: `<span class="text-primaryColor">Dijital Dünya'da </span> Yerinizi Alın!`,
    imageSrc: ServiceBlockImg_3,
    imageAlt: "Performans odaklı reklam stratejileri",
    imagePosition: "right",
    title: "Performans Odaklı Reklam Stratejileriyle Yatırımınızı Büyütün",
    description: [
      "İşinizin dijitalde sağlam adımlarla büyümesi için ihtiyaç duyduğunuz tüm stratejik destek burada.",
      "E-ticaret danışmanlığı, reklam stratejisi oluşturma, hedef kitle ve rakip analizi gibi hizmetlerle işletmenizin dijital yol haritasını birlikte şekillendiriyoruz.",
      "Web sitesi ve sosyal medya varlıklarınız için satış artırıcı öneriler sunuyor, her adımda veriye dayalı büyüme stratejileri geliştiriyoruz.",
      "GA4, Tag Manager ve dönüşüm hunisi takibi gibi araçlarla web analitik altyapınızı kuruyor, özel dashboard'larla kampanyalarınızı ölçülebilir hale getiriyoruz.",
    ],
  },
];

const ServiceBlocks = () => {
  return (
    <section className="container mx-auto px-4 py-20">
      <div className="flex flex-col gap-y-24">
        {features.map((feature, index) => (
          <ServiceBlock
            key={index}
            imageSrc={feature.imageSrc}
            imageAlt={feature.imageAlt}
            imagePosition={feature.imagePosition}
            title={feature.title}
            badgeContent={
              <TitleBadge>
                <p className="w-fit text-primaryBlack font-medium" dangerouslySetInnerHTML={{ __html: feature.badgeTitle }}></p>
              </TitleBadge>
            }
          >
            {feature.description.map((paragraph, pIndex) => (
              <p key={pIndex}>{paragraph}</p>
            ))}
          </ServiceBlock>
        ))}
      </div>
    </section>
  );
};

export default ServiceBlocks;
