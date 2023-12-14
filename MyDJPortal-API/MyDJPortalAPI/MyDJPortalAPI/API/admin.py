from django.contrib import admin
from .models import *

# Register your models here.
admin.site.register(Location)
admin.site.register(INinjaSetting)
admin.site.register(Gig)
admin.site.register(PriceSetting)
admin.site.register(GigStatus)