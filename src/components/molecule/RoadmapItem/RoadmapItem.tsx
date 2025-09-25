import { NextPage } from 'next';
import { RoadmapPhase } from '@/app/types/roadmap';

interface RoadmapItemProps {
  item: RoadmapPhase;
}

const RoadmapItem: NextPage<RoadmapItemProps> = ({ item }) => (
  <div className="relative">
    <div
      className="w-10 h-10 bg-blue-500 rounded-full absolute top-0 flex items-center justify-center text-white font-bold"
      style={{ right: 0 }}
    >
      {item.phase}
    </div>
    <div className="mr-16">
      <h3 className="text-xl font-bold text-right text-blue-600">
        {item.title}
      </h3>
      <p className=" text-right text-gray-600 mt-2">{item.description}</p>
    </div>
  </div>
);

export default RoadmapItem;
