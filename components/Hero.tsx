import React, { useState } from "react";
import { Activity, Clock, Search, Users, BarChart3 } from "lucide-react";
import { useTranslations } from 'next-intl';
import NetworkOverview from "./NetworkOverview";

export default function Hero() {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchType, setSearchType] = useState("address"); // address, validator, or tx
  const t = useTranslations('common');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Would implement actual search functionality here
    console.log(`Searching for ${searchType}: ${searchQuery}`);
  };
  const networkStats = [
    { 
      title: t('network.total_staked'), 
      value: "1.2B ATOM", 
      change: "+2.4%", 
      icon: <BarChart3 className="text-blue-400" size={24} />,
      color: "blue" 
    },
    { 
      title: t('network.active_validators'), 
      value: "175", 
      change: "+3", 
      icon: <Users className="text-green-400" size={24} />,
      color: "green"
    },
    { 
      title: t('network.block_time'), 
      value: "6.2s", 
      change: "-0.1s", 
      icon: <Clock className="text-purple-400" size={24} />,
      color: "purple"
    },
    { 
      title: t('network.network_apr'), 
      value: "15.2%", 
      change: "+0.3%", 
      icon: <Activity className="text-yellow-400" size={24} />,
      color: "yellow"
    }
  ];
  return (
    // <section className="py-20 px-6 text-center bg-gradient-cosmic relative overflow-hidden">
    <section className="py-20 px-6 text-center bg-bg-secondary relative overflow-hidden">

      {/* Modern decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute -top-24 -left-24 w-64 h-64 rounded-full bg-accent-light opacity-50 blur-3xl"></div>
        <div className="absolute top-1/2 -right-24 w-80 h-80 rounded-full bg-primary-light opacity-50 blur-3xl"></div>
        <div className="absolute -bottom-32 left-1/3 w-72 h-72 rounded-full bg-accent-dark opacity-50 blur-3xl"></div>
      </div>
      
      <div className="relative z-10">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-text-primary">{t('hero.title')}</h1>
        <p className="text-xl mb-8 max-w-2xl mx-auto text-text-secondary">{t('hero.subtitle')}</p>
        
        <form onSubmit={handleSearch} className="max-w-2xl mx-auto">
          <div className="flex flex-col md:flex-row gap-3">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={t('hero.search_placeholder')}
                className="p-3 pl-10 rounded-md w-full text-bg-primary bg-white/90 backdrop-blur-sm border border-white/20 focus:outline-none focus:ring-2 focus:ring-primary/20"
              />
            </div>
            <select 
              value={searchType}
              onChange={(e) => setSearchType(e.target.value)}
              className="p-3 rounded-md text-bg-primary md:w-40 bg-white/90 backdrop-blur-sm border border-white/20 focus:outline-none focus:ring-2 focus:ring-primary/20"
            >
              <option value="address">{t('hero.search_types.address')}</option>
              <option value="validator">{t('hero.search_types.validator')}</option>
              <option value="tx">{t('hero.search_types.tx')}</option>
            </select>
            <button 
              type="submit"
              className="p-3 bg-bg-primary text-primary-light hover:bg-bg-secondary rounded-md font-medium transition-all"
            >
              {t('hero.search_button')}
            </button>
          </div>
        </form>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <div className="bg-bg-primary/80 backdrop-blur-sm px-6 py-3 rounded-full border border-primary/20 glow-primary">
            <span className="text-sm font-medium text-primary-light">175 {t('hero.stats.validators')}</span>
          </div>
          <div className="bg-bg-primary/80 backdrop-blur-sm px-6 py-3 rounded-full border border-accent/20 glow-accent">
            <span className="text-sm font-medium text-accent-light">15.2% {t('hero.stats.apr')}</span>
          </div>
          <div className="bg-bg-primary/80 backdrop-blur-sm px-6 py-3 rounded-full border border-primary/20 glow-primary">
            <span className="text-sm font-medium text-primary-light">$1.2B {t('hero.stats.staked')}</span>
          </div>
        </div>
      </div>
      <NetworkOverview />
    </section>
  );
} 