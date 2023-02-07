# Production deployment Dockerfile
FROM node:alpine
 
# since this will not be built locally, USER permissions do not need to be set
WORKDIR /app
 
COPY ./package.json ./
RUN npm install
COPY ./ ./

CMD ["npm", "run", "start"]