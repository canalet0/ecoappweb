from django.contrib import admin
from django.urls import include,path
from ecoapp import views

urlpatterns = [
    path('ecoapp/', include('ecoapp.urls')),
]
