import {ISettlements} from "../../settlements/interfaces/settlements.interface";

export interface ICounties {
  u_code: number;
  u_name: string;
  nas_punkt: ISettlements[];
}
