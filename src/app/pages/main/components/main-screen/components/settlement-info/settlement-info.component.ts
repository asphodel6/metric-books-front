import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {SettlementInfoService} from "./service/settlement-info.service";
import {ISettlementData} from "./interfaces/settlementData.interface";

@Component({
  selector: 'settlement-info',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './settlement-info.component.html',
  styleUrl: './settlement-info.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [SettlementInfoService]
})
export class SettlementInfoComponent implements OnInit{
  countyName!: string;
  settlementName!: string;
  churchName!: string;
  data!: ISettlementData[];
  constructor(private settlementService: SettlementInfoService) {
  }

  ngOnInit(): void {
    this.countyName = this.settlementService.countyName;
    this.settlementName = this.settlementService.settlementName;
    this.churchName = this.settlementService.churchName;
    this.data = this.settlementService.dataOfSettlement;
  }
}
