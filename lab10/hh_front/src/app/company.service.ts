import { Injectable } from '@angular/core';
import { Company, Vacancy } from './models';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  BASE_URL = 'http://127.0.0.1:8000'

  constructor(private client : HttpClient) { }

  getCompanies(): Observable<Company[]>{
    return this.client.get<Company[]>(`${this.BASE_URL}/api/companies`)
  }
  getVacancies(id:number): Observable<Vacancy[]>{
    return this.client.get<Vacancy[]>(`${this.BASE_URL}/api/companies/${id}/vacancies`)
  }
}
