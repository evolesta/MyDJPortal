from django.contrib.auth.models import User
from django.shortcuts import render, get_object_or_404
from rest_framework import serializers
from .models import *
import requests

class INinjaSettingSerializer(serializers.ModelSerializer):
    class Meta:
        model = INinjaSetting
        fields = ['apiURL', 'apiKey']

class LocationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Location
        fields = '__all__'

class GigStatusSerializer(serializers.ModelSerializer):
    class Meta:
        model = GigStatus
        fields = '__all__'

class GigSerializer(serializers.ModelSerializer):
    # Fields containing the related gig location
    location = LocationSerializer(read_only=True)
    location_id = serializers.PrimaryKeyRelatedField(queryset=Location.objects.all(), source='location', write_only=True)
    # Field containing the client from Invoice Ninja
    client = serializers.SerializerMethodField()
    status = GigStatusSerializer(read_only=True)
    # Field containing the gig status
    status_id = serializers.PrimaryKeyRelatedField(queryset=GigStatus.objects.all(), source='status', write_only=True)

    class Meta:
        model = Gig
        fields = '__all__'

    def get_client(self, obj):
        clientId = obj.clientId
        clientData = get_client_id(clientId)
        return clientData        

class PriceSettingSerializer(serializers.ModelSerializer):
    class Meta:
        model = PriceSetting
        fields = '__all__'

# helper function to get a specific client from Invoice Ninja
def get_client_id(clientId):
    # Get the API url and key from the model and create a new header containing the key
    ininjasettings = INinjaSetting.objects.all()
    ininjasettings = get_object_or_404(ininjasettings, pk=1)
    newheaders = {'X-Api-Token': ininjasettings.apiKey}

    response = requests.get(ininjasettings.apiURL + '/clients/' + clientId, headers=newheaders)
    return response.json()