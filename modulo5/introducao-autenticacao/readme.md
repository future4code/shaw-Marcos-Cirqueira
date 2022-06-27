### Exercicio 1

- a) Qual a sua opinião em relação a usar strings para representar os ids? Você concorda que seja melhor do que usar números?
    A boa relação se dá pela ultilização não só de número, mas como letras(strigs) também, pois acaba melhorando a segurança do id e suas funcionalidades.

- b) A partir de hoje vamos tentar isolar, ao máximo, as nossas lógicas dentro de funções. Isso vai deixar nosso código mais organizado e aumentar a facilidade da manutenção e refatoração. Dado isso, crie uma função para gerar um id.
    Na pasta: services/

### Exercicio 2

- a) Explique o código acima com as suas palavras.
    Está sendo feita a conexão com o banco e depois é feita a função de inserir um usuário.

- b) Comece criando a tabela de usuários. Coloque a query que você utilizou no arquivo de respostas.

```SQL
CREATE TABLE User (
	id VARCHAR(255) PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL
);
```
- c) Na pasta: data/

### Exercicio 3

- a) O que a linha as string faz? Por que precisamos usar ela ali?
    "as string" ele confirma qual será a forma de retorno string, number...

- b) Na pasta service/

### Exercicio 4
Feito no createUser

### Exercicio 7

- a) O que a linha as any faz? Por que precisamos usá-la ali?

### Exercicio 8
