
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!;

CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);

CREATE TABLE "course" (
		"id" SERIAL PRIMARY KEY,
		"user_id" INT REFERENCES "user",
		"course_name" VARCHAR (250)
	);

	-- Obsolete for now
	
	-- CREATE TYPE "turn_severity_enum" AS ENUM ('1', '2', '3', '4', '5', '6');
	
	-- CREATE TYPE "cut_option_enum" AS ENUM ('Cut', 'Regular', 'Dont Cut');
	
	-- CREATE TYPE "continue_option_enum" AS ENUM ('In', 'Then', 'And');
	
	-- CREATE TYPE "turn_direction_enum" AS ENUM ('Left', 'Right');
	
			CREATE TABLE "pacenote" (
	"id" SERIAL PRIMARY KEY,
	"course_id" INT REFERENCES "course",
	"turn_severity" VARCHAR (1),
	"continue_option" VARCHAR(4),
	"cut_option" VARCHAR(8),
	"turn_direction" VARCHAR (5),
	"jump" BOOL,
	"loose" BOOL,
	"caution" BOOL,
	"flat" BOOL,
	"distance" VARCHAR(20),
	"note" VARCHAR (500)
	);
