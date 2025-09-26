'use client';
import { NextPage } from 'next';
import { Plan } from '@/app/types/plan';
import Button from '@/components/atom/Button/Button';

interface PricingCardProps {
  plan: Plan;
}

const PricingCard: NextPage<PricingCardProps> = ({ plan }) => {
  const tierClasses = {
    basic: 'border-gray-300',
    pro: 'border-blue-600',
    enterprise: 'border-gray-800',
  };
  const buttonClasses = {
    basic: 'bg-gray-200 text-gray-800 hover:bg-gray-300',
    pro: 'bg-blue-600 text-white hover:bg-blue-700',
    enterprise: 'bg-gray-800 text-white hover:bg-gray-900',
  };

  return (
    <div
      className={`plan-card bg-white p-8 rounded-lg shadow-lg border-t-4 relative flex flex-col ${tierClasses[plan.tier]}`}
    >
      {plan.isRecommended && (
        <span className="absolute top-0 right-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full">
          پیشنهادی
        </span>
      )}
      <div className="flex-1">
        <h3
          className={`text-2xl font-bold text-center ${plan.tier === 'pro' ? 'text-blue-600' : ''}`}
        >
          {plan.name}
        </h3>
        <p className="text-center text-gray-500 mt-2">{plan.description}</p>
        <p className="text-4xl font-extrabold text-center my-6">
          {plan.price}
          {plan.price !== 'تماس با ما' && (
            <span className="text-lg font-medium"> تومان/ماه</span>
          )}
        </p>
        <ul className="space-y-4 text-gray-700">
          {plan.features.map((feature, index) => (
            <li key={index} dangerouslySetInnerHTML={{ __html: feature }} />
          ))}
        </ul>
      </div>

      <Button
        className={`w-full mt-8 font-bold py-3 rounded-lg transition cursor-pointer ${buttonClasses[plan.tier]}`}
      >
        {plan.buttonText}
      </Button>
    </div>
  );
};

export default PricingCard;