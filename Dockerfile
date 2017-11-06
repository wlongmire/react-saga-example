FROM node:8.7.0-alpine
WORKDIR /usr/src/app
ADD ./package.json /usr/src/app
ADD ./yarn.lock /usr/src/app
RUN yarn install
ADD . /usr/src/app
RUN yarn build
