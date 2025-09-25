import { useMemo, useState } from 'react';
import { Bar, Line } from 'react-chartjs-2';
import { ChartData, ChartOptions } from 'chart.js';
import { SCENARIO_DATA } from '@/app/data/scenarios';
import { ScenarioKey } from '@/app/types/scenario';
import Button from '@/components/atom/Button/Button';
import Title from '@/components/atom/Title/Title';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title as ChartTitle,
  Tooltip,
  Legend,
  Filler,
} from 'chart.js';

// Registering Chart.js components required for the charts
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ChartTitle,
  Tooltip,
  Legend,
  Filler,
);

const InteractiveDashboard = () => {
  const [activeScenario, setActiveScenario] = useState<ScenarioKey>('normal');
  const currentData = SCENARIO_DATA[activeScenario];

  const waveChartData = useMemo(
    (): ChartData<'line'> => ({
      labels: [
        '۶ ساعت قبل',
        '۵ ساعت قبل',
        '۴ ساعت قبل',
        '۳ ساعت قبل',
        '۲ ساعت قبل',
        '۱ ساعت قبل',
        'اکنون',
      ],
      datasets: [
        {
          label: 'شاخص موج',
          data: currentData.waveData,
          fill: true,
          tension: 0.4,
          backgroundColor: currentData.waveColor,
          borderColor: currentData.waveBorderColor,
        },
      ],
    }),
    [currentData],
  );

  const waveChartOptions: ChartOptions<'line'> = useMemo(
    () => ({
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        y: {
          beginAtZero: true,
          max: 6,
          title: { display: true, text: 'سطح شاخص موج' },
        },
      },
      plugins: { legend: { display: false } },
    }),
    [],
  );

  const gaugeOptions = (max: number): ChartOptions<'bar'> => ({
    indexAxis: 'y',
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: { beginAtZero: true, max: max, display: false },
      y: { display: false },
    },
    plugins: { legend: { display: false }, tooltip: { enabled: false } },
  });

  const sentimentColor = useMemo(() => {
    if (currentData.sentiment > 0.3) return '#10b981'; // green
    if (currentData.sentiment < -0.3) return '#ef4444'; // red
    return '#f59e0b'; // amber
  }, [currentData.sentiment]);

  return (
    <section id="solution" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <Title
          title="راهکار ما: موتور تحلیلی نبض"
          subtitle="با انتخاب سناریوهای زیر، عملکرد سیستم ما را در عمل مشاهده کنید."
        />
        <div className="flex justify-center space-x-4 space-x mb-8">
          <Button
            isActive={activeScenario === 'normal'}
            onClick={() => setActiveScenario('normal')}
          >
            یک روز عادی
          </Button>
          <Button
            isActive={activeScenario === 'campaign'}
            onClick={() => setActiveScenario('campaign')}
          >
            کمپین موفق
          </Button>
          <Button
            isActive={activeScenario === 'crisis'}
            onClick={() => setActiveScenario('crisis')}
          >
            رویداد بحرانی
          </Button>
        </div>
        <div className="grid lg:grid-cols-3 gap-8 items-center">
          <div className="lg:col-span-2 chart-container">
            <Line data={waveChartData} options={waveChartOptions} />
          </div>
          <div className="space-y-4">
            <div>
              <h4 className="font-bold text-center mb-1">
                ⚡ سیگنال چگالی حجم
                {/* (V_t) */}
              </h4>
              <div className="gauge-container">
                <Bar
                  options={gaugeOptions(7)}
                  data={{
                    labels: [''],
                    datasets: [
                      {
                        data: [currentData.volume],
                        backgroundColor: '#3b82f6',
                        borderRadius: 5,
                      },
                    ],
                  }}
                />
              </div>
            </div>
            <div>
              <h4 className="font-bold text-center mb-1">
                😊 سیگنال شدت احساسات
                {/* ($S_t$) */}
              </h4>
              <div className="gauge-container">
                <Bar
                  options={gaugeOptions(1)}
                  data={{
                    labels: [''],
                    datasets: [
                      {
                        data: [Math.abs(currentData.sentiment)],
                        backgroundColor: sentimentColor,
                        borderRadius: 5,
                      },
                    ],
                  }}
                />
              </div>
            </div>
            <div>
              <h4 className="font-bold text-center mb-1">
                🚀 سیگنال سرعت انتشار
                {/* ($E_t$) */}
              </h4>
              <div className="gauge-container">
                <Bar
                  options={gaugeOptions(4)}
                  data={{
                    labels: [''],
                    datasets: [
                      {
                        data: [currentData.velocity],
                        backgroundColor: '#10b981',
                        borderRadius: 5,
                      },
                    ],
                  }}
                />
              </div>
            </div>
          </div>
        </div>
        <div
          id="analysis-text"
          className="mt-8 text-center bg-blue-50 border-r-4 border-blue-500 p-4 rounded-lg max-w-4xl mx-auto"
        >
          <p className="font-bold text-lg text-blue-800">
            {currentData.analysisTitle}
          </p>
          <p className="text-gray-700">{currentData.analysisText}</p>
        </div>
      </div>
    </section>
  );
};

export default InteractiveDashboard;
