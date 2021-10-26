FROM strapi/base

ENV PORT 1337
ENV HOST 0.0.0.0
ENV NODE_ENV production
ENV DATABASE_HOST=mysql
ENV DATABASE_CLIENT=mysql
ENV DATABASE_PORT=3306
ENV DATABASE_NAME=strapi
ENV DATABASE_USERNAME=strapi
ENV DATABASE_PASSWORD=strapi

ENV DATABASE_SSL=false

# Create and change to the app directory.
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package*.json /usr/src/app/
COPY yarn.lock /usr/src/app/
RUN yarn install


COPY . /usr/src/app
RUN yarn build

EXPOSE 1337
CMD [ "yarn", "start"]
