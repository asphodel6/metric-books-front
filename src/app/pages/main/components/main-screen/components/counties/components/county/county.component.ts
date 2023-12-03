import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'county',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './county.component.html',
  styleUrl: './county.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CountyComponent {
  @Input() name!: string;
  imgPath: string = 'assets/images/open.svg'
  isOpen: boolean = false;

  openInfo(): void {
    if (this.imgPath === 'assets/images/open.svg') {
      this.imgPath = 'assets/images/close.svg'
      this.isOpen = true;
    }
    else {
      this.imgPath = 'assets/images/open.svg';
      this.isOpen = false;
    }
  }
}
