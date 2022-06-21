import Place from "./Place";


export class Residence extends Place {
    constructor(
        protected residentsQuantity: number,
        // Refere-se ao número de moradores da casa

        cep: string
    ) {
        super(cep);
    }

    public getDwellersQuantity(): number {
        return this.residentsQuantity
      }
}

const resi = new Residence(4, "1939782934")

console.log(resi);
