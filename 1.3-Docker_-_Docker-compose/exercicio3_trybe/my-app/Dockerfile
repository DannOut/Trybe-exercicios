FROM node:alpine AS build

WORKDIR /app

# ENV PATH /app/node_modules/.bin:$PATH

# RUN npx create-react-app t23

# RUN npm install react-scripts@3.3.1 -g --silent

COPY package*.json .
RUN npm install 

FROM node:alpine
WORKDIR /app
COPY --from=build ./app .
ENTRYPOINT [ "npm", "start" ]
EXPOSE 8080

LABEL manteiner="Daniel Outeiro dos Santos"