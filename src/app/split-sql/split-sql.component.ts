import { Component, OnInit } from '@angular/core';
import { SplitSqlService } from "../shared/service/split-sql/split-sql.service";

@Component( {
  templateUrl: './split-sql.component.html',
  styleUrls: [ './split-sql.component.css' ]
} )
export class SplitSqlComponent implements OnInit {

  private fieldName: string;
  private fileContext: string;
  private generatedSql: string;

  constructor() {
  }

  ngOnInit() {
  }

  generateSql() {
    this.generatedSql = "WHERE ";
    let splitSqlService = new SplitSqlService( this.fileContext, this.fieldName );
    this.generatedSql = splitSqlService.generateSql();
  }

  getFileContent( event ) {
    if ( event.target.files && event.target.files[ 0 ] ) {
      let reader = new FileReader();
      this.fileContext = event.target.result;
      reader.onload = ( event: any ) => {
        this.fileContext = event.target.result;
      };
      reader.readAsText( event.target.files[ 0 ] );
    }
  }
}
