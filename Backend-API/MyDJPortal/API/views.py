from django.shortcuts import render
from rest_framework import permissions, viewsets
from API.models import *
from API.serializers import *

class GigViewSet(viewsets.ModelViewSet):
    queryset = Gig.objects.all()
    serializer_class = GigSerializer

class RequestViewSet(viewsets.ModelViewSet):
    queryset = Request.objects.all()
    serializer_class = RequestSerializer