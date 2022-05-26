const consultas = [
    { nome: "João", idade: 23, dataDaConsulta: "01/10/2021" },
    { nome: "Amanda", idade: 31, dataDaConsulta: "02/07/2021" },
    { nome: "Paula", idade: 26, dataDaConsulta: "03/11/2021" },
    { nome: "Márcia", idade: 45, dataDaConsulta: "04/05/2021" }
  ]
  
  type Consultas = {
      nome: string,
      idade: number,
      dataDaConsulta: string
  }

  function agendamento (consultas: Consultas[]): Consultas[] {
      const nomesEmOrdem = consultas.sort(
          (a, b) =>  a.nome < b.nome ? -1 : a.nome > b.nome ? 1 : 0
      )
      return nomesEmOrdem
  }
console.log(agendamento(consultas));
