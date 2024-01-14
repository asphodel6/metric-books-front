import {Injectable} from '@angular/core';
import {IChurchData} from "../interfaces/settlementData.interface";
import {BehaviorSubject, take} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../../../../../environments/environment.development";
import {error} from "@angular/compiler-cli/src/transformers/util";

@Injectable({
  providedIn: 'root'
})
export class SettlementInfoService{
  countyName: BehaviorSubject<string> = new BehaviorSubject<string>('Название уезда');
  settlementName: BehaviorSubject<string> = new BehaviorSubject<string>('Название н/п');
  churchName: BehaviorSubject<string> = new BehaviorSubject<string>('Название церкви');
  dataOfSettlement: BehaviorSubject<IChurchData[]> = new BehaviorSubject<IChurchData[]>([]);
  private _churchCode: number = 0;

  constructor(private readonly http: HttpClient) {
  }

  getChurchData(code: number): void {
      this.http.get<IChurchData[]>(`${environment.link}/data/${code}`).pipe(
        take(1)
      ).subscribe(
        data => this.dataOfSettlement.next(data)
      )
  }

  addCounty(name: string): void {
    this.http.post(`${environment.link}/uezd/${name}`, {}).pipe(
      take(1)
    ).subscribe(
      {error: error => console.log(error),
      complete: () => window.location.reload()});
  }

  deleteChurch(code: number): void {
    console.log(code);
    this.http.delete(`${environment.link}/church/${code}`).pipe(
      take(1)
    ).subscribe(
      {error: error => console.log(error),
        complete: () => window.location.reload()});
  }

  get churchCode(): number {
    return this._churchCode;
  }

  set churchCode(code: number) {
    this._churchCode = code;
  }

  reset(): void {
    this.churchName.next('Название церкви');
    this.churchCode = 0;
    this.settlementName.next('Название н/п');
    this.dataOfSettlement.next([]);
    this.countyName.next('Название уезда');
  }
}
