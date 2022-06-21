
export default interface Client {
    name: string
    registrationNumber: number
    consumedEnergy: number
    calculateBill(): number 
    
}


const client: Client = {
    name: "Goli",
    registrationNumber: 1,
    consumedEnergy: 100,
    
    calculateBill: () => {
        return 2;
    }
}

console.log(client.name);
console.log(client.registrationNumber);
console.log(client.consumedEnergy);
console.log(client.calculateBill());

