DROP TABLE IF EXISTS posts CASCADE;
CREATE TABLE "posts" (
  "id" SERIAL PRIMARY KEY,
  "text" varchar,
  "likes" int,
  "dislikes" int,
  "image" varchar,
  "video" varchar,
  "poll_id" int,
  "creator_id" int,
  "show_id" int,
  "created_at" timestamp
);