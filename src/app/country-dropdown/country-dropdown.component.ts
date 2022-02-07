import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CountryDropdownService } from './country-dropdown.service';

@Component({
  selector: 'app-country-dropdown',
  templateUrl: './country-dropdown.component.html',
  styleUrls: ['./country-dropdown.component.css']
})
export class CountryDropdownComponent implements OnInit {

  @Output('selected_country') selected_country = new EventEmitter;
  public countries: any;
  public country: any;

  constructor(private country_dropdown_service: CountryDropdownService) { }

  ngOnInit(): void {
    this.country_dropdown_service.get_countries()
      .subscribe(data => {
        this.countries = Object.entries(data);
        this.countries.sort((a: any, b: any) => (a[1]['Country'] > b[1]['Country']) ? 1 : -1);
      });
  }

  select_country(e: any) {
    this.country = e.target.value;
    this.selected_country.emit(this.country);
  }

}
