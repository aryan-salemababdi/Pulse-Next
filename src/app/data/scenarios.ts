import { Scenario, ScenarioKey } from '../types/scenario';

export const SCENARIO_DATA: Record<ScenarioKey, Scenario> = {
  normal: {
    waveData: [1.2, 1.3, 1.1, 1.4, 1.2, 1.5, 1.3],
    volume: 1.1,
    sentiment: 0.1,
    velocity: 0.9,
    analysisTitle: 'وضعیت فعلی: عادی',
    analysisText:
      'حجم و احساسات گفتگو پیرامون برند شما در محدوده نرمال قرار دارد. هیچ رویداد قابل توجهی شناسایی نشده است.',
    waveColor: 'rgba(59, 130, 246, 0.5)',
    waveBorderColor: 'rgba(59, 130, 246, 1)',
  },
  campaign: {
    waveData: [1.2, 1.3, 1.5, 2.5, 3.8, 4.2, 3.5],
    volume: 3.5,
    sentiment: 0.8,
    velocity: 2.5,
    analysisTitle: 'فرصت شناسایی شد: موج مثبت',
    analysisText:
      'یک موج مثبت با سرعت انتشار بالا شناسایی شد. به نظر می‌رسد کمپین بازاریابی شما با استقبال خوبی مواجه شده است.',
    waveColor: 'rgba(16, 185, 129, 0.5)',
    waveBorderColor: 'rgba(16, 185, 129, 1)',
  },
  crisis: {
    waveData: [1.3, 1.4, 1.6, 3.5, 5.1, 4.8, 4.5],
    volume: 5.8,
    sentiment: -0.7,
    velocity: 1.8,
    analysisTitle: 'هشدار بحران: موج منفی شناسایی شد!',
    analysisText:
      'حجم گفتگو به طور ناگهانی افزایش یافته و لحن غالب منفی است. سیستم یک بحران بالقوه را تشخیص داده است. لطفاً فوراً بررسی کنید.',
    waveColor: 'rgba(239, 68, 68, 0.5)',
    waveBorderColor: 'rgba(239, 68, 68, 1)',
  },
};
