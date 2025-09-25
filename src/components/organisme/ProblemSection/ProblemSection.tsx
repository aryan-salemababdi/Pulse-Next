import Title from '@/components/atom/Title/Title';
import InfoCard from '@/components/molecule/InfoCard/InfoCard';

const ProblemSection = () => (
  <section id="problem" className="py-20">
    <div className="container mx-auto px-6">
      <Title
        title="پرواز در تاریکی: چالش‌های برندها در دنیای دیجیتال"
        subtitle="چرا ابزارهای فعلی کافی نیستند؟"
      />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <InfoCard
          icon="⏱️"
          title="تأخیر در واکنش"
          text="مطلع شدن از بحران یا فرصت زمانی که دیگر برای واکنش مؤثر دیر شده است."
        />
        <InfoCard
          icon="🌊"
          title="اقیانوس داده‌ها"
          text="بررسی دستی هزاران پست برای پیدا کردن موارد مهم، غیرممکن و پرهزینه است."
        />
        <InfoCard
          icon="📊"
          title="فقدان بینش آماری"
          text="ابزارهای فعلی نمی‌توانند بگویند که آیا حجم گفتگو عادی است یا نشانه‌ی یک اتفاق مهم."
        />
      </div>
    </div>
  </section>
);

export default ProblemSection;
