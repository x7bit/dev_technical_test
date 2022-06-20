/**
 * Indenta un string de entrada (teniendo en cuenta que puede ser multilínea) una cantidad
 * determinada de espacios a la derecha.
 *
 * @param {string} str String de entrada
 * @param {number} spaces Número de espacios
 * @returns {string}
 */
export const indent = (str, spaces) => {
  const space = Array(spaces + 1).join(' ');
  return str.split('\n').map(line => `${space}${line}`).join('\n');
};
