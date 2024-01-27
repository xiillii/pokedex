<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

# Execute in Dev

1. Clone repository
1. Execute:

   ```
   yarn install
   ```

1. Install nest CLI

   ```
   npm i -g @nestjs/cli
   ```

1. Star the database

   ```
   docker-compose up -d
   ```

1. Rename the file `.env.template` to `.env`
1. Fill variables in `.env`
1. Run the application in Dev environment

   ```\
   yarn start:dev
   ```

1. Restore the database by Seed
   ```
   localhost:3000/api/v2/seed
   ```

## Stack

- MongoDB
- NestJS

# Production Build

1. Create the file `.env.prod`
1. Fill the prod environment variables
1. Create the new docker image
   ```
   docker-compose -f docker-compose.prod.yaml --env-file .env.prod up --build
   ```

# Run Production Docker Image

1. In deatached mode
   ```
   docker-compose -f docker-compose.prod.yaml --env-file .env.prod up
   ```
