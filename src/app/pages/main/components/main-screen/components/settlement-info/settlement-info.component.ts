import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {SettlementInfoService} from "./service/settlement-info.service";
import {IChurchData} from "./interfaces/settlementData.interface";
import {BehaviorSubject} from "rxjs";
import {ScrollingModule} from "@angular/cdk/scrolling";
import {MatDialog} from "@angular/material/dialog";
import {DeleteDialogComponent} from "../dialogs/delete.dialog/delete.dialog.component";
import {FormDialogComponent} from "../dialogs/form.dialog/form.dialog.component";

@Component({
  selector: 'settlement-info',
  standalone: true,
  imports: [CommonModule, ScrollingModule],
  templateUrl: './settlement-info.component.html',
  styleUrl: './settlement-info.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SettlementInfoComponent implements OnInit{
  countyName$!: BehaviorSubject<string>;
  settlementName$!: BehaviorSubject<string>;
  churchName$!: BehaviorSubject<string>;
  data$!: BehaviorSubject<IChurchData[]>;
  constructor(private settlementService: SettlementInfoService, private dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.countyName$ = this.settlementService.countyName;
    this.settlementName$ = this.settlementService.settlementName;
    this.churchName$ = this.settlementService.churchName;
    this.data$ = this.settlementService.dataOfSettlement;
  }

  addData(): void {
    if(this.churchName$.value === 'Название церкви') {
      return
    }

    this.dialog.open(FormDialogComponent, {
      width: '522px',
      data: {type: 'Добавить'}
    })
  }
}
