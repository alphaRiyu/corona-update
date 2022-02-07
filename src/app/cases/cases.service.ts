import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class CasesService {

    public by_case_url = 'https://api.covid19api.com/country/Algeria/status/confirmed?from=2020-09-01T00:00:00Z&to=2021-04-01T00:00:00Z'

    constructor(private http: HttpClient) { }

    get_all_cases(selected_country: string, selected_from: string, selected_to: string) {
        return this.http.get(`https://api.covid19api.com/country/${selected_country}?from=${selected_from}&to=${selected_to}`);
    }

    get_by_case(selected_country: string, selected_status: string, selected_from: string, selected_to: string) {
        return this.http.get(`https://api.covid19api.com/country/${selected_country}/status/${selected_status}?from=${selected_from}&to=${selected_to}`);
    }

}