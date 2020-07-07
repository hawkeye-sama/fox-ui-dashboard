FROM node:12.18.0-alpine3.12 as builder
# Create app directory
RUN mkdir -p /srv/app/react-ui
WORKDIR /srv/app/react-ui
# Install app dependencies
COPY package.json /srv/app/react-ui
COPY package-lock.json /srv/app/react-ui


RUN yarn

# Copy app source code
COPY . /srv/app/react-ui

RUN npm run build
#CMD ["npm", "start"]

##
EXPOSE 8095
##
FROM nginx:1.19.0-alpine
COPY --from=builder /srv/app/react-ui/build /usr/share/nginx/html
RUN rm /etc/nginx/conf.d/default.conf
COPY ./nginx.conf /etc/nginx/conf.d
CMD ["nginx", "-g", "daemon off;"]
