create database jukebox;

use jukebox;

CREATE TABLE songs (
	id INTEGER PRIMARY KEY AUTO_INCREMENT,
	title TEXT NOT NULL,
	artist TEXT NOT NULL,
	album TEXT ,
	release_year INTEGER
);

INSERT INTO songs (title, artist, album, release_year)
SELECT 'À la gloire des femmes en deuil', 'Mathilde', 'À la gloire des femmes en deuil', 2022
UNION SELECT 'martyre: melancholia', 'Mathilde', 'martyre: melancholia', 2025
UNION SELECT "je t'accuse", 'Suzane', 'millénium', 2025;

