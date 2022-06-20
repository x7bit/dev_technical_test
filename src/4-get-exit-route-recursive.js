import { getValueByPath } from './2-get-value-by-path.js';

/**
 * Se trata de hacer exactamente lo mismo que en el ejercicio #3 (getExitRouteIterative)
 * con la salvedad de que esta vez hay que implementarlo de forma recursiva.
 *
 * Adicionalmente se piden estos requerimientos:
 *  - Se tiene que hacer todo usando únicamente esta función 'getExitRoute', con la excepción
 *      de que se puede usar la función 'getValueByPath' del ejercicio #2.
 *  - Se permite crear una función dentro de esta función, con el fin de que dicha función
 *      interna sea llamada de forma recursiva.
 *  - En el caso de que haya más de una salida, con devolver una cualquiera es suficiente.
 *
 * Tiempo estimado máximo 30 minutos.
 *
 * @param {object} labyrinth Objeto laberinto tipo árbol binario
 * @returns {array} Array con la ruta a la salida. Por ejemplo ['right', 'left', 'forward']
 */
export const getExitRouteRecursive = (labyrinth) => {
  //
};
