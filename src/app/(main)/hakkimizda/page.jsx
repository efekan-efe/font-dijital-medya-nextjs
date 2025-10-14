// src/app/(main)/hakkimizda/page.jsx

import TeamSection from "@/components/views/about/TeamSection";
import TestimonialsSection from "@/components/shared/TestimonialsSection";
import CtaSection from "@/components/shared/CtaSection";

export default function AboutUsPage() {
  return (
    <>
      <TeamSection /> {/* Sadece bu sayfaya özel ekip bölümü */}
      <TestimonialsSection /> {/* Diğer sayfalarda da kullanılan yorumlar bölümü */}
      <CtaSection /> {/* Diğer sayfalarda da kullanılan "Teklif Al" bölümü */}
    </>
  );
}
