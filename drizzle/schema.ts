import {
  sqliteTable,
  AnySQLiteColumn,
  integer,
  text,
  index,
  uniqueIndex,
} from "drizzle-orm/sqlite-core";
import { sql } from "drizzle-orm";

export const topics = sqliteTable("topics", {
  id: integer("id").primaryKey(),
  category_name: text("category_name"),
  category_id: integer("category_id"),
  title: text("title"),
  excerpt: text("excerpt"),
  created_at: text("created_at"),
  last_posted_at: text("last_posted_at"),
  updated_at: text("updated_at"),
  views: integer("views"),
  posts_count: integer("posts_count"),
  like_count: integer("like_count"),
  user_id: integer("user_id"),
  last_post_user_id: integer("last_post_user_id"),
  tags: text("tags"),
});

export const users = sqliteTable("users", {
  id: integer("id").primaryKey(),
  username: text("username"),
  name: text("name"),
  admin: integer("admin"),
  moderator: integer("moderator"),
  trust_level: integer("trust_level"),
});

export const posts = sqliteTable(
  "posts",
  {
    id: integer("id").primaryKey(),
    raw: text("raw"),
    cooked: text("cooked"),
    post_number: integer("post_number"),
    topic_id: integer("topic_id"),
    user_id: integer("user_id"),
    created_at: text("created_at"),
    updated_at: text("updated_at"),
    reply_to_post_number: integer("reply_to_post_number"),
    reply_to_user_id: integer("reply_to_user_id"),
    reply_count: integer("reply_count"),
    like_count: integer("like_count"),
    word_count: integer("word_count"),
  },
  (table) => {
    return {
      idxTopic: index("idxTopic").on(table.topic_id, table.post_number),
    };
  }
);

export const likes = sqliteTable(
  "likes",
  {
    post_id: integer("post_id"),
    user_id: integer("user_id"),
    created_at: text("created_at"),
  },
  (table) => {
    return {
      idxLikes: uniqueIndex("idxLikes").on(table.post_id, table.user_id),
    };
  }
);
