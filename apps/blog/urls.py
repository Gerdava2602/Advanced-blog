from django.urls import path

from .views import *

urlpatterns = [
    path('', BlogListView.as_view(), name='blog_list'),
    path('category/<category_id>', BlogListCategoryView.as_view(), name='blog_list_by_category'),
    path('search/<str:search_str>', BlogListSearchView.as_view(), name='blog_list_by_search'),
    path('<post_slug>', PostDetailView.as_view(), name='blog_detail'),
]