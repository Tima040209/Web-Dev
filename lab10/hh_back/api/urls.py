from django.urls import path
from.views import CompanyAPIView,company_detail,VacancyAPIView,vacancy_detail,top_ten,company_vacancies
from api import views
urlpatterns = [
    path('companies/',CompanyAPIView.as_view()),
    path('companies/<int:id>/',views.company_detail),
    path('companies/<int:id>/vacancies/',views.company_vacancies),
    path('vacancies/',VacancyAPIView.as_view()),
    path('vacancies/<int:id>/',views.vacancy_detail),
    path('vacancies/top_ten/',views.top_ten)
]