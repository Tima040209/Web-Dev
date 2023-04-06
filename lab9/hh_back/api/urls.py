from django.urls import path
from api import views
urlpatterns = [
    path('companies/',views.company_list),
    # path('companies/<int:id>/',views.product_detail),
    # path('companies/int:id>/vacancies/',views.category_list),
    # path('category/vacancies/',views.category_detail),
    # path('category/vacancies/<int:id>/', views.category_product),
    # path('vacancies/<int:id>/'),
    # path('vacancies/top_ten/')
]