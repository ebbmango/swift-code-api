FROM denoland/deno:alpine

WORKDIR /app

COPY deno.json ./
COPY deno.lock ./
COPY app.ts ./

RUN deno cache app.ts

COPY . .

EXPOSE 8080

CMD ["run", "--allow-net", "--allow-read", "app.ts"]
