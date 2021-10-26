# Use the official lightweight Node.js 12 image.
# https://hub.docker.com/_/node

FROM node:14

ENV PORT 1337
ENV HOST 0.0.0.0
ENV NODE_ENV production

# Create and change to the app directory.
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Copy application dependency manifests to the container image.
# A wildcard is used to ensure both package.json AND package-lock.json are copied.
# Copying this separately prevents re-running npm install on every code change.
COPY package*.json /usr/src/app/
COPY yarn.lock /usr/src/app/
RUN yarn install


COPY . /usr/src/app

RUN yarn build
EXPOSE 1337
CMD [ "yarn", "start"]
