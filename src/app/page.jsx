import FeaturesSection from "@/components/views/home/FeaturesSection";
import HeroSection from "@/components/views/home/HeroSection";
import ProcessSection from "@/components/views/home/ProcessSection";
import ServiceBlocks from "@/components/views/home/ServiceBlocks";

export default function HomePage() {
  return (
    <main className="flex flex-col items-center justify-center gap-8">
      <HeroSection />
      <FeaturesSection />
      <ProcessSection />
      <ServiceBlocks />
    </main>
  );
}
