import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'main-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './main-header.component.html',
  styleUrl: './main-header.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainHeaderComponent {

}
