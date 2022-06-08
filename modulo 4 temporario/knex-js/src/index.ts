import { count } from "console";
import { Request, Response } from "express";
import app from "./app";
import connection from "./connection";


// Exercicio 1 >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// Esse arquivo seria o index.ts

const getActorById = async (id: string): Promise<any> => {
    const result = await connection.raw(`
    SELECT * FROM Actor WHERE id = '${id}'
  `)

    return result[0][0]
}


// Assim a chamada funciona fora dos endpoints com .then()/.catch
getActorById("002")
    .then(result => {
        console.log(result)
    })
    .catch(err => {
        console.log(err)
    });

// Assim a chamada funciona fora dos endpoints com await
(async () => {
    console.log(await getActorById("002"))
})()


// Ou então podemos chamá-la dentro de um endpoint
app.get("/users/:id", async (req: Request, res: Response) => {
    try {
        const id = req.params.id

        console.log(await getActorById(id))

        res.end()
    } catch (error: any) {
        console.log(error.message)
        res.status(500).send("Unexpected error")
    }
}) // bata no http://localhost:3003/users/001 e veja o que acontece no terminal

// A)
// Ele devolve pra gente o resultado da query e outras informações. Essa é a forma com que o MySQL devolve as queries naturalmente.

// b)
const seachActor = async (name: string): Promise<any> => {
    const result = await connection.raw(`
    SELECT * FROM Actor WHERE name = "${name}"
    `)
    return result
}

// C)

const countActors = async (gender: string): Promise<any> => {
    const result = await connection.raw(`
    SELECT COUNT(*) as count FROM Actor WHERE gender = "${gender}"
    `)
    const count = result[0][0].count;
    return count;
}

// Exercicio 2

const createActor = async (
    id: string,
    name: string,
    salary: number,
    dateOfBirth: Date,
    gender: string
): Promise<void> => {
    await connection
        .insert({
            id: id,
            name: name,
            salary: salary,
            birth_date: dateOfBirth,
            gender: gender,
        })
        .into("Actor");
};

// a)
const updateActor = async (id: string, salary: number): Promise<any> => {
    await connection("Actor")
        .update({
            salary: salary,
        })
        .where("id", id);
};

//B)
const deleteActor = async (id: string): Promise<any> => {
    await connection("Actor")
        .delete()
        .where("id", id);
}
// c)

const avgSalary = async (gender: string): Promise<any> => {
    const result = await connection("Actor")
        .avg("salary as average")
        .where({ gender });
    return result[0].average;
}

// Exercicio 3

// a)
app.get("/actor/:id", async (req: Request, res: Response) => {
    try {
        const id = req.params.id;
        const actor = await getActorById(id);

        res.status(200).send(actor)
    } catch (err: any) {
        res.status(400).send({
            message: err.message,
        });
    }
});

//b)
app.get('/actor', async (req: Request, res: Response) => {
    try {
        const count = await countActors(req.query.gender as string)
        res.status(200).send({
            quantity: count
        })
    } catch (error: any) {
        res.status(400).send({
            message: error.message
        })
    }
})

// Exercicio 4

app.post("/actor", async (req: Request, res: Response) => {
    try {
        const { name, salary,birth_date, gender } = req.body
      const result = await connection("Actor")
      .insert({
          id: new Date().getTime(),
          name: name,
          salary: salary,
          birth_date: new Date(birth_date),
          gender: gender
      })     
  
      res.status(200).send(result);
    } catch (err:any) {
      res.status(400).send({
        message: err.message,
      });
    }
  });

//a)
app.put("/actor", async (req: Request, res: Response) => {
    try {       
      await connection("Actor")
      .update({
          id: req.body.id,
          salary: req.body.salary,         
      })     
  
      res.status(200).send({message: "Sucesso"});
    } catch (err:any) {
      res.status(400).send({
        message: err.message,
      });
    }
  });

//b)
app.delete("/actor/:id", async (req: Request, res: Response) => {
    try {
      await deleteActor(req.params.id);
    } catch (err:any) {
      res.status(400).send({
        message: err.message,
      });
    }
  });