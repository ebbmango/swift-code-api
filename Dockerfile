FROM denoland/deno:alpine

WORKDIR /app

COPY deno.json deno.lock ./
COPY src/app.ts ./src/app.ts

RUN deno cache src/app.ts

COPY src/ ./src/

EXPOSE 8080

RUN mkdir -p /app/data

CMD ["deno", "run", "--allow-net", "--allow-read", "--allow-write", "src/app.ts"]