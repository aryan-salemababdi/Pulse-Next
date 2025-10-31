import { ReactNode } from 'react';
import { NextPage } from 'next';
import Footer from '@/components/organisme/Footer/Footer';
import Header from '@/components/organisme/Header/Header';

const Layout: NextPage<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className="bg-black">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
