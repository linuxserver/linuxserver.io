FROM alpine

COPY . /usr/src/app/

RUN apk add --no-cache \
	nodejs-npm && \
 npm install --global \
	gatsby \
	gatsby-cli
RUN cd /usr/src/app && \
 npm install && \
 gatsby build
