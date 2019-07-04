import { NgModule } from "@angular/core";
import { FirstComponentModule } from "./first-component.module";
import { HomeModule } from "./home.module";

@NgModule( {
  imports: [ FirstComponentModule, HomeModule ]
} )
export class RootModules {
}
