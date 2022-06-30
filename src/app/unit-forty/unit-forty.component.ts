import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-unit-forty',
  templateUrl: './unit-forty.component.html',
  styleUrls: ['./unit-forty.component.css']
})
export class UnitFortyComponent implements OnInit {
  serverId: number = 10;
  serverStatus: string = 'offline';

  constructor() { 
    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline'
    // this.serverId = Math.random() > 0.5 ? 10 : 11
    this.serverId = Math.random()
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
