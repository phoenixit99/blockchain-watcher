import React from "react";
import { CheckCircle, Shield, BarChart, Bell, Wallet, Clock, Zap, LineChart } from "lucide-react";
import { useTranslations } from 'next-intl';

export default function Features() {
  const t = useTranslations('common');

  const features = [
    {
      key: "validator_analytics",
      icon: <BarChart className="text-blue-400" />
    },
    {
      key: "delegator_dashboard",
      icon: <Wallet className="text-green-400" />
    },
    {
      key: "validator_alerts",
      icon: <Bell className="text-yellow-400" />
    },
    {
      key: "staking_security",
      icon: <Shield className="text-purple-400" />
    },
    {
      key: "apr_comparison",
      icon: <LineChart className="text-pink-400" />
    },
    {
      key: "auto_compound",
      icon: <Zap className="text-orange-400" />
    },
    {
      key: "unbonding_tracker",
      icon: <Clock className="text-indigo-400" />
    },
    {
      key: "governance_voting",
      icon: <CheckCircle className="text-teal-400" />
    }
  ];

  return (
    <section className="py-16 px-6 bg-gray-800">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold mb-2 text-center">{t('features.title')}</h2>
        <p className="text-gray-400 mb-10 text-center max-w-2xl mx-auto">
          {t('features.subtitle')}
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, idx) => (
            <div key={idx} className="bg-gray-700 p-6 rounded-lg hover:bg-gray-650 transition-colors">
              <div className="mb-4 p-3 bg-gray-800 inline-block rounded-lg">
                {feature.icon}
              </div>
              <h3 className="text-lg font-medium mb-2">{t(`features.items.${feature.key}.title`)}</h3>
              <p className="text-gray-300 text-sm">{t(`features.items.${feature.key}.description`)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 