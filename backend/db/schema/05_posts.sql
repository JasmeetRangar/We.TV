DROP TABLE IF EXISTS posts CASCADE;
CREATE TABLE "posts" (
  "id" SERIAL PRIMARY KEY,
  "text" varchar,
  "likes" int DEFAULT 0,
  "dislikes" int DEFAULT 0,
  "image" varchar,
  "video" varchar,
  "poll_id" int,
  "creator_id" int,
  "show_id" int,
  "created_at" timestamp DEFAULT CURRENT_TIMESTAMP
);