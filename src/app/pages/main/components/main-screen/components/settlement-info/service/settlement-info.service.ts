import { Injectable } from '@angular/core';
import {ISettlementData} from "../interfaces/settlementData.interface";

@Injectable()
export class SettlementInfoService {
  private _countyName: string = 'Название уезда';
  private _settlementName: string = 'Название н/п';
  private _churchName: string = 'Название церкви';
  private _dataOfSettlement: ISettlementData[] = [{
    year: 'Год',
    fund: 'Фонд',
    inventory: 'Опись',
    case: 'Дело',
    sheet: 'Лист',
    documentType: 'Вид документа',
    completeness: 'Полнота'
  },
    {
      year: 'Год',
      fund: 'Фонд',
      inventory: 'Опись',
      case: 'Дело',
      sheet: 'Лист',
      documentType: 'Вид документа',
      completeness: 'Полнота'
    },
    {
      year: '1999',
      fund: 'Fund',
      inventory: 'wasas,saasa,sasasa,assasa,asassa',
      case: '1212112',
      sheet: '21211',
      documentType: 'Doc',
      completeness: 'Full'
    },]

  get countyName(): string {
    return this._countyName;
  }

  get settlementName(): string {
    return this._settlementName;
  }

  get churchName(): string {
    return this._churchName;
  }

  get dataOfSettlement(): ISettlementData[] {
    return this._dataOfSettlement;
  }
}
