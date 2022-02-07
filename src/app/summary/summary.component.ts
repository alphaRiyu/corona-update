import { Component, OnInit } from '@angular/core';
import { SummaryService } from './summary.service';


@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {

  public obj_summary: any;
  public summary: any = [];
  public global: any;

  constructor(private summary_service: SummaryService) { }

  ngOnInit() {
    this.summary_service.get_summary()
      .subscribe(data => {
        this.obj_summary = Object.entries(data)
        this.summary = this.obj_summary[2][1]
        this.global = this.obj_summary[3][1]
        this.global.sort((a: any, b: any) => {
          (a > b ? 1 : -1);
        });
      });
  }

}
