DROP TABLE IF EXISTS favourites CASCADE;
CREATE TABLE "favourites" (
  "id" SERIAL PRIMARY KEY,
  "user_id" int,
  "show_id" int,
  "is_active" boolean
);