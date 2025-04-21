import { Context } from "jsr:@hono/hono";

export const getSwiftCode = (c: Context) => {
  const swiftCode = c.req.param("swiftCode");
  return c.text(`GET: ${swiftCode}`);
};

export const getByCountry = (c: Context) => {
  const iso2 = c.req.param("ISO2code");
  return c.text(`GET country: ${iso2}`);
};

export const createSwiftCode = (c: Context) => {
  return c.text("POST");
};

export const deleteSwiftCode = (c: Context) => {
  const swiftCode = c.req.param("swiftCode");
  return c.json({ message: `DELETE: ${swiftCode}` });
};
