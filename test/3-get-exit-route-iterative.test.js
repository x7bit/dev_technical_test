import { indent } from './test-utils.js';
import { getExitRouteIterative } from '../src/3-get-exit-route-iterative.js';

const laby1 = {
  left: false,
  forward: false,
  right: false
};
const laby1Desc = indent(`labyrinth = ${JSON.stringify(laby1, null, 2)};`, 4);
describe(`getExitRouteIterative(labyrinth);\n${laby1Desc}\n `, () => {

  test(`getExitRouteIterative(labyrinth) debe ser igual a []`, () => {
    const route = getExitRouteIterative(laby1);
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
describe(`getExitRouteIterative(labyrinth);\n${laby2Desc}\n `, () => {

  test(`getExitRouteIterative(labyrinth) debe ser igual a ['forward', 'left', 'right']`, () => {
    const route = getExitRouteIterative(laby2);
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
describe(`getExitRouteIterative(labyrinth);\n${laby3Desc}\n `, () => {

  test(`getExitRouteIterative(labyrinth) debe ser igual a ['right', 'left', 'forward']`, () => {
    const route = getExitRouteIterative(laby3);
    expect(route).toEqual(['right', 'left', 'forward']);
  });
});
