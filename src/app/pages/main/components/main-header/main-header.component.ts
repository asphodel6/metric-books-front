import { ChangeDetectionStrategy, Component } from '@angular/core';
import {CommonModule, NgClass} from '@angular/common';

@Component({
  selector: 'main-header',
  standalone: true,
  imports: [CommonModule, NgClass],
  templateUrl: './main-header.component.html',
  styleUrl: './main-header.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainHeaderComponent {
  isFocused: boolean = false;
  imgPath: string = 'assets/images/lupa.svg';

  onFocus(): void {
    this.isFocused = true;
    this.imgPath = 'assets/images/lupa-active.svg';
  }

  onBlur(): void {
    this.isFocused = false;
    this.imgPath = 'assets/images/lupa.svg';
  }
}
