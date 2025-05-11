import React, { ReactNode } from 'react';
import Head from 'next/head';
import Navbar from '../common/Navbar';
import Footer from '../common/Footer';

interface MainLayoutProps {
  children: ReactNode;
  title?: string;
}

const MainLayout: React.FC<MainLayoutProps> = ({ 
  children, 
  title = 'Validator Dashboard' 
}) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <title>{title}</title>
        <meta name="description" content="Cosmos Validator Dashboard" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main className="flex-grow bg-gray-100">
        {children}
      </main>

      <Footer />
    </div>
  );
};

export default MainLayout; 