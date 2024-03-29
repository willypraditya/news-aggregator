FROM node:18-alpine as builder
WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM node:18-alpine as runner
WORKDIR /app
COPY --from=builder /app/package.json .
COPY --from=builder /app/package-lock.json .
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/next.config.mjs ./
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
EXPOSE 3000

ENV NEXT_PUBLIC_NEWS_API=https://newsapi.org/v2
ENV NEXT_PUBLIC_NEWS_API_KEY=b6ff244bcbaa46d88bd1ea312f446c0f

ENTRYPOINT ["npm", "start"]