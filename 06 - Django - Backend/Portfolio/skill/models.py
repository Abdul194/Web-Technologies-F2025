
from django.db import models


class Skills(models.Model):
    name = models.CharField(max_length=100, null=False, blank=False)
    score = models.FloatField(null=False, blank=False)


from django.db import models

# Create your models here.
