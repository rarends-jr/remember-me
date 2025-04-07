from django.contrib import admin
from .models import Task

class TaskAdmin(admin.ModelAdmin):
    list_display = ('title', 'description', 'cadence_type', 'cadence_amount', 'last_completion_datetime')

# Register your models here.

admin.site.register(Task, TaskAdmin)
