import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'settlements',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './settlements.component.html',
  styleUrl: './settlements.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SettlementsComponent {

}
