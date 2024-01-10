import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ICounties} from "../interfaces/counties.interface";
import {map, Observable} from "rxjs";
import {environment} from "../../../../../../../../environments/environment.development";

@Injectable({
  providedIn: 'root'
})
export class CountiesService {
  constructor(private readonly http: HttpClient) { }

  getCounties(): Observable<ICounties[]> {
    return this.http.get<ICounties[]>(`${environment.link}/uezd`);
  }
}
