CREATE DATABASE candy_shop;

USE candy_shop;

CREATE TABLE articles (
	id INTEGER PRIMARY KEY AUTO_INCREMENT,
	article_name TEXT NOT NULL,
	price REAL
);

INSERT INTO articles (article_name, price)
SELECT 'Malabar', 2.0
UNION SELECT 'Malabar', 2.0
UNION SELECT'Fraise Tagada', 2.5
UNION SELECT 'Carambar', 1.5
UNION SELECT 'Michoko', 3.5
UNION SELECT "Calissons d'Aix", 8.0; 

UPDATE articles SET price = 1.1 WHERE id = 3 ;

DELETE FROM articles WHERE article_name = 'Fraise Tagada';

