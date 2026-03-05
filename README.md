# MyDJPortal

Small DJ request portal and client interface for smaller DJ gigs and events
Runs on Django and Angular

# Install
Docker is required on the host. 
After pulling the repository:

1. Rename .env.sample to .env and modify the variables to your deployment.
2. Build the images and create the stack of containers:
```
docker compose up -d
```

The application is designed to deploy as docker stack. You can also take the source code and deploy the Django backend (Python) and Angular frontend yourself. 
Make sure the settings.py file required for Django is configured properly and that the Angular environment variables are pointing to your Django backend URL before compiling the production build. You can serve Django trough Gunicorn or Apache with WSGI module. The frontend can be served by any webserver (Apache or Nginx). Django also supports more database servers then Postgres (MySql, SQL lite, etc.). Check the Django documentation for more details. 

# Updating
To update the docker stack, simply pull the latest version with `git pull`. The main branch contains tested production ready builds. 
Run the `--build --no-cache` parameters to perform a clean rebuild of the backend and frontend images with the latest code.
```
docker compose down
docker compose up -d --build --no-cache
```