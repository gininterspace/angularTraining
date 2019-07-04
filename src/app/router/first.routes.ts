import { Routes } from '@angular/router';
import { FirstComponentComponent } from "../first-component/first-component.component";

export const firstRoutes: Routes = [
  { path: 'first', component: FirstComponentComponent, pathMatch: 'full' }
];
