import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-unit-forty-three',
  templateUrl: './unit-forty-three.component.html',
  styleUrls: ['./unit-forty-three.component.css']
})
export class UnitFortyThreeComponent implements OnInit {
  showSecret = false;
  log = [];
  constructor() { }

  ngOnInit(): void {
  }

  onToggleDetail(){
    this.showSecret = !this.showSecret;
    this.log.push(this.log.length + 1);
    this.log.push(this.log.length + 1);
    console.log(this.log)
  }

  onDeleteDetail(){
    this.log.pop();
  }
}
