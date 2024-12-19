FROM oven/bun:1.1.40-slim AS installer
WORKDIR /app
COPY package.json bun.lockb /app/
RUN bun install
COPY . .

FROM installer AS dev
ENV PORT=8888
EXPOSE $PORT
CMD ["bun", "run", "dev"]

FROM installer AS prod-builder
RUN bun run build

FROM nginx:alpine AS prod
ENV PORT=80
EXPOSE $PORT
RUN mkdir -p /var/www
COPY --link --from=prod-builder /app/dist /var/www/public
COPY nginx.conf /etc/nginx/nginx.conf

CMD ["nginx", "-g", "daemon off;"]
