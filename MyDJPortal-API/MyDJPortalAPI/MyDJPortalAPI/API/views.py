from django.shortcuts import render, get_object_or_404
from .serializers import *
from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView
import requests

# Proxy view for handling request to the InvoiceNinja API
class INinjaProxy(APIView):
    # Get the API url and key from the model and create a new header containing the key
    ininjasettings = INinjaSetting.objects.all()
    ininjasettings = get_object_or_404(ininjasettings, pk=1)
    newheaders = {'X-Api-Token': ininjasettings.apiKey}
    
    def get(self, request, endpoint, id=None):
        if id is None:
            url = self.ininjasettings.apiURL + '/' + endpoint
        else:
            url = self.ininjasettings.apiURL + '/' + endpoint + '/' + id

        response = requests.get(url, headers=self.newheaders)
        return Response(response.json())
    
    def post(self, request, endpoint, id=None):
        if id is None:
            url = self.ininjasettings.apiURL + '/' + endpoint
        else:
            url = self.ininjasettings.apiURL + '/' + endpoint + '/' + id
        postData = request.data
        response = requests.post(url, json=postData, headers=self.newheaders)
        return Response(response.json())
    
    def put(self, request, endpoint, id=None):
        if id is None:
            url = self.ininjasettings.apiURL + '/' + endpoint
        else:
            url = self.ininjasettings.apiURL + '/' + endpoint + '/' + id
        postData = request.data
        response = requests.put(url, json=postData, headers=self.newheaders)
        return Response(response.json())
    
    def delete(self, request, endpoint, id=None):
        if id is None:
            url = self.ininjasettings.apiURL + '/' + endpoint
        else:
            url = self.ininjasettings.apiURL + '/' + endpoint + '/' + id
        response = requests.delete(url, headers=self.newheaders)
        return Response(response.json())
    
class LocationViewSet(viewsets.ModelViewSet):
    queryset = Location.objects.all()
    serializer_class = LocationSerializer
    permission_classes = [IsAuthenticated]

class GigViewSet(viewsets.ModelViewSet):
    queryset = Gig.objects.select_related('location')
    serializer_class = GigSerializer
    permission_classes = [IsAuthenticated]

class PriceSettingViewSet(viewsets.ModelViewSet):
    queryset = PriceSetting.objects.all()
    serializer_class = PriceSettingSerializer
    permission_classes = [IsAuthenticated]