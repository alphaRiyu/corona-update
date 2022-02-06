import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http'

@Injectable({
    providedIn: 'root'
})
export class SummaryService {

    private summary_url = 'https://api.covid19api.com/summary';

    constructor(private http: HttpClient) {}

    get_summary() {
        return this.http.get(this.summary_url);
    }
}