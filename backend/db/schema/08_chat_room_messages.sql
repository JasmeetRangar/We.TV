DROP TABLE IF EXISTS chat_room_messages CASCADE;
CREATE TABLE "chat_room_messages" (
  "id" SERIAL PRIMARY KEY,
  "chat_room_id" int,
  "creator_id" int,
  "created_at" timestamp,
  "message" varchar
);
ALTER TABLE "favourites" ADD FOREIGN KEY ("user_id") REFERENCES "users" ("id");

ALTER TABLE "favourites" ADD FOREIGN KEY ("show_id") REFERENCES "shows" ("id");

ALTER TABLE "posts" ADD FOREIGN KEY ("poll_id") REFERENCES "polls" ("id");

ALTER TABLE "posts" ADD FOREIGN KEY ("creator_id") REFERENCES "users" ("id");

ALTER TABLE "posts" ADD FOREIGN KEY ("show_id") REFERENCES "shows" ("id");

ALTER TABLE "comments" ADD FOREIGN KEY ("creator_id") REFERENCES "users" ("id");