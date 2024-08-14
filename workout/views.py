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
    queryset = Workout.objects.annotate(
        num_likes=Count('likes')
    )
    serializer_class = WorkoutSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]
    pagination_class = PageNumberPagination

    @action(detail=True, methods=['post'], permission_classes=[permissions.IsAuthenticated])
    def like(self, request, pk=None):
        workout = self.get_object()
        like_instance = WorkoutLike.objects.filter(user=request.user, workout=workout).first()
        if like_instance:
            like_instance.delete()
            return Response({'status': 'unliked'}, status=status.HTTP_200_OK)
        else:
            WorkoutLike.objects.create(user=request.user, workout=workout)
            return Response({'status': 'liked'}, status=status.HTTP_200_OK)

class WorkoutCommentViewSet(viewsets.ModelViewSet):
    """
    A viewset for viewing, creating, updating, and deleting WorkoutComment instances.
    """
    serializer_class = WorkoutCommentSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]

    def get_queryset(self):
        workout_id = self.kwargs.get('workout_id')
        return WorkoutComment.objects.filter(workout_id=workout_id)

    def perform_create(self, serializer):
        workout = get_object_or_404(Workout, pk=self.kwargs['workout_id'])
        serializer.save(user=self.request.user, workout=workout)

    def perform_update(self, serializer):
        comment = self.get_object()
        if comment.user != self.request.user:
            raise PermissionDenied("You are not authorized to update this comment.")
        serializer.save()

    def perform_destroy(self, instance):
        if instance.user != self.request.user:
            raise PermissionDenied("You are not authorized to delete this comment.")
        instance.delete()
