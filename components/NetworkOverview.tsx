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
    <div className="py-12 px-6 relative overflow-hidden text-left">
      {/* Decorative elements */}
      <div className="absolute inset-0 z-0 opacity-30">
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-b from-primary-light/10 to-transparent blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-t from-accent-light/10 to-transparent blur-3xl"></div>
      </div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="text-2xl font-semibold mb-6 text-gradient-primary inline-block">{t('network.title')}</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {networkStats.map((stat, idx) => (
            <div key={idx} className="bg-bg-tertiary/50 backdrop-blur-sm rounded-lg p-5 border border-white/5 hover:border-white/10 transition-all">
              <div className="flex items-start">
                <div className="mr-4 p-2 bg-white/5 rounded-md">
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
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 