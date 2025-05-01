from django.db import models

# Create your models here.

class Task(models.Model):
    id = models.IntegerField(primary_key=True)
    title = models.CharField(max_length=120)
    description = models.TextField()
    cadence_type = models.CharField(default='week', max_length=5)
    cadence_amount = models.IntegerField(default=1)
    last_completion_datetime = models.DateTimeField(default=None)
    completed = models.BooleanField(default=False)

    def _str_(self):
        return self.title
    
