import { Hono } from "jsr:@hono/hono";
import routes from "./routes/api.ts";
import { startDatabase } from "./database/db.ts";

const app = new Hono();
app.route("/", routes);

await startDatabase();
Deno.serve({ port: 8080 }, app.fetch);