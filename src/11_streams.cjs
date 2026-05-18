const fs = require("fs");
const path = require('path')

const filePath = path.join(__dirname, '11_pointers.txt')


const readableStream = fs.createReadStream(filePath, {encoding:"utf8"});

const writeableStream = fs.createWriteStream("11_output-js.txt");


// Manejo de error en lectura
readableStream.on(
    "error",
    (err) => {
        console.log("Error de lectura del archivo:\n", err);
    }
);

// Manejo de error en escritura
writeableStream.on(
    "error",
    (err) =>{
        console.log("Error en la escritura del archivo:\n", err);
    }
);

// Lee el chunk y lo escribe
readableStream.on("data", (chunk)=>{
    console.log(`chunk: ${chunk}`);
    writeableStream.write(chunk);
    
});

// Fin de escritura del archivo 
readableStream.on("end", ()=>{
    console.log("Terminó la lectura del archivo :D");
    writeableStream.end();
})
