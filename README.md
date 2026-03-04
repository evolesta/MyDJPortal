# MyDJPortal

Small DJ request portal and client interface for smaller DJ gigs and events
Runs on Django and Angular

# Install
Docker is required on the host. 
After pulling the repository:

1. Rename .env.sample to .env and modify DOMAIN to match your public domainname. 
2. Rename the desired database variables if needed (Postgres database will be provided inside a internal network between DB and backend). 
3. Provide the requested Django Admin first superuser variables if needed (you can change the password after setting up).
4. Spin up the stack:
`docker compose up -d`

This will build the backend and frontend images from the source code. The images required for Postgres and Traefik will be pulled aswel. 