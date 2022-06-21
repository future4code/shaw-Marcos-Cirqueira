import Place from "./Place";


export default class Commerce extends Place {
    constructor(
        protected floorsQuantity: number,
        // Refere-se à quantidade de andares do lugar

        cep: string
    ) {
        super(cep);
    }

    public getFloorsQuantity(): number {
        return this.floorsQuantity;
      }
}

const commerce = new Commerce(10, "72232980")

console.log(commerce);
