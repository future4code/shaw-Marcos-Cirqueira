export class HashGeneratorMocks {

    public hash = (text: string)=> {
       return "senha_Hasheada"
    }
 
    public compare = (text: string, hash: string)=> {
       return text === hash
    }
    
 }