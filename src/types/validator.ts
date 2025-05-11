export interface Validator {
  address: string;
  moniker: string;
  status: string;
  tokens: string;
  commission: string;
  description: string;
}

export type ValidatorStatus = 'BONDED' | 'UNBONDED' | 'UNBONDING' | 'UNKNOWN'; 