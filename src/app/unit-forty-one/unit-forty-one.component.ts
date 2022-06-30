import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-unit-forty-one',
  templateUrl: './unit-forty-one.component.html',
  styles: [`
      .online {
        color: white;
      }
  `]
})
export class UnitFortyOneComponent implements OnInit {
  serverId: number = 10;
  serverStatus: string = 'offline';

  constructor() { 
    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline'
  }

  ngOnInit(): void {
  }
  
  getServerStatus() {
    return this.serverStatus;
  }

  getColor(){
    return this.serverStatus === 'online' ? 'green' : 'red';
  }

}
