export interface IPerson {
  fullName: string;
  age: number;
}

export interface IDCHero {
  fullName: string;
  marcialArts: string[];
}

export type TDuplicateValue = {
  (a: number, b: number): number;
};

export type TGetAvenger = {
  (a: string, b: string, c?: string): string;
};

export interface IRectangle {
  base: number;
  hight: number;
  calcArea: () => number;
}
