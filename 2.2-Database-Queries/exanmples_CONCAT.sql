USE sakila;
SELECT * FROM actor;
SELECT CONCAT(first_name, ' ' ,last_name) as 'Nome Completo' FROM actor;


USE sakila;
SELECT * FROM film;
SELECT concat(title, ' ', release_year) as 'Lançamento do Filme' from film;
SELECT concat(title, ' - ', rating) as 'Classificação' from film;

SELECT * from address;
SELECT concat(address, ' - ', district) as 'Endereço' from address;
