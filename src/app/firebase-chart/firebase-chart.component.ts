import { Component, OnInit,ViewChild, ElementRef } from '@angular/core';
import {FireScriptService } from '../fire-script.service';
import * as _ from 'lodash';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/take';

@Component({
  selector: 'app-firebase-chart',
  templateUrl: './firebase-chart.component.html',
  styleUrls: ['./firebase-chart.component.css']
})
export class FirebaseChartComponent implements OnInit {

  @ViewChild('chart') el:ElementRef;

  constructor(private fireScript: FireScriptService) { }

  data:any[];

  ngOnInit() {

    this.fireScript.getData('jimjacksjimontest')
    .subscribe(data => {
      this.data = data;
      // console.log(this.data);
      Plotly.purge(this.el.nativeElement);
      this.ternaryChart(data);
    })

  }

  updateDataPoint() {
    const key = '-KrCQaF9edK15i4XcSXZUH'
    const newData = {
      analyst:   _.random(0, 100),
      designer:  _.random(0, 100),
      developer: _.random(0, 100)
    }
    this.fireScript.UpdateRanking(key, newData)
  }

  ternaryChart(data) {
    const element = this.el.nativeElement
    const formattedData = [{
      type: 'scatterternary',
      mode: 'markers',
      a: data.map(d => d.analyst ),
      b: data.map(d => d.designer),
      c: data.map(d => d.developer),
      text: data.map(d => d.label),
      marker: {
          symbol: 100,
          color: '#DB7365',
          size: 14,
          line: { width: 2 }
      },
    }]

    const style = {
      ternary: {
          sum: 100,
          aaxis: this.makeAxis('Analyst', 0),
          baxis: this.makeAxis('Developer', 45),
          caxis: this.makeAxis('Designer', -45),
          bgcolor: '#fff1e0'
     }
    }

    Plotly.plot(element, formattedData, style);
  }

  private makeAxis(title, tickangle) {
    return {
      title: title,
      titlefont: { size: 20 },
      tickangle: tickangle,
      tickfont: { size: 15 },
      tickcolor: 'rgba(0,0,0,0)',
      ticklen: 5,
      showline: true,
      showgrid: true
    };
  }


}
