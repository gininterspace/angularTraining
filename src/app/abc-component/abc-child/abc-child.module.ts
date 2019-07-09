import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AbcChildComponent } from "./abc-child.component";

@NgModule( {
  imports: [
    CommonModule
  ],
  declarations: [ AbcChildComponent ],
  exports: [ AbcChildComponent ]
} )
export class AbcChildModule {
}
