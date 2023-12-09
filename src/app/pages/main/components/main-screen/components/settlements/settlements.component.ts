import {ChangeDetectionStrategy, Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ScrollingModule} from "@angular/cdk/scrolling";
import {SettlementComponent} from "./components/settlement/settlement.component";
import {ISettlements} from "./interfaces/settlements.interface";

@Component({
  selector: 'settlements',
  standalone: true,
  imports: [CommonModule, ScrollingModule, SettlementComponent],
  templateUrl: './settlements.component.html',
  styleUrl: './settlements.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SettlementsComponent {
  settlements: ISettlements[] = [
    {
      name: 'Наслененный пункт',
      churches: ['церковь 1', 'церковь 2'],
      county: 'Уезд 1'
    },
    {
      name: 'Наслененный пункт',
      churches: ['церковь 1', 'церковь 2'],
      county: 'Уезд 2'
    },
    {
      name: 'Наслененный пункт',
      churches: ['церковь 1', 'церковь 2'],
      county: 'Уезд 3'
    },
    {
      name: 'Наслененный пункт',
      churches: ['церковь 1', 'церковь 2']
    },
    {
      name: 'Наслененный пункт',
      churches: ['церковь 1', 'церковь 2']
    },
  ]
}
