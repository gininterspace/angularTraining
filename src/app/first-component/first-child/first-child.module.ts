import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirstChildComponent } from "./first-child.component";

@NgModule( {
  imports: [
    CommonModule
  ],
  declarations: [ FirstChildComponent ],
  exports: [ FirstChildComponent ]
} )
export class FirstChildModule {
}
