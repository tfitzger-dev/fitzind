# Generated by Django 2.1.7 on 2019-03-12 02:54

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('job_track_api', '0002_task'),
    ]

    operations = [
        migrations.RenameField(
            model_name='task',
            old_name='workers',
            new_name='owners',
        ),
    ]
