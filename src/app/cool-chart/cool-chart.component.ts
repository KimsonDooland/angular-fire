import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import {ChartService} from '../chart.service';
import * as _ from 'lodash';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/take';

@Component({
  selector: 'app-cool-chart',
  templateUrl: './cool-chart.component.html',
  styleUrls: ['./cool-chart.component.css']
})
export class CoolChartComponent implements OnInit {

  @ViewChild('chart') el:ElementRef;

  constructor(private chartService : ChartService) { }

  ngOnInit() {
  //   this.chartService.getData('elevationstest')
  //  .take(1)
  //   .subscribe(data => {
  //     this.topoChart(data);
  //   })   
  this.topoChart();    
   }

   topoChart() {
     const element = this.el.nativeElement
     var trace1 = {
      x: ['2013-10-04 22:23:00', '2013-11-04 22:23:00', '2013-12-04 22:23:00'],
      y: [10, 15, 13, 17],
      mode: 'markers'
    };
    
    var trace2 = {
      x: ['2013-10-04 22:23:00', '2013-11-04 22:23:00', '2013-12-04 22:23:00'],
      y: [16, 5, 11, 9],
      mode: 'lines'
    };
    
    var trace3 = {
      x: ['2013-10-04 22:23:00', '2013-11-04 22:23:00', '2013-12-04 22:23:00'],
      y: [12, 9, 15, 12],
      mode: 'lines+markers',
      name: 'scatter-link'
    };
    var data = [ trace1, trace2, trace3 ];
     
     const layout = {
       title: 'Kimson Dooland',
       autosize:false,
       width:750,
       xaxis: {
        range: ['2013-07-01', '2013-12-31'],
        type: 'date'
      },
      yaxis: {
        autorange: true,
        range: [86.8700008333, 138.870004167],
        type: 'linear'
      }
      
     };
     Plotly.plot(element, data, layout);
   }
}

  

