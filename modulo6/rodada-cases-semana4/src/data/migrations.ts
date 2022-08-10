import products from "../data/products.json"
import { IdGenerator } from "../services/IdGenerator";
import BaseDatabase from "./BaseDatabase";
import BaseDataBase from "./BaseDatabase";
import { ProductDataBase } from "./ProductDataBase";

const listProducts = products.products
class Migrations extends BaseDataBase {

    async createTables() {
        try {
            await Migrations.connection.raw(
                `
                CREATE TABLE IF NOT EXISTS amaro_products(
                    id varchar (255)  primary key,
                    name varchar(255) not null
                     );

                     CREATE TABLE IF NOT EXISTS amaro_tags(
                        id VARCHAR (255) PRIMARY KEY,
                        tags VARCHAR (255),
                        products_id VARCHAR (255),
                        FOREIGN KEY (products_id) REFERENCES amaro_products(id)
                        );
                
                `
            )
            console.log(`tabela criada com sucesso`);

        } catch (error: any) {
            console.log(error.message);

        } finally {
            BaseDatabase.destroyConnection()
        }
    }

    insertProducts = async () => {
        try {

            for (const product of listProducts) {
                const productId = new IdGenerator().generate()
                await ProductDataBase.connection()
                    .insert({
                        id: productId,
                        name: product.name
                    })
                    .from("amaro_products")

                for (const tag of product.tags) {
                    const tagsid = new IdGenerator().generate()
                    await ProductDataBase.connection()
                        .insert({
                            id: tagsid,
                            tags: tag,
                            products_id: productId
                        })
                        .from("amaro_tags")

                        .then(() => { console.log("Products created successfully") })

                }
            }


        } catch (error: any) {
            console.log(error.message);

        } finally {
            BaseDatabase.destroyConnection()
        }
    }
}
new Migrations().createTables()

new Migrations().insertProducts()




