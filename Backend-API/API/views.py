from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework.decorators import permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.generics import ListCreateAPIView

from django.shortcuts import get_object_or_404, render
from API.models import *
from API.serializers import *
from .permissions import BlockWhenActivePermission

class ClientViewSet(viewsets.ModelViewSet):
    permission_classes = [IsAuthenticated]
    queryset = Client.objects.all()
    serializer_class = ClientSerializer

class GigViewSet(viewsets.ModelViewSet):
    permission_classes = [IsAuthenticated]
    queryset = Gig.objects.all()
    serializer_class = GigSerializer
        
class RequestListCreateView(ListCreateAPIView):
    serializer_class = RequestSerializer

    # Helper function for getting the Request settings
    def get_request_setting(self):
        return get_object_or_404(RequestSetting, pk=1)
    
    # GET route to only return requests when active and matching the active gig id
    def get_queryset(self):
        setting = self.get_request_setting()

        if not setting.active:
            return Request.objects.none()
        
        return Request.objects.filter(gig=setting.gig)
    
    def perform_create(self, serializer):
        setting = self.get_request_setting()

        if not setting.active:
            return Response('Requests are currently disabled!', 403)
        
        serializer.save(gig=setting.gig)

class RequestSettingViewSet(viewsets.ViewSet):
    
    def list(self, request, pk=1):
        queryset = RequestSetting.objects.all()
        data = get_object_or_404(queryset, pk=1)
        serializer = RequestSettingSerializer(data)
        return Response(serializer.data)    