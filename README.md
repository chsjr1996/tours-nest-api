[![Build Status](https://travis-ci.com/chsjr1996/natours-nest-api.svg?branch=main)](https://travis-ci.com/chsjr1996/natours-nest-api) ![License MIT](https://img.shields.io/github/license/chsjr1996/natours-nest-api) ![Doc](https://img.shields.io/badge/doc-swagger-%230E7FBF)

# Natours

A tour Rest API.

---

## Features / ToDo

- [x] Docker environments (production and development)
- [x] Swagger Docs
- [x] Use Routing Controllers and Typescript!
- [x] Write tests and use some CI tool
- [ ] Manage users, tours, reviews and bookings
- [ ] Queues
- [ ] Redis cache layer
- [ ] Web Socket
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

### References

This repository is based on some articles and videos. I used them as study object, then here has some differences because I merged several concepts and did some adjusts.

- [Node.js, Express, MongoDB & More: The Complete Bootcamp 2020](https://www.udemy.com/course/nodejs-express-mongodb-bootcamp) `(1)`
- [Nest.js: desenvolvimento de APIs, by: Full Cycle](https://www.youtube.com/watch?v=BT7novtdAgI&t=6650s)
- [Agilidade brutal no backend com Nest.js, by: Full Cycle](https://www.youtube.com/watch?v=qE0jRojtx08)
- [Best Way to Structure Your Directory/Code (NestJS), by: Prateek Kathal](https://medium.com/the-crowdlinker-chronicle/best-way-to-structure-your-directory-code-nestjs-a06c7a641401)

> Notes

1. This repository is based on udemy course [Node.js, Express, MongoDB & More: The Complete Bootcamp 2020](https://www.udemy.com/course/nodejs-express-mongodb-bootcamp/), originally built with vanilla Javascript and MongoDB.

---

### Under development

If you see any error or want a new feature, please open a issue!
