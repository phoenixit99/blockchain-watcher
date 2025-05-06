import React, { useState } from "react";
import { Search } from "lucide-react";
import { useTranslations } from 'next-intl';

export default function Hero() {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchType, setSearchType] = useState("address"); // address, validator, or tx
  const t = useTranslations('common');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Would implement actual search functionality here
    console.log(`Searching for ${searchType}: ${searchQuery}`);
  };

  return (
    <section className="py-20 px-6 text-center bg-gradient-to-br from-indigo-600 to-purple-700">
      <h1 className="text-4xl md:text-6xl font-bold mb-4">{t('hero.title')}</h1>
      <p className="text-xl mb-8 max-w-2xl mx-auto">{t('hero.subtitle')}</p>
      
      <form onSubmit={handleSearch} className="max-w-2xl mx-auto">
        <div className="flex flex-col md:flex-row gap-3">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={t('hero.search_placeholder')}
              className="p-3 pl-10 rounded-md w-full text-black"
            />
          </div>
          <select 
            value={searchType}
            onChange={(e) => setSearchType(e.target.value)}
            className="p-3 rounded-md text-black md:w-40"
          >
            <option value="address">{t('hero.search_types.address')}</option>
            <option value="validator">{t('hero.search_types.validator')}</option>
            <option value="tx">{t('hero.search_types.tx')}</option>
          </select>
          <button 
            type="submit"
            className="p-3 bg-indigo-800 hover:bg-indigo-700 rounded-md font-medium transition-colors"
          >
            {t('hero.search_button')}
          </button>
        </div>
      </form>

      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <div className="bg-white bg-opacity-10 px-4 py-2 rounded-full">
          <span className="text-sm font-medium">175 {t('hero.stats.validators')}</span>
        </div>
        <div className="bg-white bg-opacity-10 px-4 py-2 rounded-full">
          <span className="text-sm font-medium">15.2% {t('hero.stats.apr')}</span>
        </div>
        <div className="bg-white bg-opacity-10 px-4 py-2 rounded-full">
          <span className="text-sm font-medium">$1.2B {t('hero.stats.staked')}</span>
        </div>
      </div>
    </section>
  );
} 