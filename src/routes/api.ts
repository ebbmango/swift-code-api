import { Hono } from "jsr:@hono/hono";
import {
  createSwiftCode,
  deleteSwiftCode,
  getByCountry,
  getSwiftCode,
} from "../controllers/swift.ts";

const routes = new Hono();

routes.get("/", (c) => c.text("Hello, World!"));
routes.get("/v1/swift-codes/:swiftCode", getSwiftCode);
routes.get("/v1/swift-codes/country/:ISO2code", getByCountry);
routes.post("/v1/swift-codes", createSwiftCode);
routes.delete("/v1/swift-codes/:swiftCode", deleteSwiftCode);

export default routes;