import axios from 'axios';
import { Validator, ValidatorStatus } from '@/types/validator';

export class ValidatorService {
  private baseUrl: string;

  constructor(baseUrl: string = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001') {
    this.baseUrl = baseUrl;
  }

  async getValidators(): Promise<Validator[]> {
    try {
      // Try to fetch from API
      const response = await axios.get(`${this.baseUrl}/validators`);
      return response.data;
    } catch (error) {
      console.warn('Error fetching validators from API, using mock data:', error);
      // Fallback to mock data
      return this.getMockValidators();
    }
  }

  async getValidatorDetails(validatorAddress: string): Promise<Validator | null> {
    try {
      const response = await axios.get(`${this.baseUrl}/validators/${validatorAddress}`);
      return response.data;
    } catch (error) {
      console.warn(`Error fetching validator details for ${validatorAddress}, using mock data:`, error);
      // Find mock validator by address
      const mockValidators = this.getMockValidators();
      return mockValidators.find(v => v.address === validatorAddress) || null;
    }
  }

  private getMockValidators(): Validator[] {
    return [
      {
        address: 'cosmvaloper1sjllsnramtg3ewxqwoy5zetlq6d5g7tadt6kaf',
        moniker: 'Validator One',
        status: 'BONDED' as ValidatorStatus,
        tokens: '1000000',
        commission: '0.05',
        description: 'First mock validator',
      },
      {
        address: 'cosmvaloper1qwl879hy8n5k2lfj7wyn8qrp4rjzp8nt0h2je7',
        moniker: 'Validator Two',
        status: 'UNBONDED' as ValidatorStatus,
        tokens: '500000',
        commission: '0.03',
        description: 'Second mock validator',
      },
      // Add more mock validators as needed
    ];
  }
}

// Export a singleton instance
export const validatorService = new ValidatorService(); 