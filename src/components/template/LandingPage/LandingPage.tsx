import FeaturesSection from "@/components/organisme/FeaturesSection/FeaturesSection";
import FinalCTASection from "@/components/organisme/FinalCTASection/FinalCTASection";
import HeroSection from "@/components/organisme/HeroSection/HeroSection";
import PricingSection from "@/components/organisme/PricingSection/PricingSection";
import ProblemSection from "@/components/organisme/ProblemSection/ProblemSection";
import SocialProofSection from "@/components/organisme/SocialProofSection/SocialProofSection";
import AnimatedSection from "@/components/atom/AnimatedSection/AnimatedSection";

export default function App() {
  return (
    <>
      <AnimatedSection>
        <HeroSection />
      </AnimatedSection>

      <AnimatedSection delay={0.1}>
        <ProblemSection />
      </AnimatedSection>

      <AnimatedSection delay={0.2}>
        <FeaturesSection />
      </AnimatedSection>

      <AnimatedSection delay={0.3}>
        <SocialProofSection />
      </AnimatedSection>

      <AnimatedSection delay={0.4}>
        <PricingSection />
      </AnimatedSection>

      <AnimatedSection delay={0.5}>
        <FinalCTASection />
      </AnimatedSection>
    </>
  );
}