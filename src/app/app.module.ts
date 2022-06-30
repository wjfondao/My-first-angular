import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { WarningAlertComponent } from './warning-alert/warning-alert.component';
import { SuccessAlertComponent } from './success-alert/success-alert.component';

import { FormsModule } from '@angular/forms';
import { UnitThirtyTwoComponent } from './unit-thirty-two/unit-thirty-two.component';
import { UnitThirtyNineComponent } from './unit-thirty-nine/unit-thirty-nine.component';

import { UnitFortyComponent } from './unit-forty/unit-forty.component';
import { UnitFortyOneComponent } from './unit-forty-one/unit-forty-one.component';
import { UnitFortyTwoComponent } from './unit-forty-two/unit-forty-two.component';
import { UnitFortyThreeComponent } from './unit-forty-three/unit-forty-three.component';
import { UnitFortyFourComponent } from './unit-forty-four/unit-forty-four.component';


@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    WarningAlertComponent,
    SuccessAlertComponent,
    UnitThirtyTwoComponent,
    UnitThirtyNineComponent,
    UnitFortyComponent,
    UnitFortyOneComponent,
    UnitFortyTwoComponent,
    UnitFortyThreeComponent,
    UnitFortyFourComponent, 
    
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
 
}
