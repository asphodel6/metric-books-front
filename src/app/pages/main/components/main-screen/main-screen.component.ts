import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MainHeaderComponent} from "../main-header/main-header.component";

@Component({
  selector: 'main-screen',
  standalone: true,
  imports: [CommonModule, MainHeaderComponent],
  templateUrl: './main-screen.component.html',
  styleUrl: './main-screen.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainScreenComponent {

}
