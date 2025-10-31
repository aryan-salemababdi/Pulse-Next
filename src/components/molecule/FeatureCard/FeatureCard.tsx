

const FeatureCard = ({ icon: Icon, title, description, bgColor }: any) => (
  <div className="bg-gray-900 border border-gray-700 rounded-2xl p-6 text-center shadow-lg hover:shadow-blue-600/20 transition-shadow duration-300">
    <div className={`w-14 h-14 flex items-center justify-center rounded-2xl ${bgColor} mb-5 mx-auto`}>
      <Icon className="w-8 h-8 text-white" />
    </div>
    <h3 className="text-white text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-400 text-sm">{description}</p>
  </div>
);


export default FeatureCard;