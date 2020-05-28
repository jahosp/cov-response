FROM node:current-slim

COPY nodeAssist.service /etc/systemd/system
COPY middleware.sh /opt/middleware/
COPY patata /opt/middleware/

ADD middleware/ /opt/middleware/

#Descomentar per utilitzar les de test
#RUN rm /opt/middleware/index.js

RUN apt update -y
RUN apt-get install python3 -y

#Descomentar per utilitzar les de test
#COPY index.js /opt/middleware/
#COPY script.py /opt/middleware/

WORKDIR /opt/middleware/

RUN rm /opt/middleware/package.json
RUN rm /opt/middleware/package-lock.json

RUN npm init -y
RUN npm install express --unsafe-perm
RUN npm install sqlite-sync --unsafe-perm
RUN npm install @google-cloud/speech --unsafe-perm



RUN ["GOOGLE_APPLICATION_CREDENTIALS"]="/opt/middleware/patata"

EXPOSE 3000

CMD [ "node", "/opt/middleware/index.js" ]