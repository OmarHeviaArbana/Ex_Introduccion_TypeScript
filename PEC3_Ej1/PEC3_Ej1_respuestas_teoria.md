# PEC 3_EJ1_RESPUESTASTAS_TEORIA

## Análisis del código

Tras el análisidi del código en JavaScript (Ejer1.js) y su versión en TypeScript (Ejer1.ts), se observa que son similares en cuanto a funcionalidad. Pero, existen palpables diferencia en cuanto como TypeScript previene errores controlando los tipos y la estructura de los tados que se pasan a la función baby().

A continuación se detallan cada uno de los archivos donde se puede observar sus diferencias en la gestión de JS y TS:

**JavaScript (Ejer1.js):**

- La variable de dog se declara sin un tipo específico.
- Se asignan dos objetos a la variable dog, con diferentes tipos de valores para la propiedad kind y weight.
- La función baby() toma como parametros dos objetos que representan perros como argumentos (dog1 y dog2). Luego, calcula el peso promedio de estos dos perros y devuelve un nuevo objeto que contiene la misma propiedad kind que el primer perro y el peso promedio de los dos perros.
- En este caso, la función baby() devuelve un nuevo perro cuyo peso es el promedio de los pesos de dog1 y dog2, dividido por 4.

**TypeScript (Ejer1.ts):**

- A diferencia que en JS, se define una interfaz Dog que especifica la estructura de un objeto dog.
- La variable dog se declara con el tipo Dog, lo que garantiza que solo se asignen objetos que cumplan con la estructura definida en la interfaz definida previamente.
- Se detecta un error de tipo al lanzar el comando de compilación. Contretamente en la asignación de un objeto con un tipo booleano cuando debería ser string.
- La función baby toma dos objetos que representan perros como argumentos (dog1 y dog2). Luego, calcula el peso promedio de estos dos perros y devuelve un nuevo objeto que contiene la misma propiedad kind que el primer perro y el peso promedio de los dos perros.
- En este caso, la función baby también toma dos perros dog1 y dog2, pero en lugar de dividir la suma de sus pesos por 4, lo divide por 2 para obtener el promedio real del peso de ambos perros.

## Ventajas de TypeScript

- **Chequeo de tipos estático**: Realiza un análisis estático del código para detectar errores de tipos antes de que se ejecute el programa, lo que ayuda a evitar errores comunes durante el desarrollo.

- **Inferencia de tipos**: Puede inferir automáticamente el tipo de una variable según su valor, lo que reduce la necesidad de especificar tipos manualmente en ciertos casos.

- **Tipos de unión y intersección**: TypeScript permite definir tipos que son uniones o intersecciones de otros tipos, lo que proporciona flexibilidad en la estructura de los datos.

- **Tipos condicionales**: Esta característica permite definir tipos condicionales basados en condiciones booleanas, lo que facilita la creación de tipos dinámicos y flexibles.

- **Tipos de literales**: Permite definir tipos basados en valores literales, lo que garantiza que las variables solo puedan contener valores específicos.

- **Modularidad**: TypeScript es compatible con el sistema de módulos de ECMAScript, lo que facilita la organización y reutilización del código en aplicaciones grandes.

- **Decoradores**: Además de la metaprogramación mencionada anteriormente, los decoradores en TypeScript permiten agregar metadatos y comportamientos adicionales a clases, métodos y propiedades.
