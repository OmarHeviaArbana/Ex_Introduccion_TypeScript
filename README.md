# **Desarrollo front-end con framew. JavaScript - Aula 2**

## PEC 3 

```
TypeScript
```

## Login UOC
```
ohevia@uoc.edu
```

## Nombre y apellidos  
```
Omar Hevia Arbana
```
## Comentarios

- Se ha instalado de manera global TypeScript mediante el comando npm install -g typescript.

- Para realizar la compilación se debe, una vez en el directorio raiz de origen indicado en el *rootDir* tsconfig.json, utiliar el comando **tsc** para compilar. Esto nos genera un archivo js en el *outDir* del tsconfig.json. Para comprobar el resultado de los ejercicios de PEC3_EJ3 debemos introducir en terminal el comando **node ./dist/nombreArchivoJScompilacion.**
  
- Para clase del modelo del ejercicio PEC3_Ej4, uno de las propiedades es el id. Este se genera mediante una función que es llamada por el constructor. TypeScript no lo da como valido porque no acepta unos tipos concretos en la formación del string del id. Por lo que he tenido que buscar un nuevo método para la generación del id de manera aleatoria. El más común y, que funciona correctamente con TS, es el que he incluido.

- También, ejercicio PEC3_Ej4, he tenido problemas de compilación tras la generación del dist con el comando tsc. Si que realizaba la compilación de los archivos ts de los archivos de src, pero me daba un error en los archivos js compilados con los exports de las clases. Hasta que no he incluido el webpack para compilar todo y utilizar el build.js para el script del html, no he podido lanzar el servidor y ver la aplicación sin los errores en consola.

- En el ejercicio PEC3_Ej4, al instalar de manera global webpack, he eliminado muchas dependencias del webpack de ejemplo. Simplemente con la importanción del path compila perfectamente. Por lo que, se puede observar que la configuración del module.export es bastante básica pero lo suficiente para realizar su cometido.