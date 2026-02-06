from django.db import models

class Gig(models.Model):
    id = models.UUIDField(primary_key=True)
    name = models.CharField(max_length=25)
    date = models.DateField(auto_now=False, auto_now_add=False)
    active = models.BooleanField(default=False)

class Request(models.Model):
    id = models.UUIDField(primary_key=True)
    requester = models.CharField(max_length=20)
    artist =  models.CharField(max_length=50)
    title = models.CharField(max_length=50)
    message = models.TextField()
    completed = models.BooleanField(default=False)