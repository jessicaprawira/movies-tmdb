# ====================
# 1. Build stage
# ====================
FROM node:18 AS builder

WORKDIR /app

COPY package*.json ./
COPY yarn.lock ./

RUN yarn install

COPY . .

RUN yarn build

# ====================
# 2. Run stage
# ====================
FROM node:18-alpine AS runner

WORKDIR /app

ENV NODE_ENV production

COPY --from=builder /app/.next .next
COPY --from=builder /app/public public
COPY --from=builder /app/package.json .
COPY --from=builder /app/node_modules node_modules

EXPOSE 3000

CMD ["yarn", "start"]