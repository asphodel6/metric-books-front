import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ISettlements} from "../interfaces/settlements.interface";
import {environment} from "../../../../../../../../environments/environment.development";

@Injectable({
  providedIn: 'root'
})
export class SettlementsService {
  constructor(private readonly http: HttpClient) { }

  getSettlements(): Observable<ISettlements[]> {
    return this.http.get<ISettlements[]>(`${environment.link}/nasPunkt`);
  }
}
