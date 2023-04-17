import { Component ,OnInit} from '@angular/core';
import { Company } from '../models';
import { CompanyService } from '../company.service';

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.css']
})
export class CompaniesComponent {
companies : Company[] = [];

constructor(private companyService:CompanyService){}
ngOnInit(){
  this.companyService.getCompanies().subscribe((data:Company[])=>{
    this.companies = data;
  })
}
}
