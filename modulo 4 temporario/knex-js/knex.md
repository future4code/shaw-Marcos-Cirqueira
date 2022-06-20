### Exercicio 1 

```typescript
const getActorById = async (id: string): Promise<any> => {
    const result = await connection.raw(`
    SELECT * FROM Actor WHERE id = '${id}'
  `)

    return result[0][0]
}
```

```typescript
getActorById("002")
    .then(result => {
        console.log(result)
    })
    .catch(err => {
        console.log(err)
    });
```

```typescript
(async () => {
    console.log(await getActorById("002"))
})()
```


```typescript
app.get("/users/:id", async (req: Request, res: Response) => {
    try {
        const id = req.params.id

        console.log(await getActorById(id))

        res.end()
    } catch (error: any) {
        console.log(error.message)
        res.status(500).send("Unexpected error")
    }
}) 
```

- A)
Ele devolve pra gente o resultado da query e outras informações. Essa é a forma com que o MySQL devolve as queries naturalmente.

- b)
```typescript
const seachActor = async (name: string): Promise<any> => {
    const result = await connection.raw(`
    SELECT * FROM Actor WHERE name = "${name}"
    `)
    return result
}
```
- C)
```typescript
const countActors = async (gender: string): Promise<any> => {
    const result = await connection.raw(`
    SELECT COUNT(*) as count FROM Actor WHERE gender = "${gender}"
    `)
    const count = result[0][0].count;
    return count;
}
```
### Exercicio 2
```typescript
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
```
- a)
```typescript
const updateActor = async (id: string, salary: number): Promise<any> => {
    await connection("Actor")
        .update({
            salary: salary,
        })
        .where("id", id);
};
```
- b)
```typescript
const deleteActor = async (id: string): Promise<any> => {
    await connection("Actor")
        .delete()
        .where("id", id);
}
```
- c)
```typescript
const avgSalary = async (gender: string): Promise<any> => {
    const result = await connection("Actor")
        .avg("salary as average")
        .where({ gender });
    return result[0].average;
}
```
### Exercicio 3

- a)
```typescript
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
```
- b)
```typescript
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
```
### Exercicio 4
```typescript
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
```
- a)
```typescript
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
```
- b)
```typescript
app.delete("/actor/:id", async (req: Request, res: Response) => {
    try {
      await deleteActor(req.params.id);
    } catch (err:any) {
      res.status(400).send({
        message: err.message,
      });
    }
  });
  ```