import { NgModule } from "@angular/core";
import { FirstComponentModule } from "./first.module";
import { HomeModule } from "./home.module";

@NgModule( {
  imports: [ FirstComponentModule, HomeModule ]
} )
export class RootModules {
  constructor() {
  }
}
