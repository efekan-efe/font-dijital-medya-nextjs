import { PanelsTopLeft, Sparkle, SearchCheck } from "lucide-react";

const PostCategoryBadge = ({ icon: Icon, category = "Web Tasarım" }) => {
  if (category === "Web Tasarım") {
    Icon = PanelsTopLeft;
  } else if (category === "SEO Optimizasyonu") {
    Icon = SearchCheck;
  } else {
    Icon = Sparkle;
  }

  return (
    <div className="w-fit bg-softPink rounded-full px-2.5 py-1 text-primaryColor">
      <div className="flex justify-start items-center gap-1">
        <Icon className="text-primaryColor w-4 h-4" />
        <p className="font-medium text-xs">{category}</p>
      </div>
    </div>
  );
};

export default PostCategoryBadge;
