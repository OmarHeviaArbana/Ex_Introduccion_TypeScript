# PEC3_EJ3_ RESPUESTAS TEORIA

## 1. Descripción del cambio realizado:

Se ha especificado que el objeto c declarado cuenta con unas propiedades concretas: apple y banana, y que estas son de tipo number. Esto provoca el error debido a que **estamos intentando acceder a una propiedad strawberry que no existe en c**. Por lo que, TypeScript no muestra la linea roja en el IDE para que nos percatemos del error.

![code1.ts error message detail image](code1.ts%20error%20message%20detail%20image.png)

## 2. ¿Por qué se ha generado el error?

TypeScript realiza comprobaciones de tipos cuando realiza la compilación ya que, como hemos visto, es un lenguaje de programación tipado. Gracias a ello, controla las operaciones realizadas en el objeto o variable utilizada y comprueba el tipo. Por lo tanto, si en el objeto c definido tratamos de acceder a una propiedad inexistente en el midmo como strawbery nis da el error.


## 3. ¿Cuáles son las ventajas que observamos con estos errores?

- Al detectar estos errores podemos corregirlos de forma temprana y evitar futuros error, además de mejorar la calidad del código.

- También, creo que es posible ahorrar tiempos al reducir el  número de futuros errores que se pudiera provocar en estados avanzados del programa.

- Se mejora la legibilidad de nuestro código al especificar los tipos de nuestras variables u objetos, por ejemplo.

- Aunque pueda llevar un poco de tiempo realizar el tipado y las comprobaciones de errores en TypeScript, aseguramos la calidad de nuestro código JavaScript y nos aseguramos de su mantenibilidad.

## 4. Para cada uno de los valores del fichero code2.ts, ¿Qué tipo de datos inferirá TypeScript? Explica por qué se ha inferido este tipo de datos.

```
**a = 1042**:

TypeScript infiere que a es de tipo number, ya que el valor de la variables es un entero y no se indica otra información que indique lo contrario.
```

```
**b = 'apples and oranges'**:

TypeScript infiere que b es de tipo string, debido a que el valor es un cadena de texto y contiene comillas.
 ```

 ```
 **c = 'pineapples'**:
 
TypeScript infiere que c es de tipo string por la misma razón: el valor asignado es una cadena de texto.
 ````

``` 
**d = [true, true, false]**:

TypeScript infiere que d es de tipo booleano, debido a que los elementos del array son todo valores true o false.
```

```
**e = { type: 'ficus' }**:

TypeScript infiere que el objeto e es de tipo string. Además la propiedad type tiene un valor de tipo string. Por consecuencia, el objeto debe ser un tipo string.
```

```
**f = [1, false]**:

TypeScript infiere que f puede contener tanto numeros como booleaos, debido a que el array contiene elementos de diferentes tipos: números (1) y  booleanos (false).
```

```
**g = [3]**:

TypeScript infiere que g es de tipo number, ya que el array contiene solo números.
```

```
**h = null**:

TypeScript infiere que h es de tipo null ya que su valor inicial es null.
```

## 5. ¿Por qué se dispara cada uno de los errores del fichero code3.ts?
```
**i = 4:**
```
Inicialmente, i se ha declarado como una constante con un tipo literal 3. Estos son específicos y solo pueden contener el valor que se les de, por lo que al asignarle posteriormente un valor 4 se produce el error.
```
**j.push('5')**:
```
j es un array que se inicia con valores concretos [1, 2, 3]. Esto hace que TypeScript lo infiera como un tipo number y si se intenta incluir en el array el string '5' no cumple la restricción  de asignacion de tipo number y se genera un error.
```
**let k: never = 4**:
```
Aquí, se produce un error ya que never indica un tipo de valor number que nunca puede obtener. Por lo que al intentar asignarle el valor 4 se indica se produce el error.

never es un tipo que representa un valor que nunca puede ocurrir. Al intentar asignarle el valor 4, se produce un error porque never no puede contener ningún valor válido. Por lo tanto, TypeScript arroja el error TS2322, indicando que el tipo 4 no es assignable al tipo never.
```
**let m = l * 2**:
```
Al declararse como unknown TypeScript no puede saber el tipo de l. Por lo que al no poder tener esa información no sabe que valores puede obtener y por lo que no puede cumplir su cometido en materia de seguridad. No puede garantizar que el valor que se asigne sea el correcto. En operaciones arítmeticas como hemos visto en la teoria se debe realizar una comprobación de tipos para garantizar el resultado.

## ¿Cuál es la diferencia entre una clase y una interface en TypeScript?

- Una **clase** en el molde para la creación de un objeto y define su estructura y uso. Una **interfaz**, además de la estructura, determina los tipos de cada una de las propiedades del objeto, pero no nos informa de su forma de implementación.

- Las **clases** pueden ser instanciadas mediante la palabra clave *new* y heredar propiedades y métodos de otras clases mediante la *herencia*.

- Las **clases**  pueden implementar **interfaces** para garantizar que cumplan con ciertos contratos de tipo. Proporciando a las clases el uso objetos y tipos de datos.

- Las **interfaces** son útiles para definir tipos personalizados más específicamente, lo que asegura, a diferencia de la **clase**, que los objetos cumplen la estructura y tipo de datos requeridos. Por lo que, las interfaces bien definidas garantizann la calidad de nuestro código y su reutilización.