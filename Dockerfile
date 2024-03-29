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
COPY --from=builder /app/next.config.mjs ./
COPY --from=builder /app/.next/standalone ./.next/standalone
COPY --from=builder /app/public ./.next/standalone/public
COPY --from=builder /app/.next/static ./.next/standalone/.next/static

EXPOSE 3000

ENV NEXT_PUBLIC_NEWS_API=https://newsapi.org/v2
ENV NEXT_PUBLIC_NEWS_API_KEY=b6ff244bcbaa46d88bd1ea312f446c0f

ENTRYPOINT ["npm", "start"]