import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ICounties} from "./interfaces/counties.interface";
import {CountyComponent} from "./components/county/county.component";
import {ScrollingModule} from "@angular/cdk/scrolling";
import {CountiesService} from "./service/counties.service";
import {Observable, take} from "rxjs";

@Component({
  selector: 'counties',
  standalone: true,
  imports: [CommonModule, CountyComponent, ScrollingModule],
  templateUrl: './counties.component.html',
  styleUrl: './counties.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CountiesComponent implements OnInit{
  counties!: Observable<ICounties[]>;

  constructor(private CountiesService: CountiesService) {
  }

  ngOnInit(): void {
    this.counties = this.CountiesService.getCounties();
  }
}
