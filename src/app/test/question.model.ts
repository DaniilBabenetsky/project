import { ITypeScore } from "./type.model";

export interface IOption {
  text: string;
  typeScores: ITypeScore[];
}

export interface IQuestion {
  number: number;
  first_option: IOption;
  second_option: IOption;
}
