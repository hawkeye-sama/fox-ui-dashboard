FROM ubuntu:latest

RUN apt-get update && \	
    apt-get install -y build-essential \
                    python3 \
                    python3-dev \
                    python3-pip

COPY . app

RUN pip3 install uwsgi
RUN ls app/
RUN pip3 install -r app/requirements

EXPOSE 8000

CMD ["uwsgi", "--ini", "djangoRest/uwsgi.ini"]
