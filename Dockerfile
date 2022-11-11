# builder
FROM node:16-alpine AS builder

ARG NODE_ENV

WORKDIR /home/memochat/app

COPY ./package.json .
COPY ./yarn.lock .

RUN yarn install --frozen-lockfile --production=false

COPY . .

ENV PORT 3000

# TODO: next항상 .env.production으로만 빌드된다. 다양한 .env 파일로 빌드 하는법 찾아보기
# RUN NODE_ENV=${NODE_ENV} yarn build
RUN yarn build

# runner 
FROM node:16-alpine AS runner

ENV NODE_ENV ${ENV}

WORKDIR /home/memochat/app

COPY --from=builder /home/memochat/app/next.config.js .
COPY --from=builder /home/memochat/app/public ./public
COPY --from=builder /home/memochat/app/package.json .
COPY --from=builder /home/memochat/app/.next/standalone ./
COPY --from=builder /home/memochat/app/.next/static ./.next/static

EXPOSE 3000

CMD PORT=3000 node server.js
