import { twMerge } from "tailwind-merge";
import Image from "next/image";
import Link from "next/link";

const variants = {
  header: "bg-secondaryColor rounded-full text-white",
  filledButton: "bg-gradient-to-r from-primaryColor to-secondaryColor text-white rounded-full text-lg",
  emptyButton: "bg-transparent text-primaryColor border-2 border-primaryColor rounded-full text-lg",
};

const sizes = {
  md: "p-3 px-5",
  lg: "px-6 py-3",
};

const CustomButton = ({ children, className, rightComponent, leftComponent, variant = "header", size = "md", iconLeft: IconLeft, iconRight: IconRight, imageLeft, imageRight, href }) => {
  // Combine all classes into one variable so we can use it for both Button and Link
  const combinedClasses = twMerge("w-fit flex justify-center items-center gap-2 cursor-pointer whitespace-nowrap font-medium", variants[variant], sizes[size], className);

  // Define the inner content to avoid code duplication
  const content = (
    <>
      {imageLeft && <Image src={imageLeft} className="w-5 h-5" alt="icon" />}
      {IconLeft && <IconLeft className="w-5 h-5" />}
      {leftComponent && leftComponent}
      {children}
      {imageRight && <Image src={imageRight} className="w-5 h-5" alt="icon" />}
      {IconRight && <IconRight className="w-5 h-5" />}
      {rightComponent && rightComponent}
    </>
  );

  // 3. Conditional Rendering: If href exists, return Link, otherwise return button
  if (href) {
    return (
      <Link href={href} className={combinedClasses}>
        {content}
      </Link>
    );
  }

  return <button className={combinedClasses}>{content}</button>;
};

export { CustomButton };
