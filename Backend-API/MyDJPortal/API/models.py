from django.db import models
import uuid

class Client(models.Model):
    name = models.CharField(max_length=20)
    firstName = models.CharField(max_length=20)
    lastName = models.CharField(max_length=20)
    address = models.CharField(max_length=20)
    postalCode = models.CharField(max_length=8)
    city = models.CharField(max_length=20)
    email = models.CharField(max_length=50)
    phone = models.CharField(max_length=10)

class Gig(models.Model):
    client = models.ForeignKey(Client, models.SET_NULL, blank=True, null=True)
    name = models.CharField(max_length=25)
    date = models.DateField(auto_now=False, auto_now_add=False)
    active = models.BooleanField(default=False)

class Request(models.Model):
    gig = models.ForeignKey(Gig, models.SET_NULL, blank=True, null=True)
    requester = models.CharField(max_length=20)
    artist =  models.CharField(max_length=50)
    title = models.CharField(max_length=50)
    message = models.TextField(null=True)
    completed = models.BooleanField(default=False)

class RequestSetting(models.Model):
    active = models.BooleanField()
    gig = models.ForeignKey(Gig, models.SET_NULL, blank=True, null=True)
    displayName = models.CharField(max_length=50)