FROM node:12.14.0-alpine3.11

RUN apk add --no-cache bash
RUN npm i -g @nestjs/cli@7.5.4

WORKDIR /home/tours/app
COPY . .
RUN npm i
EXPOSE 3000
CMD [ "npm", "start" ]