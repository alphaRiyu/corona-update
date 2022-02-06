import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'node_modules/chart.js';
import { SummaryService } from '../summary/summary.service';

@Component({
  selector: 'app-chart-canvas',
  templateUrl: './chart-canvas.component.html',
  styleUrls: ['./chart-canvas.component.css']
})
export class ChartCanvasComponent implements OnInit {

  constructor(private summary_service: SummaryService) { }

  public obj_summary: any;
  public summary: any = [];
  public global: any;

  ngOnInit(): void {
    this.summary_service.get_summary()
      .subscribe(data => {
        this.obj_summary = Object.entries(data)
        this.summary = this.obj_summary[2][1]
        this.global = this.obj_summary[3][1]
      });
    Chart.register(...registerables);
    new Chart("data-chart", {
      type: 'bar',
      data: {
        labels: ['A', 'B', 'C', 'D', 'E', 'F'],
        datasets: [{
          label: '# of Votes',
          data: [1, 5, 3, 10, 23, 60],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }

}
