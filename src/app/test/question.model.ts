import { IType } from "./type.model";

export interface IOption {
  text: string;
  type: IType;
}

export interface IQuestion {
  number: number;
  first_option: IOption;
  second_option: IOption;
}
