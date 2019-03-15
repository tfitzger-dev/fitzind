from django.contrib.auth.models import User
from rest_framework import serializers

from job_track_api.models import Job, Task, TaskLog


class TaskLogSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = TaskLog
        fields = ('url', 'id', 'user', 'task', 'hours', 'log_date')
    user = serializers.HyperlinkedRelatedField(many=False, view_name='user-detail', read_only=True)
    task = serializers.HyperlinkedRelatedField(many=False, view_name='task-detail', queryset=Task.objects.all())


class TaskSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Task
        fields = ('url', 'id', 'name', 'job', 'owners', 'hour_estimate', 'taskLogs')
    owners = serializers.HyperlinkedRelatedField(many=True, view_name='user-detail', queryset=User.objects.all())
    job = serializers.HyperlinkedRelatedField(many=False, view_name='job-detail', read_only=True)
    taskLogs = TaskLogSerializer(many=True, read_only=True)


class JobSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Job
        fields = ('url', 'id', 'name', 'owners', 'estimated_completion_date', 'tasks')
    owners = serializers.HyperlinkedRelatedField(many=True, view_name='user-detail', queryset=User.objects.all())
    tasks = TaskSerializer(many=True, read_only=True)


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'email', 'first_name', 'last_name', 'password', 'jobs', 'tasks')
    jobs = JobSerializer(many=True, read_only=True)
    tasks = TaskSerializer(many=True, read_only=True)
    password = serializers.CharField(write_only=True)

    def create(self, validated_data):
        user = User.objects.create_user(validated_data['username'],
                                        validated_data['email'],
                                        validated_data['password'],
                                        first_name=validated_data['first_name'],
                                        last_name=validated_data['last_name'])
        return user

