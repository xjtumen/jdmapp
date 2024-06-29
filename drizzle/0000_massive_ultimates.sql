-- Current sql file was generated after introspecting the database
-- If you want to run this migration please uncomment this code before executing migrations
/*
CREATE TABLE `topics` (
	`id` integer PRIMARY KEY,
	`category_name` text,
	`category_id` integer,
	`title` text,
	`excerpt` text,
	`created_at` text,
	`last_posted_at` text,
	`updated_at` text,
	`views` integer,
	`posts_count` integer,
	`like_count` integer,
	`user_id` integer,
	`last_post_user_id` integer,
	`tags` text
);
--> statement-breakpoint
CREATE TABLE `users` (
	`id` integer PRIMARY KEY,
	`username` text,
	`name` text,
	`admin` integer,
	`moderator` integer,
	`trust_level` integer
);
--> statement-breakpoint
CREATE TABLE `posts` (
	`id` integer PRIMARY KEY,
	`raw` text,
	`cooked` text,
	`post_number` integer,
	`topic_id` integer,
	`user_id` integer,
	`created_at` text,
	`updated_at` text,
	`reply_to_post_number` integer,
	`reply_to_user_id` integer,
	`reply_count` integer,
	`like_count` integer,
	`word_count` integer
);
--> statement-breakpoint
CREATE TABLE `likes` (
	`post_id` integer,
	`user_id` integer,
	`created_at` text
);
--> statement-breakpoint
CREATE INDEX `idxTopic` ON `posts` (`topic_id`,`post_number`);--> statement-breakpoint
CREATE UNIQUE INDEX `idxLikes` ON `likes` (`post_id`,`user_id`);
*/