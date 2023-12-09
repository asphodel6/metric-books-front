import {ISettlements} from "../../settlements/interfaces/settlements.interface";

export interface ICounties {
  name: string
  settlements?: ISettlements[]
}
