import { Component, OnInit, Input } from '@angular/core';
import * as CanvasJS from '../../assets/canvasjs.min';
import { PopulationService } from '../services/population.service';

@Component({
  selector: 'app-chart-threshold',
  templateUrl: './chart-threshold.component.html',
  styleUrls: ['./chart-threshold.component.css']
})
export class ChartThresholdComponent implements OnInit {


  constructor(public s:PopulationService) { 
    s.population.subscribe(this.renderChart.bind(this))
    s.updateThresholdSubject.subscribe(this.updateThreshold.bind(this))

  }

  ngOnInit() {
    this.s.getPopulation(1980, 55)
  }

  chart:CanvasJS.Chart;

  updateThreshold(v:number){
    console.log('ChartThresholdComponent - updateThreshold: ' + v)
    this.chart.axisY[0].stripLines[0].set("value",v)
  }

  renderChart(population:[]) {

    //manipulate data
    let topten = population
                  .sort((a,b) => a['total']>b['total'] ? -1 : 1)
                  .slice(0,15)
    console.log(topten);

    //let chart = new CanvasJS.Chart("chartContainer", {
    this.chart = new CanvasJS.Chart("chartContainer", {
      animationEnabled: true,  
      title:{
        text: "Population (at year, at age) count per Country (top 10)"
      },
      axisY: {
        title: "Populaion",
        valueFormatString: "#0,,.",
        suffix: "mn",
        stripLines: [{
          value: 3366500,
          label: "Average"
        }]
      },
      data: [{
        //yValueFormatString: "#,### Units",
        //xValueFormatString: "YYYY",
        type: "spline",
        //dataPoints: topten.map(country => { return { y: country['country'], x: country['total'] } })
        dataPoints: topten.map(country => { return { label: country['country'], y: country['total'] } })
      }]
    });
    this.chart.render();
  }



}
