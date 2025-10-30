import { PanelsTopLeft, Sparkle, SearchCheck } from "lucide-react";

const PostCategoryBadge = ({ icon: Icon, category = "Web Tasarım", blank = false }) => {
  if (category === "Web Tasarım") {
    Icon = PanelsTopLeft;
  } else if (category === "SEO Optimizasyonu") {
    Icon = SearchCheck;
  } else {
    Icon = Sparkle;
  }

  return (
    <div className={`w-fit rounded-full px-2.5 py-1 ${blank ? "bg-white text-primaryBlack border border-black/25 text-sm" : "text-xs text-primaryColor bg-softPink"}`}>
      <div className="flex justify-start items-center gap-1">
        <Icon className="text-primaryColor w-4 h-4" />
        <p className="font-medium">{category}</p>
      </div>
    </div>
  );
};

export default PostCategoryBadge;
