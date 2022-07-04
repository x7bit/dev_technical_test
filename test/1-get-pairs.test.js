import test from 'test';
import assert from 'assert';
import { getPairs } from '../src/1-get-pairs.js';

const numArray = [7, 5, 2, 8, 1, 3];
test(`getPairs(numArray, target)\n numArray = ${JSON.stringify(numArray)}`, (t) => {

  test('getPairs(numArray, 1) debe ser igual a []', (t) => {
    const pairs = getPairs(numArray, 1);
    assert.deepEqual(pairs, []);
  });

  test('getPairs(numArray, 3) debe ser igual a [[2,1]]', (t) => {
    const pairs = getPairs(numArray, 3);
    assert.deepEqual(pairs, [[2, 1]]);
  });

  test('getPairs(numArray, 4) debe ser igual a [[1,3]]', (t) => {
    const pairs = getPairs(numArray, 4);
    assert.deepEqual(pairs, [[1, 3]]);
  });

  test('getPairs(numArray, 8) debe ser igual a [[7,1], [5,3]]', (t) => {
    const pairs = getPairs(numArray, 8);
    assert.ok(Array.isArray(pairs), 'No es un array');
    assert.ok(pairs.length === 2, 'No tiene tamaño 2');

    const stringPairs = pairs.map(pair => JSON.stringify(pair));
    assert.ok(stringPairs.includes('[7,1]'), 'No contiene [7,1]');
    assert.ok(stringPairs.includes('[5,3]'), 'No contiene [5,3]');
  });

});