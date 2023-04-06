from django.shortcuts import render
from django.http.response import JsonResponse
from api.models import Company,Vacancy
# Create your views here.
def company_list(request):
    companies = Company.objects.all()
    company_json = [c.to_json() for c in companies]
    return JsonResponse(company_json,safe=False)
def vacancy_list(request):
    vacancies = Vacancy.objects.all()
    vacancy_json = [v.to_json() for v in vacancies]
    return JsonResponse(vacancy_json,safe=False)
def company_detail(request,id):
        company = Company.objects.get(pk=id)
        return JsonResponse(company.to_json())
def company_vacancies(request,id):
     vacancies = [v.to_json() for v in Vacancy.objects.filter(company_id = id)]
     company_vacancies = {
          'vacancies' : vacancies
     }
     return JsonResponse(company_vacancies)
def vacancy_detail(request,id) :
     vacancy  = Vacancy.objects.get(pk = id)
     return JsonResponse(vacancy.to_json())