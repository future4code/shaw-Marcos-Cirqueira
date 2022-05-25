function receba(num1: number, num2: number): void{
    let soma:number = num1 + num2 
    let sub:number = num1 - num2 
    let mult:number = num1 * num2
    let maior:number = 0
    if(num1>num2){
        maior=num1
    }else{
        maior=num2
    }
    console.log("soma", soma);
    console.log("sub", sub);
    console.log("mult", mult);
    console.log("maior", maior);
    
     
}
(receba(50, 2));

// function receba(num1: number, num2: number): Array<number>{
//     let soma:number = num1 + num2 
//     let sub:number = num1 - num2 
//     let mult:number = num1 * num2
//     let maior:number = 0
//     if(num1>num2){
//         maior=num1
//     }else{
//         maior=num2
//     }

//     return [soma, sub, mult, maior]
     
// }
// console.log(receba(100, 50));