# Natours

This repository is based on udemy course [Node.js, Express, MongoDB & More: The Complete Bootcamp 2020](https://www.udemy.com/course/nodejs-express-mongodb-bootcamp/) but in typescript version using Nest.JS

---

## Features / ToDo

- [x] Docker environments (production and development)
- [x] Swagger Docs
- [x] Use Routing Controllers and Typescript!
- [ ] Write tests and use some CI tool
- [ ] Manage users, tours, reviews and bookings
- [ ] Queues
- [ ] GraphQL

...

---

## Requirements

- NodeJS
- Docker (optional)

---

## Installation (development)

- `git clone https://github.com/chsjr1996/natours-nest-api.git`
- `npm install`
- Create a copy of file `.env.example` with name `.env` and fill it
- `npm run start:dev` **_for run and watch modifications_**

If you have docker and docker-compose, you can use this command:

- `docker-compose up -d`

---

## Deploy (production)

- Copy `docker-compose.yaml` with name `docker-compose.prod.yaml`
- Modify app > entrypoint and use `./.docker/entrypoint-prod.sh` file
- **(IMPORTANT)** Modify passwords, ports, and others sensitives envs
- Run with `docker-compose -f docker-compose.prod.yaml up -d `

---

## Docker tips

- `docker-compose down` Stop and destroy containers
- `docker-compose stop` Only stop containers
- `docker-compose start` Start stopped containers

If you are using the production file (docker-compose.prod.yaml) then you need specify this after of `docker-compose`, e.g.:

- `docker-compose -f docker-compose.prod.yaml down`

---

### Under development

If you see any error or want a new feature, please open a issue!
