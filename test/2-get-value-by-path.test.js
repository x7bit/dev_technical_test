import { indent } from './test-utils.js';
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
const objDesc = indent(`obj = ${JSON.stringify(obj, null, 2)};`, 4);
describe(`getValueByPath(obj, path);\n${objDesc}\n `, () => {

  test(`getValueByPath(obj, []) debe ser igual a obj`, () => {
    const val = getValueByPath(obj, []);
    expect(val).toBe(obj);
  });

  test(`getValueByPath(obj, ['z']) debe ser igual a null`, () => {
    const val = getValueByPath(obj, ['z']);
    expect(val).toBe(null);
  });

  test(`getValueByPath(obj, ['a']) debe ser igual a false`, () => {
    const val = getValueByPath(obj, ['a']);
    expect(val).toBe(false);
  });

  test(`getValueByPath(obj, ['b', 'c']) debe ser igual a { e: 'test' }`, () => {
    const val = getValueByPath(obj, ['b', 'c']);
    expect(val).toEqual({ e: 'test' });
  });

  test(`getValueByPath(obj, ['b', 'd']) debe ser igual a true`, () => {
    const val = getValueByPath(obj, ['b', 'd']);
    expect(val).toBe(true);
  });

  test(`getValueByPath(obj, ['b', 'c', 'e']) debe ser igual a 'test'`, () => {
    const val = getValueByPath(obj, ['b', 'c', 'e']);
    expect(val).toBe('test');
  });
});
