import { getValueByPath } from './2-get-value-by-path.js';

/**
 * Imagina que estás en un laberinto tipo árbol, en donde en cada nodo sólo puedes ir a la
 * izquierda, adelante, o a la derecha. Se trata de devolver un array con la ruta completa hasta
 * una salida (sólo puede haber una), o bien undefined si no hubiese salida. Cada nodo tendrá una
 * forma así:
 *    { left: ..., forward: ..., right: ... }
 * Y los valores que puede tomar left, forward o right son:
 *  - Otro nodo/objecto { left, forward, right }.
 *  - false: indica una terminación sin salida.
 *  - true: indica una salida.
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
 *  - No se permite recursividad.
 *
 * Tiempo estimado máximo 40 minutos. Dificultad alta.
 *
 * @param {object} labyrinth Objeto laberinto tipo árbol binario
 * @returns {array} Array con la ruta a la salida. Por ejemplo ['right', 'left', 'forward']
 */
export const getExitRouteIterative = (labyrinth) => {
  //
};
