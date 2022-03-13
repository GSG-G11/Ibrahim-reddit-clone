BEGIN;
DROP TABLE IF EXISTS users,posts,comments,saved_posts,posts_votes,saved_comments,comments_votes CASCADE;

CREATE TABLE "users"(
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR(255) UNIQUE NOT NULL,
    "email" VARCHAR(255) UNIQUE NOT NULL,
    "password" VARCHAR(255) NOT NULL
);
CREATE TABLE "posts"(
    "id" SERIAL PRIMARY KEY,
    "title" varchar(255) NOT NULL,
    "description" TEXT NOT NULL,
    "user_id" INT REFERENCES users(id) ON UPDATE CASCADE ON DELETE CASCADE
);
CREATE TABLE "comments"(
    "id" SERIAL PRIMARY KEY,
    "comment" TEXT NOT NULL,
    "user_id" INT REFERENCES users(id) ON DELETE CASCADE,
    "post_id" INT REFERENCES posts(id) ON DELETE CASCADE
);
CREATE TABLE "saved_posts"(
    "id" SERIAL PRIMARY KEY,
    "is_post_saved" BOOLEAN,
    "user_id" INT REFERENCES users(id) ON DELETE CASCADE,
    "post_id" INT REFERENCES posts(id) ON DELETE CASCADE
);
CREATE TABLE "posts_votes"(
    "id" SERIAL PRIMARY KEY,
    "post_vote_value" INT NOT NULL DEFAULT 0,
    "user_id" INT REFERENCES users(id) ON DELETE CASCADE,
    "post_id" INT REFERENCES posts(id) ON DELETE CASCADE
);

CREATE TABLE "saved_comments"(
    "id" SERIAL PRIMARY KEY,
    "is_comment_saved" BOOLEAN,
    "user_id" INT REFERENCES users(id) ON DELETE CASCADE,
    "comment_id" INT REFERENCES comments(id) ON DELETE CASCADE
);

CREATE TABLE "comments_votes"(
    "id" SERIAL PRIMARY KEY,
    "comment_vote_value" INT NOT NULL,
    "user_id" INT REFERENCES users(id) ON DELETE CASCADE,
    "comment_id" INT REFERENCES comments(id) ON DELETE CASCADE
);

COMMIT;