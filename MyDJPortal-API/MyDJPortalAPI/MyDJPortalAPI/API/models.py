from django.db import models
from django.utils.translation import gettext_lazy as _

class Client(models.Model):
    number = models.CharField(max_length=60)
    name = models.CharField(max_length=60)
    firstName = models.CharField(max_length=60)
    lastName = models.CharField(max_length=60)
    emailAddress = models.CharField(max_length=60)
    phone = models.CharField(max_length=60)
    address = models.CharField(max_length=60)
    postalCode = models.CharField(max_length=60)
    city = models.CharField(max_length=60)

# Model containing the gig locations
class Location(models.Model):
    name = models.CharField(max_length=60)
    address = models.CharField(max_length=60, null=True, default='')
    postalCode = models.CharField(max_length=60, null=True, default='')
    city = models.CharField(max_length=60, null=True, default='')
    phone = models.CharField(max_length=60, null=True, default='')
    email = models.CharField(max_length=60, null=True, default='')
    contactName = models.CharField(max_length=25, default='', null=True)

# Model which holds the statusses of a gig
class GigStatus(models.Model):
    name = models.CharField(max_length=30)
    description = models.TextField(null=True)

# Model containing the gigs
class Gig(models.Model):
    name = models.CharField(max_length=60)
    bookingId = models.CharField(max_length=10, default='')
    clientId = models.CharField(max_length=20) # foreign key to ext. Clients table
    location = models.ForeignKey(Location, on_delete=models.PROTECT, null=True) # foreign key to locations model
    date = models.DateField(auto_now=False, auto_now_add=False)
    start = models.TimeField(auto_now=False, auto_now_add=False)
    end = models.TimeField(auto_now=False, auto_now_add=False)
    buildupReadyTime = models.TimeField(auto_now=False, auto_now_add=False)
    guests = models.IntegerField()
    sound = models.BooleanField()
    light = models.BooleanField()
    notes = models.TextField(null=True)
    status = models.ForeignKey(GigStatus, on_delete=models.PROTECT, null=True)

# Model which holds the pricing settings for a quote or invoice
class PriceSetting(models.Model):
    name = models.CharField(max_length=30)
    description = models.CharField(max_length=75)
    fixedPrice = models.BooleanField()
    price = models.FloatField()
    amount = models.IntegerField(default=1)

class InvoiceQuoteLine(models.Model):
    amount = models.IntegerField()
    description = models.CharField(max_length=100)
    price = models.FloatField()
    total = models.FloatField()

class Invoice(models.Model):
    number = models.CharField(max_length=60)
    client = models.ForeignKey(Client, on_delete=models.PROTECT)
    date = models.DateField(auto_now_add=True)
    lines = models.ManyToManyField(InvoiceQuoteLine)
    subtotal = models.FloatField()
    paid = models.FloatField()
    total = models.FloatField()

class Quote(models.Model):
    number = models.CharField(max_length=60)
    client = models.ForeignKey(Client, on_delete=models.PROTECT)
    date = models.DateField(auto_now_add=True)
    lines = models.ManyToManyField(InvoiceQuoteLine)
    subtotal = models.FloatField()
    total = models.FloatField()

class Setting(models.Model):
    clientNrPrefix = models.CharField(max_length=5)
    clientNrStartAt = models.IntegerField()
    gigNrPrefix = models.CharField(max_length=5)
    gigNrStartAt = models.IntegerField()
    InvoiceNrPrefix = models.CharField(max_length=5)
    InvoiceNrStartAt = models.IntegerField()