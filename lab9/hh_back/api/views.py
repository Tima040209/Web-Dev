from django.shortcuts import render
from django.http.response import JsonResponse
from api.models import Company,Vacancy
# Create your views here.
def company_list(request):
    companies = Company.objects.all()
    company_json = [c.to_json() for c in companies]
    return JsonResponse(company_json,safe=False)

