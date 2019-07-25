import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent implements OnInit {
  child: any;
  constructor() { }

  ngOnInit() {
  }

  activate(event:any) {
    this.child = event;
    console.log(event)
  }
}
