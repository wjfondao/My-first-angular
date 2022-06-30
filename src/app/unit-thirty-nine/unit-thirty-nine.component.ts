import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-unit-thirty-nine',
  templateUrl: './unit-thirty-nine.component.html',
  styleUrls: ['./unit-thirty-nine.component.css']
})
export class UnitThirtyNineComponent implements OnInit {

  serverCreated = false;

  constructor() { 
  }

  ngOnInit(): void {
  
  }

  onCreatServer() {
    this.serverCreated = true;
  }

}
