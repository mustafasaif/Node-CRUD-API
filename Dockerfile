FROM node:alpine
WORKDIR /APP
COPY  package*.json ./
RUN npm install
COPY . /APP/
CMD [ "node", "App.js"]