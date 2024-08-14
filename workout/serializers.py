from rest_framework import serializers
from .models import Workout, WorkoutComment, WorkoutEntry, WorkoutLike


class WorkoutSerializer(serializers.ModelSerializer):
    class Meta:
        model = Workout
        fields = '__all__'

class WorkoutCommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = WorkoutComment
        fields = '__all__'

class WorkoutLikeSerializer(serializers.ModelSerializer):
    class Meta:
        model = WorkoutLike
        fields = '__all__'