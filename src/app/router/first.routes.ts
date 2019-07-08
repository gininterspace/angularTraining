import { Routes } from '@angular/router';
import { FirstComponentComponent } from "../first-component/first-component.component";
import { FirstChildComponent } from "../first-component/first-child/first-child.component";

export const firstRoutes: Routes = [
  {
    path: 'first', component: FirstComponentComponent, children: [
    { path: 'child', component: FirstChildComponent, pathMatch: 'full' }
  ]
  }
];
