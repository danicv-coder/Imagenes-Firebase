export interface Product {
  code: string;
  name: string;
  branch: string;
  group: string;
  subgroup: string;
  prices: [
    {
      1: number;
      2: number;
      3: number;
      4: number;
      5: number;
      6: number;
      7: number;
      8: number;
    }
  ];
  commissions: [
    {
      1: number;
      2: number;
      3: number;
      4: number;
      5: number;
      6: number;
      7: number;
      8: number;
    }
  ];
  taxRef: number;
  cost: number;
  stock: number;
  origin: number;
}
