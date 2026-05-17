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