import { Component, OnInit } from '@angular/core';
import { Company, Vacancy } from './models';
import { CompanyService } from './company.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'hh_front';

  companies : Company[] = [];
  vacancies : Vacancy[]= [];
  
  constructor(private companyService: CompanyService){

  }
  ngOnInit(){
    this.companyService.getCompanies().subscribe((data:Company[])=>{
      console.log(data);
    })

  }
}
