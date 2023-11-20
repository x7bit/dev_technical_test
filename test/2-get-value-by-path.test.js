import test from 'node:test';
import assert from 'node:assert/strict';
import { getValueByPath } from '../src/2-get-value-by-path.js';

const obj = {
  a: false,
  b: {
    c: {
      e: 'test'
    },
    d: true
  }
};
const objDesc = `obj = { a: false, b: { c: { e: 'test' }, d: true } }`;

test(`getValueByPath(obj, []) debe ser igual a obj\n${objDesc}`, () => {
  const val = getValueByPath(obj, []);
  assert.deepEqual(val, obj);
});

test(`getValueByPath(obj, ['z']) debe ser igual a null\n${objDesc}`, () => {
  const val = getValueByPath(obj, ['z']);
  assert.equal(val, null);
});

test(`getValueByPath(obj, ['a']) debe ser igual a false\n${objDesc}`, () => {
  const val = getValueByPath(obj, ['a']);
  assert.equal(val, false);
});

test(`getValueByPath(obj, ['b','c']) debe ser igual a {e:'test'}\n${objDesc}`, () => {
  const val = getValueByPath(obj, ['b', 'c']);
  assert.deepEqual(val, { e: 'test' });
});

test(`getValueByPath(obj, ['b','d']) debe ser igual a true\n${objDesc}`, () => {
  const val = getValueByPath(obj, ['b', 'd']);
  assert.equal(val, true);
});

test(`getValueByPath(obj, ['b','c','e']) debe ser igual a 'test'\n${objDesc}`, () => {
  const val = getValueByPath(obj, ['b', 'c', 'e']);
  assert.equal(val, 'test');
});
