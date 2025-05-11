import React from 'react';
import { 
  BarChart2, 
  PieChart, 
  AlertCircle, 
  ShieldCheck, 
  TrendingUp, 
  Repeat2, 
  Clock, 
  Vote 
} from 'lucide-react';

const Features: React.FC = () => {
  const features = [
    {
      icon: BarChart2,
      title: 'Validator Analytics',
      description: 'Detailed analysis of validator performance, uptime, and commission rates'
    },
    {
      icon: PieChart,
      title: 'Delegator Dashboard',
      description: 'Track rewards, unbonding periods, and total amount staked'
    },
    {
      icon: AlertCircle,
      title: 'Validator Alerts',
      description: 'Receive notifications when validators are jailed or show signs of poor performance'
    },
    {
      icon: ShieldCheck,
      title: 'Staking Security',
      description: 'Risk assessment and network decentralization analysis'
    },
    {
      icon: TrendingUp,
      title: 'APR Comparison',
      description: 'Compare staking returns between different validators'
    },
    {
      icon: Repeat2,
      title: 'Auto-compound',
      description: 'Automatically reinvest rewards to maximize staking returns'
    },
    {
      icon: Clock,
      title: 'Unbonding Tracker',
      description: 'Track unbonding time and token release schedule'
    },
    {
      icon: Vote,
      title: 'Governance Voting',
      description: 'Participate in and track governance proposals in the Cosmos ecosystem'
    }
  ];

  return (
    <section className="bg-gray-900 text-white py-16 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Key Features</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Comprehensive tools for both validators and delegators in the Cosmos ecosystem
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition-colors"
            >
              <div className="mb-4 text-blue-400">
                <feature.icon size={48} />
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features; 