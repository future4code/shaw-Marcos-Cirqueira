### Exercicio 1

- a)
E uma chave que se realaciona ou referencia a uma outra tabela.

- b)
```SQL
INSERT INTO Rating VALUES
("001", "Filme bacana para vê em familia", 8.5, "001" ),
("002", "Uma mãe muito legal!", 9, "002" ),
("003", "Uma mulher de varios homens kkk", 9.5, "003" ),
("004", "Filme bom1", 7.5, "004" );
```
- c)
Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails.
E diz que ouve uma falha na chave estrangeira.

- d)
```SQL
 ALTER TABLE Movie DROP COLUMN rating;
```
- e)
Error Code: 1451. Cannot delete or update a parent row: a foreign key constraint fails.
Não é possível excluir ou atualizar uma linha pai: uma restrição de chave estrangeira.

### Exercicio 2

- a)
Nessa tabela os elementos de uma das tabelas se realacionam com vários da outra tabela.

- b)
```SQL
INSERT INTO MovieCast(movie_id, actor_id)
VALUES("004", "006"),
("001", "001"),
("002", "001"),
("003", "007"),
("001", "001"),
("001", "001");
```
- c)
Error 1452
Não é possível adicionar ou atualizar uma linha filho: uma restrição de chave estrangeira.

- d)
Error 1451.
Não é possível excluir ou atualizar uma linha pai: uma restrição de chave estrangeira.

### Exercicio 3

- a)
```SQL
SELECT nome , movie_id, rate FROM Filmes
INNER JOIN Rating ON Filmes.id = Rating.movie_id;
```