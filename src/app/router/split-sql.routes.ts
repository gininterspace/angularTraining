
import { Routes } from "@angular/router";
import { SplitSqlComponent } from "../split-sql/split-sql.component";

export const splitSql: Routes = [
  { path: 'split', component: SplitSqlComponent, pathMatch: 'full' }
];
