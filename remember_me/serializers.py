from rest_framework import serializers
from .models import Task

class TaskSerializer(serializers.ModelSerializer):
    class Meta:
        model = Task
        fields = ('id', 'title', 'description', 'cadence_type', 'cadence_amount', 'last_completion_datetime', 'completed')
        