import { NgModule } from "@angular/core";
import { FirstComponentModule } from "./first.module";
import { HomeModule } from "./home.module";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { RouterModule } from "@angular/router";
import { rootRoutes } from "../router/root.routes";
import { SplitSqlModule } from "./split-sql.module";

@NgModule( {
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot( rootRoutes, { useHash: true } ),
    FirstComponentModule,
    HomeModule,
    SplitSqlModule
  ],
  exports: [ RouterModule ]
} )
export class RootModules {
}
