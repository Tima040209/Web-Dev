import { Component } from '@angular/core';
import { Vacancy } from '../models';
import { CompanyService } from '../company.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-vacancy-detail',
  templateUrl: './vacancy-detail.component.html',
  styleUrls: ['./vacancy-detail.component.css']
})
export class VacancyDetailComponent {
vacancy!: Vacancy;
constructor(private vacancyService: CompanyService, private route:ActivatedRoute){}
ngOnInit(){
  this.route.paramMap.subscribe((params) => {
    const id : number = Number(params.get('id'));
    this.vacancyService.getVacancy(id).subscribe((vacancy) => {
      this.vacancy = vacancy;
    })
  })
}



}
