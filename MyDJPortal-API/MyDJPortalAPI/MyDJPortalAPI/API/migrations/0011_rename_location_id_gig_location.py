# Generated by Django 4.2.4 on 2023-10-14 13:36

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('API', '0010_alter_gig_location_id'),
    ]

    operations = [
        migrations.RenameField(
            model_name='gig',
            old_name='location_id',
            new_name='location',
        ),
    ]
