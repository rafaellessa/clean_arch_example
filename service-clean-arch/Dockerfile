FROM node:13


WORKDIR /app

COPY ./code/package.json .

RUN npm i typescript --save-dev && npx tsc --init && npm i nodemon --save
RUN npm install

CMD [ "sh", "-c", "npm run start" ]
