import Button from '@/components/atom/Button/Button';
import { CheckCircle } from 'lucide-react';

const ProblemSection = () => (
  <section className="w-full bg-gray-950 py-20 px-6">
    <div className="w-full max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
      <div>
        <span className="text-blue-400 font-semibold">THE PROBLEM</span>
        <h2 className="text-white text-4xl font-bold my-4">
          Legacy competitors sell you yesterday's news.
        </h2>
        <p className="text-gray-400 text-lg mb-6">
          Old tools (Cision/Meltwater) are expensive because they charge for TV
          & Radio coverage. But today's crises start on X (Twitter), not the 6
          PM news.
        </p>
        <ul className="space-y-3">
          <li className="flex items-center space-x-2">
            <CheckCircle className="w-5 h-5 text-red-500" />
            <span className="text-gray-300">
              Slow monitoring (hourly or daily)
            </span>
          </li>
          <li className="flex items-center space-x-2">
            <CheckCircle className="w-5 h-5 text-red-500" />
            <span className="text-gray-300">No real predictive analysis</span>
          </li>
          <li className="flex items-center space-x-2">
            <CheckCircle className="w-5 h-5 text-red-500" />
            <span className="text-gray-300">
              Can't distinguish bots from real anger
            </span>
          </li>
        </ul>
      </div>
      <div className="bg-gray-900 p-8 rounded-2xl border border-gray-700 shadow-xl">
        <h4 className="text-white text-2xl font-semibold mb-4">
          Pulse: The Modern Solution
        </h4>
        <p className="text-gray-400 mb-6">
          We cut the offline fluff to focus all our resources on providing the
          **fastest**, **smartest** *digital-only* monitoring platform at a
          competitive price.
        </p>
        <Button primary className="w-full">
          Why We're Better
        </Button>
      </div>
    </div>
  </section>
);

export default ProblemSection;
