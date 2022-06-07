## **Aprofundamento SQL**

### Exercicio 1
- a) 
```SQL 
ALTER TABLE Actor DROP COLUMN salary;
```
Esse comando faz com que seja removida a coluna salary da tabela.

- b)
```SQL 
ALTER TABLE Actor CHANGE gender sex VARCHAR(6);
```
CHANGE é utilizado para renomear uma coluna e alterar suas definições, como o tipo de dados de uma coluna.

- c) 
```SQL 
ALTER TABLE Actor CHANGE gender gender VARCHAR(255);
```
CHANGE é utilizado para renomear uma coluna e alterar suas definições, como o tipo de dados de uma coluna.

 - d) 
 ```SQL 
ALTER TABLE Actor CHANGE gender gender VARCHAR(100);
```

## Exercicio 2

- a) 
```SQL 
UPDATE Actor SET name = "Cleó Pires", birth_date = "1985-10-21"
WHERE id = "003";
```

- b)
```SQL 
UPDATE Actor SET name = "JULIANA PAES" WHERE id = "007";
UPDATE Actor SET name = "Juliana Paes" WHERE id = "007"; 
```

- c) 
```SQL 
UPDATE Actor SET name = "Rodrigo Santoro", salary= 500000, birth_date= "1975-08-22", gender= "male" WHERE id = "005";
```

- d) Error Code: 1054. Unknown column 'nome' in 'field list'

### Exercicio 3

 - a)
 ```SQL 
DELETE FROM Actor WHERE name = "Fernanda Montenegro";
```

- b) 
```SQL 
DELETE FROM Actor WHERE gender = "male" AND salary > 1000000;
```

### Exercicio 4

- a) 
```SQL 
SELECT MAX(salary) FROM Actor;
```

- b) 
```SQL 
SELECT MIN(salary) FROM Actor WHERE gender = "female";
```

- c)
```SQL 
SELECT COUNT(*) FROM Actor WHERE gender = "female";
```

- d) 
```SQL 
SELECT SUM(salary) FROM Actor;
```


### Exercicio 5

- a) Retorna a quantidade de atores e atrizes na tabela em relação ao 'gender'.

- b)
```SQL 
SELECT id, name FROM Actor ORDER BY name DESC;
```

- c)
```SQL 
SELECT * FROM Actor
ORDER BY salary;
```

- d)
```SQL 
SELECT * FROM Actor
ORDER BY salary DESC
LIMIT 3;
```

- e) 
```SQL 
SELECT AVG(salary), gender FROM Actor
GROUP BY gender;
```

### Exercicio 6

- a)
```SQL 
ALTER TABLE Movie ADD playing_limit_date DATE;
```

- b) 
```SQL 
ALTER TABLE Movie CHANGE rating rating FLOAT;
```

- c)
```SQL 
UPDATE Movie SET playing_limit_date = "2020-12-31" WHERE id = "001";
UPDATE Movie SET playing_limit_date = "2013-01-20" WHERE id = "002";
```

- d) 0 row(s) affected Rows matched: 0  Changed: 0  Warnings: 0

