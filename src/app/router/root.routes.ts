import { Routes } from '@angular/router';
import { firstComponentRoutes } from "./first-component.routes";
import { homeRoutes } from "./home.routes";

export const rootRoutes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  ...homeRoutes,
  ...firstComponentRoutes,
];
