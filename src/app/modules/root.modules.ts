import { NgModule } from "@angular/core";
import { FirstComponentModule } from "./first.module";
import { HomeModule } from "./home.module";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { RouterModule } from "@angular/router";
import { rootRoutes } from "../router/root.routes";
import { SplitSqlModule } from "./split-sql.module";
import { TestComponentModule } from "../test-component/test-component.module";
import { AbcComponentModule } from "../abc-component/abc-component.module";
import { AbcChildModule } from "../abc-component/abc-child/abc-child.module";

@NgModule( {
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot( rootRoutes, { useHash: true } ),
    FirstComponentModule,
    HomeModule,
    SplitSqlModule,
    TestComponentModule,
    AbcComponentModule,
    AbcChildModule
  ],
  exports: [ RouterModule ]
} )
export class RootModules {
}
