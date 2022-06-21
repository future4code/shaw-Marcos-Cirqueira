import User from "./User";
// Exercicio 2

export default class Customer extends User {
    public purchaseTotal: number = 0;
    private creditCard: string;
  
    constructor(
      id: string,
      email: string,
      name: string,
      password: string,
      creditCard: string
    ) {
      super(id, email, name, password);
      console.log("Chamando o construtor da classe Customer");
      this.creditCard = creditCard;
    }
  
    public getCreditCard(): string {
      return this.creditCard;
    }
  }

  const Customer1 = new Customer("1", "dev_junior@gmail.com","juninho", "123456", "Visa")
  console.log(Customer1.interoduceYourself())

  

  