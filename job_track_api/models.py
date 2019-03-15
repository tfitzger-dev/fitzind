from django.contrib.auth.models import User
from django.db import models


class Job(models.Model):
    name = models.CharField(max_length=100)
    estimated_completion_date = models.DateField()
    owners = models.ManyToManyField(User, related_name='jobs')
    created_on = models.DateField(auto_now_add=True)
    modified_on = models.DateField(auto_now=True)


class Task(models.Model):
    name = models.CharField(max_length=100)
    hour_estimate = models.DecimalField(max_digits=12, decimal_places=2)
    job = models.ForeignKey(Job, related_name='tasks', on_delete=models.CASCADE)
    owners = models.ManyToManyField(User, related_name='tasks')
    created_on = models.DateField(auto_now_add=True)
    modified_on = models.DateField(auto_now=True)


class TaskLog(models.Model):
    hours = models.DecimalField(max_digits=12, decimal_places=2)
    log_date = models.DateField()
    user = models.ForeignKey(User, related_name='taskLogs', on_delete=models.CASCADE)
    task = models.ForeignKey(Task, related_name="taskLogs", on_delete=models.CASCADE)

