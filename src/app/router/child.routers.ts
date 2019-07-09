
import { Routes } from "@angular/router";
import { AbcChildComponent } from "../abc-component/abc-child/abc-child.component";

export const child: Routes = [
  { path: 'abc-child', component: AbcChildComponent, pathMatch: 'full'}
];
