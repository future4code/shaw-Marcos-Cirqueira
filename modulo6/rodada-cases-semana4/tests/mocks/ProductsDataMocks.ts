import { Product1, Product2, tag1 } from "./ProductMock"

export class ProductDatabaseMock {

    public async getProductByName(name: string) {
        switch (name) {
            case "Calça pantalona":
                return Product1
            case "Blusa canelada com gola":
                return Product2
            default:
                return undefined
        }
    }
    public async getProductById(id: string){
        switch (id) {
            case "id_product1":
                return Product1
            case "id_product2":
                return Product2
            default:
                return undefined
        }
    }

    public async getProductByTag(tags: string) {
        switch (tags) {
            case "Jeans":
                return tag1
            default:
                return undefined
        }
    }
} 