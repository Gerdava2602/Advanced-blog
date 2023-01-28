from django.urls import path

from .views import *

urlpatterns = [
    path('', BlogListView.as_view(), name='blog_list'),
    path('<post_slog>/', PostDetailView.as_view(), name='blog_detail'),
]