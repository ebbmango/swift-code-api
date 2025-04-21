import { Hono } from "jsr:@hono/hono";
import {
  createSwiftCode,
  deleteSwiftCode,
  getByCountry,
  getSwiftCode,
} from "../controllers/swift.ts";

const swiftRoutes = new Hono();

swiftRoutes.get("/", (c) => c.text("Hello, World!"));
swiftRoutes.get("/v1/swift-codes/:swiftCode", getSwiftCode);
swiftRoutes.get("/v1/swift-codes/country/:ISO2code", getByCountry);
swiftRoutes.post("/v1/swift-codes", createSwiftCode);
swiftRoutes.delete("/v1/swift-codes/:swiftCode", deleteSwiftCode);

export default swiftRoutes;