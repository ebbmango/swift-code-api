import { Hono } from "jsr:@hono/hono";
import swiftRoutes from "./routes/api.ts";

const app = new Hono();

app.route("/", swiftRoutes);

Deno.serve({ port: 8080 }, app.fetch);
