/* 
You can execute this code in terminal:

$ node src/index.js 1 6

1 and 6 are the min and max values you can use like input
*/

const args = process.argv.slice(2);

let min = 1;
let max = 100;


if (args.length >=2){
    const parsedMin = parseInt(args[0], 10);
    const parsedMax = parseInt(args[1], 10);

    if( !isNaN(parsedMin) && !isNaN(parsedMax) && parsedMin < parsedMax){
        min = parsedMin;
        max = parsedMax;
    }else{
        console.log("Rango no válido. Usando valores por defecto (1-100)");
        
    }
}


const randomNumber = Math.floor(Math.random() * (max - min +1 )) + min;

console.log(`Número aleatorio entre ${min} - ${max}: ${randomNumber}`);

