# Prueba técnica de desarrollo sobre Node.js

La prueba consta de cuatro pequeños ejercicios que si bien se ejecutarán en un entorno de *Node.js*, no están enfocados al backend, si no algoritmos de carácter general en *JavaScript*. Los ejercicios tienen diferentes dificultades y, por tanto, diferentes tiempos estimados para efectuarse, sumando un total de 1 hora y 40 minutos. Sin embargo, se dará un tiempo máximo de 2 horas y 30 minutos para que dé tiempo de leerse bien toda la documentación de la prueba, pensar en las soluciones, y preparar el entorno. Los ejercicios están situados dentro del directorio `src` del proyecto, habiendo un fichero por ejercicio, cada uno con información detallada, ejemplos, así como un esqueleto de la función a implementar. A modo de resumen las funciones a implementar son:

1. `src/1-get-pairs.js`: Dado un array de números, se tiene que devolver un array de pares que sumen un número objetivo iterando una única vez. Dificultad media.
1. `src/2-get-value-by-path.js`: Dado un objeto multinivel y un array de strings con la ruta de las claves del objeto, descender por el objeto siguiendo la ruta y devolver su valor. Dificultad baja.
1. `src/3-get-exit-route-iterative.js`: Dado un objeto que funciona como un laberinto en forma de árbol, encontrar la salida de forma iterativa. Dificultad alta.
1. `src/4-get-exit-route-recursive.js`: Dado un objeto que funciona como un laberinto en forma de árbol, encontrar la salida de forma recursiva. Dificultad media/alta.

Se recomienda pasar al siguiente ejercicio en caso de que te atasques con cualquier ejercicio, y volver al final si sobra tiempo.

## Preparación del entorno

Lo primero de todo es instalar *Node.js* en tu sistema si no lo tienes instalado ya. Esta prueba se creó y se probó con la versión **16**, aunque no debería de haber problema en usar una versión algo inferior como la 14 o incluso la 12. Si usas **Windows** o **MacOS** descárgatelo de aquí:

> https://nodejs.org/es/download/

Si por el contrario usas **Linux** deberás instalar los paquetes `nodejs` y `npm`. Por ejemplo, en distros basadas en Debian sería así:

> `sudo apt install nodejs npm -y`

Una vez instalado *Node.js* lo siguiente será clonar este repositorio de GitHub:

> `git clone https://github.com/x7bit/dev_technical_test.git`

Una vez tengamos el proyecto en nuestro sistema, nos tendremos que poner en la ráiz del mismo, y ejecutar:

> `npm install`

Y si bien este último paso no es totalmente imprescindible, es necesario para poder ejecutar los *tests*.

## Ejecución, tests y depuración

Tal y como ya se explicó, el código de los ejercicios está dentro del directorio `src`, sin embargo, el archivo `index.js` importa las funciones de estos cuatro ejercicios y los ejecuta con los ejemplos de los enunciados, imprimiendo en consola los resultados. El archivo `index.js` se ejecutará si desde la raíz del proyecto ejecutamos:

> `npm start`

Para ejecutar los **tests**, desde la raíz del proyecto ejecutar:

> `npm test`

Si bien puedes usar tu editor favorito, se recomienda usar *Visual Studio Code* para esta prueba por tener un terminal integrado, y por lo sencillo que resulta ejecutar y depurar un proyecto *Node.js*. De hecho, el proyecto ya tiene una configuración para poder depurar sin que haya que hacer más nada en el siguiente archivo:

> `.vscode/launch.json`

## Valoraciones

Se valorará positivamente:

- Que pase todos los test.
- Que se cumpla con los requerimientos adicionales de cada ejercicio, aunque es preferible no cumplirlos y entregar un ejercicio que funcione.
- Que el código esté ordenado, bien indentado, que sea fácil de leer, fácil de entender y que use nombres lo suficientemente autoexplicativos.
- Que sea mínimamente eficiente, o en su defecto, que el código no "dé más vueltas" de lo necesario.
- Si bien no es obligatorio, se valorará usar **ECMAScript** en vez de *CommonJS*.

## Presentación de la prueba

Sólo es necesario entregar el contenido del directorio `src`. Dado que al ser *JavaScript* muchos correos bloquearán el código si lo adjuntamos, puedes subir la prueba a algún repositorio GIT si tienes cuenta (GitHub, GitLab, BitBucket, etc.). Por el contrario, también puedes comprimir el directorio `src` en un ZIP y usar algún servicio para subir archivos, como por ejemplo:

> https://anonfiles.com/
