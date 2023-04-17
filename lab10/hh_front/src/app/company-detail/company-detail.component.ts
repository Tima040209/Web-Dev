import { Component } from '@angular/core';
import { Company } from '../models';
import { ActivatedRoute } from '@angular/router';
import { CompanyService } from '../company.service';

@Component({
  selector: 'app-company-detail',
  templateUrl: './company-detail.component.html',
  styleUrls: ['./company-detail.component.css']
})
export class CompanyDetailComponent {
company! : Company;
constructor(private vacancyService: CompanyService, private route:ActivatedRoute){}
ngOnInit(){
  this.route.paramMap.subscribe((params) => {
    const id : number = Number(params.get('id'));
    this.vacancyService.getCompany(id).subscribe((vacancy) => {
      this.company = vacancy;
    })
  })
}
}
