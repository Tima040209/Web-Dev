from django.shortcuts import render
from django.shortcuts import render
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt

import json
from api.models import Company, Vacancy
from api.serializers import CompanySerializer
from api.serializers import VacancySerializer

from rest_framework import status
from rest_framework.views import APIView
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.request import Request
class CompanyAPIView(APIView):
      def get(self, request):
        companies = Company.objects.all()
        serializer = CompanySerializer(companies, many=True)
        return Response(serializer.data)
    
      def post(self, request):
        serializer = CompanySerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
@api_view(['GET'])
def company_detail(request,id):
        company = Company.objects.get(pk=id)
        serializer = CompanySerializer(company)
        return Response(serializer.data, status=status.HTTP_200_OK)
class VacancyAPIView(APIView):
    def get(self, request):
        vacancies = Vacancy.objects.all()
        serializer = VacancySerializer(vacancies, many=True)
        return Response(serializer.data)
    
    def post(self, request):
        serializer = VacancySerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
@api_view(['GET'])
def vacancy_detail(request,id) :
     vacancy  = Vacancy.objects.get(pk = id)
     serializer = VacancySerializer(vacancy)
     return Response(serializer.data, status=status.HTTP_200_OK)

@api_view(['GET'])
def top_ten(request):
     top = Vacancy.objects.order_by('-salary')[:10]
     serializer = VacancySerializer(top, many=True)
     return Response(serializer.data[:10])

@api_view(['GET'])
def company_vacancies(request,id):
    company = Company.objects.get(pk=id)
    serializer = VacancySerializer(company.vacancy_set.all(), many=True)
    return Response(serializer.data)
