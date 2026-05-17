// Conocer el sistema operativo del usuario

const os = require("os");

function showSystemInfo(){
    console.log(`Sistema operativo: ${os.type()}`);

    console.log(`Plataforma: ${os.platform}`);

    console.log(`Arquitectura: ${os.arch()}`);

    console.log(`Version OS: ${os.release}`);
    
    console.log('Uptime del sistema (segundos):', os.uptime());
    
    console.log('Memoria total (bytes):', os.totalmem());
    
    console.log('Memoria libre (bytes):', os.freemem());
    
    console.log('Cores disponibles:', os.cpus().length);
    
    console.log('Directorio principal:', os.homedir());
    
    console.log('Hostname:', os.hostname());
}

showSystemInfo();