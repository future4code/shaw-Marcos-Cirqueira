import { app } from "./app"
import { getAllName, getFilterUser } from "./endpoints/getAllName"
import {getOrdeUsers} from "./endpoints/getOrdeUsers"
import { getAllUsers } from  "./endpoints/getAllUsers"
import {getPage} from "./endpoints/getPage"
import {getAll} from "./endpoints/getAll"




app.get("/users", getAllUsers)

app.get('/usersName', getAllName)

app.get('/users/:type', getFilterUser)

app.get('/usersOrder', getOrdeUsers)

app.get('/usersPage', getPage)

app.get('/usersFunctionalities', getAll)




