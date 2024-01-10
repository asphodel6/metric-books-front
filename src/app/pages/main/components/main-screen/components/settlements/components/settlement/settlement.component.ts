import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import {ISettlements} from "../../interfaces/settlements.interface";

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

  openInfo(): void {
    if (this.imgPath === 'assets/images/open.svg') {
      this.imgPath = 'assets/images/close.svg'
      this.isOpen = true;
    } else {
      this.imgPath = 'assets/images/open.svg';
      this.isOpen = false;
    }
  }
}
