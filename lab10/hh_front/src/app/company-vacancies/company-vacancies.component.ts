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
  company : Company;
  vacancies : Vacancy[] = [];
  constructor(private route : ActivatedRoute, private companyService:CompanyService){
  }
  ngOnInit(): void {
    
    this.companyService.getVacancies()
  }
}
