from rest_framework import permissions

class IsOwner(permissions.BasePermission):
    """
    Custom permission to only allow owners of a workout to edit or delete it.
    """

    def has_object_permission(self, request, view, obj):
        # Object-level permission: Only allow owners to edit/delete their workout.
        return obj.user == request.user
