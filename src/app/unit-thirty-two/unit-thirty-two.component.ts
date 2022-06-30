import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-unit-thirty-two',
  templateUrl: './unit-thirty-two.component.html',
  styleUrls: ['./unit-thirty-two.component.css']
})
export class UnitThirtyTwoComponent implements OnInit {

  // Property Binding
  allowNewSever = false;
  // Event Binding
  serverCreationStatus = 'No server was created!';

  //32. Passing and Using Data with Event Binding 
  serverName = 'test-two-way';

  //38. Using ngIf to Output Data Conditionally
  serverCreated = false;
  
  constructor() { 
    setTimeout (() => {
      this.allowNewSever = true;  
      //console.log(this.allowNewSever );
    }, 2000);
  }

  ngOnInit(): void {
  }

  // Event Binding
  onCreatServer() {
    this.serverCreated = true;
    this.serverCreationStatus = 'Server was created! This is '+ this.serverName;
  }

  // 32. Passing and Using Data with Event Binding 
  onUpdateServerName(event : Event){
    this.serverName = (<HTMLInputElement>event.target).value;
  }

}
