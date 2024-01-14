import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MainHeaderComponent} from "../main-header/main-header.component";
import {CountiesComponent} from "./components/counties/counties.component";
import {SettlementsComponent} from "./components/settlements/settlements.component";
import {SettlementInfoComponent} from "./components/settlement-info/settlement-info.component";
import {RouterOutlet} from "@angular/router";
import {DeleteDialogComponent} from "./components/dialogs/delete.dialog/delete.dialog.component";
import {SettlementInfoService} from "./components/settlement-info/service/settlement-info.service";
import {MatDialog} from "@angular/material/dialog";
import {AddDialogComponent} from "./components/dialogs/add.dialog/add.dialog.component";

@Component({
  selector: 'main-screen',
  standalone: true,
  imports: [CommonModule, MainHeaderComponent, CountiesComponent, SettlementsComponent, SettlementInfoComponent, RouterOutlet],
  templateUrl: './main-screen.component.html',
  styleUrl: './main-screen.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainScreenComponent {
  constructor(private settlementService: SettlementInfoService, private dialog: MatDialog) {
  }

  deleteChurch(): void {
    if (this.settlementService.churchName.value === 'Название церкви') {
      return;
    }
    this.dialog.open(DeleteDialogComponent, {
      width: '473px',
      data: {name: this.settlementService.churchName.value, code: this.settlementService.churchCode, type: 'Церковь'}
    })
  }

  addCounty(): void {
    this.dialog.open(AddDialogComponent, {
      width: '473px',
      data: {type: 'Уезд'}
    })
  }
}
