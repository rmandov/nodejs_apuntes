console.log('ID del proceso (pid):', process.pid);

console.log('Directorio actual (cwd):', process.cwd()); // recuerda ejecutarla como función.

console.log('Versión de Node.js:', process.version);

console.log('Plataforma:', process.platform); // p. ej., Darwin.

console.log('Arquitectura:', process.arch);   // p. ej., arm.

console.log('Tiempo de ejecución (s):', process.uptime());

console.log(process.env);
console.log(`Path: ${process.env.PATH}`);
console.log(`User Profile: ${process.env.HOME || process.env.USERPROFILE}`);
console.log(`NODE_ENV: ${process.env.NODE_ENV || "No definido"}`);

// Uso de memoria del proceso

const memoryUsage = process.memoryUsage();
console.log(memoryUsage);

// Con el proceso tenemos eventos que suceden

process.on('exit', (code)=>{
    console.log("El proceso se ha terminado", code);
    
});

process.on('SIGINT', ()=>{
    console.log("Se recibió la señal de interrupción Ctrl+C");
    process.exit(0);
})

console.log("Escribe algo y preciona ENTER o Ctrl+C para salir");
process.stdin.on('data', (data)=>{
    const input = data.toString().trim();
    if( input.toLocaleLowerCase() === "salir"){
        console.log("Comando de salida recibido");
        process.exit(0);
    }else{
        console.log(`Mensaje ${input}`);
        console.log("Escribe salir para terminar o escribe algo más");
    }
})

