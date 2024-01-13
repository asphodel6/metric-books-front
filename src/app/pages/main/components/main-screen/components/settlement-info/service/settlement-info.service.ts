import {Injectable} from '@angular/core';
import {IChurchData} from "../interfaces/settlementData.interface";
import {BehaviorSubject, take} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../../../../../environments/environment.development";

@Injectable({
  providedIn: 'root'
})
export class SettlementInfoService{
  countyName: BehaviorSubject<string> = new BehaviorSubject<string>('Название уезда');
  settlementName: BehaviorSubject<string> = new BehaviorSubject<string>('Название н/п');
  churchName: BehaviorSubject<string> = new BehaviorSubject<string>('Название церкви');
  dataOfSettlement: BehaviorSubject<IChurchData[]> = new BehaviorSubject<IChurchData[]>([]);

  constructor(private readonly http: HttpClient) {
  }

  getChurchData(code: number): void {
      this.http.get<IChurchData[]>(`${environment.link}/data/${code}`).pipe(
        take(1)
      ).subscribe(
        data => this.dataOfSettlement.next(data)
      )
  }
}
