interface IAsset {
  realEstate: string;
  pea: string;
  ct: string;
  lifeInsurance: string;
  savings: string[];
}

interface ILiabilities {
  realEstate: string;
  studentLoan: string;
  consumerCredits: string[];
}

export interface IState {
  assets: IAsset;
  liabilities: ILiabilities;
}

export interface HandleChangeType {
  type: string;
  name: string;
  value: number;
  index?: number;
}
