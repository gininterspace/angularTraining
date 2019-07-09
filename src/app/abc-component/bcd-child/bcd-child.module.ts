import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BcdChildComponent } from "./bcd-child.component";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [BcdChildComponent],
  exports: [BcdChildComponent]
})
export class BcdChildModule { }
