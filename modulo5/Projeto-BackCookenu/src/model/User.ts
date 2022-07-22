export class User {
    constructor(
        public id: string,
        public nome: string,
        public email: string,
        public password: string,
    )
    {}
}

export interface AuthenticatorData{
    id: string
 } 