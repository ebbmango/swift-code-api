import { Hono } from "jsr:@hono/hono";
import {
  createSwiftCode,
  deleteSwiftCode,
  getByCountry,
  getSwiftCode,
} from "./controllers/swift.ts";

const app = new Hono();

// Check API connection
app.get("/", (c) => c.text("Hello, World!"));

// Retrieve details of a single SWIFT code whether for a headquarters or branches.
app.get("/v1/swift-codes/:swiftCode", getSwiftCode);

// Return all SWIFT codes with details for a specific country (both headquarters and branches).
app.get("/v1/swift-codes/country/:ISO2code", getByCountry);

// Adds new SWIFT code entries to the database for a specific country.
app.post("/v1/swift-codes", createSwiftCode);

// Deletes swift-code data if swiftCode matches the one in the database.
app.delete("/v1/swift-codes/:swiftCode", deleteSwiftCode);

Deno.serve({ port: 8080 }, app.fetch);
