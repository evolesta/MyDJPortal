# Generated by Django 4.2.4 on 2024-01-08 14:04

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('API', '0018_setting'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='gig',
            name='clientId',
        ),
        migrations.AddField(
            model_name='gig',
            name='client',
            field=models.ForeignKey(default=3, on_delete=django.db.models.deletion.PROTECT, to='API.client'),
            preserve_default=False,
        ),
    ]
