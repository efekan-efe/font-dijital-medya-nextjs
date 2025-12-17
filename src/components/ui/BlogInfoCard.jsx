import { BookOpen, Clock, Shapes, UserRoundPen } from "lucide-react";

const BlogInfoCard = ({ author, date, category, readingTime }) => {
  // Gelen verileri array yapısına eşleştiriyoruz
  const infoCardData = [
    {
      icon: <Shapes className="stroke-primaryColor" />,
      title: "Kategori",
      value: category || "Genel", // Veri yoksa 'Genel' yazsın
      border: true,
    },
    {
      icon: <Clock className="stroke-primaryColor" />,
      title: "Yayınlanma Tarihi",
      value: date,
      border: true,
    },
    {
      icon: <UserRoundPen className="stroke-primaryColor" />,
      title: "Yazar",
      value: author || "Editör",
      border: true,
    },
    {
      icon: <BookOpen className="stroke-primaryColor" />,
      title: "Okuma Süresi",
      value: readingTime || "1 dk",
      border: false,
    },
  ];

  return (
    <div className="w-full flex flex-col gap-6">
      <div className="flex justify-start items-center gap-3">
        <h2 className="text-2xl font-medium text-primaryColor leading-8 whitespace-nowrap">Yazı Bilgileri</h2>
        <div className="w-full h-px bg-primaryColor"></div>
      </div>

      <div className="p-6 bg-[#DBD4F5]/25 rounded-xl border-1 border-primaryColor flex flex-col gap-2">
        {infoCardData.map((card, index) => (
          <div key={index} className={`w-full flex justify-start items-center py-2 ${card.border ? "border-b border-primaryColor/50 pb-1.5" : ""}`}>
            <div className="flex justify-start items-center gap-2 text-primaryBlack">
              <div className="flex justify-start items-center gap-1">
                {card.icon}
                <p className="text-primaryColor font-medium">{card.title}:</p>
              </div>
              <span className="text-sm font-medium">{card.value}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogInfoCard;
