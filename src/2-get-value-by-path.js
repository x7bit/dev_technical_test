/**
 * Para un objeto multinivel, es decir, que el valor de alguna de sus propiedades pueda ser otro
 * objeto y así sucesivamente, y para un array simple de strings con la ruta hasta el valor dado,
 * descender por el objeto y devolver dicho valor, o undefined en el caso de que no haya ruta.
 *
 * Así por ejemplo si el objeto es:
 *    obj = {
 *      aaa: false,
 *      bbb: {
 *        ccc: {
 *          eee: 'Hola'
 *        },
 *        ddd: false
 *      }
 *    }
 * Y la ruta es:
 *    path = ['bbb', 'ccc', 'eee']
 * Entonces la solución sería:
 *    'Hola'
 *
 * Requerimientos:
 *  - Se tiene que hacer todo usando únicamente esta función 'getValueByPath'.
 *
 * Tiempo estimado máximo: 10 minutos. Dificultad baja.
 *
 * @param {object} obj
 * @param {path} path Array simple de strings
 * @returns {mixed}
 */
export const getValueByPath = (obj, path) => {
  //
};
