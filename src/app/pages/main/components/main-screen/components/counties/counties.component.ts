import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'counties',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './counties.component.html',
  styleUrl: './counties.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CountiesComponent {

}
