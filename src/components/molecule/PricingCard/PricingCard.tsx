import Button from "@/components/atom/Button/Button";
import { CheckCircle } from "lucide-react";

const PricingCard = ({ plan, price, description, icon: Icon, bgColor, features, popular = false }: any) => (
  <div className={`bg-gray-900 border ${popular ? 'border-blue-500 shadow-blue-600/30' : 'border-gray-700'} rounded-2xl p-8 relative flex flex-col shadow-xl`}>
    {popular && (
      <span className="absolute top-0 right-8 -mt-3 bg-blue-500 text-white text-xs font-bold px-3 py-1 rounded-full">
        Most Popular
      </span>
    )}
    <div className={`w-14 h-14 flex items-center justify-center rounded-2xl ${bgColor} mb-5`}>
      <Icon className="w-8 h-8 text-white" />
    </div>
    <h3 className="text-white text-2xl font-semibold mb-2">{plan}</h3>
    <p className="text-gray-400 text-sm mb-6 h-10">{description}</p>
    <div className="mb-8">
      <span className="text-white text-5xl font-bold">${price}</span>
      <span className="text-gray-400"> / mo</span>
    </div>
    <ul className="space-y-3 mb-10 flex-grow">
      {features.map((feature: any, index: any) => (
        <li key={index} className="flex items-center space-x-2">
          <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
          <span className="text-gray-300 text-sm">{feature}</span>
        </li>
      ))}
    </ul>
    <Button primary={popular} className="w-full">
      Get Started
    </Button>
  </div>
);


export default PricingCard;