FROM node:bullseye-slim

RUN export DEBIAN_FRONTEND=noninteractive
RUN apt-get -y update
RUN apt-get -y upgrade
RUN apt install -y wget
RUN apt install -y unzip
RUN wget https://releases.hashicorp.com/consul-template/0.25.1/consul-template_0.25.1_linux_amd64.zip -P /tmp
RUN unzip /tmp/consul-template_0.25.1_linux_amd64.zip -d /tmp && mv /tmp/consul-template /usr/local/bin/consul-template
RUN wget https://releases.hashicorp.com/consul/1.8.5/consul_1.8.5_linux_amd64.zip -P /tmp

RUN unzip /tmp/consul_1.8.5_linux_amd64.zip -d /tmp && mv /tmp/consul /usr/local/bin/consul

RUN mkdir /opt/consul-agent
RUN mkdir /opt/consul-agent/config
RUN mkdir /opt/consul-agent/data

COPY ./devops/client.json /opt/consul-agent/config/

WORKDIR /app
COPY package*.json ./

COPY ./devops/start.sh ./

RUN npm install

COPY . .
EXPOSE 3000

CMD ["node", "server.js"]