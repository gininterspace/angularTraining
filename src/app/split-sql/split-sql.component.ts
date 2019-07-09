import { Component, OnInit } from '@angular/core';
import { SplitSqlService } from "../shared/service/split-sql/split-sql.service";

@Component( {
  templateUrl: './split-sql.component.html',
  styleUrls: [ './split-sql.component.css' ]
} )
export class SplitSqlComponent implements OnInit {

  private fieldName: string;
  private fileContext: string;
  private generatedQuery: string = "";
  private header: string = "";

  constructor() {
  }

  ngOnInit() {
  }

  generateQuery() {
    const splitSqlService: SplitSqlService = new SplitSqlService( this.fileContext, this.fieldName );
    this.generatedQuery = this.header.concat(splitSqlService.generateQuery());
  }

  getFileContent( event ) {
    if ( event.target.files && event.target.files[ 0 ] ) {
      let reader = new FileReader();
      this.fileContext = event.target.result;
      reader.onload = ( event: any ) => {
        this.fileContext = event.target.result;
        this.generateQuery();
      };
      reader.readAsText( event.target.files[ 0 ] );
    }
  }
}
