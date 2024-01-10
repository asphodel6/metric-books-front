import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MainHeaderComponent} from "../main-header/main-header.component";
import {CountiesComponent} from "./components/counties/counties.component";
import {SettlementsComponent} from "./components/settlements/settlements.component";
import {SettlementInfoComponent} from "./components/settlement-info/settlement-info.component";
import {RouterOutlet} from "@angular/router";

@Component({
  selector: 'main-screen',
  standalone: true,
  imports: [CommonModule, MainHeaderComponent, CountiesComponent, SettlementsComponent, SettlementInfoComponent, RouterOutlet],
  templateUrl: './main-screen.component.html',
  styleUrl: './main-screen.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainScreenComponent {
}
