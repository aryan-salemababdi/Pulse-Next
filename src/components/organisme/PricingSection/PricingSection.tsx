import { PRICING_PLANS } from '@/app/data/pricing';
import Title from '@/components/atom/Title/Title';
import PricingCard from '@/components/molecule/PricingCard/PricingCard';

const PricingSection = () => (
  <section id="plans" className="py-20">
    <div className="container mx-auto px-6">
      <Title
        title="پلن‌های متناسب با کسب‌وکار شما"
        subtitle="از استارتاپ تا سازمان‌های بزرگ، ما راهکاری برای شما داریم."
      />
      <div className="grid lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {PRICING_PLANS.map((plan) => (
          <PricingCard key={plan.name} plan={plan} />
        ))}
      </div>
    </div>
  </section>
);

export default PricingSection;
