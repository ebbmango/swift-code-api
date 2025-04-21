import { Hono } from "jsr:@hono/hono";

const app = new Hono();

// Endpoint 0: Check API connection
app.get("/", (c) => c.text("Hello, World!"));

// Endpoint 1: Retrieve details of a single SWIFT code whether for a headquarters or branches.
app.get("/v1/swift-codes/:swiftCode", (c) => {
  const swiftCode = c.req.param("swiftCode");
  return c.text(swiftCode);
});

// Endpoint 2: Return all SWIFT codes with details for a specific country (both headquarters and branches).
app.get("/v1/swift-codes/country/:ISO2code", (c) => {
  const ISO2code = c.req.param("ISO2code");
  return c.text(ISO2code);
});

// Endpoint 3: Adds new SWIFT code entries to the database for a specific country.
app.post("/v1/swift-codes", (c) => {
  return c.text("POST");
});

// Endpoint 4: Deletes swift-code data if swiftCode matches the one in the database.
app.delete("/v1/swift-codes/:swiftCode", (c) => {
  const swiftCode = c.req.param("swiftCode");
  return c.text(`DELETE ${swiftCode}`);
});

Deno.serve({ port: 8080 }, app.fetch);
