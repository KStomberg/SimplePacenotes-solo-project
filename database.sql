
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!

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

	CREATE TYPE "turn_severity_enum" AS ENUM ('1', '2', '3', '4', '5', '6');
	
	CREATE TYPE "cut_option_enum" AS ENUM ('Cut', 'Regular', 'Dont Cut');
	
	CREATE TYPE "continue_option_enum" AS ENUM ('In', 'Then', 'And');
	
	CREATE TYPE "turn_direction_enum" AS ENUM ('Left', 'Right');
	
	CREATE TABLE "pacenote" (
	"course_id" INT REFERENCES "course",
	"turn_severity" "turn_severity_enum",
	"cut_option" "cut_option_enum",
	"continue_option" "continue_option_enum",
	"turn_direction" "turn_direction_enum",
	"jump" BOOL,
	"caution" BOOL,
	"flat" BOOL,
	"loose" BOOL,
	"distance" INT,
	"note" VARCHAR (500)
	);