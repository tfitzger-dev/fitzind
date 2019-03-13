from django.contrib.auth.models import User
from rest_framework import serializers

from job_track_api.models import Job, Task


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'jobs', 'tasks')
    jobs = serializers.PrimaryKeyRelatedField(many=True, read_only=True)
    tasks = serializers.PrimaryKeyRelatedField(many=True, read_only=True)


class JobSerializer(serializers.ModelSerializer):
    class Meta:
        model = Job
        fields = ('id', 'name', 'owners', 'estimated_completion_date', 'tasks')
    owners = serializers.PrimaryKeyRelatedField(many=True, queryset=User.objects.all())
    tasks = serializers.PrimaryKeyRelatedField(many=True, read_only=True)


class TaskSerializer(serializers.ModelSerializer):
    class Meta:
        model = Task
        fields = ('id', 'name', 'job', 'owners', 'hour_estimate')
    job = serializers.PrimaryKeyRelatedField(many=False, read_only=True)
