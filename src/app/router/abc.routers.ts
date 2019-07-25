import { Routes } from "@angular/router";
import { AbcComponentComponent } from "../abc-component/abc-component.component";
import { AbcChildComponent } from "../abc-component/abc-child/abc-child.component";
import { BcdChildComponent } from "../abc-component/bcd-child/bcd-child.component";

export const abcRoutes: Routes = [
  {
    path: 'abc', component: AbcComponentComponent, children: [
    { path: 'abc-child', component: AbcChildComponent, pathMatch: 'full' },
    { path: 'bcd-child', component: BcdChildComponent, pathMatch: 'full' }
    ]
  }
];
