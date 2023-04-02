from django.shortcuts import render
from django.http.response import HttpResponse,JsonResponse

# Create your views here.
def home(request):
    return HttpResponse('home page')
