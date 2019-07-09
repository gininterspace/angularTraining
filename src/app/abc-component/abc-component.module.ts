import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AbcComponentComponent } from "./abc-component.component";
import { AbcChildModule } from "./abc-child/abc-child.module";
import { RouterModule } from "@angular/router";
import { BcdChildModule } from "./bcd-child/bcd-child.module";

@NgModule( {
  imports: [
    RouterModule,
    CommonModule,
    AbcChildModule,
    BcdChildModule
  ],
  declarations: [ AbcComponentComponent ],
  exports: [ AbcComponentComponent ]
} )
export class AbcComponentModule {
}
