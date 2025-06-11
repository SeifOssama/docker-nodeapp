FROM node:17

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

EXPOSE 4000
#required for docker desktop port mapping

#CMD ["npm", "start"]

CMD ["npm", "run", "start-dev"] 

#inorder to make nodemon works which won't work!