import { Request, Response } from "express";
import { PokeBusiness } from "../business/PokeBusiness";
import { BaseDatabase } from "../data/BaseDatabase";

export class PokeController {

    constructor(
        private userBusiness: PokeBusiness
    ) { }

    getListings = async (req: Request, res: Response) => {
        try {

            const result = await this.userBusiness.getListings()

            res.status(201).send(result)

        } catch (error) {
            if (error instanceof Error) {
                return res.status(400).send(error.message)
            }
            res.status(500).send("Erro no getListings")
        }

        await BaseDatabase.destroyConnection();
    }

    searchPokemon = async (req: Request, res: Response) => {
        try {

            const PokeName = req.query.Name as string

            const result = await this.userBusiness.searchPokemon(PokeName)

            res.status(201).send(result)


        } catch (error) {
            if (error instanceof Error) {
                return res.status(400).send(error.message)
            }
            res.status(500).send("Erro no searchPokemon")
        }

        await BaseDatabase.destroyConnection();
    }

    getPokePage = async (req: Request, res: Response) => {
        try{
            const pagePoke = Number (req.query.page) 
            
            const result = await this.userBusiness.getPokePage(pagePoke)

            res.status(200).send(result)

        }catch (error) {
            if (error instanceof Error) {
                return res.status(400).send(error.message)
            }
            res.status(500).send("Erro no getPokePage")
        }
    }

    getFilterByOrder = async (req: Request, res: Response) => {
        try{

            let order = req.query.order as string
            let filter = req.query.filter as string

            const result = await this.userBusiness.getFilterByOrder(order, filter)

            res.status(200).send(result)

        }catch (error) {
            if (error instanceof Error) {
                return res.status(400).send(error.message)
            }
            res.status(500).send("Erro no getFilterByOrder")
        }
    }

}