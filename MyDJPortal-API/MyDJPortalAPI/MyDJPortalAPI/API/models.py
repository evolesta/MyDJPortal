from django.db import models
from django.utils.translation import gettext_lazy as _

# Model containing the gig locations
class Location(models.Model):
    name = models.CharField(max_length=60)
    address = models.CharField(max_length=60, null=True, default='')
    postalCode = models.CharField(max_length=60, null=True, default='')
    city = models.CharField(max_length=60, null=True, default='')
    phone = models.CharField(max_length=60, null=True, default='')
    email = models.CharField(max_length=60, null=True, default='')
    contactName = models.CharField(max_length=25, default='', null=True)

# Model containing the gigs
class Gig(models.Model):
    name = models.CharField(max_length=60)
    bookingId = models.CharField(max_length=10, default='')
    clientId = models.CharField(max_length=20) # foreign key to ext. Clients table
    location = models.OneToOneField(Location, on_delete=models.CASCADE, null=True) # foreign key to locations model
    date = models.DateField(auto_now=False, auto_now_add=False)
    start = models.TimeField(auto_now=False, auto_now_add=False)
    end = models.TimeField(auto_now=False, auto_now_add=False)
    buildupReadyTime = models.TimeField(auto_now=False, auto_now_add=False)
    guests = models.IntegerField()
    sound = models.BooleanField()
    light = models.BooleanField()
    notes = models.TextField(null=True)
    
    STATUSSES = {
        "NW": "Nieuw",
        "OFF": "Offerte",
        "BEV": "Bevestigd",
        "FAC": "Facturatie",
        "BET": "Betaald"
    }
    status = models.CharField(max_length=2, choices=STATUSSES, default=STATUSSES.NW)

# Model containing the API settings of Invoice Ninja
class INinjaSetting(models.Model):
    apiURL = models.CharField(max_length=60)
    apiKey = models.CharField(max_length=70)

# Model which holds the pricing settings for a quote or invoice
class PriceSetting(models.Model):
    name = models.CharField(max_length=30)
    description = models.CharField(max_length=75)
    fixedPrice = models.BooleanField()
    price = models.FloatField()
    amount = models.IntegerField(default=1)
