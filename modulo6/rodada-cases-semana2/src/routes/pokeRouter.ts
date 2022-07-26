import express from "express";
import { PokeBusiness } from "../business/PokeBusiness";
import { PokeController } from "../controller/PokeController";
import { PokeDatabase } from "../data/PokeDatabase";
import { Authenticator } from "../services/Authenticator";
import { HashManager } from "../services/HashManager";
import { IdGenerator } from "../services/IdGenerator";


export const pokeRouter = express.Router();

const userBusiness = new PokeBusiness(
    new PokeDatabase(),
    new IdGenerator(),
    new HashManager(),
    new Authenticator()
)

const userController = new PokeController(userBusiness);

pokeRouter.get('/getpoke', userController.getListings)
pokeRouter.get('/searchPoke', userController.searchPokemon)
pokeRouter.get('/page', userController.getPokePage)
pokeRouter.get('/filters', userController.getFilterByOrder)