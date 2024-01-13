import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IChurch, ISettlements} from "../../../../../settlements/interfaces/settlements.interface";
import {SettlementInfoService} from "../../../../../settlement-info/service/settlement-info.service";

@Component({
  selector: 'county-settlement',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './county-settlement.component.html',
  styleUrl: './county-settlement.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CountySettlementComponent {
  @Input() settlement!: ISettlements;
  @Input() countyName!: string;
  settlementImgPath: string = 'assets/images/open.svg';
  isOpenChurches: boolean = false;

  constructor(private SettlementInfoService: SettlementInfoService) {
  }

  openChurches(): void {
    if (this.settlementImgPath === 'assets/images/open.svg') {
      this.settlementImgPath = 'assets/images/close.svg'
      this.isOpenChurches = true;
    } else {
      this.settlementImgPath = 'assets/images/open.svg';
      this.isOpenChurches = false;
    }
  }

  getChurchData(church: IChurch): void {
    this.SettlementInfoService.settlementName.next(this.settlement.np_name);
    this.SettlementInfoService.churchName.next(church.c_name);
    this.SettlementInfoService.countyName.next(this.countyName);
    this.SettlementInfoService.getChurchData(church.c_code);
  }
}
