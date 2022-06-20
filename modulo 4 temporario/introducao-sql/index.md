### Exercicio 1

CREATE TABLE Actor (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR (255) NOT NULL,
    salary FLOAT NOT NULL,
    birth_date DATE NOT NULL,
    gender VARCHAR(6) NOT NULL
);

A)
- Utilizamos VARCHAR que diz o máximo de strings no caracteres, DATE que respresenta uma data e PRIMARY KEY que identifica exclusivamente cada registro em uma tabela.

B) 
- SHOW DATABASES, me retorna a inforamação do Schemas.
- SHOW TABLES, me retorna as tabelas criadas.

C)
- Esse comando me retorna a explicação da estrutura da tabela, monstrando o nome de cada campo, tipo e se contém informações.

### Exercicio 2

A)
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES("002", "Glória Pires", 1200000, "1963-08-23", "famele");

B)
Error Code: 1062.
 Duplicate entry '002' for key 'PRIMARY', diz exatamente que o código de entrada '002' para chave 'PRIMARY' foi duplicada.

C)Código de erro: 1136. 
A contagem de colunas não correspondê a tabela.

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "003", 
  "Fernanda Montenegro",
  300000,
  "1929-10-19", 
  "female"
);

D)
Código do erro: 1364.
Informa que o campo 'name' não possui um valor padrão.
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "004",
  "Francisco",
  400000,
  "1949-04-18", 
  "male"
);

E)
Código do erro: 1292.
Valor da data não está como string.
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "005", 
  "Juliana Paes",
  719333.33,
  "1979-03-26", 
  "female"
);

F)
Error Code: 1062.
Id do Antônio Fagundes está duplicado.

### Exercicio 3

A) SELECT * FROM Actor WHERE gender = "female";

B) SELECT name, salary FROM Actor WHERE name = "Tony Ramos";

C) SELECT * FROM Actor WHERE gender = "invalid";

D) SELECT id, name, salary FROM Actor WHERE salary < 500.000;

E) Código de erro: 1054.
A palavra 'nome' está errada, de acordo com a tabela.
Correto seria: SELECT id, name from Actor WHERE id = "002";

### Exercicio 4

A)
A query serve para buscar os atores cujo os nomes começam com A ou J e que são salários seja maiores do que R$300.000.

B)SELECT * from Actor WHERE name NOT LIKE "A%"  AND salary > 350000;

C)SELECT * from Actor WHERE name LIKE "G%" OR name LIKE "g%";

D)SELECT * from Actor WHERE (name LIKE "a%" OR name LIKE "A%" OR name LIKE "g%" OR name LIKE "G%")
AND salary BETWEEN 350000 AND 900000;

### Exercicio 5
A)
TEXT é a família de tipo de coluna destinada ao armazenamento de caracteres de alta capacidade.
CREATE TABLE Filmes (
    id VARCHAR(255) PRIMARY KEY,
    nome VARCHAR (255) NOT NULL,
    sinopse TEXT (255) NOT NULL,
    data_de_lancamento DATE NOT NULL,
    avaliacao VARCHAR(10) NOT NULL
);

B)
INSERT INTO Filmes (id, nome, sinopse, data_de_lancamento, avaliacao)
VALUES(
  "001", 
  "Se Eu Fosse Você",
  "Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos",
  "2006-01-06", 
  7
);

C)
INSERT INTO Filmes (id, nome, sinopse, data_de_lancamento, avaliacao)
VALUES(
  "002", 
  "Doce de mãe",
  " Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela",
  "2012-12-27", 
  10
);

D)
INSERT INTO Filmes (id, nome, sinopse, data_de_lancamento, avaliacao)
VALUES(
  "003",
  "Dona Flor e Seus Dois Maridos",
  "Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce.",
  "2017-11-02", 
  8
);

E)
INSERT INTO Filmes (id, nome, sinopse, data_de_lancamento, avaliacao)
VALUES(
	"004",
    "Deus é Brasileiro",
    "Cansado da humanidade, Deus resolve tirar férias para descansar e procura alguém no Brasil capaz de substituí-lo. O borracheiro e pescador Taoca e a solitária Madá deverão guiá-lo até Quincas das Mulas, candidato de Deus a santo.",
    "2003-01-31",
    9
    
);

### Exercicio 6

A)
SELECT id, nome, avaliacao FROM Filmes WHERE id = "004";

B)
SELECT * FROM Filmes WHERE nome = "Deus é Brasileiro";

C)
SELECT id, nome, sinopse FROM Filmes WHERE avaliacao > 7;


### Exercicio 7 

A)
SELECT * FROM Filmes WHERE nome LIKE "%vida%";

B)
SELECT * FROM Filmes WHERE nome LIKE "%TERMO DE BUSCA%" OR sinopse LIKE "%TERMO DE BUSCA%";

C)
SELECT * FROM Filmes WHERE data_de_lancamento < "2020-05-04";

D)
SELECT * FROM Filmes WHERE data_de_lancamento < "2020-05-04" AND (nome LIKE "%TERMO DE BUSCA%"
OR sinopse LIKE "%TERMO DE BUSCA%") AND avaliacao > 7;