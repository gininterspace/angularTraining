import { Routes } from "@angular/router";
import { AbcComponentComponent } from "../abc-component/abc-component.component";

export const abcRoutes: Routes = [
  {
    path: 'abc', component: AbcComponentComponent, pathMatch: 'full' }
];
