from django.contrib import admin
from .models import *

# Register your models here.
admin.site.register(Client)
admin.site.register(Gig)
admin.site.register(Request)
admin.site.register(RequestSetting)