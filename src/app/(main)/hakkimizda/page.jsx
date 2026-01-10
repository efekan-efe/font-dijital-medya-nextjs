import ReferenceSlider from "@/components/shared/ReferenceSlider";
import InfoSection from "@/components/views/about/InfoSection";
import WorkRules from "@/components/views/about/WorkRules";
import GoogleReviews from "@/components/views/home/GoogleReviews";

export default function Hakkimizda() {
  return (
    <main className="flex flex-col items-center justify-center gap-10 mt-5">
      <InfoSection />
      <WorkRules />
      <GoogleReviews />
      <ReferenceSlider />
    </main>
  );
}
