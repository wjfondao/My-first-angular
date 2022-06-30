import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-unit-forty-two',
  templateUrl: './unit-forty-two.component.html',
  styles: [`
      .online {
        color: white;
      }
  `]
})
export class UnitFortyTwoComponent implements OnInit {
  serverName = 'Testserver';
  servers = ['Testserver', 'Testserver 2']
  serverCreated = false;
 

  constructor() {

   }

  ngOnInit(): void {
  }

  onCreatServer(){
    this.servers.push(this.serverName);
  }
  
}
