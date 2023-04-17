import { Component, OnInit} from '@angular/core';
import { ActivatedRoute,ParamMap } from '@angular/router';
import { Company, Vacancy } from '../models';
import { CompanyService } from '../company.service';

@Component({
  selector: 'app-company-vacancies',
  templateUrl: './company-vacancies.component.html',
  styleUrls: ['./company-vacancies.component.css']
})
export class CompanyVacanciesComponent implements OnInit{
  vacancies : Vacancy[] = [];  
  constructor( private vacancyService:CompanyService,private route : ActivatedRoute){}
  ngOnInit(){
    this.getVacancies();  
    console.log(this.vacancies)
  }
  getVacancies(){
    this.route.paramMap.subscribe((params) => {
      const id : number = Number(params.get('id'));
        this.vacancyService.getCompanyVacancies(id).subscribe((data) => {
          this.vacancies = data
        })
    })
  }
}
