FROM node:8.1.3-alpine
WORKDIR /usr/src/app
ADD ./package.json /usr/src/app
ADD ./yarn.lock /usr/src/app
RUN yarn install
ADD . /usr/src/app
RUN yarn build
