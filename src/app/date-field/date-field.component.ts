import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-date-field',
  templateUrl: './date-field.component.html',
  styleUrls: ['./date-field.component.css']
})
export class DateFieldComponent implements OnInit {

  @ViewChild('date') out_date: ElementRef = this.element;
  @Input('type') type: string = '';
  @Input('label') label: string = '';
  @Output('selected_date') selected_date = new EventEmitter;
  today: any;
  date: any;
  month: any;
  year: any;
  max_date: any;
  value_date: any;
  label_for: any;
  sel_date: any;

  constructor(private element: ElementRef) { }

  ngOnInit(): void {
    this.check_date_type();
    this.check_date_label();
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

  check_date_type() {
    if (this.type === 'start') {
      this.value_date = '2020-01-22';
    }
    if (this.type === 'end') {
      this.value_date = this.get_max_date();
    }
    this.out_date.nativeElement.setAttribute('max', this.get_max_date());
    this.out_date.nativeElement.setAttribute('value', this.value_date);
  }

  check_date_label() {
    if (this.label === 'from') {
      this.label_for = 'From:'
    }
    if (this.label === 'to') {
      this.label_for = 'To:'
    }
  }

  set_date(e: any) {
    this.sel_date = e.target.value;
    this.selected_date.emit(this.sel_date);
  }
}
