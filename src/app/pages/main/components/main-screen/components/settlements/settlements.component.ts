import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ScrollingModule} from "@angular/cdk/scrolling";
import {SettlementComponent} from "./components/settlement/settlement.component";
import {ISettlements} from "./interfaces/settlements.interface";
import {map, mergeMap, Observable} from "rxjs";
import {SettlementsService} from "./service/settlements.service";

@Component({
  selector: 'settlements',
  standalone: true,
  imports: [CommonModule, ScrollingModule, SettlementComponent],
  templateUrl: './settlements.component.html',
  styleUrl: './settlements.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SettlementsComponent implements OnInit{
  settlements$!: Observable<ISettlements[]>;

  constructor(private readonly SettlementsService: SettlementsService) {
  }

  ngOnInit(): void {
    this.settlements$ = this.SettlementsService.getSettlements();
  }
}
