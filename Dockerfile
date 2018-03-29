FROM node

COPY . /usr/src/app/
WORKDIR /usr/src/app
RUN npm install --global \
	gatsby \
	gatsby-cli
RUN gatsby build
