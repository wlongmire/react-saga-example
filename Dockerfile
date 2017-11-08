FROM node:8.1.3-alpine
ARG CI_BRANCH=cheap
WORKDIR /usr/src/app
ADD ./package.json /usr/src/app
ADD ./yarn.lock /usr/src/app
RUN yarn install
ADD . /usr/src/app
CMD ['yarn', 'build']
