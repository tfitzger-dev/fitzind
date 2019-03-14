from django.urls import path, include

from job_track_api import views

urlpatterns = [
    path('api/v1/auth', include('rest_framework.urls')),

    path('users/', views.UserList.as_view(), name='user-list'),
    path('users/<int:pk>/', views.UserDetail.as_view(), name='user-detail'),

    path('jobs/', views.JobList.as_view(), name='job-list'),
    path('jobs/<int:pk>/', views.JobDetail.as_view(), name='job-detail'),

    path('tasks/', views.TaskList.as_view(), name='task-list'),
    path('tasks/<int:pk>/', views.TaskDetail.as_view(), name='task-detail'),
]