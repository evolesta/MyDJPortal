# Generated by Django 4.2.4 on 2023-12-13 19:10

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('API', '0015_gig_status'),
    ]

    operations = [
        migrations.AlterField(
            model_name='gig',
            name='location',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='API.location'),
        ),
        migrations.AlterField(
            model_name='gig',
            name='status',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='API.gigstatus'),
        ),
    ]
