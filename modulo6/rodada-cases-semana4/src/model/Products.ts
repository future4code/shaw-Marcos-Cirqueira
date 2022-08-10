export class amaro_products {
    constructor(
        public id: string,
        public name: string
    ) { }
}

export class amaro_tags {
    constructor(
        public id: string,
        public tags: string[],
        public products_id: string
    ) { }
}

export interface inputCreateProductDTO {
    name: string,
    tags: string[]
}