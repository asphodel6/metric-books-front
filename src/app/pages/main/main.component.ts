import {ChangeDetectionStrategy, Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MainScreenComponent} from "./components/main-screen/main-screen.component";

@Component({
  selector: 'main',
  standalone: true,
  imports: [CommonModule, MainScreenComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainComponent {
  name: string = 'Имя';
  surname: string = 'Фамилия'
}
