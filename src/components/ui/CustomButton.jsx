import { twMerge } from "tailwind-merge";
import Image from "next/image";

const variants = {
  header: "bg-secondaryColor rounded-full text-white", // Header && Tek renk
  filledButton: "bg-gradient-to-r from-primaryColor to-secondaryColor text-white rounded-full text-lg", // Dolu Hero Butonu
  emptyButton: "bg-transparent text-primaryColor border-2 border-primaryColor rounded-full text-lg",
};

const sizes = {
  md: "p-3 px-5", // Header && Tek renk
  lg: "px-6 py-3", // Hero Butonları
};

const CustomButton = ({ children, className, rightComponent, leftComponent, variant = "header", size = "md", iconLeft: IconLeft, iconRight: IconRight, imageLeft: imageLeft, imageRight: imageRight }) => {
  return (
    <button className={twMerge("w-fit flex justify-center items-center gap-2 cursor-pointer whitespace-nowrap font-medium", variants[variant], sizes[size], className)}>
      {imageLeft && <Image src={imageLeft} className="w-5 h-5" />}
      {IconLeft && <IconLeft className="w-5 h-5" />}
      {leftComponent && leftComponent}
      {children}
      {imageRight && <Image src={imageRight} className="w-5 h-5" />}
      {IconRight && <IconRight className="w-5 h-5" />}
      {rightComponent && rightComponent}
    </button>
  );
};

export { CustomButton };
