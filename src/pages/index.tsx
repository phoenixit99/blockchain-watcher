import React from "react";
import Head from "next/head";
import Navbar from "@/components/common/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Footer from "@/components/common/Footer";
import ValidatorStats from "@/components/ValidatorStats";
import NetworkOverview from "@/components/NetworkOverview";

export default function Home() {
  return (
    <>
      <Head>
        <title>Cosmos Validator Dashboard</title>
        <meta name="description" content="Track staking info, monitor Cosmos validators easily." />
      </Head>
      <div className="min-h-screen bg-gray-900 text-white">
        <main>
          <Hero />
          <NetworkOverview />
          <ValidatorStats />
          <Features />
        </main>
      </div>
    </>
  );
}