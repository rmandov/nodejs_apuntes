# Instalación de muchas versiones de node js

```bash

# Descarga e instala nvm:
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.3/install.sh | bash

# en lugar de reiniciar la shell
\. "$HOME/.nvm/nvm.sh"

# Descarga e instala Node.js:
nvm install 26

# Verifica la versión de Node.js:
node -v # Debería mostrar "v26.1.0".

# Instalar Corepack:
npm install -g corepack

# Descarga e instala pnpm:
corepack enable pnpm

# Verifica versión de pnpm:
pnpm -v


```


# Uso del export en formato Common js

Creamos un modulo en math.js que exportamos y se usa en main.js

You need to delete:

```json
"type": "module"
```
If you want to run the Common Js code

# Extensión VSCode: Code Runner

Seleccionas el código a ejecutar

# Módulo OS para datos del sistema

Conoce cómo usar el módulo os de Node.js para obtener datos clave del sistema operativo y aplicarlos a monitoreo, automatización y análisis de datos. Desde crear un archivo os.js hasta imprimir tipo de sistema, plataforma, arquitectura y versión, verás cómo estos indicadores apoyan decisiones técnicas como elegir librerías según el entorno o medir recursos disponibles.

¿Qué hace el módulo os en Node.js?

El módulo os expone información y utilidades del sistema operativo. Se importa con require y se utiliza con console.log para imprimir métricas como tipo de sistema, plataforma, arquitectura y versión del SO. La demostración se ejecuta desde la terminal con node os.js y puede variar entre Mac OS (basado en Darwin), Windows o GNU Linux según el entorno.

¿Cómo importarlo y mostrar lo esencial?

```js
const os = require('os');

function showSystemInfo() {
  console.log('Sistema operativo:', os.type());
  console.log('Plataforma:', os.platform());
  console.log('Arquitectura:', os.arch());
  console.log('Versión del SO:', os.release());
}

showSystemInfo();
```

- Importación con require.
- Función showSystemInfo para agrupar salidas.
- Impresión con console.log por clave: valor.
- Ejecución en la terminal: node os.js.

¿Qué resultados puedes esperar?

- En Mac OS verás tipo Darwin.
- En equipos con M1, la arquitectura será ARM64.
- En Windows o GNU Linux, cambiarán tipo y plataforma.

¿Qué información del sistema es clave para monitoreo?

Estos datos permiten saber si hay memoria suficiente, cuántos cores están disponibles o si se requiere una librería específica por SO. Útil en herramientas de monitoreo, proyectos de IoT y scripts de automatización basados en Node.js.

¿Qué métricas conviene imprimir además de lo básico?

```js
const os = require('os');

console.log('Uptime del sistema (segundos):', os.uptime());
console.log('Memoria total (bytes):', os.totalmem());
console.log('Memoria libre (bytes):', os.freemem());
console.log('Cores disponibles:', os.cpus().length);
console.log('Directorio principal:', os.homedir());
console.log('Hostname:', os.hostname());

```

- Uptime del sistema para saber estabilidad.
- Memoria total y memoria libre para capacidad.
- Cores para concurrencia y carga.
- Directorio principal del usuario para rutas.
- Hostname para identificar el equipo.

¿Qué habilidades y conceptos refuerzas al implementarlo?

- Creación de archivo os.js.
- Importación de módulos con require.
- Registro estructurado con console.log.
- Ejecución desde terminal con node.
- Lectura de tipo de sistema, plataforma, arquitectura y versión.
- Uso de datos del entorno para decisiones técnicas.

¿Cómo usar estos datos en proyectos con Node.js?

Integrar estas salidas en flujos reales te permite reaccionar al entorno: por ejemplo, detectar arquitectura y versión del SO para condicionar dependencias, o leer memoria y cores para ajustar carga de trabajo.

¿En qué casos de uso encaja mejor?

- Monitoreo de aplicaciones con métricas del host.
- Proyectos de IoT que reportan estado del dispositivo.
- Scripts de análisis que validan recursos antes de procesar.
