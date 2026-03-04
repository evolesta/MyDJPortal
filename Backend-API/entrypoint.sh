#!/bin/sh

# Generate random Django secret key
export DJANGO_SECRET_KEY=$(python -c 'from django.core.management.utils import get_random_secret_key; print(get_random_secret_key())')

# Copy sample settings if not exists
if [ ! -f myproject/settings.py ]; then
    cp MyDJPortal/settings.sample.py MyDJPortal/settings.py
fi

# Replace SECRET_KEY placeholder
sed -i "s|SECRET_KEY = .*|SECRET_KEY = '$DJANGO_SECRET_KEY'|" MyDJPortal/settings.py

python manage.py migrate --noinput
python manage.py collectstatic --noinput
python manage.py createsuperuser --noinput

gunicorn MyDJPortal.wsgi:application \
    --bind 0.0.0.0:8000 \
    --workers 3 \
    --access-logfile - \
    --error-logfile - 