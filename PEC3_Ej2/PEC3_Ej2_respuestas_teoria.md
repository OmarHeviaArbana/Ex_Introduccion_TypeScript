# PEC3_EJ3_ RESPUESTAS TEORIA

## Descripción del cambio realizado:

Se ha especificado que el objeto c declarado cuenta con unas propiedades concretas: apple y banana, y que estas son de tipo number. Esto provoca el error debido a que **estamos intentando acceder a una propiedad strawberry que no existe en c**. Por lo que, TypeScript no muestra la linea roja en el IDE para que nos percatemos del error.

![code1.ts error message detail image](code1.ts%20error%20message%20detail%20image.png)

## ¿Por qué se ha generado el error?

TypeScript realiza comprobaciones de tipos cuando realiza la compilación ya que, como hemos visto, es un lenguaje de programación tipado. Gracias a ello, controla las operaciones realizadas en el objeto o variable utilizada y comprueba el tipo. Por lo tanto, si en el objeto c definido tratamos de acceder a una propiedad inexistente en el midmo como strawbery nis da el error.


## ¿Cuáles son las ventajas que observamos con estos errores?

- Al detectar estos errores podemos corregirlos de forma temprana y evitar futuros error, además de mejorar la calidad del código.

- También, creo que es posible ahorrar tiempos al reducir el  número de futuros errores que se pudiera provocar en estados avanzados del programa.

- Se mejora la legibilidad de nuestro código al especificar los tipos de nuestras variables u objetos, por ejemplo.

- Aunque pueda llevar un poco de tiempo realizar el tipado y las comprobaciones de errores en TypeScript, aseguramos la calidad de nuestro código JavaScript y nos aseguramos de su mantenibilidad.