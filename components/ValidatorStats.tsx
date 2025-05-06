import React, { useState } from "react";
import { Search, ArrowUpDown } from "lucide-react";
import { useTranslations } from 'next-intl';

// Mock data - would be replaced with real API data
const validators = [
  { 
    name: "Cosmos Hub", 
    votingPower: "3.2%", 
    commission: "5%", 
    uptime: "99.98%", 
    delegators: 1245,
    status: "active" 
  },
  { 
    name: "Stake Fish", 
    votingPower: "2.8%", 
    commission: "7%", 
    uptime: "99.95%", 
    delegators: 982,
    status: "active" 
  },
  { 
    name: "Chorus One", 
    votingPower: "2.5%", 
    commission: "8%", 
    uptime: "100%", 
    delegators: 876,
    status: "active" 
  },
  { 
    name: "Figment", 
    votingPower: "2.3%", 
    commission: "6%", 
    uptime: "99.92%", 
    delegators: 754,
    status: "active" 
  },
  { 
    name: "B-Harvest", 
    votingPower: "2.1%", 
    commission: "5%", 
    uptime: "99.90%", 
    delegators: 689,
    status: "active" 
  }
];

export default function ValidatorStats() {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("votingPower");
  const [sortDirection, setSortDirection] = useState("desc");
  const t = useTranslations('common');

  const handleSort = (column: string) => {
    if (sortBy === column) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortBy(column);
      setSortDirection("desc");
    }
  };

  const filteredValidators = validators.filter(validator => 
    validator.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className="py-12 px-6 bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold">{t('validator_stats.title')}</h2>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            <input
              type="text"
              placeholder={t('validator_stats.search_placeholder')}
              className="pl-10 pr-4 py-2 bg-gray-800 rounded-md text-sm w-64"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-gray-400 border-b border-gray-700">
                <th className="py-3 text-left">
                  <button className="flex items-center" onClick={() => handleSort("name")}>
                    {t('validator_stats.columns.validator')}
                    {sortBy === "name" && (
                      <ArrowUpDown size={14} className="ml-1" />
                    )}
                  </button>
                </th>
                <th className="py-3 text-right">
                  <button className="flex items-center ml-auto" onClick={() => handleSort("votingPower")}>
                    {t('validator_stats.columns.voting_power')}
                    {sortBy === "votingPower" && (
                      <ArrowUpDown size={14} className="ml-1" />
                    )}
                  </button>
                </th>
                <th className="py-3 text-right">
                  <button className="flex items-center ml-auto" onClick={() => handleSort("commission")}>
                    {t('validator_stats.columns.commission')}
                    {sortBy === "commission" && (
                      <ArrowUpDown size={14} className="ml-1" />
                    )}
                  </button>
                </th>
                <th className="py-3 text-right">
                  <button className="flex items-center ml-auto" onClick={() => handleSort("uptime")}>
                    {t('validator_stats.columns.uptime')}
                    {sortBy === "uptime" && (
                      <ArrowUpDown size={14} className="ml-1" />
                    )}
                  </button>
                </th>
                <th className="py-3 text-right">
                  <button className="flex items-center ml-auto" onClick={() => handleSort("delegators")}>
                    {t('validator_stats.columns.delegators')}
                    {sortBy === "delegators" && (
                      <ArrowUpDown size={14} className="ml-1" />
                    )}
                  </button>
                </th>
                <th className="py-3 text-right">{t('validator_stats.columns.status')}</th>
              </tr>
            </thead>
            <tbody>
              {filteredValidators.map((validator, idx) => (
                <tr key={idx} className="border-b border-gray-800 hover:bg-gray-800">
                  <td className="py-4">{validator.name}</td>
                  <td className="py-4 text-right">{validator.votingPower}</td>
                  <td className="py-4 text-right">{validator.commission}</td>
                  <td className="py-4 text-right">{validator.uptime}</td>
                  <td className="py-4 text-right">{validator.delegators}</td>
                  <td className="py-4 text-right">
                    <span className="px-2 py-1 rounded-full text-xs bg-green-900 text-green-300">
                      {validator.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
} 