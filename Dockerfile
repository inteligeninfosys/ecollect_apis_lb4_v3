FROM oraclelinux:7-slim

WORKDIR /home/node/app

RUN  yum -y install oracle-release-el7 oracle-nodejs-release-el7 && \
  yum-config-manager --disable ol7_developer_EPEL && \
  yum -y install oracle-instantclient19.3-basiclite nodejs && \
  rm -rf /var/cache/yum

COPY package*.json ./

RUN npm install

# Bundle app source code
COPY . .

RUN npm run build

# Bind to all network interfaces so that it can be mapped to the host OS
ENV HOST=0.0.0.0 PORT=3000

EXPOSE ${PORT}
CMD [ "npm", "start" ]


# docker build --no-cache -t docker.io/migutak/oraclenode-apis-v2-lb4-v3:3.1 .
