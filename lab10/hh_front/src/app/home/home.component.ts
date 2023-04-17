import { Component, OnInit } from '@angular/core';
import { Company, Vacancy } from '../models';
import { CompanyService } from '../company.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  companies : Company[] = [];
  vacancies : Vacancy[]= [];
  
  constructor(private companyService: CompanyService){

  }
  ngOnInit(){
    this.companyService.getCompanies().subscribe((data:Company[])=>{
     this.companies = data;
    })

  }

}
