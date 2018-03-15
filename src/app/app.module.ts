import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FireScriptService} from './fire-script.service';

import { AppComponent } from './app.component';
import { CoolChartComponent } from './cool-chart/cool-chart.component';

import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabaseModule} from 'angularfire2/database';

import {ChartService} from './chart.service';
import { environment } from '../environments/environment';
import { SecondCoolChartComponent } from './second-cool-chart/second-cool-chart.component';
import { FirebaseChartComponent } from './firebase-chart/firebase-chart.component';
import { RangeSliderComponent } from './range-slider/range-slider.component';

import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './/app-routing.module';





@NgModule({
  declarations: [
    AppComponent,
    CoolChartComponent,
    SecondCoolChartComponent,
    FirebaseChartComponent,
    RangeSliderComponent,
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule ,
    AppRoutingModule
  ],
  providers: [ChartService, FireScriptService],
  bootstrap: [AppComponent]
})
export class AppModule { }
