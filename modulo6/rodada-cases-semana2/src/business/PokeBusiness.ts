import { PokeDatabase } from "../data/PokeDatabase";
import { HashManager } from "../services/HashManager";
import { Authenticator } from "../services/Authenticator";
import { IdGenerator } from "../services/IdGenerator";
import { BaseError } from "../error/BaseError";

export class PokeBusiness {
    constructor(
        private pokerData: PokeDatabase,
        private idGenerator: IdGenerator,
        private hashManager: HashManager,
        private authenticator: Authenticator,
    ) { }

    getListings = async () => {
        return await this.pokerData.ContainListings()
    }

    searchPokemon = async (Name:string) => {
        return await this.pokerData.Search(Name)
    }

    getPokePage = async (pagePoke: number) => {

        let page = pagePoke

        if (page < 1 || isNaN(page)) {
            page = 1
        }

        let size = 5

        let offset = (page - 1) * size

        const result = await this.pokerData.Page(size, offset)

        return result
    }

    getFilterByOrder = async (order:string , filter:string) => {

        if (order !== 'asc' && order !== 'desc') {
            order = 'asc'
        }

        if (filter !== 'Name' && filter !== 'Type 1') {
            filter = 'Row'
        }

        const result = await this.pokerData.FilterByOrder(order, filter)
        return result
    }
}
