import { Hono } from "jsr:@hono/hono";
const app = new Hono();
app.get("/", (c) => c.text("Hello again, World!"));
Deno.serve({ port: 8080 }, app.fetch);
