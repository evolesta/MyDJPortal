# Generated by Django 4.2.4 on 2024-01-06 16:40

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('API', '0017_client_invoice_invoicequoteline_quote_and_more'),
    ]

    operations = [
        migrations.CreateModel(
            name='Setting',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('clientNrPrefix', models.CharField(max_length=5)),
                ('clientNrStartAt', models.IntegerField()),
                ('gigNrPrefix', models.CharField(max_length=5)),
                ('gigNrStartAt', models.IntegerField()),
                ('InvoiceNrPrefix', models.CharField(max_length=5)),
                ('InvoiceNrStartAt', models.IntegerField()),
            ],
        ),
    ]