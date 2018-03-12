import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CoolChartComponent } from './cool-chart/cool-chart.component';

import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabaseModule} from 'angularfire2/database';

import {ChartService} from './chart.service';
import { environment } from '../environments/environment';
import { SecondCoolChartComponent } from './second-cool-chart/second-cool-chart.component';
@NgModule({
  declarations: [
    AppComponent,
    CoolChartComponent,
    SecondCoolChartComponent,
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule 
  ],
  providers: [ChartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
