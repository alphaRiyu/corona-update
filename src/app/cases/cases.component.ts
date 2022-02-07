import { Component, OnInit } from '@angular/core';
import { CasesService } from './cases.service';

@Component({
  selector: 'app-cases',
  templateUrl: './cases.component.html',
  styleUrls: ['./cases.component.css']
})
export class CasesComponent implements OnInit {

  public all_cases: any;
  public by_cases: any;
  public country: any = 'Ala Aland Islands';
  public status: any = 'all';
  public is_all: boolean = true;
  public from: any = '2020-01-22';
  public to: any = this.get_max_date();
  today: any;
  date: any;
  month: any;
  year: any;
  max_date: any;

  constructor(private cases_service: CasesService) { }

  ngOnInit(): void {
    if (this.is_all) {
      this.cases_service.get_all_cases(this.country, this.from, this.to)
        .subscribe(data => {
          this.all_cases =
            this.all_cases = Object.entries(data);
        })
    } else {
      this.cases_service.get_by_case(this.country, this.status, this.from, this.to)
        .subscribe(data => {
          this.by_cases =
            this.by_cases = Object.entries(data);
        })
    }
  }

  get_country(e: any) {
    this.country = e;
    this.ngOnInit();
  }

  get_status(e: any) {
    this.status = e;
    if (this.status !== 'all') {
      this.is_all = false;
    } else {
      this.is_all = true;
    }
    this.ngOnInit();
  }

  get_start_date(e: any) {
    this.from = e;
    this.ngOnInit();
  }

  get_end_date(e: any) {
    this.to = e;
    this.ngOnInit();
  }

  get_max_date() {
    this.today = new Date();
    this.date = this.today.getDate();
    this.month = this.today.getMonth() + 1;
    this.year = this.today.getFullYear();
    if (this.date < 10) {
      this.date = '0' + this.date;
    }
    if (this.month < 10) {
      this.month = '0' + this.month;
    }
    return this.max_date = this.year + '-' + this.month + '-' + this.date;
  }

}
