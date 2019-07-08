import { NgModule } from "@angular/core";
import { SplitSqlComponent } from "../split-sql/split-sql.component";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";

@NgModule( {
  imports: [ FormsModule, HttpModule ],
  declarations: [ SplitSqlComponent ],
  exports: [ SplitSqlComponent ],
} )

export class SplitSqlModule {
}
