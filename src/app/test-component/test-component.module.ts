import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestComponentComponent } from "./test-component.component";
import { RouterModule } from "@angular/router";

@NgModule({
  imports: [
    RouterModule,
    CommonModule
  ],
  declarations: [TestComponentComponent],
  exports: [TestComponentComponent]
})
export class TestComponentModule { }
