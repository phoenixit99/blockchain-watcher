import React from "react";
import Head from "next/head";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Footer from "../components/Footer";
import ValidatorStats from "../components/ValidatorStats";
import NetworkOverview from "../components/NetworkOverview";
import { useTranslations } from 'next-intl';

export default function Home() {
  const t = useTranslations('common');
  
  return (
    <>
      <Head>
        <title>{t('app.title')}</title>
        <meta name="description" content={t('app.description')} />
      </Head>
      <div className="min-h-screen bg-gray-900 text-white">
        <Navbar />
        <main>
          <Hero />
          <NetworkOverview />
          <ValidatorStats />
          <Features />
        </main>
        <Footer />
      </div>
    </>
  );
} 