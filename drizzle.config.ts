import { defineConfig } from "drizzle-kit";

export default defineConfig({
  schema: "./drizzle/schema.ts",
  dialect: "sqlite",
  out: "./drizzle/",
  dbCredentials: {
    url: "./assets/db/xmen.db",
  },
  verbose: true,
  strict: true,
});
