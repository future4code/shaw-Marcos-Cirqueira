import app from "./app";
import connection from "./connection";

// GET de usuários da tabela USER

app.get('/user', async (req, res) => {
    try {
        const result = await connection("TodoListUser")
        res.send(result)
    } catch (error: any) {
        res.status(500).send(error.sqlMessage || error.message)
    }
})

// 1. Criar usuário
app.post('/user', async (req, res) => {
    try {
        const { name, nickname, email } = req.body

        if (!name || !nickname || !email) {
            res.status(422)
            throw new Error("Campo não informado")
        }

        await connection("TodoListUser")
            .insert({
                id: new Date().getTime(),
                name: name,
                nickname: nickname,
                email: email,
            })

        res.status(200).send("Criado com sucesso!")
    } catch (error: any) {
        res.status(500).send(error.sqlMessage || error.message)
    }
})

// // 2. Pegar usuário pelo id
app.get('/user/:id', async (req, res) => {
    try {
        const id = req.params.id

        const result = await connection("TodoListUser")
            .select("id", "nickname")
            .where({ id })

        const [findId] = result.filter((user) => {
            return id === user.id
        })
        if (!findId) {
            res.status(401)
            throw new Error("Usuário não existe")
        }

        res.status(200).send([findId])

    } catch (error: any) {
        res.status(500).send(error.sqlMessage || error.message)
    }
})

// // 3. Editar usuário

app.put('/user/edit/:id', async (req, res) => {
    try {

        const { name, nickname } = req.body

        if (!name || !nickname) {
            res.status(422)
            throw new Error("Campo não informado")
        }

        const result = await connection("TodoListUser")
            .update({
                name: name,
                nickname: nickname
            })
            .where({ id: req.params.id })

        res.status(200).send("Modificado com sucesso!")

    } catch (error: any) {
        res.status(500).send(error.sqlMessage || error.message)
    }
})

// // 4. Criar tarefa

app.post('/task', async (req, res) => {
    try {
        const { title, description, limitDate, creatorUserId } = req.body

        const [diaNasc, mesNasc, anoNasc] = limitDate.split("/")

        if (!title || !description || !limitDate || !creatorUserId) {
            res.status(422)
            throw new Error("Campo não informado")
        }

        await connection("TodoListTask")
            .insert({
                id: new Date().getTime(),
                title: title,
                description: description,
                limit_date: `${diaNasc}-${mesNasc}-${anoNasc}`,
                creator_user_id: creatorUserId
            })

        res.status(200).send("Criado com sucesso!")
    } catch (error: any) {
        res.status(500).send(error.sqlMessage || error.message)
    }
})

// // 5.Pegar tarefa pelo id

app.get('/task/:id', async (req, res) => {
    try {
        const result = await connection("TodoListTask")
            .join('TodoListUser', 'creator_user_id', 'TodoListUser.id')
            .select('TodoListTask.id', 'TodoListTask.title', 'TodoListTask.description', 'TodoListTask.limit_date', 'TodoListTask.status', 'TodoListTask.creator_user_id', 'TodoListUser.nickname')


        res.status(200).send(result)
    } catch (error: any) {
        res.status(500).send(error.sqlMessage || error.message)
    }
})

// Desafios
// 6. Pegar todos os usuários

// app.get('/user/all', async (req, res) => {
//     try {
//         const result = await connection("TodoListUser")
//         res.send(result)
//     }catch (error: any) {
//         res.status(500).send(error.sqlMessage || error.message)
//     }
// })



