import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CompanyVacanciesComponent } from './company-vacancies/company-vacancies.component';

const routes: Routes = [
  {"path": "companies", component : AppComponent},
  {"path":"company/:id", component: CompanyVacanciesComponent},
  {"path": "",redirectTo: "companies",pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
