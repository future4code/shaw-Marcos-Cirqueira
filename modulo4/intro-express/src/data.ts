type Users = {
    id: number,
    name: string,
    phone: number,
    email: string,
    website: string
}

type Posts = {
    userId: number,
    id:number,
    title: string,
    body: string
}
export const Users = [
    {
        id: 1,
        name: "marcos",
        phone: 33993878,
        email: "marcos_dev@hotmail.com",
        website: "marcos.com.br"

    },
    {
        id: 2,
        name: "luciano",
        phone: 33773878,
        email: "luciano_dev@hotmail.com",
        website: "luciano.com.br"

    }
]

export const Posts = [
    {
       userId: 1,
       id: 1,
       title: "Sou eu aqui",
       body: "olá mundo, esse sou eu!"
    },
    {
       userId: 1,
       id: 2,
       title: "Sou eu aqui",
       body: "olá mundo, esse sou eu!"
    },

    {
       userId: 2,
       id: 3,
       title: "Meu nome não é...",
       body: "Meu nome e o que você colocar!"
    },

    {
       userId: 2,
       id: 4,
       title: "Meu nome não é...",
       body: "Meu nome e o que você colocar!"
    }
]