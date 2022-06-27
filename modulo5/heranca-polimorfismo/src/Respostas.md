## Herança

### Exercicio 1

- a) Seria possível imprimir a senha (password) atrelada a essa instância?

    Sim

- b) Quantas vezes a mensagem "Chamando o construtor da classe User" foi impressa no terminal?

    Uma vez

### Exercicio 2

- a) Quantas vezes a mensagem "Chamando o construtor da classe Customer" foi impressa no terminal? 

    Uma vez

- b) *Quantas vezes a mensagem `"Chamando o construtor da classe User"` foi impressa no terminal? Por quê?
 Duas vezes. Porque ela e uma super classe que dá características para as classes filhas.

 ### Exercicio 3

 - a) Seria possível imprimir a senha (`password`) atrelada a essa instância?Por quê?
   Sim.

 ## Polimorfismo

 ### Exercicio 1

 - a) Quais propriedades você conseguiu imprimir? Teve alguma que não foi possível? Por que isso aconteceu?

    Todas.

### Exercicio 2

- a) Mesmo sabendo que não é possível, tente criar uma instância dessa classe (ou seja: `new Place(...)`). Qual foi o erro que o Typescript gerou?

    Cannot create an instance of an abstract class.

- b) Pense e responda: o que precisaríamos fazer para conseguir efetivamente criar uma instância dessa classe?

    Para criar uma instância de uma classe abstrata precisamos declarar uma classe filha e criar uma instância dessa última.

### Exercicio 3

### Exercicio 4

- a) Que métodos e propriedades essa classe possui? Por quê?

    Possui o método GET e a propriedades: name, registrationNumber,consumedEnergy, cpf, residentsQuantity e cep.
    Porque ela e uma classe filha de Residence e implenta a classe Client.


### Exercicio 5


- a) Quais as semelhanças dessa classe com a `ResidentialClient`?

    As duas usaram o método GET, as propriedades iguais e o tipo de classe também.

- b) Quais as diferenças dessa classe com a `ResidentialClient`?

    Essa classe usa cnpj e quantidade de andares.

### Exercicio 6

- a) De qual classe a `IndustrialClient` deve ser filha? Por quê?

    Da classe Industry. 

- b) Que interface a `IndustrialClient` implementa? Por quê?

    Implemanta a classe Client.

- c) Nós pedimos para criar somente os getters dessa classe. Pense num motivo para isso: por que só os getters?

     Porque é o único objeto privado.


