# Pasos para compilar en Webpack con TypeScript

## Instalaciones

En primer lugar debes tener instalado **TypeScript** en el proyecto. Con el siguiente comando se instala de forma global:

```
npm install -g typescript
```

Es el turno de instalar webpack y otras dependencias necesario o recomandads para la compilación. En este caso, instalaremos el **webpack cli** y el ts loader que es ek **TypeScript loader** para webpack:

```
npm install -D webpack webpack-cli ts-loader webpack-dev-server
```

## Archivos Necesarios

Necesitamos incluir una serie de archivos a nuestro proyecto y configurarlo de forma adecuada para las carácteristicas y estructura de nuestro proyecto:

### tsconfig.json

Necesario para establecer las carácteristicas básica para la compilación de nuestro archivos TypeScript a JavaScript. Teniendo en cuenta la estructura de carpetas del proyecto deberías prestar atención al *outDir* y *routDir*. Y he utilizado las opciones más recomendables para la compilación. En mi caso la configuración queda de la siguiente forma: 

```
{
  "compilerOptions": {
    "target": "es2015",
    "module": "commonjs",
    "outDir": "./dist",
    "rootDir": "./src",
    "strict": true,
    "incremental": true,
    "tsBuildInfoFile": "./buildcache",
    "esModuleInterop": true
  }
} 
```

### webpack.config.js
Necesario para realizar la compilación de los archivos .js compilados de nuestro .ts , que finalmente genera un archivo único build.js. Este archivo es el que se enlazará en el script del archivo .html del proyecto.

En el archivo es necesario concretar la extensión de los archivos permitida, el punto de entrada *entry*, el de salida *output* con el path utilizado e informar que utlizaremos el ts.loader instalado al inicio, para la compilación webpack en Typescript. 

````
const path = require("path");

module.exports = {
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  entry: "./src/app.ts",
  output: {
    filename: 'bundle.js', 
    path: path.resolve(__dirname, 'dist'), 
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
}; 

````

### Modificación package.json

La operativa de comandos necesaria para la compilación es muy concreta y debe estar establecida en el script del package.json generado tras las instalaciones del node modules. Para este proyecto utilizaremos solo un comando para la compilación ya que utilizaremos el live server del html en el navegador web. Por lo que, se debe incluir el script : *"build": "webpack --mode production"* o  *"build": "webpack --mode=development"*. El archivo quedaría así:

```
{
  "devDependencies": {
    "ts-loader": "^9.5.1",
    "typescript": "^5.4.5",
    "webpack": "^5.91.0",
    "webpack-cli": "^5.1.4",
    "webpack-dev-server": "^5.0.4"
  },
  "scripts": {
    "build": "webpack --mode production"
  }
}
```

## Comandos para la compilación

Para la compilación del código TypeScript a JavaScript y en terminal dentro del directorio raiz:

```
tsc
```

Se podría apuntar a un archivo concreto si fuera necesario pero al configurar el tsconfig.json con el buildcache va a detectar los cambios en los archivos ts. Si no tuvieramos esta opción configurada podríamos utilizar el siguiente comando:

```
tsc rutaArchivo.ts
```

Para la compilación webpack se utiliza el siguiente comando en terminal:

```
npm run build
```

### Live Server Para ver en navegador

Una vez compilado y a través del archivo index.html utilizo una extensión de VS Live Server para lanzar el servidor y visualizar el resultado en el navegador en localhost. 

```
Name: Live Server
Id: ritwickdey.LiveServer
Description: Launch a development local Server with live reload feature for static & dynamic pages
Version: 5.7.9
Publisher: Ritwick Dey
VS Marketplace Link: https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer

```

El último paso, por si no estuviera linkeado el script correcto, es necesario incluir el script del bundle.js en el index.html de la siguiente manera:

````
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />

    <title>Todo App</title>

    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <div id="root"></div> 
    <script src="./dist/bundle.js"></script>
  </body>
</html>
```