import Image from "next/image";
import blogDetay1 from "@/assets/blog/images/blog_detay_1.webp";
import blogDetay2 from "@/assets/blog/images/blog_detay_2.webp";
import PostCategoryBadge from "@/components/ui/PostCategoryBadge";
import { Check } from "lucide-react";

const BlogContent = () => {
  return (
    <div className="w-full flex flex-col gap-4 font-inter">
      <Image className="w-full h-full rounded-xl max-h-[400px] object-cover" src={blogDetay1} alt="Blog Detay 1" />
      <div className="flex justify-start items-center gap-3">
        <PostCategoryBadge category="Web Tasarım" blank={true} />
        <PostCategoryBadge category="SEO Optimizasyonu" blank={true} />
      </div>

      <div className="flex flex-col gap-4 text-primaryBlack leading-6">
        <h1 className="font-medium text-3xl leading-8">2025’te Dijital Pazarlama Trendleri: Yeni Dönemin Oyunu Değişti!</h1>
        <p>
          Dijital pazarlama her yıl olduğu gibi 2025’te de yerinde durmuyor. Yapay zeka, kısa video içerikler, mikro influencer’lar ve kişiselleştirilmiş deneyimler derken markalar artık kullanıcıya “nasıl görünürüm?” değil “nasıl hatırlanırım?” diye
          sormaya başladı. Bu yılın mottosu belli: otantiklik ve veriyle güçlenen yaratıcılık.
        </p>
        <p>
          Klasik pazarlama yöntemleri hâlâ bir yere kadar işe yarasa da, kullanıcıların beklentisi artık çok daha farklı. İnsanlar markaların “sadece satmak” değil, “anlamak” istediğini görmek istiyor. 2025’te fark yaratmak istiyorsan, her şeyden
          önce hikâye anlatımına, topluluk oluşturmaya ve kişisel deneyimlere odaklanmak şart.
        </p>
        <h1 className="font-medium text-3xl leading-8">2025’te Öne Çıkacak Dijital Pazarlama Yaklaşımları</h1>
        <p>Bu yıl pazarlama dünyasında kartlar yeniden karılıyor. Teknoloji gelişiyor ama insan dokunuşu hâlâ her şeyin merkezinde. İşte markaların 2025’te başarıya ulaşmak için gözden kaçırmaması gereken başlıca trendler:</p>
        <Image className="w-full h-full rounded-xl" src={blogDetay2} alt="Blog Detay 2" />
        <ul className="flex flex-col gap-3">
          <li className="flex justify-start items-center gap-3 border-b border-[#D6D6D6] pb-2">
            <Check />
            <p>Artık reklamlar sadece demografik verilere göre değil, davranışsal verilere göre şekilleniyor.</p>
          </li>
          <li className="flex justify-start items-center gap-3 border-b border-[#D6D6D6] pb-2">
            <Check />
            <p>TikTok ve Reels etkisiyle 15 saniyede hikâye anlatmak bir sanata dönüştü.</p>
          </li>
          <li className="flex justify-start items-center gap-3 border-b border-[#D6D6D6] pb-2">
            <Check />
            <p>Mega isimler yerini daha samimi, niş topluluklara hitap eden mikro influencer’lara bırakıyor.</p>
          </li>
          <li className="flex justify-start items-center gap-3 border-b border-[#D6D6D6] pb-2">
            <Check />
            <p>Tüketici artık “marka ne kadar çevre dostu?” sorusunu soruyor.</p>
          </li>
        </ul>
        <p>
          2025, markalar için hem fırsat hem de sınav yılı olacak. Algoritmalar, yapay zeka ve veri analitiği hızla gelişirken, kullanıcıların duygusal bağı hiç olmadığı kadar önem kazanıyor. Kısacası; “insan” odaklı, veriyle desteklenen, samimi ve
          sürdürülebilir bir strateji kuranlar bu yılın kazananı olacak.
        </p>
      </div>
    </div>
  );
};

export default BlogContent;
