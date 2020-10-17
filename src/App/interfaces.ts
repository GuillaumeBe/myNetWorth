interface Asset {
  realEstate: string;
  pea: string;
  ct: string;
  lifeInsurance: string;
  savings: string[];
}

interface Liabilities {
  realEstate: string;
  studentLoan: string;
  consumerCredits: string[];
}

export interface State {
  assets: Asset;
  liabilities: Liabilities;
}

export interface HandleChange {
  type: string;
  name: string;
  value: string;
  index?: number;
}
