import { Component, OnInit } from '@angular/core';

const openBracket: string = '( \n';
const closeBracket: string = ' ) ';
const maxSize: number = 10;

@Component( {
  templateUrl: './split-sql.component.html',
  styleUrls: [ './split-sql.component.css' ]
} )
export class SplitSqlComponent implements OnInit {

  private fieldName: string;
  private idsContext: string;
  private idsArray: string[];
  private generatedSql: string = "WHERE ";


  constructor() {
  }

  ngOnInit() {
  }

  generateSql() {
    this.generatedSql = "WHERE ";
    this.idsArray = this.idsContext.split( "\n" );
    this.splitIdsBy();
  }

  splitIdsBy() {
    this.generatedSql = this.generatedSql.concat( this.fieldName ).concat( ' IN ' ).concat( openBracket );
    let partIndex = 0;
    let elementIndex = 1;
    for ( let element of this.idsArray ) {
      elementIndex++;
      partIndex++;
      if ( partIndex == maxSize - 1 ) {
        this.addElements( element, '' );
        this.addOrStatement();
        partIndex = 0;
      } else if ( elementIndex == this.idsArray.length ) {
        this.addElements( element, '' );
      } else {
        this.addElements( element );
      }
    }
    this.generatedSql = this.generatedSql.concat( closeBracket ).concat( ';' );
  }

  addElements( element: string, comma: string = ',' ) {
    if ( element.length > 0 ) {
      this.generatedSql = this.generatedSql.concat( element ).concat( comma );
    }
  }

  addOrStatement() {
    const orStatement: string = ` OR ${this.fieldName} IN `;
    this.generatedSql = this.generatedSql.concat( closeBracket ).concat( orStatement ).concat( openBracket );
  }

  getTextContent( event ) {
    if ( event.target.files && event.target.files[ 0 ] ) {
      let reader = new FileReader();
      this.idsContext = event.target.result;
      reader.onload = ( event: any ) => {
        this.idsContext = event.target.result;
      };
      reader.readAsText( event.target.files[ 0 ] );
    }
  }
}
