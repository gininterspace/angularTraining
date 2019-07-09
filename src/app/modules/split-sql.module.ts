import { NgModule } from "@angular/core";
import { SplitSqlComponent } from "../split-sql/split-sql.component";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { BcdChildModule } from "../abc-component/bcd-child/bcd-child.module";

@NgModule( {
  imports: [ FormsModule, HttpModule, BcdChildModule ],
  declarations: [ SplitSqlComponent ],
  exports: [ SplitSqlComponent ],
} )

export class SplitSqlModule {
}
