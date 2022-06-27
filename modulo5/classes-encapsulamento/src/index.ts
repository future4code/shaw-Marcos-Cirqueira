import { Request, Response } from "express";
import app from "./app";
import connection from "./connection";


// Exercicio 1

// a) Para que serve o construtor dentro de uma classe e como fazemos para chamá-lo?
// R:
// O construtor é um método especial para criar e inicializar um objeto criado a partir de uma classe.
// Sua sintaxe: constructor([argumentos]) { ... }

// b) Copie o código abaixo para o seu exercício de hoje; crie uma instância dessa classe (dê o nome, cpf e idade que você quiser). Quantas vezes a mensagem "Chamando o construtor da classe User" foi impressa no terminal?


// Exercicio 2
class Transaction {
    private description: string
    private value: number
    private date: string
    addTransactions: any;

    constructor(description: string, value: number, date: string) {
        this.description = description
        this.value = value
        this.date = date
    }

}

// Exercicio 1

class UserAccount {
    private cpf: string;
    private name: string;
    private age: number;
    private balance: number = 0;
    private transactions: Transaction[] = [];

    constructor(
        cpf: string,
        name: string,
        age: number

    ) {
        this.cpf = cpf
        this.name = name
        this.age = age
        this.transactions = []
    }

    public getUser = () => {
        return {
            cpf: this.cpf,
            name: this.name,
            age: this.age
        }
    }

    public addTransactions = (transactions: Transaction) => {
        this.transactions.push(transactions)
    }

    public getTrans() {
        return this.transactions

    }
}
const UserAccount1 = new UserAccount("997656", "marcos", 27)
const Transaction1 = new Transaction("Bora pessoal...", 100, "20/06/2022")

UserAccount1.addTransactions(Transaction1);
console.log(UserAccount1.getTrans());
console.log(UserAccount1);


// c) *Como conseguimos ter acesso às propriedades privadas de uma classe?
// R:
// Usando a keyword public, this



// EXercicio 3

class Bank {
    private accounts: UserAccount[]

    constructor(accounts: UserAccount[]) {
        this.accounts = accounts
    }

    public getBank() {
        return this.accounts
    }
}





