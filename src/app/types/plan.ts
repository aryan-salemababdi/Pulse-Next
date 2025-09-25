export interface Plan {
  name: string;
  description: string;
  price: string;
  features: string[];
  isRecommended?: boolean;
  buttonText: string;
  tier: 'basic' | 'pro' | 'enterprise';
}
