FROM alpine

# copy local files
COPY . /usr/src/app/

RUN \
 echo "**** install nodejs-npm ****" && \
 apk add --no-cache \
	nodejs-npm \
	tar && \
 echo "**** install node packages ****" && \
 npm install --global \
	gatsby \
	gatsby-cli

RUN \
 echo "**** build linuxserver website ****" && \
 cd /usr/src/app && \
 npm install && \
 gatsby build

RUN \
 echo "**** tar web files ****" && \
 tar -zcf lsio.tar.gz -C /usr/src/app .
