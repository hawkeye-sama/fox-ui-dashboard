FROM ubuntu:latest

COPY . app

RUN apt-get -y update
RUN apt-get install -y python3 python3-pip python3-dev build-essential 

RUN pip3 install -r app/requirements


EXPOSE 8000

WORKDIR /app

RUN ls
CMD gunicorn -b :8000 djangoRest.wsgi
