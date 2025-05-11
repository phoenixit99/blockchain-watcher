import React, { useState, useEffect } from 'react';
import { Validator, ValidatorStatus } from '@/types/validator';
import { validatorService } from '@/services/validatorService';

export const ValidatorList: React.FC = () => {
  const [validators, setValidators] = useState<Validator[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [sortConfig, setSortConfig] = useState<{
    key: keyof Validator;
    direction: 'ascending' | 'descending';
  }>({
    key: 'tokens',
    direction: 'descending'
  });

  useEffect(() => {
    const fetchValidators = async () => {
      try {
        setLoading(true);
        const fetchedValidators = await validatorService.getValidators();
        setValidators(fetchedValidators);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch validators');
        setLoading(false);
      }
    };

    fetchValidators();
  }, []);

  const sortValidators = (validators: Validator[]) => {
    const sortableValidators = [...validators];
    sortableValidators.sort((a, b) => {
      if (a[sortConfig.key] < b[sortConfig.key]) {
        return sortConfig.direction === 'ascending' ? -1 : 1;
      }
      if (a[sortConfig.key] > b[sortConfig.key]) {
        return sortConfig.direction === 'ascending' ? 1 : -1;
      }
      return 0;
    });
    return sortableValidators;
  };

  const handleSort = (key: keyof Validator) => {
    setSortConfig(prevConfig => ({
      key,
      direction: 
        prevConfig.key === key && prevConfig.direction === 'descending' 
          ? 'ascending' 
          : 'descending'
    }));
  };

  const renderStatusBadge = (status: ValidatorStatus) => {
    const statusColors: Record<ValidatorStatus, string> = {
      'BONDED': 'bg-green-500',
      'UNBONDED': 'bg-red-500',
      'UNBONDING': 'bg-yellow-500',
      'UNKNOWN': 'bg-gray-500'
    };

    return (
      <span 
        className={`px-2 py-1 rounded text-white text-xs ${statusColors[status]}`}
      >
        {status}
      </span>
    );
  };

  const sortedValidators = sortValidators(validators);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-blue-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
        {error}
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4">
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow-md rounded">
          <thead className="bg-gray-100">
            <tr>
              <th 
                className="px-4 py-2 text-left cursor-pointer hover:bg-gray-200"
                onClick={() => handleSort('moniker')}
              >
                Moniker {sortConfig.key === 'moniker' && (sortConfig.direction === 'ascending' ? '▲' : '▼')}
              </th>
              <th 
                className="px-4 py-2 text-left cursor-pointer hover:bg-gray-200"
                onClick={() => handleSort('address')}
              >
                Address {sortConfig.key === 'address' && (sortConfig.direction === 'ascending' ? '▲' : '▼')}
              </th>
              <th 
                className="px-4 py-2 text-left cursor-pointer hover:bg-gray-200"
                onClick={() => handleSort('status')}
              >
                Status {sortConfig.key === 'status' && (sortConfig.direction === 'ascending' ? '▲' : '▼')}
              </th>
              <th 
                className="px-4 py-2 text-left cursor-pointer hover:bg-gray-200"
                onClick={() => handleSort('tokens')}
              >
                Tokens {sortConfig.key === 'tokens' && (sortConfig.direction === 'ascending' ? '▲' : '▼')}
              </th>
              <th 
                className="px-4 py-2 text-left cursor-pointer hover:bg-gray-200"
                onClick={() => handleSort('commission')}
              >
                Commission {sortConfig.key === 'commission' && (sortConfig.direction === 'ascending' ? '▲' : '▼')}
              </th>
            </tr>
          </thead>
          <tbody>
            {sortedValidators.map((validator) => (
              <tr 
                key={validator.address} 
                className="border-b hover:bg-gray-50 transition duration-200"
              >
                <td className="px-4 py-2">{validator.moniker}</td>
                <td className="px-4 py-2">
                  <span className="text-sm text-gray-600 truncate max-w-xs block">
                    {validator.address}
                  </span>
                </td>
                <td className="px-4 py-2">
                  {renderStatusBadge(validator.status as ValidatorStatus)}
                </td>
                <td className="px-4 py-2">
                  {parseFloat(validator.tokens).toLocaleString()}
                </td>
                <td className="px-4 py-2">
                  {(parseFloat(validator.commission) * 100).toFixed(2)}%
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {validators.length === 0 && (
        <div className="text-center text-gray-500 mt-4">
          No validators found
        </div>
      )}
    </div>
  );
};

export default ValidatorList; 