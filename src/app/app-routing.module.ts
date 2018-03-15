import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoolChartComponent } from './cool-chart/cool-chart.component';

import { SecondCoolChartComponent } from './second-cool-chart/second-cool-chart.component';
import { FirebaseChartComponent } from './firebase-chart/firebase-chart.component';
import { RangeSliderComponent } from './range-slider/range-slider.component';

import { RouterModule, Routes } from '@angular/router';

const appRoutes : Routes = [
  {path: 'cool_chart', component:CoolChartComponent},
  {path: 'firebase_chart', component:FirebaseChartComponent},
  {path: 'range_slider_chart', component:RangeSliderComponent},
  {path: '',redirectTo:'cool_chart', pathMatch:'full'}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(
      appRoutes
    )
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
