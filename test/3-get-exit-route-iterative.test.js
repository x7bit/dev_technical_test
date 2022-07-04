import test from 'test';
import assert from 'assert/strict';
import { getExitRouteIterative } from '../src/3-get-exit-route-iterative.js';

const laby1 = {
  left: false,
  forward: false,
  right: false
};
test(`getExitRouteIterative(labyrinth)\n labyrinth = ${JSON.stringify(laby1, null, 2)}`, () => {

  test(`getExitRouteIterative(labyrinth) debe ser igual a []`, () => {
    const route = getExitRouteIterative(laby1);
    assert.deepEqual(route, []);
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
test(`getExitRouteIterative(labyrinth)\n labyrinth = ${JSON.stringify(laby2, null, 2)}`, () => {

  test(`getExitRouteIterative(labyrinth) debe ser igual a ['forward', 'left', 'right']`, () => {
    const route = getExitRouteIterative(laby2);
    assert.deepEqual(route, ['forward', 'left', 'right']);
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
test(`getExitRouteIterative(labyrinth)\n labyrinth = ${JSON.stringify(laby3, null, 2)}`, () => {

  test(`getExitRouteIterative(labyrinth) debe ser igual a ['right', 'left', 'forward']`, () => {
    const route = getExitRouteIterative(laby3);
    assert.deepEqual(route, ['right', 'left', 'forward']);
  });

});
