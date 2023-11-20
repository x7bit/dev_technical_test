import { getValueByPath } from './2-get-value-by-path.js';

/**
 * Se trata de hacer exactamente lo mismo que en el ejercicio #3 (getExitRouteIterative)
 * con la salvedad de que esta vez hay que implementarlo de forma recursiva.
 *
 * Así por ejemplo un objeto laberinto podría ser:
 *    labyrinth = {
 *      left: {
 *        left: false,
 *        forward: false,
 *        right: {
 *          left: false,
 *          forward: false,
 *          right: false
 *        }
 *      },
 *      forward: false,
 *      right: {
 *        left: {
 *          left: false,
 *          forward: true,
 *          right: false
 *        },
 *        forward: false,
 *        right: false
 *      }
 *    }
 * Entonces la solución sería:
 *    ['right', 'left', 'forward']
 *
 * Requerimientos:
 *  - Se tiene que hacer todo usando únicamente esta función 'getExitRoute', con la excepción
 *      de que se puede usar la función 'getValueByPath' del ejercicio #2.
 *  - No se permite crear ninguna función dentro de esta función. Para tener la ruta actual en
 *      cada subllamada recursiva está el parámetro 'actualRoute', inicialmente vacío.
 *
 * Tiempo estimado máximo 30 minutos. Dificultad media/alta.
 *
 * @param {object} labyrinth Objeto laberinto tipo árbol
 * @param {array} actualRoute Ruta actual en cada subllamada recursiva (inicialmente vacío)
 * @returns {array} Array con la ruta a la salida. Por ejemplo ['right', 'left', 'forward']
 */
export const getExitRouteRecursive = (labyrinth, actualRoute = []) => {
  //
};
