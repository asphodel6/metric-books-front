import {ChangeDetectionStrategy, Component, EventEmitter, Output} from '@angular/core';
import {CommonModule, NgClass} from '@angular/common';
import {ContentType} from "../../interfaces/content.type";

@Component({
  selector: 'main-header',
  standalone: true,
  imports: [CommonModule, NgClass],
  templateUrl: './main-header.component.html',
  styleUrl: './main-header.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainHeaderComponent {
  @Output() content = new EventEmitter<ContentType>();
  isFocused: boolean = false;
  imgPath: string = 'assets/images/lupa.svg';
  countiesSelected: boolean = true;

  onFocus(): void {
    this.isFocused = true;
    this.imgPath = 'assets/images/lupa-active.svg';
  }

  onBlur(): void {
    this.isFocused = false;
    this.imgPath = 'assets/images/lupa.svg';
  }

  changeContent(content: ContentType): void {
    if (content === 'Уезды') {
      this.content.emit('Уезды');
      this.countiesSelected = true;
    }

    else if (content === 'Населенные пункты') {
      this.content.emit('Населенные пункты')
      this.countiesSelected = false;
    }
  }
}
