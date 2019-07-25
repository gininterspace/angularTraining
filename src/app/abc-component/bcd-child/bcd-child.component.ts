import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bcd-child',
  templateUrl: './bcd-child.component.html',
  styleUrls: ['./bcd-child.component.css']
})
export class BcdChildComponent implements OnInit {
  firstAttribute: string = "not set";
  constructor() { }

  ngOnInit() {
    console.log( "child called" );
  }

}
