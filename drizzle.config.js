import { defineConfig } from "drizzle-kit";
 
export default defineConfig({
  schema: "./utils/schema.tsx",
  out: "./drizzle",
  dialect: 'postgresql',
  dbCredentials: {
    url: "postgresql://content-pulse_owner:z2VZgkEd6Uol@ep-lively-base-a5qeqppw.us-east-2.aws.neon.tech/content-pulse?sslmode=require",
  }
});