from django.shortcuts import render, get_object_or_404
from .serializers import *
from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.decorators import action
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

    @action(detail=True, methods=['get'], url_path='invoices')
    # Helper function to obtain all the invoices which are related to a specific gig
    def get_invoices(self, request, pk=None):
        ininjasettings = INinjaSetting.objects.all()
        ininjasettings = get_object_or_404(ininjasettings, pk=1)
        newheaders = {'X-Api-Token': ininjasettings.apiKey}

        invoiceIds = Gig.objects.all()
        invoiceIds = get_object_or_404(invoiceIds, pk=pk)

        invoices = []

        for id in invoiceIds.invoiceIds:
            response = requests.get(ininjasettings.apiURL + '/invoices/' + id, headers=newheaders)
            if response.status_code == 200:
                invoices.append(response.json()['data'])
            
        return Response(invoices)
    
    @action(detail=True, methods=['get'], url_path='quotes')
    def get_quotes(self, request, pk=None):
        ininjasettings = INinjaSetting.objects.all()
        ininjasettings = get_object_or_404(ininjasettings, pk=1)
        newheaders = {'X-Api-Token': ininjasettings.apiKey}

        quoteIds = Gig.objects.all()
        quoteIds = get_object_or_404(quoteIds, pk=pk)

        quotes = []

        for id in quoteIds.quoteIds:
            response = requests.get(ininjasettings.apiURL + '/quotes/' + id, headers=newheaders)
            if response.status_code == 200:
                quotes.append(response.json()['data'])
            
        return Response(quotes)
    
    @action(detail=True, methods=['post'], url_path='addquote')
    def add_quote(self, request, pk=None):
        gig = Gig.objects.all()
        gig = get_object_or_404(gig, pk=pk)

        gig.quoteIds.append(request.data.get('quoteId'))
        gig.save()
        return Response(self.get_serializer(gig).data)

    @action(detail=True, methods=['post'], url_path='removequote')
    def edit_quote(self, request, pk=None):
        gig = Gig.objects.all()
        gig = get_object_or_404(gig, pk=pk)

        gig.quoteIds.remove(request.data.get('quoteId'))
        gig.save()
        return Response(self.get_serializer(gig).data)

class PriceSettingViewSet(viewsets.ModelViewSet):
    queryset = PriceSetting.objects.all()
    serializer_class = PriceSettingSerializer
    permission_classes = [IsAuthenticated]

class GigStatusViewSet(viewsets.ModelViewSet):
    queryset = GigStatus.objects.all()
    serializer_class = GigStatusSerializer
    permission_classes = [IsAuthenticated]