#!/bin/bash

# Install PostgreSQL
sudo apt-get update
sudo apt-get install postgresql postgresql-contrib
sudo service postgresql start
# Log in to PostgreSQL and create the database
echo "Creating database 'originapp'..."
sudo -u postgres psql -c "CREATE DATABASE originapp;"

# Create a user for the database (replace 'yourdbuser' and 'yourpassword' with your desired values)
echo "Creating user for the database..."
sudo -u postgres psql -c "CREATE USER root WITH PASSWORD '123';"
sudo -u postgres psql -c "ALTER ROLE root SET client_encoding TO 'utf8';"
sudo -u postgres psql -c "ALTER ROLE root SET default_transaction_isolation TO 'read committed';"
sudo -u postgres psql -c "ALTER ROLE root SET timezone TO 'UTC';"

# Grant privileges to the user
echo "Granting privileges to the user..."
sudo -u postgres psql -c "GRANT ALL PRIVILEGES ON DATABASE originapp TO root;"

# Install Prisma CLI
npm install prisma --save-dev

# Initialize Prisma
npx prisma init

# Update Prisma schema to use the PostgreSQL database
echo "Updating Prisma schema..."
echo 'generator client {
  provider = "prisma-client-js"
  output   = "./generated/client"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}' > prisma/schema.prisma

# Generate Prisma Client
npx prisma generate

echo "Setup complete! You can now use Prisma with the 'originapp' database."
