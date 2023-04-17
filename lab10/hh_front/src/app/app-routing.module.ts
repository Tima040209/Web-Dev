import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CompanyVacanciesComponent } from './company-vacancies/company-vacancies.component';
import { CompanyDetailComponent } from './company-detail/company-detail.component';
import { CompaniesComponent } from './companies/companies.component';

const routes: Routes = [
  {"path": "home",component : AppComponent},
  {"path": "companies", component : CompaniesComponent},
  {"path": "company/:id", component: CompanyDetailComponent},
  {"path": "vacancies",component : CompanyVacanciesComponent},
  {"path": "company/:id/vacancies",component : CompanyVacanciesComponent},
  {"path": "",redirectTo: "companies",pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
