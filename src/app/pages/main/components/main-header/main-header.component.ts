import {ChangeDetectionStrategy, Component} from '@angular/core';
import {CommonModule, NgClass} from '@angular/common';
import {Router, RouterLink, RouterLinkActive} from "@angular/router";

@Component({
  selector: 'main-header',
  standalone: true,
  imports: [CommonModule, NgClass, RouterLink, RouterLinkActive],
  templateUrl: './main-header.component.html',
  styleUrl: './main-header.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainHeaderComponent {
  isFocused: boolean = false;
  imgPath: string = 'assets/images/lupa.svg';

  constructor(private readonly router: Router) {
  }

  onFocus(): void {
    this.isFocused = true;
    this.imgPath = 'assets/images/lupa-active.svg';
  }

  onBlur(): void {
    this.isFocused = false;
    this.imgPath = 'assets/images/lupa.svg';
  }

  isLinkActive(route: string): string {
    if (this.router.isActive(route, false)) {
      return 'selected';
    }

    return 'notSelected';
  }
}
