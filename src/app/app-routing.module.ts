import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CasesComponent } from './cases/cases.component';
import { SummaryComponent } from './summary/summary.component';

const routes: Routes = [
  {
    path: '', component: SummaryComponent
  },
  {
    path: 'cases', component: CasesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [SummaryComponent, CasesComponent]
