from django.db import models
from django.contrib.auth import get_user_model
from django.utils import timezone
import cloudinary.models

class Workout(models.Model):
    # Model representing a workout created by a user
    title = models.CharField(max_length=200)
    description = models.TextField()
    exercises = models.TextField()
    routine = models.TextField()
    photo = cloudinary.models.CloudinaryField(
        blank=True,
        default='https://res.cloudinary.com/dbar13vfu/image/upload/v1722613338/default_workout_jkjhym.png',
        max_length=255,
        verbose_name='image'
    )
    tags = models.CharField(max_length=200, blank=True)
    is_public = models.BooleanField(default=True)
    created_at = models.DateTimeField(default=timezone.now)
    user = models.ForeignKey(get_user_model(), on_delete=models.CASCADE, related_name='workouts')

    def __str__(self):
        return self.title

class WorkoutLike(models.Model):
    # Model representing a like on a workout by a user
    user = models.ForeignKey(get_user_model(), on_delete=models.CASCADE)
    workout = models.ForeignKey(Workout, related_name='likes', on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.user.email} likes {self.workout.title}"

class WorkoutComment(models.Model):
    # Model representing a comment on a workout by a user
    text = models.TextField()
    created_at = models.DateTimeField(default=timezone.now)
    user = models.ForeignKey(get_user_model(), on_delete=models.CASCADE, related_name='workout_comments')
    workout = models.ForeignKey(Workout, on_delete=models.CASCADE, related_name='comments')

    def __str__(self):
        return f"{self.user.email} commented on {self.workout.title}"

    class Meta:
        ordering = ['-created_at']

class WorkoutEntry(models.Model):
    # Model representing a log entry of a user performing a workout
    created_at = models.DateTimeField(default=timezone.now)
    user = models.ForeignKey(get_user_model(), on_delete=models.CASCADE, related_name='workout_entries')
    workout = models.ForeignKey(Workout, on_delete=models.CASCADE, related_name='entries')

    def __str__(self):
        return f"{self.user.email} logged {self.workout.title}"
