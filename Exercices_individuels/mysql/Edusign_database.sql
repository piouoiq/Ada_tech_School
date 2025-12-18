-- _________________________
-- etape1
-- _________________________

CREATE DATABASE Edusign;
USE Edusign; 
CREATE TABLE Edusign (
id INTEGER PRIMARY KEY AUTO_INCREMENT,
created_at DATETIME NOT NULL, 
first_name TEXT NOT NULL, 
last_name TEXT NOT NULL, 
email TEXT NOT NULL );

-- _________________________
-- etape 2 
-- _________________________


CREATE TABLE Users (
id INTEGER PRIMARY KEY AUTO_INCREMENT,
created_at DATETIME NOT NULL, 
first_name TEXT NOT NULL, 
last_name TEXT NOT NULL, 
email TEXT NOT NULL );

ALTER TABLE Edusign DROP COLUMN first_name;
ALTER TABLE Edusign DROP COLUMN last_name;
ALTER TABLE Edusign DROP COLUMN email;
ALTER TABLE Edusign ADD COLUMN user_id INTEGER NOT NULL ;
ALTER TABLE Edusign ADD CONSTRAINT fk_user_id  FOREIGN KEY (user_id) REFERENCES users(id) ;

ALTER TABLE Edusign MODIFY COLUMN created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP  ;
ALTER TABLE users MODIFY COLUMN created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP  ;

INSERT INTO Edusign (user_id)
SELECT id  FROM Users;

INSERT INTO users (first_name, last_name, email)
SELECT 'Ada', 'Lovelace', 'ada@test.fr'
UNION SELECT 'Beatrice', 'Worsley', 'bea@test.fr'
UNION SELECT 'Bella', 'Guerin', 'bella@test.fr'
UNION SELECT 'Barbara', 'Chase', 'barbara@test.fr';


-- _________________________
-- etape 3  niveau facile 
-- _________________________

select * from users;

select * from users where first_name = 'Ada';
select * from users where first_name like 'B%';
select first_name from users;

-- _________________________
-- etape 3  niveau moyen 
-- _________________________

INSERT INTO Edusign (user_id, created_at)
SELECT id, '2024-05-30 09:30:00' FROM Users WHERE id = 1
UNION SELECT  id, '2024-05-30 09:30:00' FROM Users WHERE id = 3
UNION SELECT  id, '2024-09-01 09:30:00' FROM Users WHERE id ;


update Edusign set created_at = '2024-05-30 09:30:00' where user_id;
select * from Edusign order by created_at desc, user_id asc;


-- _________________________
-- niveau moyen bonus  
-- _________________________

select count(*) from Edusign where created_at = '2024-05-30 09:30:00';

select count(*) as volume from Edusign where user_id=3;
