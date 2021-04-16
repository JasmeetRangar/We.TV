DROP TABLE IF EXISTS chat_room_messages CASCADE;
CREATE TABLE "chat_room_messages" (
  "id" SERIAL PRIMARY KEY,
  "show_id" int,
  "creator_id" int,
  "created_at" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  "message" varchar
);
ALTER TABLE "favourites" ADD FOREIGN KEY ("user_id") REFERENCES "users" ("id");

ALTER TABLE "favourites" ADD FOREIGN KEY ("show_id") REFERENCES "shows" ("id");

ALTER TABLE "posts" ADD FOREIGN KEY ("poll_id") REFERENCES "polls" ("id");

ALTER TABLE "posts" ADD FOREIGN KEY ("creator_id") REFERENCES "users" ("id");

ALTER TABLE "posts" ADD FOREIGN KEY ("show_id") REFERENCES "shows" ("id");

ALTER TABLE "comments" ADD FOREIGN KEY ("creator_id") REFERENCES "users" ("id");

ALTER TABLE "chat_room_messages" ADD FOREIGN KEY ("show_id") REFERENCES "shows" ("id");

ALTER TABLE "chat_room_messages" ADD FOREIGN KEY ("creator_id") REFERENCES "users" ("id");

ALTER TABLE "comments" ADD FOREIGN KEY ("post_id") REFERENCES "posts" ("id");
