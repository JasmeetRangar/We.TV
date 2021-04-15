DROP TABLE IF EXISTS chat_room_messages CASCADE;
CREATE TABLE "chat_room_messages" (
  "id" SERIAL PRIMARY KEY,
  "show_id" int FOREIGN KEY REFERENCES "shows" ("id"),
  "creator_id" int FOREIGN KEY REFERENCES "users" ("id"),
  "created_at" timestamp,
  "message" varchar
);
ALTER TABLE "favourites" ADD FOREIGN KEY ("user_id") REFERENCES "users" ("id");

ALTER TABLE "favourites" ADD FOREIGN KEY ("show_id") REFERENCES "shows" ("id");

ALTER TABLE "posts" ADD FOREIGN KEY ("poll_id") REFERENCES "polls" ("id");

ALTER TABLE "posts" ADD FOREIGN KEY ("creator_id") REFERENCES "users" ("id");

ALTER TABLE "posts" ADD FOREIGN KEY ("show_id") REFERENCES "shows" ("id");

ALTER TABLE "comments" ADD FOREIGN KEY ("creator_id") REFERENCES "users" ("id");