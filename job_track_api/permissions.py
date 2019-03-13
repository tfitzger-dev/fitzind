from django.contrib.auth.models import User
from rest_framework import permissions


class IsAdminOrOwner(permissions.BasePermission):

    def has_object_permission(self, request, view, obj):
        return request.user.is_staff or request.user in obj.owners.all()


class IsAdminOrSelf(permissions.BasePermission):
    def has_object_permission(self, request, view, obj):
        return request.user.is_staff or request.user == obj
