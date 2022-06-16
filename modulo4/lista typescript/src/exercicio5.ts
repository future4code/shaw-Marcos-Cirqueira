const usuarios = [
	{name: "Rogério", email: "roger@email.com", role: "user"},
	{name: "Ademir", email: "ademir@email.com", role: "admin"},
	{name: "Aline", email: "aline@email.com", role: "user"},
	{name: "Jéssica", email: "jessica@email.com", role: "user"},  
	{name: "Adilson", email: "adilson@email.com", role: "user"},  
	{name: "Carina", email: "carina@email.com", role: "admin"}      
] 

type Usuarios = {
    name: string,
    email: string,
    role: string
}

function mapeando (usuarios: Usuarios[]){
    return usuarios.filter((user)=> {
        return user.role === "admin"
    }).map(user => user.email)
    
}
console.log(mapeando(usuarios));
