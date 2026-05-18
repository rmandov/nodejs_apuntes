// Definir la hora actual
console.log(`Hora actual: ${new Date().toLocaleTimeString()}`);

const timeOut = setTimeout( ()=>{
    console.log("Este mensaje aparece después de 2 segundos");
    console.log(`Hora actual 2 segundos: ${new Date().toLocaleTimeString()}`);
},2000 );

setImmediate(()=>{
    console.log("Este mensaje aparee en la proxima interación del bucle");
    console.log(`Hora actual del bucle: ${new Date().toLocaleTimeString()}`);
});

const intervalId = setInterval(()=>{
    console.log("Este mensaje aparece cada 3 segundos");
    console.log(`Hora actual 3 segundos: ${new Date().toLocaleTimeString()}`);
},3000);

setTimeout(()=>{
    console.log("Cancelar el intervalor despues de 10 segundos");
    console.log(`Hora actual 10 segundos: ${new Date().toLocaleTimeString()}`);
    clearInterval(intervalId);
}, 10000);

const timeOutId = setTimeout(()=>{
    console.log("Este mensaje nunca aparecerá");
    
}, 100000);

clearTimeout(timeOutId);

console.log(`Hora final del programa: ${new Date().toLocaleTimeString()}`);