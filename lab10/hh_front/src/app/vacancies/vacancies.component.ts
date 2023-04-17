import { Component,OnInit } from '@angular/core';
import { Vacancy } from '../models';
import { CompanyService } from '../company.service';
@Component({
  selector: 'app-vacancies',
  templateUrl: './vacancies.component.html',
  styleUrls: ['./vacancies.component.css']
})
export class VacanciesComponent {
vacancies : Vacancy[]=[];
constructor(private companyService : CompanyService){}
ngOnInit(){
  this.companyService.getVacancies().subscribe((data:Vacancy[])=>{
    this.vacancies = data;
  })
}
}
