FROM node:12.18.0-alpine3.12
# Create app directory
RUN mkdir -p /srv/app/api
WORKDIR /srv/app/api
# Install app dependencies
COPY package.json /srv/app/api
COPY package-lock.json /srv/app/api

RUN npm install
# Copy app source code
COPY . /srv/app/api

CMD ["npm", "run","dev"]

