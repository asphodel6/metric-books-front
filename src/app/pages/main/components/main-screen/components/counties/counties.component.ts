import {ChangeDetectionStrategy, Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ICounties} from "./interfaces/counties.interface";
import {CountyComponent} from "./components/county/county.component";

@Component({
  selector: 'counties',
  standalone: true,
  imports: [CommonModule, CountyComponent],
  templateUrl: './counties.component.html',
  styleUrl: './counties.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CountiesComponent {
  counties: ICounties[] = [
    {
      name: 'Верхотурский',
      settlements: [{
        name: 'Город',
        churches: ['церковь1', 'церковь2']
      }]
    },
    {
      name: 'Верхотурский',
      settlements: [
        {
          name: 'Город',
          churches: ['церковь1', 'церковь2']
        },
        {
          name: 'Город',
          churches: ['церковь1', 'церковь2']
        },
        {
          name: 'Город',
          churches: ['церковь1', 'церковь2']
        },
      ]

    }, {name: 'Верхотурский'}, {name: 'Верхотурский'}, {name: 'Верхотурский'}, {name: 'Верхотурский'}, {name: 'Верхотурский'}];
}
