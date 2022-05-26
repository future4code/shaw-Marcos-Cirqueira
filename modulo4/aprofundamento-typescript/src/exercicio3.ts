const posts = [
    {
      autor: "Alvo Dumbledore",
      texto: "Não vale a pena viver sonhando e se esquecer de viver"
    },
    {
      autor: "Severo Snape",
      texto: "Menos 10 pontos para Grifinória!"
    },
    {
      autor: "Hermione Granger",
      texto: "É levi-ô-sa, não levio-sá!"
    },
    {
      autor: "Dobby",
      texto: "Dobby é um elfo livre!"
    },
    {
      autor: "Lord Voldemort",
      texto: "Avada Kedavra!"
    }
  ]

// A)
type Post = {
    autor: string,
    texto: string
}
const Pessoa: Post = {
    autor: "Harry Potter",
    texto: "Expecto Patronum"
}

// B)
function buscarPostsPorAutor(posts: Post[], autorInformado: string):Post[] {
    return posts.filter(
      (post):boolean => {
        return post.autor === autorInformado
      }
    )
  }
// console.log(buscarPostsPorAutor(posts, "Hermione Granger"));
