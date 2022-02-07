import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class CountryDropdownService {

    private country_dropdown_url = 'https://api.covid19api.com/countries';

    constructor(private http: HttpClient) { }

    get_countries() {
        return this.http.get(this.country_dropdown_url);
    }
}