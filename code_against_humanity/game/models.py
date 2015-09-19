from django.db import models

# Create your models here.
class BlackCard(models.Model):
    text = models.CharField(max_length=300)

class WhiteCard(models.Model):
    text = models.CharField(max_length=300)
