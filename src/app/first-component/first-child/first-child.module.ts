import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirstChildComponent } from "./first-child.component";
import { RouterModule } from "@angular/router";

@NgModule( {
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [ FirstChildComponent ],
  exports: [ FirstChildComponent ]
} )
export class FirstChildModule {
}
