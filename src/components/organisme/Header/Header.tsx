'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import Button from '@/components/atom/Button/Button';
import PulseLogo from '@/components/atom/PulseLogo/PulseLogo';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <div className="w-full bg-black border-b border-gray-800 h-16 flex items-center justify-end pr-8">
        <Link
          href="https://www.eloras.ca"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 group"
        >
          <Image
            src="/eloras-logo.jpg"
            alt="Eloras Logo"
            width={42}
            height={42}
            className="brightness-90 group-hover:brightness-110 transition-all duration-300 rounded-full"
          />
          <span className="text-base font-bold tracking-widest text-gray-200 uppercase group-hover:text-white transition-colors duration-300">
            ELORAS
          </span>
        </Link>
      </div>
      <header className="sticky top-0 z-50 bg-black/70 backdrop-blur-md border-b border-gray-800">
        <nav className="w-full max-w-7xl mx-auto flex justify-between items-center py-4 px-6">
          <div className="flex items-center ml-[-70px]">
            <PulseLogo />
          </div>
          <div className="hidden md:flex items-center space-x-6 text-gray-300">
            <Link
              href="#features"
              className="hover:text-white transition-colors"
            >
              Features
            </Link>
            <Link
              href="#pricing"
              className="hover:text-white transition-colors"
            >
              Pricing
            </Link>
            <Link href="#about" className="hover:text-white transition-colors">
              About Us
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <Button className="font-semibold hidden md:inline-block" primary>
              Get Started
            </Button>
            <button
              className="md:hidden text-gray-300 hover:text-white transition-colors mr-5"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </nav>
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="md:hidden bg-black/70 backdrop-blur-md border-t border-gray-800 px-6 py-4 flex flex-col space-y-4 text-gray-300"
            >
              <Link
                href="#features"
                className="hover:text-white transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                Features
              </Link>
              <Link
                href="#pricing"
                className="hover:text-white transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                Pricing
              </Link>
              <Link
                href="#about"
                className="hover:text-white transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                About Us
              </Link>
              <Button
                className="font-semibold w-full"
                primary
                onClick={() => setMenuOpen(false)}
              >
                Get Started
              </Button>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
};

export default Header;
