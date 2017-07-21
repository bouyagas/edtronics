BEGIN;

DROP TABLE IF EXISTS users;

-- Creating the user table
CREATE TABLE users (
 user_id SERIAL PRIMARY KEY,
 firstName VARCHAR NOT NULL,
 lastName  VARCHAR NOT NULL,
 email VARCHAR NOT NULL UNIQUE,
 password VARCHAR NOT NULL UNIQUE,
 created_at TIMESTAMP DEFAULT current_timestamp
);

COMMIT;
