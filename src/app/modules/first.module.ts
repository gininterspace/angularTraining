import { NgModule } from "@angular/core";
import { FirstComponentComponent } from "../first-component/first-component.component";
import { RouterModule } from "@angular/router";

@NgModule( {
  providers: [],
  imports: [ RouterModule ],
  declarations: [ FirstComponentComponent ],
  exports: [ FirstComponentComponent ]
} )
export class FirstComponentModule {
}
