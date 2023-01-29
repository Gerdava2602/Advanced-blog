from django.shortcuts import render, get_object_or_404
from apps.category.models import Category

from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework import permissions

from django.db.models.query_utils import Q

from .models import Post
from .serializers import PostSerializer
from .pagination import SmallSetPagination, MediumSetPagination, LargeSetPagination

# Create your views here.
class BlogListView(APIView):
    def get(self, request, format=None):
        if Post.objects.all().exists():
            posts = Post.postobjects.all()

            #Paginates data to prevent overload
            paginator = SmallSetPagination()
            results = paginator.paginate_queryset(posts, request)
            # Convert data in JSON
            serializer = PostSerializer(results, many=True)

            return paginator.get_paginated_response({'posts': serializer.data})
        else:
            return Response({'message': 'No posts found'}, status=status.HTTP_404_NOT_FOUND)

class BlogListCategoryView(APIView):
    def get(self, request, category_id,format=None):
        if Post.objects.all().exists():
            category = Category.objects.get(id=category_id)
            posts = Post.postobjects.all().filter(category=category)

            #Paginates data to prevent overload
            paginator = SmallSetPagination()
            results = paginator.paginate_queryset(posts, request)
            # Convert data in JSON
            serializer = PostSerializer(results, many=True)

            return paginator.get_paginated_response({'posts': serializer.data})
        else:
            return Response({'message': 'No posts found'}, status=status.HTTP_404_NOT_FOUND)

class PostDetailView(APIView):
    def get(self, request, post_slug,format=None):
        post = get_object_or_404(Post, slug=post_slug)
        serializer = PostSerializer(post)
        return Response({'post':serializer.data}, status=status.HTTP_200_OK)

