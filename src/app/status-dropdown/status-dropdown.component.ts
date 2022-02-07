import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-status-dropdown',
  templateUrl: './status-dropdown.component.html',
  styleUrls: ['./status-dropdown.component.css']
})
export class StatusDropdownComponent implements OnInit {

  @Output('select_status') select_status = new EventEmitter;
  public status: any;

  constructor() { }

  ngOnInit(): void {
  }

  status_select(e: any) {
    this.status = e.target.value;
    this.select_status.emit(this.status);
  }

}
