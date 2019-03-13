from django.contrib.auth.models import User
from django.shortcuts import render
from rest_framework import generics

from job_track_api.models import Job, Task
from job_track_api.permissions import IsAdminOrSelf, IsAdminOrOwner
from job_track_api.serializers import UserSerializer, JobSerializer, TaskSerializer


class UserList(generics.ListCreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [IsAdminOrSelf]


class UserDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [IsAdminOrSelf]


class JobList(generics.ListCreateAPIView):
    queryset = Job.objects.all()
    serializer_class = JobSerializer
    permission_classes = [IsAdminOrOwner]


class JobDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Job.objects.all()
    serializer_class = JobSerializer
    lookup_url_kwarg = 'job_key'
    permission_classes = [IsAdminOrOwner]


class TaskList(generics.ListCreateAPIView):
    serializer_class = TaskSerializer
    permission_classes = [IsAdminOrOwner]

    def get_queryset(self):
        return Task.objects.filter(job=self.kwargs['job_key'])

    def perform_create(self, serializer):
        serializer.save(job=Job.objects.get(pk=self.kwargs['job_key']))


class TaskDetail(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = TaskSerializer
    lookup_url_kwarg = 'task_key'
    permission_classes = [IsAdminOrOwner]

    def get_queryset(self):
        return Task.objects.filter(job=self.kwargs['job_key'])
