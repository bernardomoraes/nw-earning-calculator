FROM node:latest

WORKDIR /app

COPY . .

RUN node

CMD ["./src/lastPrices.js"]