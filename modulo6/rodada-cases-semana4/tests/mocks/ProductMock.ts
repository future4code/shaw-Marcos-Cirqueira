import { amaro_products, amaro_tags } from "../../src/model/Products"

export const Product1 = new amaro_products("id_product1", "Calça pantalona")
export const Product2 = new amaro_products("id_product2", "Blusa canelada com gola") 
export const tag1 = new amaro_tags("id_mock", ["Jeans", "Verão", "Casual"], "id_product1")