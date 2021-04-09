DROP TABLE IF EXISTS chat_rooms CASCADE;
CREATE TABLE "chat_rooms" (
  "id" SERIAL PRIMARY KEY,
  "show_id" int
);