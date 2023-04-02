from django.shortcuts import render
from django.http.response import HttpResponse,JsonResponse
from api.models import Product

# Create your views here.
products= Product.objects.all()
def product_list(request):
    products_json = [p.to_json() for p in products]
    return JsonResponse(products_json,safe=False)
def product_detail(request,id):

    for product in products:
        if product[id]==id:
            return JsonResponse(product.to_json())
    return JsonResponse({'error': 'Product not found'})
