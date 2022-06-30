import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-unit-forty-four',
  templateUrl: './unit-forty-four.component.html',
  styleUrls: ['./unit-forty-four.component.css']
})
export class UnitFortyFourComponent implements OnInit {
  showSecret = false;
  log = [];
  constructor() { }

  ngOnInit(): void {
  }

  onToggleDetail(){
    this.showSecret = !this.showSecret;
    this.log.push(new Date());
  }
}
