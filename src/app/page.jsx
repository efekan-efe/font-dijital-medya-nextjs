import BlogSection from "@/components/views/home/BlogSection";
import FeaturesSection from "@/components/views/home/FeaturesSection";
import GoogleReviews from "@/components/views/home/GoogleReviews";
import HeroSection from "@/components/views/home/HeroSection";
import OurServices from "@/components/views/home/OurServices";

export default function HomePage() {
  return (
    // homepageMain class'ı globals.css'te sectionları hedeflemek için hala gerekli
    <main className="homepageMain flex flex-col">
      {/* Sectionların CSS'te zaten height: 100vh ve snap-align: start özelliği var */}
      <HeroSection />
      <GoogleReviews />
      <OurServices />
      <FeaturesSection />
      <BlogSection />
    </main>
  );
}
