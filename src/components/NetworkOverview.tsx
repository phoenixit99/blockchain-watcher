import React from 'react';
import { Globe, Clock, TrendingUp, Server } from 'lucide-react';

const NetworkOverview: React.FC = () => {
  const networkStats = [
    { 
      icon: Globe,
      title: 'Total Staked',
      value: '$1.2B',
      description: 'Total value locked in the network'
    },
    {
      icon: Server,
      title: 'Active Validators',
      value: '175',
      description: 'Number of active validators'
    },
    {
      icon: Clock,
      title: 'Block Time',
      value: '6.5s',
      description: 'Average time between blocks'
    },
    {
      icon: TrendingUp,
      title: 'Network APR',
      value: '18.5%',
      description: 'Annual percentage rate'
    }
  ];

  return (
    <section className="bg-gray-900 text-white py-16 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Network Overview</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Real-time insights into the Cosmos network performance
          </p>
      </div>
      
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {networkStats.map((stat, index) => (
            <div 
              key={index} 
              className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition-colors"
            >
              <div className="mb-4 text-blue-400">
                <stat.icon size={48} />
              </div>
              <h3 className="text-xl font-semibold mb-2">{stat.title}</h3>
              <div className="text-3xl font-bold mb-3">{stat.value}</div>
              <p className="text-gray-300 text-sm">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NetworkOverview; 