import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CompanyVacanciesComponent } from './company-vacancies/company-vacancies.component';
import { CompanyDetailComponent } from './company-detail/company-detail.component';
import { CompaniesComponent } from './companies/companies.component';
import { HomeComponent } from './home/home.component';
import { VacanciesComponent } from './vacancies/vacancies.component';
import { VacancyDetailComponent } from './vacancy-detail/vacancy-detail.component';

const routes: Routes = [
  {"path": "home",component : HomeComponent},
  {"path": "companies", component : CompaniesComponent},
  {"path": "companies/:id", component: CompanyDetailComponent},
  {"path": "vacancies",component : VacanciesComponent},
  {"path": "vacancies/:id",component : VacancyDetailComponent},
  {"path": "company/:id/vacancy",component : CompanyVacanciesComponent},
  {"path": "",redirectTo: "home",pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
