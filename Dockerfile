FROM node:carbon

WORKDIR /app

COPY package*.json ./

RUN yarn install

COPY src /app

EXPOSE 3000
CMD ["yarn run start"]