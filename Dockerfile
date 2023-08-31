FROM node:slim
WORKDIR /app
COPY . /app
RUN npm install
EXPOSE 1338
CMD npm start
