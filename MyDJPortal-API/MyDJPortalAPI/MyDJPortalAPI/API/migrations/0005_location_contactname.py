# Generated by Django 4.2.4 on 2023-09-20 20:20

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('API', '0004_location_delete_client'),
    ]

    operations = [
        migrations.AddField(
            model_name='location',
            name='contactName',
            field=models.CharField(default='', max_length=25),
        ),
    ]
