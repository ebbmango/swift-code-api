import { Hono } from "jsr:@hono/hono";
import { DatabaseSync } from "node:sqlite";
import swiftRoutes from "./routes/api.ts";

const app = new Hono();
app.route("/", swiftRoutes);

const db = new DatabaseSync("test.db");
db.close();


Deno.serve({ port: 8080 }, app.fetch);
