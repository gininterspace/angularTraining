import { Routes } from '@angular/router';
import { FirstComponentComponent } from "../first-component/first-component.component";

export const firstComponentRoutes: Routes = [
  { path: 'first', component: FirstComponentComponent, pathMatch: 'full' }
];
