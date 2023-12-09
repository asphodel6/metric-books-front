import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {CommonModule} from '@angular/common';
import {animate, state, style, transition, trigger} from "@angular/animations";
import {ICounties} from "../../interfaces/counties.interface";
import {CountySettlementComponent} from "./components/county-settlement/county-settlement.component";

@Component({
  selector: 'county',
  standalone: true,
  imports: [CommonModule, CountySettlementComponent],
  templateUrl: './county.component.html',
  styleUrl: './county.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('openClose', [
      state('open', style({
        height: 'auto'
      })),
      state('closed', style({})),
      transition('* => open', [
        animate('0.3s')
      ])
    ]),
  ]
})
export class CountyComponent {
  @Input() county!: ICounties;
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
