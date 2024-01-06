from django.contrib.auth.models import User
from django.shortcuts import render, get_object_or_404
from rest_framework import serializers
from .models import *
import requests

class LocationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Location
        fields = '__all__'

class ClientSerializer(serializers.ModelSerializer):
    class Meta:
        model = Client
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
    status = GigStatusSerializer(read_only=True)
    # Field containing the gig status
    status_id = serializers.PrimaryKeyRelatedField(queryset=GigStatus.objects.all(), source='status', write_only=True)

    class Meta:
        model = Gig
        fields = '__all__'    

class PriceSettingSerializer(serializers.ModelSerializer):
    class Meta:
        model = PriceSetting
        fields = '__all__'

class QuoteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Quote
        fields = '__all__'

class InvoiceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Invoice
        fields = '__all__'

class SettingSerializer(serializers.ModelSerializer):
    class Meta:
        model = Setting
        fields = '__all__'