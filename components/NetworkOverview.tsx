import React from "react";
import { BarChart3, Activity, Clock, Users } from "lucide-react";
import { useTranslations } from 'next-intl';

export default function NetworkOverview() {
  const t = useTranslations('common');

  // Mock data - would be replaced with real API data
  const networkStats = [
    { 
      title: t('network.total_staked'), 
      value: "1.2B ATOM", 
      change: "+2.4%", 
      icon: <BarChart3 className="text-blue-400" size={24} /> 
    },
    { 
      title: t('network.active_validators'), 
      value: "175", 
      change: "+3", 
      icon: <Users className="text-green-400" size={24} /> 
    },
    { 
      title: t('network.block_time'), 
      value: "6.2s", 
      change: "-0.1s", 
      icon: <Clock className="text-purple-400" size={24} /> 
    },
    { 
      title: t('network.network_apr'), 
      value: "15.2%", 
      change: "+0.3%", 
      icon: <Activity className="text-yellow-400" size={24} /> 
    }
  ];

  return (
    <section className="py-12 px-6 bg-gray-800">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl font-semibold mb-6">{t('network.title')}</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {networkStats.map((stat, idx) => (
            <div key={idx} className="bg-gray-700 rounded-lg p-4 flex items-start">
              <div className="mr-4 p-2 bg-gray-800 rounded-md">
                {stat.icon}
              </div>
              <div>
                <p className="text-gray-400 text-sm">{stat.title}</p>
                <p className="text-xl font-semibold">{stat.value}</p>
                <p className={`text-sm ${stat.change.startsWith('+') ? 'text-green-400' : 'text-red-400'}`}>
                  {stat.change} ({t('network.period')})
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 