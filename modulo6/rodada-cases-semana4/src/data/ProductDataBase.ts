import { IdGenerator } from "../services/IdGenerator";
import BaseDataBase from "./BaseDatabase";


export class ProductDataBase extends BaseDataBase {

    private static TABLE_NAME = "amaro_products"
    private static TABLE_NAME2 = "amaro_tags"
    public createProduct = async (input: any) => {
        try {

            await BaseDataBase.connection()
                .insert({
                    id: input.id,
                    name: input.name
                })
                .from(ProductDataBase.TABLE_NAME)

            const tags = input.tags

            const productsId = input.id

            for (const tag of tags) {
                const tagsid = new IdGenerator().generate()
                await ProductDataBase.connection()
                    .insert({
                        id: tagsid,
                        tags: tag,
                        products_id: productsId
                    })
                    .from(ProductDataBase.TABLE_NAME2)
            }

        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message);
        }
    }

    public getProductById = async (id:string) => {
        try{

            const result = await ProductDataBase.connection()
            .select("*")
            .where({id})
            .from(ProductDataBase.TABLE_NAME)

            return result[0]

        }catch (error: any) {
            throw new Error(error.sqlMessage || error.message);
        }
    }

    public getProductByName = async (name:string) => {
        try{

            const result = await ProductDataBase.connection()
            .select("*")
            .where({name})
            .from(ProductDataBase.TABLE_NAME)

            return result[0]

        }catch (error: any) {
            throw new Error(error.sqlMessage || error.message);
        }
    }

    public getProductByTag = async (tags:string) => {
        try{
            console.log(tags);
            
            const result = await ProductDataBase.connection()
            .select("*")
            .where({tags})
            .from(ProductDataBase.TABLE_NAME2)

            return result
            
            
        }catch (error: any) {
            console.log(error);
            throw new Error(error.sqlMessage || error.message);
        }
    }
}