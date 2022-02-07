import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { DateFieldComponent } from './date-field/date-field.component';
import { NavigationComponent } from './navigation/navigation.component';
import { SummaryComponent } from './summary/summary.component';
import { CasesComponent } from './cases/cases.component';
import { HttpClientModule } from '@angular/common/http';
import { ChartCanvasComponent } from './chart-canvas/chart-canvas.component';
import { CountryDropdownComponent } from './country-dropdown/country-dropdown.component';
import { StatusDropdownComponent } from './status-dropdown/status-dropdown.component';
import { FilterButtonComponent } from './filter-button/filter-button.component';

@NgModule({
  declarations: [
    AppComponent,
    DateFieldComponent,
    NavigationComponent,
    routingComponents,
    ChartCanvasComponent,
    CountryDropdownComponent,
    StatusDropdownComponent,
    FilterButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
