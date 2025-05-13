import React, { useState } from "react";
import { Search } from "lucide-react";

export default function Hero() {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchType, setSearchType] = useState("address");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(`Searching for ${searchType}: ${searchQuery}`);
  };

  return (
    <div className="bg-gray-900 text-white py-20 px-4">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Cosmos Staking Dashboard
        </h1>
        <p className="text-xl md:text-2xl mb-10">
          Track validators, analyze staking performance, and manage your delegations in the Cosmos ecosystem.
        </p>
        
        <form onSubmit={handleSearch} className="max-w-2xl mx-auto mb-10">
          <div className="flex">
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search for an address, validator, or transaction..."
                className="pl-10 pr-4 py-2 w-full rounded-l-md bg-gray-800 text-white"
              />
            </div>
            <select 
              value={searchType}
              onChange={(e) => setSearchType(e.target.value)}
              className="px-4 py-2 bg-gray-800 text-white border-l border-gray-700"
            >
              <option value="address">Address</option>
              <option value="validator">Validator</option>
              <option value="tx">Transaction</option>
            </select>
            <button 
              type="submit"
              className="px-6 py-2 bg-blue-600 text-white rounded-r-md hover:bg-blue-700 transition"
            >
              Search
            </button>
          </div>
        </form>

        <div className="mt-12 grid grid-cols-3 gap-4 max-w-2xl mx-auto">
          <div className="bg-gray-800 p-4 rounded">
            <h3 className="text-lg font-semibold">Validators</h3>
            <p className="text-2xl font-bold">150+</p>
          </div>
          <div className="bg-gray-800 p-4 rounded">
            <h3 className="text-lg font-semibold">APR</h3>
            <p className="text-2xl font-bold">18.5%</p>
          </div>
          <div className="bg-gray-800 p-4 rounded">
            <h3 className="text-lg font-semibold">Staked</h3>
            <p className="text-2xl font-bold">$500M</p>
          </div>
        </div>
      </div>
    </div>
  );
} 