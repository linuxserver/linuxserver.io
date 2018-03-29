FROM lsiobase/alpine:3.7

COPY . /usr/src/app/

RUN apk add --no-cache \
	nodejs-npm && \
 npm install --global \
	gatsby \
	gatsby-cli
RUN cd /usr/src/app && \
 gatsby build
