FROM node:12.18.0-alpine3.12
# Create app directory
RUN mkdir -p /srv/app/react-ui
WORKDIR /srv/app/react-ui
# Install app dependencies
COPY package.json /srv/app/react-ui
COPY package-lock.json /srv/app/react-ui

RUN npm install
# Copy app source code
COPY . /srv/app/react-ui

CMD ["npm", "start"]

