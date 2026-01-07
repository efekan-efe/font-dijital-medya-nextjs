import BlogSection from "@/components/views/home/BlogSection";
import FeaturesSection from "@/components/views/home/FeaturesSection";
import GoogleReviews from "@/components/views/home/GoogleReviews";
import HeroSection from "@/components/views/home/HeroSection";
import ProcessSection from "@/components/views/home/ProcessSection";

export default function HomePage() {
  return (
    // homepageMain class'ı globals.css'te sectionları hedeflemek için hala gerekli
    <main className="homepageMain flex flex-col pt-5">
      {/* Sectionların CSS'te zaten height: 100vh ve snap-align: start özelliği var */}
      <HeroSection />
      <FeaturesSection />
      <ProcessSection />
      <BlogSection />
      <GoogleReviews />
    </main>
  );
}
