import FeatureCard from '@/components/molecule/FeatureCard/FeatureCard';
import {
  BarChart,
  BrainCircuit,
  Link2,
  MapPin,
  ShieldCheck,
  TrendingUp,
} from 'lucide-react';

const FeaturesSection = () => (
  <section id="features" className="w-full max-w-7xl mx-auto py-20 px-6">
    <h2 className="text-white text-4xl font-bold mb-4 text-center">
      One Platform, Every Exclusive Advantage
    </h2>
    <p className="text-gray-400 text-xl text-center mb-12 max-w-2xl mx-auto">
      You won't find these in Cision or Meltwater. We are a next-generation tool
      for the digital war room.
    </p>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <FeatureCard
        icon={BrainCircuit}
        title="AI Strategist Assistant"
        description="Our AI doesn't just summarize; it provides 'Strategic Advice' for how to respond during a crisis, based on the data."
        bgColor="bg-blue-600"
      />
      <FeatureCard
        icon={TrendingUp}
        title="Wave & Crisis Prediction"
        description="Before a story goes viral, our system detects the pattern and alerts you to a forming media wave (positive or negative)."
        bgColor="bg-green-600"
      />
      <FeatureCard
        icon={ShieldCheck}
        title="Bot Tracker"
        description="Distinguish between real public anger and a coordinated, inauthentic bot attack. (Enterprise Plan feature)"
        bgColor="bg-purple-600"
      />
      <FeatureCard
        icon={MapPin}
        title="Hyper-Local Monitoring"
        description="Beyond Google, we monitor your constituency's local newspapers, political blogs, and city Subreddits."
        bgColor="bg-pink-600"
      />
      <FeatureCard
        icon={Link2}
        title="Hansard (Parliament) Link"
        description="We connect discussions from the parliament floor (Hansard) to real-time reactions on X (Twitter) for a 360° view."
        bgColor="bg-yellow-600"
      />
      <FeatureCard
        icon={BarChart}
        title="5-Minute Speed"
        description="We check the digital pulse every 5 minutes. Competitors do it every few hours. In a crisis, minutes matter."
        bgColor="bg-red-600"
      />
    </div>
  </section>
);

export default FeaturesSection;
