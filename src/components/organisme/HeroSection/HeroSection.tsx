import Image from 'next/image';
import Button from '@/components/atom/Button/Button';


const HeroSection = () => (
  <section className="w-full max-w-7xl mx-auto py-20 md:py-32 px-6 text-center">
    <h1 className="text-white text-5xl md:text-7xl font-bold mb-6 leading-tight">
      Your Media War Room, <span className="text-blue-500">AI-Powered</span>
    </h1>
    <p className="text-gray-400 text-xl md:text-2xl max-w-3xl mx-auto mb-10">
      Predict crises before they happen. We monitor the digital pulse (Google &
      X) every 5 minutes and tell you how to respond.
    </p>
    <div className="flex justify-center items-center space-x-4">
      <Button primary className="px-8 py-4 text-lg">
        Request Demo
      </Button>
      <Button className="px-8 py-4 text-lg">See Plans</Button>
    </div>
    <div className="mt-20 flex justify-center">
      <Image
        src="/Pulse-Banner.jpg"
        alt="Pulse Dashboard"
        width={1000}
        height={1000}
        className="rounded-2xl border-2 border-gray-700 shadow-2xl shadow-blue-900/40"
      />
    </div>
  </section>
);

export default HeroSection;
