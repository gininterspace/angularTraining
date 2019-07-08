import { Routes } from '@angular/router';
import { firstRoutes } from "./first.routes";
import { homeRoutes } from "./home.routes";
import { splitSql } from "./split-sql.routes";

export const rootRoutes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  ...homeRoutes,
  ...firstRoutes,
  ...splitSql
];
