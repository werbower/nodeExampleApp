
FROM node:24-alpine
LABEL version="1.0.0"
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
COPY ./src .
EXPOSE 3000
CMD [ "node", "index.ts" ]