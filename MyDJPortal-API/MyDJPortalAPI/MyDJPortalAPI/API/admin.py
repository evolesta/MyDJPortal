from django.contrib import admin
from .models import *

# Register your models here.
admin.site.register(Location)
admin.site.register(Gig)
admin.site.register(PriceSetting)
admin.site.register(GigStatus)
admin.site.register(Client)
admin.site.register(Quote)
admin.site.register(Invoice)
admin.site.register(InvoiceQuoteLine)
admin.site.register(Setting)