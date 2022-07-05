import test from 'test';
import assert from 'assert/strict';
import { getExitRouteRecursive } from '../src/4-get-exit-route-recursive.js';

const laby1 = {
  left: false,
  forward: false,
  right: false
};
const laby1Desc = `labyrinth = ${JSON.stringify(laby1, null, 2)}`;
test(`getExitRouteRecursive(labyrinth) debe ser igual a []\n${laby1Desc}`, () => {
  const route = getExitRouteRecursive(laby1);
  assert.deepEqual(route, []);
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
const laby2Desc = `labyrinth = ${JSON.stringify(laby2, null, 2)}`;
test(`getExitRouteRecursive(labyrinth) debe ser igual a ['forward','left','right']\n${laby2Desc}`, () => {
  const route = getExitRouteRecursive(laby2);
  assert.deepEqual(route, ['forward', 'left', 'right']);
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
const laby3Desc = `labyrinth = ${JSON.stringify(laby3, null, 2)}`;
test(`getExitRouteRecursive(labyrinth) debe ser igual a ['right','left','forward']\n${laby3Desc}`, () => {
  const route = getExitRouteRecursive(laby3);
  assert.deepEqual(route, ['right', 'left', 'forward']);
});
