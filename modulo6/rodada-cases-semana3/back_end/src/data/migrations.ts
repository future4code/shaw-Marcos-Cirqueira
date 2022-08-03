import { BaseDatabase } from "./BaseDatabase";

class Migrations extends BaseDatabase {

    private static Cubo_Users = "Cubo_Users"
    async createTables() {
        try {

            await this.getConnection().raw(
                `
            CREATE TABLE IF NOT EXISTS ${Migrations.Cubo_Users}( 
                id VARCHAR(255) PRIMARY KEY, 
                first_name VARCHAR(255) NOT NULL, 
                last_name VARCHAR(255) NOT NULL, 
                participation INT NOT NULL
            )                       
            
            `)

            console.log(`tabela ${Migrations.Cubo_Users} criada com sucesso`);

        } catch (error: any) {
            console.log(error.message);

        } finally {
            BaseDatabase.destroyConnection()
        }
    }
}

new Migrations().createTables();