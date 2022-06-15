import app from "./app";
import * as Api from './api'

app.get("/endereco/:cep", Api.handleGetAddress)

app.post("/endereco", Api.handleCreateAddress)