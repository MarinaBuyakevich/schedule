import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'soft';

  constructor() {
  }
  public chartLabels = ['', 'JUN 22', 'JUN 22', 'JUN 28', 'JUL 6', 'JUL 13', 'JUL 14', 'JUL 20' , 'JUL 21' , 'Date'];
  public chartType = 'line';
  public chartLegend = true;
  public chartData = [
    {data: [ 140, 100, 80, 120, 160, 120, 160 , 150], label: 'Series A', backgroundColor : 'rgba(212,96,137,0.35)' , lineTension: 0, borderWidth : '1.5' },
    {data: [ 85, 125, 140, 142, 140, 150, 135 , 140], label: 'Series B' ,  backgroundColor : 'rgba(22,115,255,0.1)' , lineTension: 0, borderWidth : '1.5' },
    {data: [ 90, 90, 90 , 90 , 90 , 90 , 90 , 90, 90 ], label: 'Series C', borderDash: [10, 5], borderColor: 'Blue' , backgroundColor : 'rgba(0,0,0,0)' , borderWidth : '1.5'},
    {data: [ 112 , 112, 112 , 112 , 112 , 112 , 112, 112 , 112 ], label: 'Series D', borderDash: [10, 5], borderColor: 'DeepPink' , backgroundColor : 'rgba(0,0,0,0)' , borderWidth : '1.5'}
  ];
  public chartOptions = {
    options: {
      scales: {
        xAxes: [{
          type: 'linear',
          position: 'bottom'
        }]
      }
    }
  };
  ngOnInit() {
  }
}

