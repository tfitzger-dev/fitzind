from django.urls import path, include

from job_track_api import views

urlpatterns = [
    path('auth', include('rest_framework.urls')),
    path('auth/login/', views.login),

    path('users/', views.UserList.as_view(), name='user-list'),
    path('users/<int:pk>/', views.UserDetail.as_view(), name='user-detail'),

    path('jobs/', views.JobList.as_view(), name='job-list'),
    path('jobs/<int:pk>/', views.JobDetail.as_view(), name='job-detail'),

    path('tasks/', views.TaskList.as_view(), name='task-list'),
    path('tasks/<int:pk>/', views.TaskDetail.as_view(), name='task-detail'),

    path('taskLogs/', views.TaskLogList.as_view(), name='tasklog-list'),
    path('taskLogs/<int:pk>/', views.TaskLogDetail.as_view(), name='tasklog-detail'),
]