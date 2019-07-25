import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-child',
  templateUrl: './first-child.component.html',
  styleUrls: ['./first-child.component.css']
})
export class FirstChildComponent implements OnInit {

  firstChildAttribute: string;
  constructor() { }

  ngOnInit() {
    this.firstChildAttribute = "first child attribute";
  }

  changeAttr() {
    this.firstChildAttribute += " changed ";
  }
}
