# Generated by Django 4.2.4 on 2023-12-12 16:10

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('API', '0013_alter_gig_location'),
    ]

    operations = [
        migrations.CreateModel(
            name='GigStatus',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=30)),
                ('description', models.TextField(null=True)),
            ],
        ),
    ]
