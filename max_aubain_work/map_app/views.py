from django.shortcuts import render
from django.http import HttpResponse

# Home page
def index(request):
  return HttpResponse("This is the map_app index page.")
