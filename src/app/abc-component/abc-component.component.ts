import { Component, OnInit } from '@angular/core';

@Component( {
  selector: 'app-abc-component',
  templateUrl: './abc-component.component.html',
  styleUrls: [ './abc-component.component.css' ]
} )
export class AbcComponentComponent implements OnInit {
  parentAttribute: string = "parent attribute";
  childRef: any;
  constructor() {
  }

  ngOnInit() {

  }

  takeDataFromChild( event ) {

    console.log( "parent called");
    console.log( "event:", event );
    event.firstAttribute = "123123 by parent";
    this.childRef = event;
  }

  get getParentAttribute(){
    this.parentAttribute = this.childRef && this.childRef.firstAttribute ? this.parentAttribute + this.childRef.firstAttribute : "";

    return  this.parentAttribute
  }
}
