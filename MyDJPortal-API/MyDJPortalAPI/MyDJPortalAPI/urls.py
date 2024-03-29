"""
URL configuration for MyDJPortalAPI project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from MyDJPortalAPI.API import views
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView
)

router = routers.DefaultRouter()
router.register(r'api/clients', views.ClientViewSet)
router.register(r'api/locations', views.LocationViewSet, basename = 'locations')
router.register(r'api/gigs', views.GigViewSet, basename = 'gigs')
router.register(r'api/pricesettings', views.PriceSettingViewSet)
router.register(r'api/gigstatusses', views.GigStatusViewSet)
router.register(r'api/quotes', views.QuoteViewSet)
router.register(r'api/invoices', views.InvoiceViewSet)
router.register(r'api/settings', views.SettingViewSet, basename = 'settings')

urlpatterns = [
    path('', include(router.urls)),
    path('admin/', admin.site.urls),
    path('api-auth/', include('rest_framework.urls')),
    path('api/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh', TokenRefreshView.as_view(), name='token_refresh'),
]
