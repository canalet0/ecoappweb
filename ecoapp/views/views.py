from django.shortcuts import render
from django.http import HttpResponse

def index(request):
    result = {}
    return render(request, 'home.html',result)

def createCollectionPoint(request):
    result = {}
    return render(request, 'createCollectionPoint.html',result)

def collectionPoints(request):
    result = {}
    return render(request, 'collectionPoints.html',result)