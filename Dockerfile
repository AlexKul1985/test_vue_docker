FROM node:lts-alpine
WORKDIR /app
COPY . .
CMD [ "node", "server.js"]