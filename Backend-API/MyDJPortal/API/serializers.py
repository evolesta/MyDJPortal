from API.models import *
from rest_framework import serializers

class ClientSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Client
        fields = '__all__'

class GigSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Gig
        fields = '__all__'

class RequestSerializer(serializers.ModelSerializer):
    class Meta:
        model = Request
        fields = '__all__'

class RequestSettingSerializer(serializers.ModelSerializer):
    class Meta:
        model = RequestSetting
        fields = '__all__'