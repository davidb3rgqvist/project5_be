from django.urls import path, include
from rest_framework.routers import DefaultRouter
from workout.views import WorkoutViewSet, WorkoutCommentViewSet

router = DefaultRouter()
router.register(r'workouts', WorkoutViewSet)
router.register(r'workouts/(?P<workout_id>\d+)/comments', WorkoutCommentViewSet, basename='workout-comments')

urlpatterns = [
    path('api/', include(router.urls)),
]