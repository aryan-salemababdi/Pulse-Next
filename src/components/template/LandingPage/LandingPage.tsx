'use client';
import HeroSection from '@/components/organisme/HeroSection/HeroSection';
import InteractiveDashboard from '@/components/organisme/InteractiveDashboard/InteractiveDashboard';
import PricingSection from '@/components/organisme/PricingSection/PricingSection';
import ProblemSection from '@/components/organisme/ProblemSection/ProblemSection';
import RoadmapSection from '@/components/organisme/RoadmapSection/RoadmapSection';

const LandingPage = () => {
  return (
    <>
      <style>{`
                body { font-family: 'Vazirmatn', sans-serif; scroll-behavior: smooth; background-color: #f8f9fa; }
                .gradient-text { background: linear-gradient(to right, #1e3a8a, #3b82f6); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
                .chart-container { position: relative; height: 300px; width: 100%; max-width: 800px; background-color: white; border-radius: 12px; padding: 1.5rem; box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1); }
                .gauge-container { position: relative; height: 80px; width: 100%; background-color: white; border-radius: 12px; padding: 1rem; box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1); }
                .btn-scenario { transition: all 0.2s ease-in-out; }
                .btn-scenario.active { background-color: #1d4ed8; color: white; transform: scale(1.05); box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1); }
                .plan-card { transition: transform 0.3s, box-shadow 0.3s; }
                .plan-card:hover { transform: translateY(-10px); box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1); }
            `}</style>
      <main className="bg-gray-50 text-gray-800">
        <HeroSection />
        <ProblemSection />
        <InteractiveDashboard />
        <PricingSection />
        <RoadmapSection />
      </main>
    </>
  );
};

export default LandingPage;
