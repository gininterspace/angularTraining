import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AbcChildComponent } from "./abc-child.component";
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { PipeModule } from "../../pipe/pipe.module";

@NgModule( {
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    PipeModule
  ],
  declarations: [ AbcChildComponent ],
  exports: [ AbcChildComponent ]
} )
export class AbcChildModule {
}
