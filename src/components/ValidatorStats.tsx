import React, { useState } from "react";
import { Search, ArrowUpDown } from "lucide-react";

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

const ValidatorStats: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState("votingPower");
  const [sortDirection, setSortDirection] = useState("desc");

  const handleSort = (column: string) => {
    if (sortBy === column) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortBy(column);
      setSortDirection("desc");
    }
  };

  const filteredValidators = validators.filter(validator => 
    validator.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const validatorColumns = [
    { key: 'validator', label: 'Validator' },
    { key: 'votingPower', label: 'Voting Power' },
    { key: 'commission', label: 'Commission' },
    { key: 'uptime', label: 'Uptime' },
    { key: 'delegators', label: 'Delegators' },
    { key: 'status', label: 'Status' },
  ];

  return (
    <section className="bg-gray-900 text-white py-12 px-4">
      <div className="container mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-bold">Top Validators</h2>
          
          <div className="relative">
            <input
              type="text"
              placeholder="Search validators..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 pr-4 py-2 rounded-md bg-gray-800 text-white w-64"
            />
            <Search 
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" 
              size={20} 
            />
          </div>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-800">
              <tr>
                {validatorColumns.map((column) => (
                  <th 
                    key={column.key} 
                    className="px-4 py-3 text-left text-sm font-medium uppercase tracking-wider"
                  >
                    {column.label}
                </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {filteredValidators.map((validator, index) => (
                <tr 
                  key={index} 
                  className="border-b border-gray-700 hover:bg-gray-800 transition-colors"
                >
                  <td className="px-4 py-3">{validator.name}</td>
                  <td className="px-4 py-3">{validator.votingPower}</td>
                  <td className="px-4 py-3">{validator.commission}</td>
                  <td className="px-4 py-3">{validator.uptime}</td>
                  <td className="px-4 py-3">{validator.delegators}</td>
                  <td className="px-4 py-3">
                    <span className="px-2 py-1 rounded-full bg-green-500 text-white text-xs">
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
};

export default ValidatorStats; 