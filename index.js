import { getPairs } from './src/1-get-pairs.js';
import { getValueByPath } from './src/2-get-value-by-path.js';
import { getExitRouteIterative } from './src/3-get-exit-route-iterative.js';
import { getExitRouteRecursive } from './src/4-get-exit-route-recursive.js';

/**
 * getPairs
 */
const numArray = [7, 5, 1, 3];
const pairs = getPairs(numArray, 8);
console.log('getPairs:', JSON.stringify(pairs));

/**
 * getValueByPath
 */
const obj = {
  aaa: false,
  bbb: { ccc: { eee: 'Hola' }, ddd: false
}};
const path = ['bbb', 'ccc', 'eee'];
const value = getValueByPath(obj, path)
console.log('getValueByPath:', JSON.stringify(value));

/**
 * getExitRouteIterative
 */
const labyrinth = {
  left: {
    left: false,
    forward: false,
    right: {
      left: false,
      forward: false,
      right: false
    }
  },
  forward: false,
  right: {
    left: {
      left: false,
      forward: true,
      right: false
    },
    forward: false,
    right: false
  }
};
const routeIterative = getExitRouteIterative(labyrinth);
console.log('getExitRouteIterative:', JSON.stringify(routeIterative));

/**
 * getExitRouteRecursive
 */
const routeRecursive = getExitRouteRecursive(labyrinth);
console.log('getExitRouteRecursive:', JSON.stringify(routeRecursive));
