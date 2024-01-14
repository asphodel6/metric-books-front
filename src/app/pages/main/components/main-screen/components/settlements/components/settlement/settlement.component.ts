import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import {IChurch, ISettlements} from "../../interfaces/settlements.interface";
import {SettlementInfoService} from "../../../settlement-info/service/settlement-info.service";

@Component({
  selector: 'settlement',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './settlement.component.html',
  styleUrl: './settlement.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SettlementComponent {
@Input() settlement!: ISettlements;

  imgPath: string = 'assets/images/open.svg'
  isOpen: boolean = false;

  constructor(private SettlementInfoService: SettlementInfoService) {
  }

  openInfo(): void {
    if (this.imgPath === 'assets/images/open.svg') {
      this.imgPath = 'assets/images/close.svg'
      this.isOpen = true;
    } else {
      this.imgPath = 'assets/images/open.svg';
      this.isOpen = false;
    }
  }

  getChurchData(church: IChurch): void {
    this.SettlementInfoService.settlementName.next(this.settlement.np_name);
    this.SettlementInfoService.churchName.next(church.c_name);
    // this.SettlementInfoService.countyName.next('');
    this.SettlementInfoService.getChurchData(church.c_code);
    this.SettlementInfoService.churchCode = church.c_code;
  }
}
