import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RootModules } from "./modules/";

@NgModule( {
  declarations: [
    AppComponent
  ],
  imports: [
    RootModules
  ],
  providers: [],
  bootstrap: [ AppComponent ]
} )
export class AppModule {
}
