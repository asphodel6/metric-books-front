import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ISettlements} from "../../../../../settlements/interfaces/settlements.interface";

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
  settlementImgPath: string = 'assets/images/open.svg';
  isOpenChurches: boolean = false;

  openChurches(): void {
    if (this.settlementImgPath === 'assets/images/open.svg') {
      this.settlementImgPath = 'assets/images/close.svg'
      this.isOpenChurches = true;
    } else {
      this.settlementImgPath = 'assets/images/open.svg';
      this.isOpenChurches = false;
    }
  }
}
