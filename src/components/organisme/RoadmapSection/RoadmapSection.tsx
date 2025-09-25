import { ROADMAP_DATA } from '@/app/data/roadmap';
import Title from '@/components/atom/Title/Title';
import RoadmapItem from '@/components/molecule/RoadmapItem/RoadmapItem';

const RoadmapSection: React.FC = () => (
  <section id="roadmap" className="py-20 bg-white">
    <div className="container mx-auto px-6">
      <Title
        title="نقشه راه آینده"
        subtitle="ما برای رشد و تکامل 'نبض' برنامه‌ریزی کرده‌ایم."
      />
      <div className="relative">
        <div
          className="border-r-2 border-blue-500 absolute h-full top-0"
          style={{ right: '1.25rem' }}
        ></div>
        <div className="space-y-12">
          {ROADMAP_DATA.map((item) => (
            <RoadmapItem key={item.phase} item={item} />
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default RoadmapSection;
