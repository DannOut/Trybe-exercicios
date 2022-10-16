USE Scientists;
SELECT 'This is SQL Exercise, Practice and Solution';

SELECT 1 as '1', 2 as '2', 3 as '3';

SELECT 10 * 15;

SELECT 10 * 5 / 2;

SELECT * FROM Projects;
SELECT * FROM Scientists;

SELECT Name as 'Nome do Projeto', Hours as 'Tempo de Trabalho' FROM Projects;

SElECT Name FROM Scientists ORDER BY Name;

SELECT * FROM Projects;
SELECT * FROM Scientists;
SELECT Name FROM Projects ORDER BY Name DESC;
SELECT CONCAT ('O Projeto ', Name, ' precisou de ', Hours, ' horas para ser concluído.') as 'Frase' FROM Projects; 
SELECT Name, Hours FROM Projects ORDER BY Hours DESC LIMIT 3;
SELECT DISTINCT Project FROM AssignedTo;
SELECT * FROM Projects ORDER BY Hours LIMIT 5;
SELECT DISTINCT CONCAT('Existem ', COUNT(Name), ' cientistas na tabela Scientists') FROM Scientists;