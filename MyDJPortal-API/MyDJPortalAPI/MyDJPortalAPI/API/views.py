from django.shortcuts import render, get_object_or_404
from .serializers import *
from rest_framework import viewsets, status
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.decorators import action
import requests

class ClientViewSet(viewsets.ModelViewSet):
    queryset = Client.objects.all()
    serializer_class = ClientSerializer
    permission_classes = [IsAuthenticated]

    # custom create method because to generate a new unique client nr
    def create(self, request, *args, **kwargs):
        # retrieve the last created client object from the model
        last_client = Client.objects.order_by('number').first()
        settings = Setting.objects.get(pk=1)

        # check if the query returned a client, if not, use the start nr from the settings model
        if not last_client:
            new_nr = settings.clientNrStartAt + 1
        else:
            lastClientNr = last_client.number
            lastClientNr = lastClientNr.split('-')
            new_nr = int(lastClientNr[1]) + 1

        # modify the body of the request
        request.data['number'] = settings.clientNrPrefix + '-' + str(new_nr)

        # proceed to add the new data to the model
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    
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

class GigStatusViewSet(viewsets.ModelViewSet):
    queryset = GigStatus.objects.all()
    serializer_class = GigStatusSerializer
    permission_classes = [IsAuthenticated]

class InvoiceViewSet(viewsets.ModelViewSet):
    queryset = Invoice.objects.all()
    serializer_class = InvoiceSerializer
    permission_classes = [IsAuthenticated]

class QuoteViewSet(viewsets.ModelViewSet):
    queryset = Quote.objects.all()
    serializer_class = QuoteSerializer
    permission_classes = [IsAuthenticated]

# Custom viewset which only returns the first row and only updates the first row
class SettingViewSet(viewsets.ViewSet):
    permission_classes = [IsAuthenticated]
    
    def list(self, request):
        queryset = Setting.objects.get(pk=1)
        serializer = SettingSerializer(queryset)
        return Response(serializer.data)
    
    def update(self, request, pk=1):
        queryset = Setting.objects.get(pk=1)
        serializer = SettingSerializer(queryset, data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data)