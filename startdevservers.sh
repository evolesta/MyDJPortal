#!/usr/bin/env bash

# Exit on error
set -e

# --- CONFIG ---
DJANGO_DIR="$HOME/Documents/Repos/MyDJPortal/Backend-API"
ANGULAR_DIR="$HOME/Documents/Repos/MyDJPortal/Front-end"

DJANGO_PORT=8000
ANGULAR_PORT=4200

# --- FUNCTIONS ---
cleanup() {
  echo ""
  echo "Stopping dev servers..."
  kill 0
}

trap cleanup EXIT

# --- START DJANGO ---
echo "Starting Django server..."
cd "$DJANGO_DIR"
source ./venv/bin/activate
python MyDJPortal/manage.py runserver $DJANGO_PORT &
DJANGO_PID=$!

# --- START ANGULAR ---
echo "Starting Angular server..."
cd "$ANGULAR_DIR"
ng serve --port $ANGULAR_PORT &
ANGULAR_PID=$!

# --- WAIT ---
wait
