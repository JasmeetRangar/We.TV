DROP TABLE IF EXISTS shows CASCADE;
CREATE TABLE "shows" (
  "id" SERIAL PRIMARY KEY,
  "name" varchar,
  "description" varchar,
  "image" varchar,
  "api_id" varchar
);