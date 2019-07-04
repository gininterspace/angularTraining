import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { rootRoutes } from "./router/root.routes";
import { RootModules } from "./modules/root.modules";

@NgModule( {
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(rootRoutes, { useHash: true }),
    RootModules
  ],
  providers: [],
  bootstrap: [ AppComponent ]
} )
export class AppModule {
}
