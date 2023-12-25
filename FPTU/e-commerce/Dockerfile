FROM node:18.8-alpine as base

WORKDIR /app
COPY package*.json ./

COPY . .
RUN npm install
RUN npm build

FROM base as runtime

ENV NODE_ENV=production
ENV PAYLOAD_CONFIG_PATH=dist/payload.config.js

WORKDIR /app
COPY package*.json ./
COPY yarn.lock ./

RUN yarn install --production
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/build ./build

EXPOSE 9234

ENV PORT 9234

ENV HOSTNAME "0.0.0.0"

# CMD ["node", "dist/server.js"]
CMD ["npm", "run", "dev"]
