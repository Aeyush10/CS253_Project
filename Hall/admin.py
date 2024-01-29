from django.contrib import admin

# Register your models here.
from .models import hallPresence
from .models import HallStudents
admin.site.register(hallPresence)
admin.site.register(HallStudents)