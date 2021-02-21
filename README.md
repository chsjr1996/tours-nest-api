[![Build Status](https://travis-ci.com/chsjr1996/natours-nest-api.svg?branch=main)](https://travis-ci.com/chsjr1996/natours-nest-api) [![Coveralls github branch](https://img.shields.io/coveralls/github/chsjr1996/natours-nest-api/main)](https://coveralls.io/github/chsjr1996/natours-nest-api?branch=main) [![Docker Cloud Build Status](https://img.shields.io/docker/cloud/build/sourcevortex/natours-nest-api)](https://hub.docker.com/r/sourcevortex/natours-nest-api) [![Doc](https://img.shields.io/badge/doc-swagger-%230E7FBF)](#api-documentation) [![License MIT](https://img.shields.io/github/license/chsjr1996/natours-nest-api)](https://github.com/chsjr1996/natours-nest-api/blob/main/LICENSE)

---

![Natours Logo](./natours-logo.png)

<p align="center">Logo by <a href="https://github.com/jonasschmedtmann">Jonas Schmedtmann</a>.</p>

<br>

# Natours NestJS API

![Repository Banner](./repo-banner.png)

A tour API built with NestJS and using some good development practices like: automated tests with coverage follow up and CI tool, docker automated builds and Swagger Documentation.

More is coming...

---

## Topics

- [Features / ToDo](#features--todo)
- [Requirements](#requirements)
- [Installation (development)](#installation-development)
- [Deploy (production)](#deploy-production)
  - [Docker Ports](#docker-ports)
- [Docker instructions](#docker-instructions)
  - [Docker tips](#docker-tips)
- [API Documentation](#api-documentation)
- [References](#references)

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
- [x] Get (and keep) 100% code coverage
- [ ] PostGIS (The challenge)

...

---

## Requirements

- NodeJS
- PostgreSQL

or

- Docker
- docker-compose

---

## Installation (development)

- `git clone https://github.com/chsjr1996/natours-nest-api.git`
- `npm install`
- Create a copy of file `.env.example` with name `.env` and fill it
- `npm run typeorm -- migration:run` - **_needed to create database tables_**
- `npm run start:dev` - **_for run and watch modifications_**

If you have docker and docker-compose, you can use this command:

- `docker-compose up -d`

**See [Docker instructions](#docker-instructions) section.**

---

## Deploy (production)

- Copy `docker-compose.yaml` with name `docker-compose.prod.yaml`
- Modify app > entrypoint and use `./.docker/entrypoint-prod.sh` file
- **(IMPORTANT)** Modify passwords, ports, and others sensitives envs
- Run with `docker-compose -f docker-compose.prod.yaml up -d `

You can use docker hub image too:

- `docker pull sourcevortex/natours-nest-api`

In this case you need to have a running PostgreSQL instance and adjust the **.env** file.

**See more in:**

- https://hub.docker.com/r/sourcevortex/natours-nest-api

### Docker Ports

- `3000` application
- `5432` PostgreSQL
- `8080` pgAdmin4

---

## Docker instructions

If you are using docker then you need run `typeorm` inside of APP container using `exec` docker command, like this:

- `docker exec -it natours-nest-api bash`
- `npm run typeorm -- migration:run`

### Docker Tips

- `docker-compose down` Stop and destroy containers
- `docker-compose stop` Only stop containers
- `docker-compose start` Start stopped containers
- `docker-compose restart` Restart all containers

If you are using the production file (docker-compose.prod.yaml) then you need specify this after of `docker-compose`, e.g.:

- `docker-compose -f docker-compose.prod.yaml down`

---

## API Documentation

You can access the API Documentation in [http://localhost:3000/api](http://localhost:3000/api`) (or in other defined APP Port). The `/api` endpoint will display a documentation built with Swagger, if you want the OAS data then access the `/api-json` endpoint. (1)

> Notes

1. The OAS (OpenAPI Specification) is a language-agnostic interface to RESTful. You can use the OAS output in Insomnia Designer, only copy `/api-json` result and paste in 'Design' tab.

---

## References

This repository is based on some articles and videos. I used them as study object, then here has some differences because I merged several concepts and did some adjusts.

- [NestJS Docs](https://docs.nestjs.com)
- [Node.js, Express, MongoDB & More: The Complete Bootcamp 2020](https://www.udemy.com/course/nodejs-express-mongodb-bootcamp) `(1)`
- [Nest.js: desenvolvimento de APIs, by: Full Cycle](https://www.youtube.com/watch?v=BT7novtdAgI&t=6650s)
- [Agilidade brutal no backend com Nest.js, by: Full Cycle](https://www.youtube.com/watch?v=qE0jRojtx08)
- [Best Way to Structure Your Directory/Code (NestJS), by: Prateek Kathal](https://medium.com/the-crowdlinker-chronicle/best-way-to-structure-your-directory-code-nestjs-a06c7a641401)

> Notes

1. This repository is based on udemy course [Node.js, Express, MongoDB & More: The Complete Bootcamp 2020](https://www.udemy.com/course/nodejs-express-mongodb-bootcamp/), originally built with vanilla Javascript and MongoDB.

---

## Under development

If you see any error or want a new feature, please open a issue!
