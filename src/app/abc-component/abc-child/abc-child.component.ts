import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-abc-child',
  templateUrl: './abc-child.component.html',
  styleUrls: ['./abc-child.component.css']
})
export class AbcChildComponent implements OnInit {

  firstAttribute: string;
  constructor() {
    this.doSomething();
  }

  ngOnInit() {
    console.log( "ngOn Init run" );
  }

  ngOnChanges() {
    console.log( "ngOn changes run" );
  }

  ngAfterContentInit() {
    console.log( "ngAfterContentInit run" );
  }

  ngAfterContentChecked() {
    console.log( "ngAfterContentChecked run" );
  }

  ngAfterViewInit() {
    console.log( "ngAfterViewInit run" );
  }

  ngAfterViewChecked() {
    console.log( "ngAfterViewChecked run" );
  }

  ngOnDestroy() {
    console.log( "ngOnDestroy run" );
  }

  doSomething(){
    this.firstAttribute = "first attribute";
  }
}
