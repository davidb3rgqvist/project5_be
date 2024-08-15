from rest_framework import viewsets, permissions, status
from rest_framework.decorators import action
from rest_framework.response import Response
from django.shortcuts import get_object_or_404
from django.core.exceptions import PermissionDenied
from .models import Workout, WorkoutComment, WorkoutEntry, WorkoutLike
from .serializers import WorkoutSerializer, WorkoutCommentSerializer
from rest_framework.pagination import PageNumberPagination
from django.db.models import Count

class WorkoutViewSet(viewsets.ModelViewSet):
    # ViewSet for handling CRUD operations for Workout instances
    queryset = Workout.objects.annotate(num_likes=Count('likes'))
    serializer_class = WorkoutSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]
    pagination_class = PageNumberPagination

    def get_queryset(self):
        # Customize the queryset based on user authentication
        if self.request.user.is_authenticated:
            return Workout.objects.annotate(num_likes=Count('likes'))
        return Workout.objects.none()

class WorkoutCommentViewSet(viewsets.ModelViewSet):
    """
    ViewSet for handling CRUD operations for WorkoutComment instances.
    """
    serializer_class = WorkoutCommentSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]

    def get_queryset(self):
        # Filter comments by the related workout
        workout_id = self.kwargs.get('workout_id')
        return WorkoutComment.objects.filter(workout_id=workout_id)

    def perform_create(self, serializer):
        # Automatically associate the comment with the current user and workout
        workout = get_object_or_404(Workout, pk=self.kwargs['workout_id'])
        serializer.save(user=self.request.user, workout=workout)

    def perform_update(self, serializer):
        # Ensure only the comment owner can update the comment
        comment = self.get_object()
        if comment.user != self.request.user:
            raise PermissionDenied("You are not authorized to update this comment.")
        serializer.save()

    def perform_destroy(self, instance):
        # Ensure only the comment owner can delete the comment
        if instance.user != self.request.user:
            raise PermissionDenied("You are not authorized to delete this comment.")
        instance.delete()
