from django.urls import path
from .views import views

urlpatterns = [
    path('', views.index, name='index'),
    path('create-collection-point', views.createCollectionPoint, name='createCollectionPoint'),
    path('collection-points', views.collectionPoints, name='collectionPoints'),
]
