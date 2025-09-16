FROM node:17

WORKDIR /app

COPY package.json .

#RUN npm install

# Install nodemon globally so it's always executable
RUN  npm install && npm install -g nodemon 

COPY . .

EXPOSE 4000
#required for docker desktop port mapping

#CMD ["npm", "start"]

CMD ["npm", "run", "start-dev"] 

#CMD ["nodemon", "index.js"]

#inorder to make nodemon works which won't work!