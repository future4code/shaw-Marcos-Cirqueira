// Exercicio 1

export default class User {
    private id: string;
    private email: string;
    private name: string;
    private password: string;
    public interoduceYourself(): string {
        return `Olá, ${this.name}. Bom dia!`
     }  
    constructor(
          id: string,
          email: string,
          name: string,
          password: string          
      ){
          console.log("Chamando o construtor da classe User")
          this.id = id
          this.email = email
          this.name = name 
          this.password = password
      }
  
      public getId(): string {
          return this.id
      }
  
      public getEmail(): string {
          return this.email
      }
  
      public getName(): string {
          return this.name
      }
  }

  const User1 = new User("1", "dev_junior@gmail.com","juninho", "123456")

  console.log(User1.interoduceYourself())

  