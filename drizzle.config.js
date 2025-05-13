/** @type {import("drizzle-kit").Config} */

export default {

  schema: "./utils/schema.ts",
  dialect: 'postgresql',
  dbCredentials: {
    url: 'postgresql://neondb_owner:npg_3LtlshJrXun7@ep-patient-violet-a4a4w95g-pooler.us-east-1.aws.neon.tech/neondb?sslmode=require',
  },
};
