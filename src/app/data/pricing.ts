import { Plan } from '../types/plan';

export const PRICING_PLANS: Plan[] = [
  {
    name: 'پایه (Basic)',
    description: 'برای کسب‌وکارهای کوچک',
    price: '۵,۹۰۰,۰۰۰',
    features: [
      '✔️ مانیتورینگ هر **۲ ساعت**',
      '✔️ تا **۵** کلمه کلیدی',
      '✔️ ۱ کاربر',
      '✔️ داشبورد سلامت برند',
    ],
    buttonText: 'شروع کنید',
    tier: 'basic',
  },
  {
    name: 'حرفه‌ای (Professional)',
    description: 'برای شرکت‌های متوسط و آژانس‌ها',
    price: '۳۹,۹۰۰,۰۰۰',
    features: [
      '✔️ مانیتورینگ هر **۱۵ دقیقه**',
      '✔️ تا **۲۰** کلمه کلیدی',
      '✔️ تا ۵ کاربر',
      '✔️ تحلیل کمپین و احساسات',
      '✔️ هشدار از طریق ایمیل',
    ],
    isRecommended: true,
    buttonText: 'انتخاب پلن حرفه‌ای',
    tier: 'pro',
  },
  {
    name: 'سازمانی (Enterprise)',
    description: 'برای برندهای بزرگ',
    price: 'تماس با ما',
    features: [
      '✔️ مانیتورینگ هر **۵ دقیقه**',
      '✔️ **۵۰+** کلمه کلیدی (سفارشی)',
      '✔️ کاربران نامحدود',
      '✔️ **هشدار لحظه‌ای SMS/Slack**',
      '✔️ پشتیبانی اختصاصی',
    ],
    buttonText: 'درخواست دمو',
    tier: 'enterprise',
  },
];
