# Generated by Django 4.2.4 on 2023-12-12 16:12

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('API', '0014_gigstatus'),
    ]

    operations = [
        migrations.AddField(
            model_name='gig',
            name='status',
            field=models.OneToOneField(null=True, on_delete=django.db.models.deletion.CASCADE, to='API.gigstatus'),
        ),
    ]
