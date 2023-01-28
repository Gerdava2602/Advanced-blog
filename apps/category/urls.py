from django.urls import path
from .views import *

urlpatterns = [
    path('categories', ListCategoriesview.as_view(), name='category_list'),
]