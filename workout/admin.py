from django.contrib import admin
from .models import Workout, WorkoutComment, WorkoutEntry, WorkoutLike

# Registering models with the Django admin site
admin.site.register(Workout)
admin.site.register(WorkoutComment)
admin.site.register(WorkoutEntry)
admin.site.register(WorkoutLike)
