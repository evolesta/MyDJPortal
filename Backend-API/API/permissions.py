from rest_framework.permissions import BasePermission
from .models import RequestSetting

class BlockWhenActivePermission(BasePermission):

    def has_permission(self, request, view):
        try:
            setting = RequestSetting.objects.get(pk=1)
            return setting.active
        except RequestSetting.DoesNotExist:
            return True