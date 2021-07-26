USE movie_reviews_db;

INSERT INTO movies (movie_name) 
VALUES 
('Space Jam: A New Legacy'),
('The Forever Purge'),
('Black Widow'),
('The Boss Baby: Family Business'),
('The Tomorrow War'),
('Luca'),
('Awake'),
('Infinite'),
('F9'),
('Wrath of Man'),
('Cruella'),
('Peter Rabbit 2: The Runaway');

INSERT INTO reviews (movie_id, review)
VALUES
(1, "A great movie for people who like movies!"),
(2, "Another purge movie- Wowzers!"),
(3, "It's a marvel movie, you know what to expect"),
(4, "I love babies in suits!"),
(5, "Is that tom cruise?"),
(6, "Pixar rocks!"),
(7, "Definitely not asleep"),
(8, "Definitely not finite"),
(9, "WAHOOO FAMILY"),
(10, "Manly Wrath"),
(11, "This aint 101 dalmations"),
(12, "Better than the first Peter rabbit!");
