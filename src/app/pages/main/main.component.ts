import {ChangeDetectionStrategy, Component} from '@angular/core';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './main.component.html',
  styleUrl: './main.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainComponent {
  name: string = 'Имя';
  surname: string = 'Фамилия'
}
