import { Injectable } from '@angular/core';

const OPEN_BRACKET: string = '( \n';
const CLOSE_BRACKET: string = ' ) ';
const MAX_SIZE: number = 20;
const END_OF_QUERY_CHARACTER: string = ';';
const COMMA_CHARACTER: string = ',';
const WHERE_WORD: string = 'WHERE ';
const IN_WORD: string = ' IN ';
const OR_WORD: string = ' OR ';
const END_LINE: string = '\n';
const EMPTY_CHARACTER: string = '';

@Injectable()
export class SplitSqlService {
  private input: string;
  private sql: string;
  private fieldName: string;
  private partitionIndex: number = 0;

  constructor( input: string, fieldName: string ) {
    this.input = input;
    this.fieldName = fieldName;
  }

  generateSql() {
    this.sql = WHERE_WORD;
    let idsArray: string[] = this.input.split( END_LINE );
    this.splitIdsBy( idsArray );
    return this.sql;
  }

  splitIdsBy( idsArray: string[] ) {
    this.sql = this.sql
      .concat( this.fieldName )
      .concat( IN_WORD )
      .concat( OPEN_BRACKET );
    for ( let index in idsArray ) {

      if ( this.partitionIndex == MAX_SIZE - 1 ) {
        this.addElements( idsArray[ index ], EMPTY_CHARACTER );
        this.addOrStatement();
        this.partitionIndex = 0;
      }  else {
        this.addElements( idsArray[ index ] );
      }
    }
    this.cutTheLastComma();
    this.closeSqlQuery();
  }

  addElements( element: string, comma: string = COMMA_CHARACTER ) {
    if ( element.trim().length > 0 ) {
      this.sql = this.sql
        .concat( element )
        .concat( comma );

      this.partitionIndex++;
    }
  }

  addOrStatement() {
    this.sql = this.sql
      .concat( CLOSE_BRACKET )
      .concat( OR_WORD )
      .concat( this.fieldName )
      .concat( IN_WORD )
      .concat( OPEN_BRACKET );
  }

  cutTheLastComma() {
    this.sql = this.sql.replace( /(,)$/, '' );
  }

  closeSqlQuery(): void {
    this.sql = this.sql
      .concat( CLOSE_BRACKET )
      .concat( END_OF_QUERY_CHARACTER );
  }
}
