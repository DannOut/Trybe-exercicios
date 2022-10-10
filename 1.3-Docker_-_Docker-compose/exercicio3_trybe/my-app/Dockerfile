FROM node:alpine

WORKDIR /app

# ENV PATH /app/node_modules/.bin:$PATH

# RUN npx create-react-app t23

# RUN npm install react-scripts@3.3.1 -g --silent

COPY package*.json .
COPY . .

RUN npm install 


ENTRYPOINT [ "npm", "start" ]

EXPOSE 8080