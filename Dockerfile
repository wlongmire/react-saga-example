FROM node:8.1.3-alpine
ARG CI_BRANCH=cheap
ARG REACT_APP_API_HOST=api.life.cheap
WORKDIR /usr/src/app
ADD ./package.json /usr/src/app
ADD ./yarn.lock /usr/src/app
RUN yarn install
ADD . /usr/src/app
CMD ['yarn', 'build']
