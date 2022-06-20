import { indent } from './test-utils.js';
import { getExitRouteRecursive } from '../src/4-get-exit-route-recursive.js';

const laby1 = {
  left: false,
  forward: false,
  right: false
};
const laby1Desc = indent(`labyrinth = ${JSON.stringify(laby1, null, 2)};`, 4);
describe(`getExitRouteRecursive(labyrinth);\n${laby1Desc}\n `, () => {

  test(`getExitRouteRecursive(labyrinth) debe ser igual a []`, () => {
    const route = getExitRouteRecursive(laby1);
    expect(route).toEqual([]);
  });
});

const laby2 = {
  left: false,
  forward: {
    left: {
      left: false,
      forward: false,
      right: true
    },
    forward: false,
    right: false,
  },
  right: false
};
const laby2Desc = indent(`labyrinth = ${JSON.stringify(laby2, null, 2)};`, 4);
describe(`getExitRouteRecursive(labyrinth);\n${laby2Desc}\n `, () => {

  test(`getExitRouteRecursive(labyrinth) debe ser igual a ['forward', 'left', 'right']`, () => {
    const route = getExitRouteRecursive(laby2);
    expect(route).toEqual(['forward', 'left', 'right']);
  });
});

const laby3 = {
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
const laby3Desc = indent(`labyrinth = ${JSON.stringify(laby3, null, 2)};`, 4);
describe(`getExitRouteRecursive(labyrinth);\n${laby3Desc}\n `, () => {

  test(`getExitRouteRecursive(labyrinth) debe ser igual a ['right', 'left', 'forward']`, () => {
    const route = getExitRouteRecursive(laby3);
    expect(route).toEqual(['right', 'left', 'forward']);
  });
});
