import { NgModule } from "@angular/core";
import { FirstComponentComponent } from "../first-component/first-component.component";
import { RouterModule } from "@angular/router";
import { FirstChildModule } from "../first-component/first-child/first-child.module";

@NgModule( {
  providers: [],
  imports: [ RouterModule, FirstChildModule ],
  declarations: [ FirstComponentComponent ],
  exports: [ FirstComponentComponent ]
} )
export class FirstComponentModule {
}
