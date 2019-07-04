import { Routes } from '@angular/router';
import { firstRoutes } from "./first.routes";
import { homeRoutes } from "./home.routes";

export const rootRoutes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  ...homeRoutes,
  ...firstRoutes,
];
