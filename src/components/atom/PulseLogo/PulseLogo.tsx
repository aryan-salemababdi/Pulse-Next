import Image from "next/image";

const PulseLogo = () => (
  <div className="flex items-center">
    <Image
      src="/pulse-logo.png"
      alt="Pulse Logo"
      width={200}  
      height={200}
      className="object-contain"
    />
    <span className="text-white text-3xl font-extrabold -ml-20">Pulse</span>
  </div>
);

export default PulseLogo;