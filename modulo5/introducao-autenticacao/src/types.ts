export class User {
   constructor(
     public id: string,
     public email: string,
     public password: string,
     public role: string
   ) { }
  
}
export interface AuthenticatorData{
   id: string
   role: string
}