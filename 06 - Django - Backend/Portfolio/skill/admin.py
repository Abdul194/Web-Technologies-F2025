from django.contrib import admin
from .models import Skills

# Register your models here.
@admin.register(Skills)
class SkillsAdmin(admin.ModelAdmin):
    list_display = ['name', 'score']
