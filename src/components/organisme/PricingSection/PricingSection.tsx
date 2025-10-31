import PricingCard from "@/components/molecule/PricingCard/PricingCard";
import { Briefcase, Building, Rocket } from "lucide-react";


const PricingSection = () => (
  <section id="pricing" className="w-full max-w-7xl mx-auto py-20 px-6">
    <h2 className="text-white text-4xl font-bold mb-4 text-center">
      Transparent, Powerful Pricing
    </h2>
    <p className="text-gray-400 text-xl text-center mb-12 max-w-2xl mx-auto">
      Choose the plan that matches your scale. Our Enterprise tools are built for competition.
    </p>
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
      {/* Small Business Plan */}
      <PricingCard
        plan="Small Business"
        price="99"
        description="For local businesses to monitor brand mentions and reviews."
        icon={Rocket}
        bgColor="bg-gray-600"
        features={[
          "5 Keywords",
          "24-Hour Monitoring (Daily)",
          "Google & X Monitoring",
          "Basic Reports",
          "Email Support",
        ]}
      />
      {/* Professional Plan */}
      <PricingCard
        plan="Professional"
        price="499"
        description="For growing companies and marketing agencies."
        icon={Briefcase}
        bgColor="bg-green-600"
        features={[
          "10 Keywords",
          "1-Hour Monitoring",
          "Includes AI Assistant (Summarizer)",
          "Advanced Sentiment Analysis",
          "Custom Reports",
        ]}
        popular={true}
      />
      {/* Enterprise Plan */}
      <PricingCard
        plan="Enterprise"
        price="2000"
        description="For MPs, government, and crisis management."
        icon={Building}
        bgColor="bg-blue-600"
        features={[
          "15+ Keywords",
          "5-Minute Monitoring (Real-time Pulse)",
          "All Features: AI Strategist",
          "Wave & Crisis Prediction",
          "Bot Tracker",
          "Hyper-local & Hansard Monitoring",
          "Dedicated 24/7 Support",
        ]}
      />
    </div>
  </section>
);


export default PricingSection;