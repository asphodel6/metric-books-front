import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'county',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './county.component.html',
  styleUrl: './county.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CountyComponent {

}
