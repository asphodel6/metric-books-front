import { Routes } from '@angular/router';
import {MainComponent} from "./pages/main/main.component";
import {CountiesComponent} from "./pages/main/components/main-screen/components/counties/counties.component";
import {SettlementsComponent} from "./pages/main/components/main-screen/components/settlements/settlements.component";

export const routes: Routes = [
  {path: 'main', component: MainComponent, children: [
      {path: 'counties', component: CountiesComponent},
      {path: 'settlements', component: SettlementsComponent},
      {path: '', pathMatch: 'full', redirectTo: 'counties'}
    ]},
  {path: '', pathMatch: 'full', redirectTo: 'main'}
];

