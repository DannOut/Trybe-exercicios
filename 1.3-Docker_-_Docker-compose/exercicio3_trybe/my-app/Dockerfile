FROM node:latest

# WORKDIR /app

# ENV PATH /app/node_modules/.bin:$PATH

RUN npx create-react-app t23

# RUN npm install --silent
# RUN npm install react-scripts@3.3.1 -g --silent

COPY package*.json ./

CMD [ "npm", "start" ]

EXPOSE 80