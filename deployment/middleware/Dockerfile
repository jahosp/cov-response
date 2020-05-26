FROM node:current-slim

COPY nodeAssist.service /etc/systemd/system
COPY middleware.sh /opt/middleware/

ADD middleware/ /opt/middleware/

#Descomentar per utilitzar les de test
#RUN rm /opt/middleware/index.js

RUN apt update -y
RUN apt-get install python3 -y

#Descomentar per utilitzar les de test
#COPY index.js /opt/middleware/
#COPY script.py /opt/middleware/

WORKDIR /opt/middleware/

RUN npm install express --save

EXPOSE 3000

CMD [ "node", "/opt/middleware/index.js" ]