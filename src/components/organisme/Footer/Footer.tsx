import Link from 'next/link';
import Image from 'next/image';
import PulseLogo from '@/components/atom/PulseLogo/PulseLogo';

const Footer = () => {
  return (
    <footer className="w-full bg-black border-t border-gray-800 py-10">
      <div className="w-full max-w-7xl mx-auto text-center space-y-4">
        <div className="flex justify-center items-center mr-24">
          <PulseLogo />
        </div>
        <p className="text-gray-500 text-sm leading-relaxed">
          &copy; 2025 Pulse. All rights reserved. <br />
          Predictive insights to guide your decisions.
        </p>
        <p className="text-gray-400 text-sm mt-3 flex justify-center items-center gap-2">
          <span className="text-gray-500">Powered by</span>
          <Link
            href="https://www.eloras.ca"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 hover:opacity-90 transition-opacity"
          >
            <Image
              src="/eloras-logo.jpg"
              alt="Eloras Logo"
              width={24}
              height={24}
              className="rounded-full brightness-90"
            />
            <span>Eloras Marketing Inc</span>
          </Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
